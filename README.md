Auth Service

| Item de Configuração | Tipo | Plataforma | Localização | Versão | Responsável | Dependências |
| --- | --- | --- | --- | --- | --- | --- |
| `package.json` | Configuração | Todos | `/` | v1.0.0 | Isaac | - |
| `tsconfig.json` | Configuração | Todos | `/` | v1.0.0 | Isaac | - |
| `index.ts` | Código-fonte | Todos | `/src/` | v1.0.0 | Isaac | `express`, `body-parser` |
| `config.ts` | Configuração | Todos | `/src/config/` | v1.0.0 | Isaac | - |
| `user.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | Raykkoner | - |
| `crypto.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | Raykkoner | - |
| `user.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | Raykkoner | `user.model.ts` |
| `crypto.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | Raykkoner | `crypto.model.ts` |
| `auth.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | Raykkoner | `user.model.ts`, `crypto.service.ts` |
| `crypto.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | João Lucas | `crypto`, `config.ts`, `crypto.repository.ts` |
| `auth.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | João Lucas | `auth.service.ts`, `express` |
| `crypto.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | João Lucas | `crypto.service.ts`, `express` |
| `index.ts` (routes) | Código-fonte | Todos | `/src/routes/` | v1.0.0 | João Lucas | `auth.controller.ts`, `crypto.controller.ts`, `express` |

## Transfer Service

| Item de Configuração | Tipo | Plataforma | Localização | Versão | Responsável | Dependências |
| --- | --- | --- | --- | --- | --- | --- |
| `package.json` | Configuração | Todos | `/` | v1.0.0 | Isaac | - |
| `tsconfig.json` | Configuração | Todos | `/` | v1.0.0 | Isaac | - |
| `index.ts` | Código-fonte | Todos | `/src/` | v1.0.0 | Isaac | `express`, `body-parser` |
| `config.ts` | Configuração | Todos | `/src/config/` | v1.0.0 | Isaac | - |
| `transfer.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | Raykkoner | - |
| `account.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | João Lucas | - |
| `transfer.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | João Lucas | `transfer.model.ts` |
| `account.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | João Lucas | `account.model.ts` |
| `transfer.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | Raykkoner | `transfer.model.ts`, `validation.service.ts`, `account.repository.ts` |
| `validation.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | Raykkoner | `account.repository.ts` |
| `transfer.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | João Lucas | `transfer.service.ts`, `express` |
| `account.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | João Lucas | `validation.service.ts`, `express` |
| `index.ts` (routes) | Código-fonte | Todos | `/src/routes/` | v1.0.0 | João Lucas | `transfer.controller.ts`, `account.controller.ts`, `express` |

## payment-service

| Item de Configuração | Tipo | Plataforma | Localização | Versão | Responsável | Dependências |
| --- | --- | --- | --- | --- | --- | --- |
| `package.json` | Configuração | Todos | `/` | v1.0.0 | Rakkoner | - |
| `tsconfig.json` | Configuração | Todos | `/` | v1.0.0 | Rakkoner | - |
| `index.ts` | Código-fonte | Todos | `/src/` | v1.0.0 | João Lucas | `express`, `body-parser` |
| `config.ts` | Configuração | Todos | `/src/config/` | v1.0.0 | Isaac | - |
| `bill.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | Raykkoner | - |
| `account.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | Isaac | - |
| `bill.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | Isaac | `bill.model.ts` |
| `account.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | Isaac | `account.model.ts` |
| `payment.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | Raykkoner | `bill.model.ts`, `validation.service.ts`, `account.repository.ts` |
| `validation.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | Raykkoner | `account.repository.ts` |
| `payment.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | Raykkoner | `payment.service.ts`, `express` |
| `account.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | Isaac | `validation.service.ts`, `express` |
| `index.ts` (routes) | Código-fonte | Todos | `/src/routes/` | v1.0.0 | João Lucas | `payment.controller.ts`, `account.controller.ts`, `express` |

## Notification Service

| Item de Configuração | Tipo | Plataforma | Localização | Versão | Responsável | Dependências |
| --- | --- | --- | --- | --- | --- | --- |
| `package.json` | Configuração | Todos | `/` | v1.0.0 | João Lucas | - |
| `tsconfig.json` | Configuração | Todos | `/` | v1.0.0 | João Lucas | - |
| `index.ts` | Código-fonte | Todos | `/src/` | v1.0.0 | Raykkoner | `express`, `body-parser` |
| `config.ts` | Configuração | Todos | `/src/config/` | v1.0.0 | Raykkoner | - |
| `notification.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | Raykkoner | - |
| `notification.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | João Lucas | `notification.model.ts` |
| `notification.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | Isaac | `notification.model.ts`, `notification.repository.ts` |
| `notification.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | Isaac | `notification.service.ts`, `express` |
| `index.ts` (routes) | Código-fonte | Todos | `/src/routes/` | v1.0.0 | Isaac | `notification.controller.ts`, `express` |

