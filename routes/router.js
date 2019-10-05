var react = require('react');
var path = require('path');
var fs = require('fs');
var reactDOMServer = require('react-dom/server');
var StaticRouter = require('react-router-dom').StaticRouter;

module.exports = function(app) {

	app.get('/login', (request, response) => {
		
		response.render('login');
	});

	app.get('/mainPage', (request, response) => {
		
		response.render('mainPage');
	});

	app.get('*', (request, response) => {
		
		response.render('login');
	});

	
};
