const connection = require('../database/connection')

module.exports = {

  async Index(request, response) {

    const { page = 1 } = request.query

    const [count] = await connection('devoluction').count()

    const devoluction = await connection('devoluction')
    .join('user', 'user.id', '=', 'devoluction.user_id')
      .limit(5)
      .offset((page - 1 ) * 5)
      .select([
        'devoluction.*',
        'user.name'
      ])
    
      response.header('X-Total-Count', count['count(*)'])
    
      return response.json(devoluction)
  },

  async Create(request, response) {

    const { cod_sap, type, type_paddle, model, quantity_boxes, 
            value_devoluction, profile_client, number_new_request,
            value_new_request, difference_value, reason, Note,
            date_solicitation, last_devoluction, status, cic, cic_Note } = request.body
            
    const user_id = request.headers.authorization

    const [id] = await connection('devoluction').insert({
      cod_sap,
      type,
      type_paddle,
      model,
      quantity_boxes,
      value_devoluction,
      profile_client,
      number_new_request,
      value_new_request,
      difference_value,
      reason,
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
    const user_id  = request.headers.authorization
    
    const { cod_sap, type, type_paddle, model, quantity_boxes, 
      value_devoluction, profile_client, number_new_request,
      value_new_request, difference_value, reason, Note } = request.body
      
    const devoluctionSelectId = await connection('devoluction')
      .where('id', id)
      .select('user_id')
      .first()
    
    if (devoluctionSelectId.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permitted.' })
    }
    
    const devoluction = await connection('devoluction')
      .where('id', id)
      .select('devoluction.*')

    await connection('devoluction').where(`id`, id).update({
      cod_sap,
      type,
      type_paddle,
      model,
      quantity_boxes,
      value_devoluction,
      profile_client,
      number_new_request,
      value_new_request,
      difference_value,
      reason,
      Note,        
    })
    
    return response.json(devoluction)
  }
}