# GCM Bank - Desktop Application

Aplicação desktop do GCM Bank desenvolvida com Electron, React e TypeScript.

## Estrutura do Projeto

\`\`\`
desktop-app/
├── src/
│   ├── main/           # Processo principal do Electron
│   │   ├── main.ts
│   │   └── preload.ts
│   └── renderer/       # Interface React
│       ├── components/
│       ├── contexts/
│       ├── pages/
│       ├── services/
│       ├── types/
│       └── config/
├── dist/              # Build output
└── release/           # Pacotes finais
\`\`\`

## Tecnologias

- **Electron**: Framework para aplicações desktop
- **React**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **React Router**: Navegação
- **Axios**: Cliente HTTP
- **Vite**: Build tool

## Instalação

\`\`\`bash
npm install
\`\`\`

## Desenvolvimento

\`\`\`bash
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
npm run package
\`\`\`

## Integração com Serviços

A aplicação se integra com os seguintes microserviços:

- **Auth Service** (porta 3001): Autenticação e autorização
- **Transfer Service** (porta 3002): Transferências entre contas
- **Payment Service** (porta 3003): Pagamentos diversos
- **Notification Service** (porta 3004): Notificações do sistema

Configure as URLs dos serviços no arquivo `.env`.
