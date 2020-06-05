const connection = require('../database/connection')

module.exports = {

  async Index(request, response) {
    
    const { page = 1 } = request.query

    const [count] = await connection('package').count()

    const package = await connection('package')
      .join('user', 'user.id', '=', 'package.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
          'package.*',
          'user.name'
        ])

    response.header('X-Total-Count', count['count(*)'])

    return response.json(package)
  },

  async Create(request, response) {

    const { cod_sap, social_reason, 
            model, quantity_boxes, 
            discount, Form_of_payment } = request.body
    
    const user_id = request.headers.authorization

    const [id] = await connection('package').insert({
      cod_sap,
      social_reason,
      model,
      quantity_boxes,
      discount,
      Form_of_payment,
      user_id,
    })

    return response.json({ id })
  },

  async Update(request, response) {
    const { id } = request.params
    const user_id = request.headers.authorization

    const { cod_sap, social_reason, 
      model, quantity_boxes, 
      discount, Form_of_payment } = request.body
    
    const packageSelectId = await connection('package')
      .where('id', id)
      .select('user_id')
      .first()

    if (packageSelectId.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permitted.' })
    }

    const package = await connection('package')
      .where('id', id)
      .select('package.*')

    await connection('package').where(`id`, id).update({
      cod_sap,
      social_reason,
      model,
      quantity_boxes,
      discount,
      Form_of_payment,
    })

    return response.json(package)
  },

  async delete(request, response) {

    const { id } = request.params
    const user_id = request.headers.authorization

    const package = await connection('package')
      .where('id', id)
      .select('user_id')
      .first()

    if (package.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permitted.' })
    }

    await connection('package').where('id', id).delete()

    return response.status(204).send()
      
  }
}