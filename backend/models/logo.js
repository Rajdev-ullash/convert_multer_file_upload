const mongoose = require('mongoose');


const logoSchema = mongoose.Schema({
    logo:{
        type: 'String',
    }
},{timeStamp:true})

module.exports = mongoose.model('Logo', logoSchema)