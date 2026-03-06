const kpiData = [
  { title: 'Receita semanal', value: '€1.240', trend: '+12% vs semana anterior' },
  { title: 'Despesas semanais', value: '€480', trend: '-4% vs semana anterior' },
  { title: 'Lucro estimado', value: '€760', trend: '+18% vs semana anterior' },
  { title: 'Pendências', value: '5', trend: '2 encomendas + 3 reposições' },
];

const orders = [
  { cliente: 'Restaurante Sol', qtd: 12, estado: 'Entregue', valor: '€54' },
  { cliente: 'Cliente Ana', qtd: 4, estado: 'Em preparação', valor: '€18' },
  { cliente: 'Cliente Rui', qtd: 2, estado: 'Novo', valor: '€9' },
];

const lowStock = [
  { produto: 'Arroz 1kg', stock: 4, min: 10 },
  { produto: 'Feijão lata', stock: 6, min: 12 },
  { produto: 'Azeite 750ml', stock: 2, min: 6 },
];

const kpisContainer = document.getElementById('kpis');
kpiData.forEach((item) => {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="kpi-title">${item.title}</div>
    <div class="kpi-value">${item.value}</div>
    <div class="kpi-trend">${item.trend}</div>
  `;
  kpisContainer.appendChild(el);
});

const statusClass = {
  Entregue: 'success',
  'Em preparação': 'warn',
  Novo: 'danger',
};

document.getElementById('orders-table').innerHTML = orders
  .map(
    (order) => `
      <tr>
        <td>${order.cliente}</td>
        <td>${order.qtd}</td>
        <td><span class="tag ${statusClass[order.estado]}">${order.estado}</span></td>
        <td>${order.valor}</td>
      </tr>
    `,
  )
  .join('');

document.getElementById('stock-table').innerHTML = lowStock
  .map(
    (item) => `
      <tr>
        <td>${item.produto}</td>
        <td>${item.stock}</td>
        <td>${item.min}</td>
        <td>Repor hoje</td>
      </tr>
    `,
  )
  .join('');
