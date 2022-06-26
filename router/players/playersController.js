const PlayerModel= require('../../PlayerModel');

module.exports = {
    //Get all player
    getPlayersList(req, res, next) {
        PlayerModel.find({}, function(err, data) {
            if(err) {
                res.status(err.status).send({message: `${err.message}`});
            } else {
                res.status(200).send(data);
            }
        });
    },
    getPlayersListById(req, res) {
        const playerSelector = req.params.playerId;
        PlayerModel.find({_id: playerSelector}, function(err, data) {
            if(err) {
                res.status(err.status).send({message: `${err.message}`});
            } else {
                res.status(200).send(data);
            }
        });
    },
    setPlayersList(req, res) {
        const playerData = req.body;
        const newPlayerInstance = new PlayerModel({
            name: playerData.name,
            country: playerData.country,
            jerseyNumber: playerData.jerseyNumber
        });
        newPlayerInstance.save(function(err, data) {
            if(err) {
                res.status(err.status).send({message: `${err.message}`});
            } else {
                const success = "player saved succesfully"
                res.status(200).send({success});
            }
        });
    },
    removePlayer(req, res) {
        const playerId = req.body.id;
        PlayerModel.deleteOne({_id:playerId}, function(err, data) {
            if(err) {
                res.status(err.status).send({message: `${err.message}`});
            } else {
                const success = "player deleted"
                res.status(200).send({success});
            }
        });       
    },
    patchPlayersList(req, res) {
        const updatePlayerData = req.body;
        const selector = req.params.playerId;
        PlayerModel.findOneAndUpdate({_id: selector}, updatePlayerData, function(err, data) {
            if(err) {
                res.status(err.status).send({message: `${err.message}`});
            } else {
                const success = "player record updated"
                res.status(200).send({success});
            }
        });
    }
}