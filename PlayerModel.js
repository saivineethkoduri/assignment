const mongoose = require('mongoose');
//Players schema
const playersSchema = { name: 'string', country:'string', jerseyNumber:'number' };
//Model declaration
const PlayerModel = mongoose.model('players', playersSchema);

//Export Member
module.exports = PlayerModel;
