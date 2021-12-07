const { Schema, model} = require("mongose");
//Required, fav list, film object with fav and viewed.
const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true
        },
    password: {
        type: String,
        require: true
    },
    age: Number,
    films: {
        fav: mongoose.ObjectId,
        viewed: ObjectId
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

   module.export = User;

