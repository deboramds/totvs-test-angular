# Totvs Test Angular

Este projeto foi desenvolvido como parte de um teste técnico utilizando Angular 17 com componentes standalone e gerenciamento de estado via `signal`.

##  Componentes implementados

### `custom-switch`
Componente de toggle com as seguintes funcionalidades:
- Recebe valor via `@Input()`
- Emite mudanças via `@Output()`
- Suporte a `disabled`
- Acessibilidade com `role="switch"` e `aria-*`
- Estilização simples com feedback visual

### `custom-select`
Componente de dropdown com:
- Lista de opções via `@Input()`
- Valor selecionado via `@Input()`
- Emissão de mudanças via `@Output()`
- Estilo básico e responsivo

##  Funcionalidades entregues

- Comunicação entre componentes pai e filho
- Controle de estado com `signal`
- Tela de teste integrada com feedback visual
- Componentes standalone reutilizáveis
- Estilo visual limpo e acessível

## Pontos pendentes

- O `custom-select` ainda precisa de ajustes no comportamento de seleção
- Estilização pode ser refinada
- Validação e acessibilidade podem ser melhoradas

##  Como rodar o projeto

```bash
npm install
ng serve
