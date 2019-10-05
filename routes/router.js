var react = require('react');
var path = require('path');
var fs = require('fs');
var reactDOMServer = require('react-dom/server');
var StaticRouter = require('react-router-dom').StaticRouter;

module.exports = function(app) {

	app.get('/helloworld1', (request, response) => {
		
		response.render('helloworld1');
	});

	app.get('/helloworld2', (request, response) => {
		
		response.render('helloworld2');
	});

	app.get('*', (request, response) => {
		
		response.render('helloworld1');
	});

	
};
