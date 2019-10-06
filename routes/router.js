
module.exports = function(app) {

	app.get('/helloworld2', (request, response) => {
		
		response.render('helloworld2', {path: "helloworld2"});
	});

	app.get('*', (request, response) => {
		
		response.render('helloworld1', {path: "helloworld1"});
	});

	
};
