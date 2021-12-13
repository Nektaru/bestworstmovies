const { Schema, model} = require("mongoose");

const filmSchema = new Schema(
    {
    title: String,
    original_title: String,
    id: Number,
    adult: Boolean,
    poster_path: String,
    backdrop_path: String,
    genre_ids: Number,
    cast: String,
    vote_average: Number,
    vote_count: Number,
    overview: String,
   },
   {
   timestamps: true
   }
   );

   const Film = model("Film", filmSchema)

   module.exports = Film;
   