/**
 * Serviço de busca de endereço por CEP (ViaCEP)
 */

export async function buscarEnderecoPorCep(cep) {
  const cepLimpo = String(cep).replace(/\D/g, '')

  if (cepLimpo.length !== 8) {
    throw new Error('Digite um CEP válido com 8 números.')
  }

  const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
  const data = await response.json()

  if (data.erro) {
    throw new Error('CEP não encontrado.')
  }

  return {
    cep: data.cep || '',
    logradouro: data.logradouro || '',
    bairro: data.bairro || '',
    localidade: data.localidade || '',
    uf: data.uf || '',
  }
}
