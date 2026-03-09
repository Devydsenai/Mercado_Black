const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

async function request(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  }

  const res = await fetch(url, config)
  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    const msg = data?.erro || `Erro na requisição (${res.status})`
    console.error('[API]', res.status, url, data)
    throw new Error(msg)
  }

  return data
}

export const api = {
  async login(email, senha) {
    return request('/api/usuarios/login', {
      method: 'POST',
      body: JSON.stringify({ email, senha }),
    })
  },

  async cadastro(nome, email, senha, telefone) {
    return request('/api/usuarios/cadastro', {
      method: 'POST',
      body: JSON.stringify({ nome, email, senha, telefone }),
    })
  },

  async listarProdutos() {
    return request('/api/produtos')
  },

  async buscarProduto(id) {
    return request(`/api/produtos/${id}`)
  },

  async criarProduto(dados, token) {
    return request('/api/produtos', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(dados),
    })
  },

  async atualizarProduto(id, dados, token) {
    return request(`/api/produtos/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(dados),
    })
  },

  async excluirProduto(id, token) {
    return request(`/api/produtos/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}
