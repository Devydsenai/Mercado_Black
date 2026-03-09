-- Seed: Inserir todos os produtos do projeto Mercado Black no MySQL
-- Execute no MySQL Workbench:
--   1. Conecte ao servidor
--   2. Use o banco: USE Mercado_Black;
--   3. Execute este script inteiro
--
-- Ou via terminal: mysql -u usuario -p Mercado_Black < seed-produtos.sql

USE `Mercado_Black`;

-- Limpar produtos existentes (opcional - descomente se quiser começar do zero)
-- TRUNCATE TABLE `produtos`;

-- Inserir todos os produtos do projeto (Oferta do dia + Mais vendidos + Mais vendido da semana)
INSERT INTO `produtos` (`nome`, `descricao`, `preco`, `estoque`, `imagem`, `ativo`) VALUES
('Placa AORUS RTX', 'Alta performance para gaming', 4989.99, 10, '/produtos/CardAORUS.svg', TRUE),
('PC Gamer Completo', 'Configuração pronta para jogos', 4999.99, 5, '/produtos/CardPc.svg', TRUE),
('ASUS GeForce RTX 5080', '16GB ROG ASTRAL WHITE OC', 3999.99, 8, '/produtos/CardPlaVidioRTX.svg', TRUE),
('Headset HyperX Cloud Alpha', '7.1 Surround Sound RGB', 699.99, 20, '/produtos/CardFoneDeo.svg', TRUE),
('Móvel Gamer', 'Espaçosa e ergonômica', 479.99, 15, '/produtos/CardMover.svg', TRUE),
('Monitor Samsung Odyssey G9', '49" 144Hz QHD Curvo', 5999.99, 6, '/produtos/CardUX.svg', TRUE),
('Smart TV Samsung 55"', '4K UHD Crystal', 2799.99, 12, '/produtos/CardSamsung.svg', TRUE),
('ASUS ProArt Display', 'Monitor profissional', 4299.99, 7, '/produtos/CardAsusProart.svg', TRUE),
('Placa Mãe Gigabyte', 'DDR5 para Intel', 1899.99, 15, '/produtos/CardGigabyte.svg', TRUE),
('Placa de Vídeo MSI', 'GeForce RTX Gaming', 3499.99, 9, '/produtos/CardMsi.svg', TRUE),
('Headset HyperX Cloud II', 'Som 7.1 Virtual', 499.99, 25, '/produtos/CardHypepx.svg', TRUE),
('Teclado Corsair K70', 'RGB Mecânico', 899.99, 18, '/produtos/CardCorsair.svg', TRUE),
('Suplemento Whey Protein', 'Muscle 2kg', 149.99, 50, '/produtos/CardMuscle.svg', TRUE),
('Ventilador Eletrolux', 'Turbo Force', 199.99, 30, '/produtos/CardEletro.svg', TRUE),
('Processador AMD Ryzen', '8 núcleos 16 threads', 1299.99, 14, '/produtos/CardProseAMD.svg', TRUE),
('Smartphone Infinix', '128GB 8GB RAM', 999.99, 22, '/produtos/CardInfinix.svg', TRUE),
('Smartwatch Fitness', 'Monitor cardíaco', 499.99, 20, '/produtos/CardSmart.svg', TRUE),
('Violão Cordoba', 'Classical C5', 19.99, 40, '/produtos/CardCordoba.svg', TRUE);
