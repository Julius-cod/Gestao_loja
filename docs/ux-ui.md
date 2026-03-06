# Guia UI/UX profissional — DuoGestão

## Princípios
1. **Clareza acima de tudo**: interface limpa e sem excesso de informação.
2. **Velocidade operacional**: poucos cliques para registos frequentes.
3. **Consistência visual**: componentes reutilizáveis.
4. **Feedback imediato**: estados de sucesso, erro e carregamento.

## Estrutura de navegação
- Sidebar fixa:
  - Dashboard
  - Mini Mercado
  - Encomendas de Sopa
  - Finanças
  - Recibos/Faturas
  - Relatórios
  - Configurações

## Design system (base)
- Tipografia: Inter
- Escala: 12 / 14 / 16 / 20 / 24 / 32
- Grid: 8px
- Raio de borda: 10px
- Sombras suaves para cartões e modais

## Paleta sugerida
- Primária: `#2563EB`
- Sucesso: `#16A34A`
- Alerta: `#F59E0B`
- Erro: `#DC2626`
- Neutros: escala de cinza 50–900

## Padrões de tela
- **Dashboard**: cartões KPI + gráfico semanal + tabelas de pendências
- **Listagens**: busca, filtros rápidos, paginação e ações em linha
- **Formulários**: seções curtas, labels claras, máscaras de moeda/data
- **Relatórios**: visão resumo + botão exportar

## Microinterações essenciais
- Toast em operações críticas (salvar, cancelar, atualizar)
- Skeleton loading para tabelas
- Confirmação para ações destrutivas
- Atalhos de teclado para operações repetitivas

## Experiência profissional (evitar visual júnior)
- Evitar excesso de cores saturadas
- Evitar botões com estilos diferentes em cada página
- Evitar tabelas sem hierarquia visual
- Priorizar espaçamento e tipografia consistente
