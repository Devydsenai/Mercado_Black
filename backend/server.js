/**
 * Mercado Black API - Express + MySQL
 * Rotas: /api/usuarios (login, cadastro), /api/produtos (CRUD)
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import usuarioRoutes from './routes/usuario.js';
import produtoRoutes from './routes/produtos.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/produtos', produtoRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API Mercado Black está rodando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
