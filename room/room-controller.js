const Room = require('../room/room-model')
const Types = require('mongoose').Types

exports.enterRoom = async (req, res, next)=>{
    let userId = "6347c0d2a34d37e45c70ee4a"
    const userIds = new Types.ObjectId(userId)
    const room = await Room.findOne({_id:"6364ade3bbe49870088b5843", 'users.userId':userIds})
    if (!room) {
        res.json({message:'You are not allowed in this Room!'})
    }
    res.json({message:'Welcome'})
}