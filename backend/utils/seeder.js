const Product = require('../models/product');
const Slider = require('../models/slider');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');
const slider = require('../data/slider');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = async () => {
    try {

        await Product.deleteMany();
        await Slider.deleteMany();
        console.log('Products and slider are deleted');

        await Product.insertMany(products)
        await Slider.insertMany(slider)
        console.log('All Products and slider are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();