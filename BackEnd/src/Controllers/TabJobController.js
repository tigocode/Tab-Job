const connection = require('../database/connection')

module.exports = {

  async Index(request, response) {

    const { page = 1 } = request.query

    const [count] = await connection('tab_job').count()

    const tab_job = await connection('tab_job')
    .join('user', 'user.id', '=', 'tab_job.user_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'tab_job.*',
        'user.name'
      ])
    
    response.header('X-Total-Count', count['count(*)'])
    
    return response.json(tab_job)
  },
  
  async Create(request, response) {

    const { status, sap, n_pedido, 
            qtd_caixas, valor } = request.body
            
    const user_id = request.headers.authorization

    const [id] = await connection('tab_job').insert({
      status,
      sap,
      n_pedido,
      qtd_caixas,
      valor,
      user_id,
    })

    return response.json({ id })

  },
  
  async Update(request, response) {

    const { id } = request.params
    const user_id = request.headers.authorization

    const { status, sap, n_pedido, 
      qtd_caixas, valor } = request.body

      const tab_jobSelectId = await connection('devoluction')
      .where('id', id)
      .select('user_id')
      .first()
    
    if (tab_jobSelectId.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permitted.' })
    }

    const tab_job = await connection('tab_job')
      .where('id', id)
      .select('tab_job.*')

    await connection('tab_job').where('id', id).update({
      status,
      sap,
      n_pedido,
      qtd_caixas,
      valor,
    })

    return response.json(tab_job)
  },

  async Delete(request, response) {

    const { id } = request.params
    const user_id = request.headers.authorization

    const tab_job = await connection('tab_job')
      .where('id', id)
      .select('user_id')
      .first()

    if (tab_job.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permitted.'})
    }

    await connection('tab_job').where('id', id).delete()

    return response.status(204).send()
  }
}