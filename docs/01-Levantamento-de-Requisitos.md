# Levantamento de Requisitos - Mercado Black

## 1. Visão Geral

| Item | Descrição |
|------|-----------|
| **Projeto** | Mercado Black - E-commerce Marketplace |
| **Objetivo** | Plataforma de vendas online com parcerias, afiliados e múltiplas formas de autenticação |
| **Tecnologias** | React, Vite, Tailwind, Node.js, Express, MySQL, Clerk |

---

## 2. Requisitos Funcionais

### 2.1 Autenticação e Usuário

| ID | Requisito | Prioridade | Status |
|----|-----------|------------|--------|
| RF01 | Sistema deve permitir login via e-mail e senha (banco MySQL) | Alta | ✓ |
| RF02 | Sistema deve permitir login via Clerk (Google, redes sociais) | Alta | ✓ |
| RF03 | Sistema deve permitir cadastro de novo usuário (nome, e-mail, senha, telefone) | Alta | ✓ |
| RF04 | Usuário autenticado deve visualizar avatar e menu (configurações, sair) | Média | ✓ |
| RF05 | Sistema deve exibir status "Usuário ativo" no perfil | Baixa | ✓ |
| RF06 | Páginas protegidas devem redirecionar para login se não autenticado | Alta | ✓ |

### 2.2 Produtos

| ID | Requisito | Prioridade | Status |
|----|-----------|------------|--------|
| RF07 | Sistema deve listar produtos do catálogo | Alta | ✓ |
| RF08 | Sistema deve permitir busca de produtos por nome e descrição | Alta | ✓ |
| RF09 | Sistema deve permitir cadastrar novo produto (nome, descrição, preço, URL da imagem) | Alta | ✓ |
| RF10 | Produtos cadastrados devem ser salvos no banco MySQL | Alta | ✓ |
| RF11 | Sistema deve exibir preview da imagem ao cadastrar (URL) | Média | ✓ |
| RF12 | Produtos devem ser exibidos na Home e na página Produtos | Alta | ✓ |

### 2.3 Carrinho e Checkout

| ID | Requisito | Prioridade | Status |
|----|-----------|------------|--------|
| RF13 | Sistema deve permitir adicionar produtos ao carrinho | Alta | ✓ |
| RF14 | Carrinho deve persistir em localStorage | Alta | ✓ |
| RF15 | Sistema deve permitir alterar quantidade e remover itens do carrinho | Alta | ✓ |
| RF16 | Checkout deve oferecer PIX, Cartão e Boleto | Alta | ✓ |
| RF17 | Ao aprovar pagamento, sistema deve exibir animação de confetes | Média | ✓ |
| RF18 | Após pagamento aprovado, carrinho deve ser limpo | Alta | ✓ |

### 2.4 Endereço e CEP

| ID | Requisito | Prioridade | Status |
|----|-----------|------------|--------|
| RF19 | Sistema deve consultar endereço por CEP (ViaCEP) | Média | ✓ |
| RF20 | Usuário deve poder salvar endereço no header | Média | ✓ |

### 2.5 Institucional e Afiliados

| ID | Requisito | Prioridade | Status |
|----|-----------|------------|--------|
| RF21 | Página Sobre deve explicar o site, parceiros e afiliados | Média | ✓ |
| RF22 | Página Afiliados deve descrever o programa e como participar | Média | ✓ |
| RF23 | Sistema deve ter link para contato (e-mail) | Baixa | ✓ |

### 2.6 Interface

| ID | Requisito | Prioridade | Status |
|----|-----------|------------|--------|
| RF24 | Sistema deve suportar tema claro e escuro | Média | ✓ |
| RF25 | Sistema deve ser responsivo | Alta | ✓ |
| RF26 | Home deve exibir banners, carrosséis de produtos e parceiros | Alta | ✓ |

---

## 3. Requisitos Não Funcionais

| ID | Requisito | Categoria |
|----|-----------|-----------|
| RNF01 | Tempo de resposta da API < 2s | Performance |
| RNF02 | Interface deve funcionar em navegadores modernos | Compatibilidade |
| RNF03 | Senhas devem ser armazenadas com hash (bcrypt) | Segurança |
| RNF04 | Tokens JWT para autenticação de API | Segurança |
| RNF05 | CORS habilitado para integração frontend-backend | Segurança |
| RNF06 | Dados sensíveis em variáveis de ambiente | Segurança |

---

## 4. Atores do Sistema

| Ator | Descrição |
|------|-----------|
| **Visitante** | Usuário não autenticado (visualiza loading, acessa entrar/cadastrar) |
| **Cliente** | Usuário autenticado (compra, busca, carrinho, perfil) |
| **Administrador** | Usuário que cadastra produtos (via API com token) |
| **Sistema** | ViaCEP (consulta CEP), Clerk (auth externa) |

---

## 5. Regras de Negócio

1. **RN01**: Login com e-mail/senha exige usuário cadastrado no MySQL com `ativo = true`
2. **RN02**: Cadastro de produto exige token JWT (login via MySQL)
3. **RN03**: Produtos com `ativo = false` não são exibidos
4. **RN04**: Carrinho é mantido entre sessões (localStorage)
5. **RN05**: Checkout é simulado (ambiente de demonstração)
