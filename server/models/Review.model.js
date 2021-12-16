const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        title: String,
        film:{
            type: Schema.Types.ObjectId,
            ref: 'Film'
        },
        comment: String,
    },
    {
        timestamps: true
    }
);
const Review = mongoose.model('Review', reviewSchema );
module.exports = Review;