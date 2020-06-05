const express = require('express')

const UserController = require('./Controllers/UserController')
const DevoluctionController = require('./Controllers/DevolutionController')
const ExchangeController = require('./Controllers/ExchangeController')
const PackageController = require('./Controllers/PackageController')

const TabJobController = require('./Controllers/TabJobController')

const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')

const routes = express.Router()

routes.post('/session', SessionController.Create)

routes.get('/profileTabJob', ProfileController.IndexTabJob)

routes.get('/profileDevC', ProfileController.IndexDevoluctionCL)
routes.get('/profileDevS', ProfileController.IndexDevoluctionSL)

routes.get('/profileExchange', ProfileController.IndexExchange)
routes.get('/profilePackage', ProfileController.IndexPackage)

routes.get('/user', UserController.Index)
routes.post('/user', UserController.Create)

routes.get('/devoluction', DevoluctionController.Index)
routes.post('/devoluction', DevoluctionController.Create)
routes.put('/devoluction/:id', DevoluctionController.Update)
routes.delete('/devoluction/:id', DevoluctionController.Delete)

routes.get('/exchange', ExchangeController.Index)
routes.post('/exchange', ExchangeController.Create)
routes.put('/exchange/:id', ExchangeController.Update)
routes.delete('/exchange/:id', ExchangeController.delete)

routes.get('/package', PackageController.Index)
routes.post('/package', PackageController.Create)
routes.put('/package/:id', PackageController.Update)
routes.delete('/package/:id', PackageController.delete)

routes.get('/tabjob', TabJobController.Index)
routes.post('/tabjob', TabJobController.Create)
routes.put('/tabjob/:id', TabJobController.Update)
routes.delete('/tabjob/:id', TabJobController.Delete)

module.exports = routes