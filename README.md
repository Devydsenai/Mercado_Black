# Mercado Black

E-commerce marketplace com autenticação dual (Clerk + MySQL), carrinho, checkout e programa de afiliados.

## Estrutura do Projeto

```
Mercado_Black/
├── frontend/          # React + Vite + Tailwind
├── backend/           # Node.js + Express + MySQL
└── README.md
```

## Pré-requisitos

- Node.js 18+
- MySQL 8+
- Conta Clerk (https://clerk.com)

## Configuração

### Backend

1. Entre na pasta `backend/`
2. Copie `.env.example` para `.env`
3. Preencha as variáveis (banco MySQL, JWT)
4. Crie o banco e tabelas:
   - No MySQL Workbench: execute `backend/database/schemas.sql`
   - Opcional: execute `backend/database/seed-produtos.sql` para produtos iniciais
5. Instale e inicie:
   ```bash
   npm install
   npm start
   ```

### Frontend

1. Entre na pasta `frontend/`
2. Copie `.env.example` para `.env`
3. Configure `VITE_API_URL` (URL do backend) e `VITE_CLERK_PUBLISHABLE_KEY`
4. Instale e inicie:
   ```bash
   npm install
   npm run dev
   ```

## Deploy

### Backend
- Hospedar em Node.js (Railway, Render, Heroku, etc.)
- Configurar variáveis de ambiente
- Apontar para banco MySQL em produção

### Frontend
- Build: `npm run build`
- Hospedar pasta `dist/` em Vercel, Netlify, ou servidor estático
- Atualizar `VITE_API_URL` para URL do backend em produção

## Funcionalidades

- Login duplo (Clerk/Google + e-mail/senha MySQL)
- Busca de produtos
- Cadastro de produtos (MySQL)
- Carrinho persistente
- Checkout (PIX, cartão, boleto) com animação de confetes
- Programa de afiliados
- Tema claro/escuro
- Busca de endereço por CEP
