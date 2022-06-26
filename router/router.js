const express = require('express');
const router = express.Router()
const PlayersController = require('./players/playersController');


router.get('/api/players', PlayersController.getPlayersList);
router.get('/api/players/:playerId', PlayersController.getPlayersListById);
router.post('/api/players', PlayersController.setPlayersList);
router.delete('/api/players', PlayersController.removePlayer);
router.put('/api/players/:playerId', PlayersController.patchPlayersList);

module.exports = router;