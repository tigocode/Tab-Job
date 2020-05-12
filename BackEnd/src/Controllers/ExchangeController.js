const connection = require('../database/connection')

module.exports = {

  async Index(request, response) {

    const { page = 1 } = request.query

    const [count] = await connection('exchange').count()

    const exchange = await connection('exchange')
      .join('user', 'user.id', '=', 'exchange.user_id')
        .limit(5)
        .offset(( page - 1 ) * 5)
        .select([
          'exchange.*',
          'user.name'
        ])

    response.header('X-Total-Count', count['count(*)'])

    return response.json(exchange)
  },

  async Create(request, response) {

    const { cod_sap, type_paddle, model, quantity_boxes, 
            social_reason, Note, date_solicitation, 
            last_devoluction, status, cic, cic_Note } = request.body
      
      const user_id = request.headers.authorization

      const [id] = await connection('exchange').insert({
        cod_sap, 
        type_paddle, 
        model, 
        quantity_boxes, 
        social_reason, 
        Note, 
        date_solicitation, 
        last_devoluction, 
        status, 
        cic, 
        cic_Note,
        user_id,
      })

    return response.json({ id })
  },

  async Update(request, response) {

    const { id } = request.params
    const user_id = request.headers.authorization

    const { 
      cod_sap, type_paddle, model, quantity_boxes, 
      social_reason, Note } = request.body
  
    const exchangeSelectId = await connection('exchange')
      .where('id', id)
      .select('user_id')
      .first()
    
    if (exchangeSelectId.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permitted.'})
    }

    const exchange = await connection('exchange')
      .where('id', id)
      .select('exchange.*')
    
    await connection('exchange').where(`id`, id).update({
      cod_sap, 
      type_paddle, 
      model, 
      quantity_boxes, 
      social_reason, 
      Note,
    })

    return response.json(exchange)
  }
}