const express = require('express');
const roomControllers = require('../room/room-controller')

const router = express.Router();
console.log('room', roomControllers.enterRoom);;
router.get('/', roomControllers.enterRoom );

module.exports = router;