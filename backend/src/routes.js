const express = require('express');

const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.delete('/ongs/:id', ongController.delete)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', incidentController.index)
routes.get('/teste', incidentController.teste)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)


module.exports = routes;