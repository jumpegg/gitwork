module.exports = function(app, mysqlClient, passport)
{
	app.get('/board/:id', function(req, res){
		req.session.board_id = req.params.id;
		console.log("board_id is : " + req.session.board_id);
		res.render('board.html');
	});
	app.get('/board/getguest', function(req, res){
		mysqlClient.query('select * from guest where board_id = ?',[req.session.board_id], function(error, result){
			if(error){
				console.log('server error');
			}else{
				res.json(result);
			}
		});
	});
	app.get('/board/getfreetalk', function(req, res){
		mysqlClient.query('select * from freetalk where board_id = ?',[req.session.board_id], function(error, result){
			if(error){
				console.log('server error');
			}else{
				res.json(result);
			}
		});
	});
	app.get('/board/getnotice', function(req, res){
		mysqlClient.query('select * from notice where board_id = ?',[req.session.board_id], function(error, result){
			if(error){
				console.log('server error');
			}else{
				res.json(result);
			}
		});
	});
	app.get('/board/getschedule', function(req, res){
		mysqlClient.query('select * from schedule where board_id = ?',[req.session.board_id], function(error, result){
			if(error){
				console.log('server error');
			}else{
				res.json(result);
			}
		});
	});
	app.get('/board/attendUser', function(req, res){
		mysqlClient.query('select * from attendUser where board_id = ?',[req.session.board_id], function(error, result){
			if(error){
				console.log('server error');
			}else{
				res.json(result);
			}
		});
	});

}