/**
 * Rotas de usuário: login, cadastro
 * Login: POST /api/usuarios/login → token JWT
 * Cadastro: POST /api/usuarios/cadastro
 */
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

const router = express.Router();

// Cadastro de usuário
router.post('/cadastro', async (req, res) => {
  try {
    const { nome, email, senha, telefone } = req.body;

    if (!nome || !email || !senha || !telefone) {
      return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const [result] = await db.execute(
      'INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?, ?)',
      [nome, email, senhaHash, telefone]
    );

    const token = jwt.sign(
      { id: result.insertId },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso.',
      token,
      usuario: { id: result.insertId, nome, email }
    });
  } catch (error) {
    console.error('Erro cadastro:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ erro: 'Este e-mail já está cadastrado.' });
    }
    if (error.code === 'ECONNREFUSED') {
      return res.status(503).json({ erro: 'Banco de dados indisponível.' });
    }
    res.status(500).json({ erro: error.message || 'Erro ao cadastrar usuário.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: 'E-mail e senha são obrigatórios.' });
    }

    const [rows] = await db.execute(
      'SELECT id, nome, email, senha FROM usuarios WHERE email = ? AND ativo = 1',
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
    }

    const usuario = rows[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
    }

    const token = jwt.sign(
      { id: usuario.id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      mensagem: 'Login realizado com sucesso.',
      token,
      usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao fazer login.' });
  }
});

export default router;
