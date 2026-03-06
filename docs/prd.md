# PRD — DuoGestão

## 1. Visão do produto
O DuoGestão é um sistema de gestão para uma operação com dois canais de receita:
1. Mini loja (venda de produtos físicos)
2. Encomendas de sopa para clientes de restaurante parceiro

## 2. Problemas a resolver
- Falta de visão única do caixa dos dois negócios.
- Dificuldade para controlar custos, lucro e pendências.
- Gestão manual de recibos e faturas.
- Ausência de resumo semanal para tomada de decisão.

## 3. Perfis de utilizador
- **Gestora principal (tia)**: usa diariamente para operações.
- **Ajudante/funcionário**: regista vendas, encomendas e despesas.
- **Contabilista (opcional)**: consulta relatórios e exportações.

## 4. Módulos funcionais

### 4.1 Dashboard executivo
- Receita do dia, semana e mês
- Despesas por categoria
- Lucro bruto e líquido
- Alertas: stock baixo, encomendas pendentes, pagamentos em atraso

### 4.2 Mini Mercado (Produtos)
- Cadastro de produtos (SKU, categoria, preço de custo, preço de venda)
- Stock atual, mínimo e reposição
- Registo de entradas (compras) e saídas (vendas/perdas)
- Ajuste de inventário com histórico

### 4.3 Encomendas de sopa
- Registo de pedidos (cliente, quantidade, valor, data, estado)
- Estados: Novo, Em preparação, Entregue, Cancelado
- Integração de custos por encomenda (embalagem/transporte)
- Resumo diário de encomendas enviadas ao restaurante

### 4.4 Finanças
- Lançamento de entradas e saídas manuais
- Categorias: compras, logística, energia, rendas, salários, outros
- Contas a receber e a pagar
- Conciliação simples por data e método de pagamento

### 4.5 Documentos fiscais
- Emissão e armazenamento de recibos/faturas
- Numeração automática
- Pesquisa por cliente, data, valor e status
- Exportação em PDF

### 4.6 Relatórios
- Resumo semanal
- Resumo mensal
- Produto mais vendido
- Margem por tipo de negócio (mini loja vs sopas)
- Exportação CSV/PDF

## 5. Requisitos não funcionais
- Interface simples e profissional
- Tempo de resposta < 2s nas telas principais
- Backups automáticos diários
- Auditoria de alterações críticas
- Segurança com autenticação e perfis de acesso
- Suporte a desktop e tablet

## 6. KPIs de sucesso
- Reduzir erro de registo manual em 60%
- Fecho semanal em menos de 20 minutos
- Visibilidade de lucro por canal em tempo real
- Taxa de adoção diária > 80%

## 7. MVP (versão 1)
- Dashboard
- Gestão de produtos
- Encomendas de sopa
- Entradas/saídas financeiras
- Relatório semanal