## Mobile App (Expo)

| Item de Configuração | Tipo | Plataforma | Localização | Versão | Responsável | Dependências
|-----|-----|-----|-----|-----|-----|-----
| `package.json` | Configuração | Mobile | `/mobile-app/` | v1.0.0 | João Lucas | `expo`, `expo-router`, `react-native`
| `tsconfig.json` | Configuração | Mobile | `/mobile-app/` | v1.0.0 | João Lucas | -
| `app.json` | Configuração | Mobile | `/mobile-app/` | v1.0.0 | João Lucas | -
| `api.ts` | Configuração | Mobile | `/mobile-app/src/config/` | v1.0.0 | João Lucas | `axios`
| `index.ts` | Código-fonte | Mobile | `/mobile-app/src/types/` | v1.0.0 | João Lucas | -
| `auth.service.ts` | Código-fonte | Mobile | `/mobile-app/src/services/` | v1.0.0 | João Lucas | `axios`, `api.ts`
| `transfer.service.ts` | Código-fonte | Mobile | `/mobile-app/src/services/` | v1.0.0 | Raykkoner | `axios`, `api.ts`
| `payment.service.ts` | Código-fonte | Mobile | `/mobile-app/src/services/` | v1.0.0 | Raykkoner | `axios`, `api.ts`
| `notification.service.ts` | Código-fonte | Mobile | `/mobile-app/src/services/` | v1.0.0 | Raykkoner | `axios`, `api.ts`
| `AuthContext.tsx` | Código-fonte | Mobile | `/mobile-app/src/contexts/` | v1.0.0 | Raykkoner | `react`, `auth.service.ts`
| `_layout.tsx` | Código-fonte | Mobile | `/mobile-app/app/` | v1.0.0 | Raykkoner | `expo-router`, `AuthContext.tsx`
| `index.tsx` | Código-fonte | Mobile | `/mobile-app/app/(auth)/` | v1.0.0 | Raykkoner | `expo-router`, `AuthContext.tsx`
| `register.tsx` | Código-fonte | Mobile | `/mobile-app/app/(auth)/` | v1.0.0 | Raykkoner | `expo-router`, `AuthContext.tsx`
| `_layout.tsx` | Código-fonte | Mobile | `/mobile-app/app/(tabs)/` | v1.0.0 | Raykkoner | `expo-router`
| `index.tsx` | Código-fonte | Mobile | `/mobile-app/app/(tabs)/` | v1.0.0 | Raykkoner | `react-native`
| `transfers.tsx` | Código-fonte | Mobile | `/mobile-app/app/(tabs)/` | v1.0.0 | Raykkoner | `react-native`, `transfer.service.ts`
| `payments.tsx` | Código-fonte | Mobile | `/mobile-app/app/(tabs)/` | v1.0.0 | Raykkoner | `react-native`, `payment.service.ts`
| `notifications.tsx` | Código-fonte | Mobile | `/mobile-app/app/(tabs)/` | v1.0.0 | Raykkoner | `react-native`, `notification.service.ts`
| `profile.tsx` | Código-fonte | Mobile | `/mobile-app/app/(tabs)/` | v1.0.0 | Raykkoner | `react-native`, `AuthContext.tsx`


## Desktop App (Electron)

