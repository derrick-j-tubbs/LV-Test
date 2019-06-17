const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const gameRoutes = express.Router();
const PORT = 4000;

let Game = require('./models/game.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/games', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");    
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

gameRoutes.route('/').get(function(req, res) {
    Game.find(function(err, games) {
        if (err) {
            console.log(err);
        } else {
            res.json(games);
        }
    });
});

gameRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Game.findById(id, function(err, game) {
        res.json(game);
    });
});

gameRoutes.route('/add').post(function(req, res) {
    let game = new Game(req.body);
    game.save()
        .then(game=> {
            res.status(200).json({'game': 'game added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new game failed');
        });
});

gameRoutes.route('/update/:id').post(function(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (!game) {
            res.status(404).send("Game not found");
        } else {
            game.game_title = req.body.game_title;
            game.game_console = req.body.game_console;

            game.save().then(game => {
                res.json('Game updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

gameRoutes.route('/delete/:id').post(function(req, res) {
    Game.findByIdAndDelete(req.params.id, function(err, game) {
        if (!game) {
            res.status(404).send("Game not found");
        } else {
            res.json('Game deleted!');
        }
    })
});

app.use('/games', gameRoutes)