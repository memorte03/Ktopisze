
module.exports = function(app) {

	app.get('/helloworld1', (req,res) => {

		res.render('base');
	});

	app.get('/index', (req, res) => {
		
		res.render('base');
	});

	app.get('*', (req, res) => {
		
		res.redirect('index');
	});

	
};
