const express = require('express');
const router = express.Router();

const {
    getProducts,
    getAdminProducts,
    newProduct,
    getSingleProduct, 
    updateProduct, 
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview,
    getTopProducts
} = require('../controllers/productController');

const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');

const {upload} = require('../middlewares/filehelper')

router.route('/products').get(getProducts);
router.route('/products/top').get(getTopProducts);
router.route('/admin/products').get(getAdminProducts);
router.route('/admin/product/new').post( isAuthenticatedUser,upload.array('files'), authorizeRoles('admin'), newProduct );
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/:id')
            .put(isAuthenticatedUser, updateProduct)
            .delete(isAuthenticatedUser, deleteProduct);


router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews')
            .get(isAuthenticatedUser, getProductReviews)
            .delete(isAuthenticatedUser, deleteReview)


module.exports = router;