# Arquitetura sugerida — DuoGestão

## Stack recomendada
- **Frontend**: Next.js 14 + TypeScript + Tailwind + shadcn/ui
- **Backend**: NestJS + TypeScript
- **Base de dados**: PostgreSQL
- **ORM**: Prisma
- **Auth**: JWT + refresh token
- **Relatórios**: geração PDF no backend + export CSV
- **Infra**: Docker + deploy em VPS (ou Railway/Render)

## Módulos de backend
- `auth`
- `users`
- `products`
- `inventory`
- `orders`
- `finance`
- `invoices`
- `reports`

## Modelo de dados (alto nível)

### Tabelas principais
- `users`
- `products`
- `inventory_movements`
- `soup_orders`
- `finance_entries`
- `invoices`
- `invoice_items`
- `weekly_summaries`

## Regras importantes
- Todo movimento de stock gera histórico imutável.
- Toda encomenda entregue pode gerar recibo/fatura.
- Entradas e saídas financeiras devem ter categoria e método de pagamento.
- Resumo semanal é calculado por rotina agendada e pode ser recalculado.

## Escalabilidade e manutenção
- Separar domínio por módulos desde o início.
- Usar validação de DTOs e logs estruturados.
- Criar seeds para ambiente de demonstração.
