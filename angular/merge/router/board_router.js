module.exports = function(app, mysqlClient, passport)
{
	app.get('/board/:id', function(req, res){
		res.render('board.html');
	});
}