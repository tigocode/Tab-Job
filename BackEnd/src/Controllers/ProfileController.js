const connection = require('../database/connection')

module.exports = {
  
  async IndexDevoluctionCL(request, response) {

    const user_id = request.headers.authorization
    const { type } = request.body

    const { page = 1 } = request.query

    const devoluction = await connection('devoluction')
      .where('user_id', user_id)
      .where('type', type)
      .limit(5)
      .offset((page - 1 ) * 5)
      .select('*')

      return response.json(devoluction)
  }
}