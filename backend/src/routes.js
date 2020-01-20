const {Router} = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
    // Query Params: request.query (Filtros, oredenação, paginação, ...)
    // Route Params: request.params (Identificar um recurso na alteração(PUT) ou remoção(DELETE))
    // Body: request.body (Dados para criação(POST) ou alteração(PUT) de um registro)

// MongoDB (Não-relacional)
routes.get('/devs', DevController.index);
routes.post('/devs',  DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;