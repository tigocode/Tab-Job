const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (request, file, cb) => {
      crypto.randomBytes(6, (err, hash) => {
        if(err) cb(err)

        file.key = `${hash.toString('HEX')}-${file.originalname}`

        cb(null, file.key)
      })
    }
  }),
  limits: {
    fileSize: 2 * 15024 * 15024
  },
  fileFilter: (request, file, cb) => {
    const allwedMimesTypes = {
      type: [
        'application/vnd.ms-excel',
        'application/msexcel',
        'application/x-msexcel',
        'application/x-ms-excel',
        'application/x-excel',
        'application/x-dos_ms_excel',
        'application/xls',
        'application/x-xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ]
    }

    if(allwedMimesTypes) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type. Try again.'))
    }
  }
}