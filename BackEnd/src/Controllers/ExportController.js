const connection = require('../database/connection')
const csv = require('fast-csv')
const { format } = require('@fast-csv/format')

const fs = require('fs')
const path = require('path')

module.exports = {

  async Export(request, response) {

    const { tableDB } = request.body
    const ws = fs.createWriteStream(path.resolve(__dirname, '..', '..', 'tmp', 'uploads', 'parse.csv'))
    
    const queryExport = await connection(`${tableDB}`)
    .select('*')
    
    queryExport.map(async function(item) {
      csv.write([
        Object.keys(item),
        Object.values(item),
      ], {
        headers: true,
        delimiter: ';',
        quote: '"',
        quoteHeaders: true,
        writeHeaders: true,
      })
      .pipe(ws)
    })
    
    return response.json(queryExport)

  }

}