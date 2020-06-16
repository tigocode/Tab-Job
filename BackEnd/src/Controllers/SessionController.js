const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  
  async Create(request, response) {
    const {id, password} = request.body

    const hash = crypto.createHash('md5').update(password).digest('HEX')

    const password_hash = hash

    const user = await connection('user')
      .where('id', id)
      .where('password_hash', password_hash)
      .select([
        'user.*'
      ])
      .first()
    
    if (!user) {
      return response.status(400).json({ error: 'No USER found with this ID'})
    }

    return response.json(user)
  }
}