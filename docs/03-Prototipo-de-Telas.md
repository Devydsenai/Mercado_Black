# Protótipo de Telas - Mercado Black

## Navegação Geral

```
[Logo] [CEP] [Busca] [Tema] [Entre/Avatar]  |  Home | Produtos | Sobre | Cadastrar Produto | Afiliados | Compras | Carrinho
```

---

## 1. Tela de Loading (Landing)

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/loading` |
| **Layout** | Full-screen com fundo |
| **Componentes** | Banner rotativo, cards de destaque (Frete grátis, Meios de pagamento, etc.), carrosséis de produtos (Oferta do dia, Mais vendidos, Mais vendido da semana), logos de parceiros |
| **Acesso** | Público |

```
+--------------------------------------------------+
| [Banner Carrossel - 3 slides]                     |
+--------------------------------------------------+
| [Card] [Card] [Card] [Card] ... (scroll horizontal)|
+--------------------------------------------------+
| Oferta do dia                                     |
| [Prod1] [Prod2] [Prod3] [Prod4] ... < >           |
+--------------------------------------------------+
| Mais vendidos                                     |
| [Prod] [Prod] [Prod] ...                          |
+--------------------------------------------------+
| [Logos parceiros - marquee]                       |
+--------------------------------------------------+
```

---

## 2. Tela de Entrar (Login)

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/entrar` |
| **Layout** | Split: formulário à esquerda, Clerk SignIn à direita |
| **Campos** | E-mail, Senha, Botão "Entrar" |
| **Acesso** | Público |

```
+------------------------+------------------------+
|  [Formulário Login]    |  [Clerk - Google etc]  |
|  E-mail: [__________]  |                        |
|  Senha:  [__________]  |  Sign in with Google   |
|  [Entrar]              |  or email              |
|  Não tem conta?        |                        |
|  Cadastre-se           |                        |
+------------------------+------------------------+
```

---

## 3. Tela de Cadastrar

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/cadastrar` |
| **Layout** | Split com Clerk SignUp |
| **Acesso** | Público |

---

## 4. Home (Autenticado)

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/home` |
| **Layout** | Igual ao Loading, com seção extra "Produtos cadastrados" (se houver) |
| **Acesso** | Autenticado |

---

## 5. Produtos

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/produtos` ou `/produtos?q=termo` |
| **Layout** | Grid de cards de produtos |
| **Componentes** | Título (ou "Busca: termo"), link Cadastrar Produto, grid com imagem, nome, descrição, preço |
| **Interação** | Clique no card abre modal de detalhes (quantidade, Comprar, Adicionar ao carrinho) |

```
+--------------------------------------------------+
| Produtos              [Cadastrar] [Voltar]       |
+--------------------------------------------------+
| +--------+ +--------+ +--------+ +--------+      |
| | [img]  | | [img]  | | [img]  | | [img]  |      |
| | Nome   | | Nome   | | Nome   | | Nome   |      |
| | R$ xx  | | R$ xx  | | R$ xx  | | R$ xx  |      |
| +--------+ +--------+ +--------+ +--------+      |
+--------------------------------------------------+
```

---

## 6. Cadastrar Produto

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/cadastrar-produto` |
| **Layout** | Formulário centralizado |
| **Campos** | Nome, Descrição, Preço (R$), URL da imagem |
| **Extras** | Preview da imagem ao preencher URL, indicador "Salvo no MySQL" ou "Salvo localmente" |
| **Acesso** | Autenticado |

```
+--------------------------------------------------+
| Cadastrar produto              [Ver produtos]    |
+--------------------------------------------------+
| Nome:        [________________________]          |
| Descrição:   [________________________]          |
|              [________________________]          |
| Preço (R$):  [________________________]          |
| URL imagem:  [________________________]          |
| +------------------+                             |
| | [Preview img]    |                             |
| +------------------+                             |
| [Cadastrar e ir para Produtos]                   |
+--------------------------------------------------+
```

---

## 7. Carrinho

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/carrinho` |
| **Layout** | Lista de itens com imagem, nome, preço, quantidade, subtotal |
| **Ações** | Alterar quantidade, remover, ir para checkout |
| **Acesso** | Autenticado |

---

## 8. Checkout

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/checkout` |
| **Layout** | Duas colunas: Forma de pagamento (Cartão/PIX/Boleto) | Resumo da compra |
| **Fluxo** | Preencher dados → Confirmar → Processando... → Sucesso + Confetes |
| **Acesso** | Autenticado |

---

## 9. Minha Conta

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/minha-conta` |
| **Layout** | Card com avatar, nome, e-mail, status "Usuário ativo", configurações |
| **Acesso** | Autenticado (login MySQL) |

---

## 10. Sobre

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/sobre` |
| **Layout** | Seções: O que fazemos, Parceiros, Afiliados, O que oferecemos, Contato |
| **Acesso** | Autenticado |

---

## 11. Afiliados

| Elemento | Descrição |
|----------|-----------|
| **URL** | `/afiliados` |
| **Layout** | Como funciona, Vantagens, Botão "Contatar Afiliados" |
| **Acesso** | Autenticado |

---

## Fluxo de Navegação

```
Loading → Entrar/Cadastrar → Home
                ↓
    Home ←→ Produtos ←→ Cadastrar Produto
       ↓         ↓
    Sobre    Carrinho → Checkout
       ↓
   Afiliados

   Minha Conta (via menu avatar)
```
