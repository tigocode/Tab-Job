const connection = require('../database/connection')

module.exports = {

  async IndexTabJob(request, response) {

    const user_id = request.headers.authorization
    const { type } = request.body

    const { page = 1 } = request.query

    const devoluction = await connection('tab_job')
      .where('user_id', user_id)
      .limit(5)
      .offset((page - 1 ) * 5)
      .select('*')

      return response.json(devoluction)
  },
  
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
  },

  async IndexDevoluctionSL(request, response) {

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
  },

  async IndexPackage(request, response) {

    const user_id = request.headers.authorization

    const { page = 1 } = request.query

    const package = await connection('package')
      .where('user_id', user_id)
      .limit(5)
      .offset((page - 1 ) * 5)
      .select('*')

      return response.json(package)
  },
  
  async IndexExchange(request, response) {

    const user_id = request.headers.authorization

    const { page = 1 } = request.query

    const exchange = await connection('exchange')
      .where('user_id', user_id)
      .limit(5)
      .offset((page - 1 ) * 5)
      .select('*')

      return response.json(exchange)
  }
}