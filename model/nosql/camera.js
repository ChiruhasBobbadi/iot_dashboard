
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const camera = new Schema({

    id:{
        type:Schema.Types.String,
        required:true
    },
    user_id:{
        type:Schema.Types.Number,
        required:true
    },
    status:{
        type:Schema.Types.Boolean,
        required:true
    }, activeTime:{
        type:Schema.Types.Date,
        required:true,
    }

    });

module.exports = mongoose.model('cameras', camera);