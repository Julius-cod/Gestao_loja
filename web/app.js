const initialData = {
  products: [
    { nome: 'Arroz 1kg', preco: 1.2, stock: 4, minimo: 10 },
    { nome: 'Feijão lata', preco: 0.95, stock: 6, minimo: 12 },
    { nome: 'Azeite 750ml', preco: 6.5, stock: 2, minimo: 6 },
  ],
  orders: [
    { cliente: 'Restaurante Sol', quantidade: 12, estado: 'Entregue', valor: 54 },
    { cliente: 'Cliente Ana', quantidade: 4, estado: 'Em preparação', valor: 18 },
    { cliente: 'Cliente Rui', quantidade: 2, estado: 'Novo', valor: 9 },
  ],
  finance: [
    { tipo: 'entrada', categoria: 'Vendas loja', descricao: 'Vendas do dia', valor: 120 },
    { tipo: 'saida', categoria: 'Compras', descricao: 'Reposição de stock', valor: 48 },
  ],
};

const storageKey = 'duogestao-data-v1';
const statusClass = { Entregue: 'success', 'Em preparação': 'warn', Novo: 'danger' };

function loadData() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey));
    return data || structuredClone(initialData);
  } catch {
    return structuredClone(initialData);
  }
}

function saveData() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

const state = loadData();

function currency(v) {
  return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(v);
}

function renderKPIs() {
  const receita = state.finance.filter((f) => f.tipo === 'entrada').reduce((a, b) => a + Number(b.valor), 0)
    + state.orders.filter((o) => o.estado === 'Entregue').reduce((a, b) => a + Number(b.valor), 0);
  const despesas = state.finance.filter((f) => f.tipo === 'saida').reduce((a, b) => a + Number(b.valor), 0);
  const lucro = receita - despesas;
  const pendencias = state.orders.filter((o) => o.estado !== 'Entregue').length
    + state.products.filter((p) => Number(p.stock) < Number(p.minimo)).length;

  const kpiData = [
    { title: 'Receita semanal', value: currency(receita), trend: 'Entradas + encomendas entregues' },
    { title: 'Despesas semanais', value: currency(despesas), trend: 'Lançamentos de saída' },
    { title: 'Lucro estimado', value: currency(lucro), trend: 'Receita - despesas' },
    { title: 'Pendências', value: String(pendencias), trend: 'Encomendas + reposições' },
  ];

  document.getElementById('kpis').innerHTML = kpiData
    .map((item) => `
      <article class="card">
        <div class="kpi-title">${item.title}</div>
        <div class="kpi-value">${item.value}</div>
        <div class="kpi-trend">${item.trend}</div>
      </article>
    `)
    .join('');
}

function renderDashboardTables() {
  document.getElementById('orders-table').innerHTML = state.orders.slice(-6).reverse().map((order) => `
    <tr>
      <td>${order.cliente}</td>
      <td>${order.quantidade}</td>
      <td><span class="tag ${statusClass[order.estado] || 'warn'}">${order.estado}</span></td>
      <td>${currency(order.valor)}</td>
    </tr>
  `).join('');

  const lowStock = state.products.filter((p) => Number(p.stock) < Number(p.minimo));
  document.getElementById('stock-table').innerHTML = lowStock.map((item) => `
    <tr>
      <td>${item.nome}</td>
      <td>${item.stock}</td>
      <td>${item.minimo}</td>
    </tr>
  `).join('') || '<tr><td colspan="3">Sem alertas de stock.</td></tr>';
}

function renderProducts() {
  document.getElementById('products-table').innerHTML = state.products.map((p) => `
    <tr>
      <td>${p.nome}</td>
      <td>${currency(p.preco)}</td>
      <td>${p.stock}</td>
      <td>${p.minimo}</td>
    </tr>
  `).join('');
}

function renderOrders() {
  document.getElementById('orders-full-table').innerHTML = state.orders.slice().reverse().map((o) => `
    <tr>
      <td>${o.cliente}</td>
      <td>${o.quantidade}</td>
      <td><span class="tag ${statusClass[o.estado] || 'warn'}">${o.estado}</span></td>
      <td>${currency(o.valor)}</td>
    </tr>
  `).join('');
}

function renderFinance() {
  document.getElementById('finance-table').innerHTML = state.finance.slice().reverse().map((f) => `
    <tr>
      <td>${f.tipo === 'entrada' ? 'Entrada' : 'Saída'}</td>
      <td>${f.categoria}</td>
      <td>${f.descricao}</td>
      <td>${currency(f.valor)}</td>
    </tr>
  `).join('');
}

function renderAll() {
  renderKPIs();
  renderDashboardTables();
  renderProducts();
  renderOrders();
  renderFinance();
  saveData();
}

function setupForms() {
  document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    state.products.push({
      nome: f.get('nome'),
      preco: Number(f.get('preco')),
      stock: Number(f.get('stock')),
      minimo: Number(f.get('minimo')),
    });
    e.target.reset();
    renderAll();
  });

  document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    state.orders.push({
      cliente: f.get('cliente'),
      quantidade: Number(f.get('quantidade')),
      estado: f.get('estado'),
      valor: Number(f.get('valor')),
    });
    e.target.reset();
    renderAll();
  });

  document.getElementById('finance-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    state.finance.push({
      tipo: f.get('tipo'),
      categoria: f.get('categoria'),
      descricao: f.get('descricao'),
      valor: Number(f.get('valor')),
    });
    e.target.reset();
    renderAll();
  });
}

function setupNavigation() {
  const labels = {
    dashboard: ['Resumo Semanal', 'Visão rápida da operação dos dois negócios.'],
    produtos: ['Mini Mercado', 'Cadastro e controlo de stock dos produtos.'],
    encomendas: ['Encomendas de Sopa', 'Registo e acompanhamento de pedidos.'],
    financas: ['Finanças', 'Entradas e saídas com resumo automático.'],
  };

  document.querySelectorAll('.nav-link').forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      document.querySelectorAll('.nav-link').forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.view').forEach((v) => v.classList.add('hidden'));
      document.getElementById(`view-${view}`).classList.remove('hidden');
      document.getElementById('view-title').textContent = labels[view][0];
      document.getElementById('view-subtitle').textContent = labels[view][1];
    });
  });
}

setupNavigation();
setupForms();
renderAll();
