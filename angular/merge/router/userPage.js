module.exports = function(app, mysqlClient, passport, session)
{
	app.get('/userPage', function(req, res){
		res.render('userPage/userPage.html', {
			console.log(req.session);
			session: req.session
		});
	});
	app.get('/getuser', function(req, res){
		mysqlClient.query('select * from user where userID = ?',[req.session.userID], function(error, result){
			if(error){
				console.log('server error');
			}else{
				res.json(result);
			}
		});
	});
	app.get('/getboards', function(req, res){
		mysqlClient.query('select * from board where admin_id = ?', [req.session.id], function(error, result){
			if(error){
				console.log('server error');
			}else{
				res.json(result);
			}
		});
	});
}


