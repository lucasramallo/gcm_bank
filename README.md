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
| `index.ts` | Código-fonte | Todos | `/src/` | v1.0.0 | Rayykoner | `express`, `body-parser` |
| `config.ts` | Configuração | Todos | `/src/config/` | v1.0.0 | Rayykoner | - |
| `notification.model.ts` | Código-fonte | Todos | `/src/models/` | v1.0.0 | Rayykoner | - |
| `notification.repository.ts` | Código-fonte | Todos | `/src/repositories/` | v1.0.0 | João Lucas | `notification.model.ts` |
| `notification.service.ts` | Código-fonte | Todos | `/src/services/` | v1.0.0 | Isaac | `notification.model.ts`, `notification.repository.ts` |
| `notification.controller.ts` | Código-fonte | Todos | `/src/controllers/` | v1.0.0 | Isaac | `notification.service.ts`, `express` |
| `index.ts` (routes) | Código-fonte | Todos | `/src/routes/` | v1.0.0 | Isaac | `notification.controller.ts`, `express` |
