var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM owners JOIN pets ON owners.id=pets.owner_id;', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.put('/:id', function(req, res){
	var petId = req.params.id; 
	console.log('put was hit!');
	pool.connect(function(err, db, done){
		if(err) {
			console.log('Error connecting to database', err);
			res.sendStatus(500);
		} else {
			db.query('UPDATE pets SET pet_name=$1, breed=$2, color=$3 WHERE id=$4;', 
							[req.body.pet_name, req.body.breed, req.body.color, petId], 
							function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(200);
				}
			});
		}
	});
});

module.exports = router;