    CREATE DATABASE IF NOT EXISTS `Mercado_Black`
       DEFAULT CHARACTER SET utf8mb4
       DEFAULT COLLATE utf8mb4_unicode_ci;
    
    USE `Mercado_Black`;

 -- Tabela de Usuarios (para login e cadastro)
 CREATE TABLE IF NOT EXISTS `usuarios` ( 
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `senha` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(15) NOT NULL,
    `data_cadastro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `ativo` BOOLEAN DEFAULT TRUE
 );

 -- Tabela de Produtos
 CREATE TABLE IF NOT EXISTS `produtos` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(150) NOT NULL,
    `descricao` TEXT,
    `preco` DECIMAL(10, 2) NOT NULL,
    `estoque` INT DEFAULT 0,
    `categoria_id` VARCHAR(80),
    `imagem` VARCHAR(255),
    `usuario_id` INT,
    `data_cadastro` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `ativo` BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE SET NULL
);

 -- Tabela de Refresh Tokens (para JWT - renovação e revogação)
 CREATE TABLE IF NOT EXISTS `refresh_tokens` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `usuario_id` INT NOT NULL,
    `token` VARCHAR(500) NOT NULL UNIQUE,
    `expira_em` DATETIME NOT NULL,
    `criado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `revogado` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE
 );

 -- Índices para melhorar buscas
 CREATE INDEX idx_usuarios_email ON `usuarios`(`email`);
 CREATE INDEX idx_produtos_nome ON `produtos`(`categoria_id`);
 CREATE INDEX idx_refresh_tokens_token ON `refresh_tokens`(`token`);
 CREATE INDEX idx_refresh_tokens_usuario ON `refresh_tokens`(`usuario_id`);

 