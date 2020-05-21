const generateUniqueId = require('../Utils/generateUniqueId')
const crypto = require('crypto')
const connection = require('../database/connection')


module.exports = {
  async Index(request, response) {
    const user = await connection('user').select('*')

    return response.json(user)
  },

  async Create(request, response) {
    const { name, email, avatar, password, cpf, contact, cell_phone, provider } = request.body

    const hash = crypto.createHash('md5').update(password).digest('HEX')

    const password_hash = hash

    const id = generateUniqueId()
    
    await connection('user').insert({
      id,
      name,
      email,
      avatar,
      password_hash,
      cpf,
      contact,
      cell_phone,
      provider,
    })

    return response.json({ id })
  }
}