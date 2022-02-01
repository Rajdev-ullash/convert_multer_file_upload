const Slider = require('../models/slider');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const cloudinary = require('cloudinary')

// Create A slider
exports.createSlider =catchAsyncErrors( async(req,res,next) => {

    let images = []
    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'sliders'
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.images = imagesLinks

    req.body.user = req.user.id;

    const slider = await Slider.create(req.body); 

    res.status(201).json({
        success: true,
        slider
    })
})

// Get all products => /api/v1/products?keyword=apple
exports.getSlider = catchAsyncErrors( async (req, res, next) => {

    // let slider = await apiFeatures.query;
    // slider = await apiFeatures.query;

    const slider = await Slider.find(); 


    res.status(200).json({
        success: true,
        // message: 'this route show all slider',
        count: slider.length,
        slider
    })

   
});

// Get all slider by ( admin On dashboard 😊😊 only for admin) => /api/v1/admin/slider
exports.getAdminSlider = catchAsyncErrors( async (req, res, next) => {

    const slider = await Slider.find()

    res.status(200).json({
        success: true,
        slider
    })

   
});

// Update Slider  => /api/v1/admin/slider/:id
exports.updateSlider = catchAsyncErrors( async (req, res, next) => {

    let slider = await Slider.findById(req.params.id);

    // let images = []
    // if (typeof req.body.images === 'string') {
    //     images.push(req.body.images)
    // } else {
    //     images = req.body.images
    // }

    // if (images !== undefined) {

    //     // Deleting images associated with the slider
    //     for (let i = 0; i < slider.images.length; i++) {
    //         const result = await cloudinary.v2.uploader.destroy(slider.images[i].public_id)
    //     }

    //     let imagesLinks = [];

    //     for (let i = 0; i < images.length; i++) {
    //         const result = await cloudinary.v2.uploader.upload(images[i], {
    //             folder: 'sliders'
    //         });

    //         imagesLinks.push({
    //             public_id: result.public_id,
    //             url: result.secure_url
    //         })
    //     }

    //     req.body.images = imagesLinks

    // }


    if (!slider) {
        return next( new ErrorHandler('slider not found' , 404))
    };

    slider = await Slider.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        slider
    })

});

// Delete Slider  => /api/v1/admin/slider/:id
exports.deleteSlider = catchAsyncErrors( async (req, res, next) => {

  
    let slider = await Slider.findById(req.params.id);

    if (!slider) {
        return res.status(400).json({
            success : false,
            message : 'slider not found'
        })
    };

    // Deleting images associated with the slider
    for (let i = 0; i < slider.images.length; i++) {
        const result = await cloudinary.v2.uploader.destroy(slider.images[i].public_id)
    }

    await slider.remove();

    res.status(200).json({
        success: true,
        message: 'slider is deleted.'
    })

});