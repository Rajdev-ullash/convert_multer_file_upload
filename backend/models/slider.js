const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    
    createdAt: {
        type: Date,
        default: Date.now
    }

})

//if u confused in database name 👇👇👇 'sliders' convert on your database
module.exports = mongoose.model('Slider', sliderSchema);