const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    // Development error || 'npm run dev" || ========>
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        // console.log(err);

        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    // Production error || "npm run pro" || =========>
    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err }

        error.message = err.message;

        // Wrong Mongoose Object ID error "Cast Error" ====>
        if(err.name === "CastError") {
            const message = `Resource not found. Invalid : ${err.path}`;
            error = new ErrorHandler(message, 400);
        }

        // Handeling Mongoose validation error also err nam "ValidatorError"
        if(err.name === 'ValidatorError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }

        // Handeling mongoose duplicate email error with "code": 11000
        if(err.code === 11000) {
            const message = `Dublicate ${Object.keys(err.keyValue)} entered`;
            error = new ErrorHandler(message, 400);
        };

        // Handeling JWT Wrong token error name "JsonWebTokenError"
        if(err.name === 'JsonWebTokenError') {
            const message = `JSON Web Token is invalid. Try Again !!! :(`;
            error = new ErrorHandler(message, 400);
        };

        // Handeling JWT expired token error name "TokenExpiredError"
        if(err.name === 'TokenExpiredError') {
            const message = `JSON Web Token is expired. Try Again !!! :(`;
            error = new ErrorHandler(message, 400);
        };


        res.status(error.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })
    }

}