const mongoose = require('mongoose');
const { Schema } = mongoose;
const ReviewSchema = new Schema({
    //Ref model
    movie:{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    rating:Number,
    review:String,
})
const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;