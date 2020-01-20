const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

// index, show, store, update, destroy

// dev crud
routes.post('/devs',    DevController.store);
routes.get('/devs',     DevController.index);
routes.put('/devs',     DevController.update);
routes.delete('/devs/:github_username',  DevController.destroy); 

// search
routes.get('/search',   SearchController.index);

module.exports = routes;