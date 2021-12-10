const { Schema, model} = require("mongoose");
//Required, fav list, film object with fav and viewed.
const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true
        },
    password: {
        type: String,
        require: true
    },
    age: Number,
    films: {
        fav: [{
            type: Schema.Types.ObjectId,
            ref: 'Film'
        }],
        viewed: [{
            type: Schema.Types.ObjectId,
            ref: 'Film'
        }]
    },
    role: {
        require: true,
        type: String,
        enum: ['BASIC', 'MODERATOR'],
        default: 'BASIC'
        },
    },
   {
   timestamps: true
   }
   );

   const User = model("User", userSchema)

   module.exports = User;

