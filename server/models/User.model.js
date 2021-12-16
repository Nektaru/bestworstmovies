const { Schema, model} = require("mongoose");

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

    firstname: String,

    lastname: String,

    films: {
        fav: [{
            type: Schema.Types.ObjectId,
            ref: 'Film'
        }],
        viewed: [{
            type: Schema.Types.ObjectId,
            ref: 'Film',
            unique: true,
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

