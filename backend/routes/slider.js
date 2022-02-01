const express = require('express');
const router = express.Router();

const {createSlider, getSlider, updateSlider, deleteSlider, getAdminSlider} = require('../controllers/sliderController')

const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');


router.route('/admin/slider/new').post( isAuthenticatedUser, authorizeRoles('admin'), createSlider );

router.route('/slider').get(getSlider);
router.route('/admin/sliders/').get(getAdminSlider);
router.route('/admin/slider/:id')
            .put(isAuthenticatedUser, updateSlider)
            .delete(isAuthenticatedUser, deleteSlider);


module.exports = router;


