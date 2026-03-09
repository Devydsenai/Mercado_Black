/**
 * Rotas de produtos: CRUD
 * Listar: GET /api/produtos
 * Criar: POST /api/produtos (auth)
 * Atualizar: PUT /api/produtos/:id (auth)
 * Excluir: DELETE /api/produtos/:id (auth)
 */
import express from 'express';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

const router = express.Router();

// Middleware para verificar token
function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuarioId = decoded.id;
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido ou expirado.' });
  }
}

// Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT p.*, u.nome AS usuario_nome FROM produtos p LEFT JOIN usuarios u ON p.usuario_id = u.id WHERE p.ativo = 1'
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar produtos.' });
  }
});

// Buscar produto por ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT p.*, u.nome AS usuario_nome FROM produtos p LEFT JOIN usuarios u ON p.usuario_id = u.id WHERE p.id = ? AND p.ativo = 1',
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar produto.' });
  }
});

// Criar produto (requer autenticação)
router.post('/', verificarToken, async (req, res) => {
  try {
    const body = req.body || {};
    const { nome, descricao, preco, estoque, categoria_id, imagem } = body;

    if (Object.keys(body).length === 0) {
      return res.status(400).json({ erro: 'Corpo da requisição vazio. Envie nome, preco, etc.' });
    }

    const nomeValido = nome != null && String(nome).trim();
    const precoNum = Number(preco);
    const precoValido = !isNaN(precoNum) && precoNum >= 0;

    if (!nomeValido) {
      return res.status(400).json({ erro: 'Nome do produto é obrigatório.' });
    }
    if (!precoValido) {
      return res.status(400).json({ erro: 'Preço deve ser um número válido (0 ou maior).' });
    }

    const [result] = await db.execute(
      'INSERT INTO produtos (nome, descricao, preco, estoque, categoria_id, imagem, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        nomeValido.trim(),
        (descricao && String(descricao).trim()) || null,
        precoNum,
        estoque ?? 0,
        categoria_id || null,
        imagem || null,
        req.usuarioId
      ]
    );

    res.status(201).json({
      mensagem: 'Produto cadastrado com sucesso.',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao cadastrar produto.' });
  }
});

// Atualizar produto (requer autenticação)
router.put('/:id', verificarToken, async (req, res) => {
  try {
    const { nome, descricao, preco, estoque, categoria_id, imagem } = req.body;

    const [result] = await db.execute(
      `UPDATE produtos SET 
        nome = COALESCE(?, nome),
        descricao = COALESCE(?, descricao),
        preco = COALESCE(?, preco),
        estoque = COALESCE(?, estoque),
        categoria_id = COALESCE(?, categoria_id),
        imagem = COALESCE(?, imagem)
      WHERE id = ? AND usuario_id = ?`,
      [nome, descricao, preco, estoque, categoria_id, imagem, req.params.id, req.usuarioId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado ou sem permissão.' });
    }

    res.json({ mensagem: 'Produto atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar produto.' });
  }
});

// Excluir produto (requer autenticação - exclusão lógica)
router.delete('/:id', verificarToken, async (req, res) => {
  try {
    const [result] = await db.execute(
      'UPDATE produtos SET ativo = 0 WHERE id = ? AND usuario_id = ?',
      [req.params.id, req.usuarioId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Produto não encontrado ou sem permissão.' });
    }

    res.json({ mensagem: 'Produto excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao excluir produto.' });
  }
});

export default router;