| Item de Configuração | Tipo | Plataforma | Localização | Versão | Responsável | Dependências
|-----|-----|-----|-----|-----|-----|-----
| `package.json` | Configuração | Desktop | `/desktop-app/` | v1.0.0 | Raykkoner | `electron`, `react`, `vite`
| `tsconfig.json` | Configuração | Desktop | `/desktop-app/` | v1.0.0 | Raykkoner | -
| `tsconfig.main.json` | Configuração | Desktop | `/desktop-app/` | v1.0.0 | Raykkoner | -
| `vite.config.ts` | Configuração | Desktop | `/desktop-app/` | v1.0.0 | Raykkoner | `vite`
| `main.ts` | Código-fonte | Desktop | `/desktop-app/src/main/` | v1.0.0 | Raykkoner | `electron`
| `preload.ts` | Código-fonte | Desktop | `/desktop-app/src/main/` | v1.0.0 | Raykkoner | `electron`
| `api.ts` | Configuração | Desktop | `/desktop-app/src/renderer/config/` | v1.0.0 | Raykkoner | `axios`
| `index.ts` | Código-fonte | Desktop | `/desktop-app/src/renderer/types/` | v1.0.0 | Raykkoner | -
| `auth.service.ts` | Código-fonte | Desktop | `/desktop-app/src/renderer/services/` | v1.0.0 | Raykkoner | `axios`, `api.ts`
| `transfer.service.ts` | Código-fonte | Desktop | `/desktop-app/src/renderer/services/` | v1.0.0 | Raykkoner | `axios`, `api.ts`
| `payment.service.ts` | Código-fonte | Desktop | `/desktop-app/src/renderer/services/` | v1.0.0 | Raykkoner | `axios`, `api.ts`
| `notification.service.ts` | Código-fonte | Desktop | `/desktop-app/src/renderer/services/` | v1.0.0 | Raykkoner | `axios`, `api.ts`
| `AuthContext.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/contexts/` | v1.0.0 | Raykkoner | `react`, `auth.service.ts`
| `App.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/` | v1.0.0 | Raykkoner | `react-router-dom`, `AuthContext.tsx`
| `Layout.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/components/` | v1.0.0 | Isaac | `react`, `react-router-dom`
| `Sidebar.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/components/` | v1.0.0 | Isaac | `react`, `react-router-dom`
| `Login.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/pages/` | v1.0.0 | Isaac | `react`, `AuthContext.tsx`
| `Register.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/pages/` | v1.0.0 | Isaac | `react`, `AuthContext.tsx`
| `Dashboard.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/pages/` | v1.0.0 | Isaac | `react`
| `Transfers.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/pages/` | v1.0.0 | Isaac | `react`, `transfer.service.ts`
| `Payments.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/pages/` | v1.0.0 | Isaac | `react`, `payment.service.ts`
| `Notifications.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/pages/` | v1.0.0 | Isaac | `react`, `notification.service.ts`
| `Profile.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/pages/` | v1.0.0 | João Lucas | `react`, `AuthContext.tsx`
| `index.html` | Código-fonte | Desktop | `/desktop-app/src/renderer/` | v1.0.0 | João Lucas | -
| `main.tsx` | Código-fonte | Desktop | `/desktop-app/src/renderer/` | v1.0.0 | João Lucas | `react`, `react-dom`
| `styles.css` | Código-fonte | Desktop | `/desktop-app/src/renderer/` | v1.0.0 | João Lucas | -

# Web Bank

| Item de Configuração | Tipo          | Plataforma | Localização                 | Versão | Responsável | Dependências                  |
|----------------------|---------------|------------|-----------------------------|--------|-------------|--------------------------------|
| `package.json`       | Configuração | Mobile    | `/mobile-app/`              | v1.0.0 | João Lucas  | `expo`, `expo-router`, `react-native` |
| `tsconfig.json`      | Configuração | Mobile    | `/mobile-app/`              | v1.0.0 | João Lucas  | -                             |
| `app.json`           | Configuração | Mobile    | `/mobile-app/`              | v1.0.0 | João Lucas  | -                             |
| `api.ts`             | Configuração | Mobile    | `/mobile-app/src/config/`   | v1.0.0 | João Lucas  | `axios`                       |
| `index.ts`           | Código-fonte | Mobile    | `/mobile-app/src/types/`    | v1.0.0 | João Lucas  | -                             |
| `auth.service.ts`    | Código-fonte | Mobile    | `/mobile-app/src/services/` | v1.0.0 | João Lucas  | `axios`, `api.ts`             |
| `transfer.service.ts`| Código-fonte | Mobile    | `/mobile-app/src/services/` | v1.0.0 | Raykkoner   | `axios`, `api.ts`             |
| `payment.service.ts` | Código-fonte | Mobile    | `/mobile-app/src/services/` | v1.0.0 | Raykkoner   | `axios`, `api.ts`             |
| `notification.service.ts` | Código-fonte | Mobile    | `/mobile-app/src/services/` | v1.0.0 | Raykkoner   | `axios`, `api.ts`             |
| `AuthContext.tsx`    | Código-fonte | Mobile    | `/mobile-app/src/contexts/` | v1.0.0 | Raykkoner   | `react`, `auth.service.ts`    |
| `_layout.tsx`        | Código-fonte | Mobile    | `/mobile-app/app/`          | v1.0.0 | Raykkoner   | `expo-router`, `AuthContext.tsx` |
| `index.tsx`          | Código-fonte | Mobile    | `/mobile-app/app/(auth)/`   | v1.0.0 | Raykkoner   | `expo-router`, `AuthContext.tsx` |
| `register.tsx`       | Código-fonte | Mobile    | `/mobile-app/app/(auth)/`   | v1.0.0 | Raykkoner   | `expo-router`, `AuthContext.tsx` |
| `_layout.tsx`        | Código-fonte |
