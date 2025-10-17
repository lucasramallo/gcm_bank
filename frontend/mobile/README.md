# GCM Bank - Mobile App

App mobile em React Native com Expo e Expo Router para o GCM Bank.

## 🚀 Tecnologias

- **Expo** (~51.0.0)
- **Expo Router** (~3.5.0) - Navegação baseada em arquivos
- **TypeScript** - Tipagem estática
- **React Native** (0.74.0)
- **Axios** - Cliente HTTP para integração com os serviços

## 📁 Estrutura do Projeto

\`\`\`
mobile-app/
├── app/                      # Rotas do Expo Router
│   ├── (auth)/              # Grupo de rotas de autenticação
│   │   ├── _layout.tsx      # Layout das telas de auth
│   │   ├── login.tsx        # Tela de login
│   │   └── register.tsx     # Tela de cadastro
│   ├── (tabs)/              # Grupo de rotas com tabs
│   │   ├── _layout.tsx      # Layout com bottom tabs
│   │   ├── home.tsx         # Tela inicial
│   │   ├── transfer.tsx     # Tela de transferências
│   │   ├── payment.tsx      # Tela de pagamentos
│   │   ├── notifications.tsx # Tela de notificações
│   │   └── profile.tsx      # Tela de perfil
│   ├── _layout.tsx          # Layout raiz
│   └── index.tsx            # Tela inicial (splash/redirect)
├── src/
│   ├── config/
│   │   └── api.ts           # Configuração das APIs
│   ├── contexts/
│   │   └── AuthContext.tsx  # Context de autenticação
│   ├── services/            # Serviços de integração
│   │   ├── auth.service.ts
│   │   ├── transfer.service.ts
│   │   ├── payment.service.ts
│   │   └── notification.service.ts
│   └── types/
│       └── index.ts         # Tipos TypeScript
├── assets/                  # Imagens e recursos
├── app.json                 # Configuração do Expo
├── package.json
└── tsconfig.json
\`\`\`

## 🔧 Instalação

\`\`\`bash
cd mobile-app
npm install
\`\`\`

## 🏃 Executar

\`\`\`bash
# Iniciar o servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web
\`\`\`

## 🔌 Integração com Serviços

O app está configurado para se integrar com os seguintes serviços do backend:

- **Auth Service** (porta 3001) - Autenticação e criptografia
- **Transfer Service** (porta 3002) - Transferências entre contas
- **Payment Service** (porta 3003) - Pagamento de contas
- **Notification Service** (porta 3004) - Notificações

Configure as URLs dos serviços no arquivo `.env`:

\`\`\`env
EXPO_PUBLIC_AUTH_SERVICE_URL=http://localhost:3001
EXPO_PUBLIC_TRANSFER_SERVICE_URL=http://localhost:3002
EXPO_PUBLIC_PAYMENT_SERVICE_URL=http://localhost:3003
EXPO_PUBLIC_NOTIFICATION_SERVICE_URL=http://localhost:3004
\`\`\`

## 📱 Navegação

O app utiliza **Expo Router** com navegação baseada em arquivos:

- **Grupos de rotas**: `(auth)` e `(tabs)` para organizar as telas
- **Layouts aninhados**: Cada grupo tem seu próprio `_layout.tsx`
- **Navegação por tabs**: Bottom tabs para as telas principais
- **Proteção de rotas**: Context de autenticação gerencia acesso

## 🔐 Autenticação

O `AuthContext` gerencia o estado de autenticação:
- Armazena token e dados do usuário no AsyncStorage
- Intercepta requisições para adicionar token de autenticação
- Redireciona automaticamente entre telas públicas e privadas

## 📝 Próximos Passos

As telas estão estruturadas e prontas para receber conteúdo. Você pode:

1. Implementar os formulários nas telas de auth
2. Adicionar componentes de UI nas telas principais
3. Integrar com os serviços do backend
4. Adicionar validações e tratamento de erros
5. Implementar testes
