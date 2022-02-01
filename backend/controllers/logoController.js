const mongoose = require('mongoose')

const Logo = require('../models/logo')



//post logo


exports.logoPost = async (req, res) => {
    try {

        const newLogo = new Logo({
            logo: req.file.originalname
        })

        await newLogo.save();

        res.status(200).json({
            message: "Logo Upload Successfully",
            result: newLogo
        })

    }
    catch (err) {
        const data = req.file.path;

        if (data) {
            unlink(data, function (err) {
                if (err) {
                    console.log(err)
                }
            })
        }
        res.status(500).json({
            message: 'Logo Upload Failed',
            error: err.message
        })

    }
}


// get all logos 

exports.getAllLogo = async (req, res) =>{
    try{

        const allLogo = await Logo.find({})

        res.status(200).json({
            message:'All logo successfully found',
            result: allLogo
        })

    }
    catch(err){
        res.status(500).json({
            message: 'Something went wrong',
            error: err.message
        })
    }
}


//get specific logo

exports.getSpecificLogo = async (req, res) =>{
    try{

        const specificLogo = await Logo.find({_id:req.params.id})

        res.status(200).json({
            message: 'Logo successfully found',
            result: specificLogo
        })

    }
    catch(err){
        res.status(500).json({
            message:'Logo not found',
            result: err.message
        })
    }
}


// update logos

exports.updateLogo = async (req, res) =>{

    try{
        const updateLogo = await Logo.findByIdAndUpdate(req.params.id,{
            logo:req.file.originalname
        },{new:true})

        res.status(200).json({
            message:"Logo updated successfully",
            result: updateLogo
        })
    }
    catch(err) {
        const data = req.file.path;

        if (data) {
            unlink(data, function (err) {
                if (err) {
                    console.log(err)
                }
            })
        }
        res.status(500).json({
            message:'Something went wrong.Logo not updated',
            result: err.message
        })

    }
}


//delete logos

exports.deleteLogo = async (req, res) =>{
    try {
        const deleteProduct = await Logo.findByIdAndDelete({ _id: req.params.id })

        res.status(200).json({
            message: 'Product deleted successfully'
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
            error: err.message
        })
    }
}