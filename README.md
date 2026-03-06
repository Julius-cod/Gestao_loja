# DuoGestão

Software de gestão para negócios híbridos (mini mercado + encomendas para restaurante).

## Objetivo
Ajudar no controlo diário, semanal e mensal de:
- Entradas e saídas
- Gestão de produtos (mini mercado)
- Encomendas de sopa (parceria com restaurante)
- Recibos e faturas
- Resumo financeiro por período

## Nome do projeto
Sugestões de nome com perfil profissional:
- **DuoGestão** (recomendado)
- Loja & Mesa Pro
- FluxoDuplo
- MercadoSopa 360
- Gêmeo Finance

## Conteúdo inicial
- `docs/prd.md`: requisitos funcionais e não funcionais
- `docs/arquitetura.md`: proposta técnica full-stack
- `docs/ux-ui.md`: guia UI/UX com padrões profissionais
- `docs/mvp-roadmap.md`: plano de implementação por fases

## Próximos passos
1. Definir os fluxos críticos para a demo (vendas, encomendas, despesas e relatórios), mesmo sem entrevista inicial.
2. Definir stack final (sugestão: Next.js + NestJS + PostgreSQL).
3. Construir MVP em 4 a 6 semanas com design system desde o início.
4. Iterar em cima do feedback real de uso.

## Modo presente (surpresa)
Se a utilizadora final ainda não sabe do projeto, siga um plano de execução sem entrevista inicial:
- `docs/plano-presente.md`: estratégia de MVP orientada a valor imediato
- Preparar demo com dados realistas antes da apresentação
- Coletar feedback só após primeira entrega

## Demo inicial (já executável)

Foi adicionado um protótipo funcional em `web/` para iniciar o projeto com uma interface profissional.

### Como correr
```bash
cd web
python3 -m http.server 4173
```
Abrir: `http://localhost:4173`


## Estado atual da base
- A base já não é apenas estática: o protótipo em `web/` agora é interativo.
- Já permite adicionar produtos, encomendas e lançamentos financeiros.
- Os dados ficam guardados no navegador com `localStorage` (bom para demo, ainda sem backend).

## Próximo passo recomendado
1. Criar API real (NestJS) e base de dados (PostgreSQL).
2. Trocar `localStorage` por persistência no backend.
3. Adicionar autenticação e perfis (admin/operador).
