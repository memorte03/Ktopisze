
module.exports = function(app) {

	app.get('/helloworld2', (req, res) => {
		
		res.render('helloworld2', {path: "helloworld2"});
	});

	app.get('*', (req, res) => {
		
		res.render('helloworld1', {path: "helloworld1"});
	});

	
};
