const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name:{ type:String, required:true },
    type:{ type:String, required:true },
    interactions:{ type:Array, required:true },
    isOpen:{ type:Boolean, required:true },
    users:{ type:Array, required:true },
    templateId:{ type:String, required:true },
    childRooms:{ type:String, required:true },
    isTemplate:{ type:Boolean, required:true },
    organizationId:{ type:String, required:true },
    
})

module.exports = mongoose.model('Room', roomSchema )