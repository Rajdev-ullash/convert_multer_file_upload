const express = require('express');
const router = express.Router();



// import controllers

const{logoPost,getAllLogo,getSpecificLogo,updateLogo,deleteLogo} = require('../controllers/logoController');


// import middleware

const {upload} = require('../middlewares/filehelper');


//router

router.route('/logoPost').post(upload.single('file'), logoPost);

router.route('/getAllLogo').get(getAllLogo);

router.route('/getSpecificLogo/:id').get(getSpecificLogo);

router.route('/updateLogo/:id').put(upload.single('file'),updateLogo);

router.route('/deleteLogo/:id').delete(deleteLogo);








module.exports = router;