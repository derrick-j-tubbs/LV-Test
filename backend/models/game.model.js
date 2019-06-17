const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    game_title: {
        type: String
    },
    game_console: {
        type: String
    }
});

module.exports = mongoose.model('Game', Game);