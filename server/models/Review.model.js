const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema(
    {
        // Varios usuarios pueden comentar una película
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            //unique: true?
        },
        // La valoración se va areferir solo a una película
        film:{
            type: Schema.Types.ObjectId,
            ref: 'Film'
        },
        comment: String,
        //stars:
    },
    {
        timestamps: true
    }
);
const Review = mongoose.model('Review', reviewSchema );
module.exports = Review;