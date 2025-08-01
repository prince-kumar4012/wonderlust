const Joi = require("joi");
const review = require("./models/review");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.string().required().min(0),
        image: Joi.string().allow("",null),
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});

// const joi = require("joi");

// module.exports.listingSchema = joi.object({
//     listing: joi.object({
//         title: joi.string().required(),
//         description: joi.string().required(),
//         image: joi.string().allow(""),
//         price: joi.number().required().min(0),
//         country: joi.string().required(),
//         location: joi.string().required()
//     }).required()
// });
