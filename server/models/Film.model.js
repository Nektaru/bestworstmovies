const { Schema, Film} = require("mongoose");

const filmSchema = new Schema(
    {
    title: String,
    poster: Image,
    cast: String,
    rating: String,
    images: String,
    trailer: String,
    pg: Number
   },
   {
   timestamps: true
   }
   );

   const Film = model("Film", filmSchema)

   module.exports = Film;
   