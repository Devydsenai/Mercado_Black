# Diagrama de Caso de Uso - Mercado Black

## Diagrama em Mermaid

```mermaid
flowchart TB
    subgraph Ator["Atores"]
        Visitante[Visitante]
        Cliente[Cliente]
    end

    subgraph Autenticacao["Autenticação"]
        UC1[Entrar / Login]
        UC2[Cadastrar]
        UC3[Sair]
    end

    subgraph Produtos["Produtos"]
        UC4[Listar Produtos]
        UC5[Buscar Produtos]
        UC6[Cadastrar Produto]
        UC7[Ver Detalhes do Produto]
    end

    subgraph Compra["Compra"]
        UC8[Adicionar ao Carrinho]
        UC9[Gerenciar Carrinho]
        UC10[Finalizar Compra]
    end

    subgraph Perfil["Perfil"]
        UC11[Ver Minha Conta]
        UC12[Configurações]
    end

    subgraph Institucional["Institucional"]
        UC13[Consultar CEP]
        UC14[Ver Sobre]
        UC15[Ver Afiliados]
    end

    subgraph Interface["Interface"]
        UC16[Alternar Tema]
    end

    Visitante --> UC1
    Visitante --> UC2
    Visitante --> UC14
    Visitante --> UC15

    Cliente --> UC3
    Cliente --> UC4
    Cliente --> UC5
    Cliente --> UC6
    Cliente --> UC7
    Cliente --> UC8
    Cliente --> UC9
    Cliente --> UC10
    Cliente --> UC11
    Cliente --> UC12
    Cliente --> UC13
    Cliente --> UC16

    UC7 -.->|include| UC4
    UC10 -.->|include| UC9
```

## Casos de Uso Detalhados

### UC01 - Entrar / Login
- **Ator**: Visitante
- **Pré-condição**: Nenhuma
- **Fluxo principal**: Usuário informa credenciais (e-mail/senha ou Clerk) e acessa o sistema
- **Pós-condição**: Usuário autenticado, redirecionado para Home

### UC02 - Cadastrar
- **Ator**: Visitante
- **Pré-condição**: Nenhuma
- **Fluxo principal**: Usuário preenche nome, e-mail, senha, telefone e confirma
- **Pós-condição**: Conta criada, redirecionado para tela de login

### UC04 - Listar Produtos
- **Ator**: Cliente
- **Pré-condição**: Usuário autenticado
- **Fluxo principal**: Sistema exibe produtos do banco e demo
- **Pós-condição**: Produtos exibidos em grid

### UC05 - Buscar Produtos
- **Ator**: Cliente
- **Pré-condição**: Usuário autenticado
- **Fluxo principal**: Usuário digita termo na busca, sistema filtra por nome/descrição
- **Pós-condição**: Lista filtrada exibida

### UC06 - Cadastrar Produto
- **Ator**: Cliente (com token MySQL)
- **Pré-condição**: Login via e-mail/senha
- **Fluxo principal**: Usuário preenche nome, descrição, preço, URL da imagem e salva
- **Pós-condição**: Produto inserido no MySQL

### UC08 - Adicionar ao Carrinho
- **Ator**: Cliente
- **Pré-condição**: Produto selecionado
- **Fluxo principal**: Usuário define quantidade e clica em "Adicionar ao carrinho"
- **Pós-condição**: Item adicionado ao carrinho (localStorage)

### UC10 - Finalizar Compra
- **Ator**: Cliente
- **Pré-condição**: Carrinho com itens
- **Fluxo principal**: Usuário escolhe PIX/Cartão/Boleto, preenche dados, confirma. Sistema simula aprovação e exibe confetes
- **Pós-condição**: Carrinho limpo, tela de sucesso exibida

---

## Diagrama Simplificado (UML-style)

```
                    +------------------+
                    |   Mercado Black   |
                    +------------------+
     Visitante ----| Entrar            |
                   | Cadastrar         |
                   | Ver Sobre         |
                   | Ver Afiliados     |
     Cliente -----| Listar Produtos   |
                   | Buscar Produtos   |
                   | Cadastrar Produto |
                   | Ver Detalhes      |
                   | Adicionar Carrinho|
                   | Gerenciar Carrinho|
                   | Finalizar Compra  |
                   | Minha Conta       |
                   | Configurações     |
                   | Consultar CEP     |
                   | Alternar Tema     |
                    +------------------+
```
