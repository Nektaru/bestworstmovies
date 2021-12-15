const router = require("express").Router()
const User = require("../models/User.model")
const isLoggedIn = require("../middleware/isLoggedIn")


router.get("/allViewed", (req, res) => {
  User.find()
    .then(allViewed => res.json(allViewed))
    .catch(err => res.json({ err, errMessage: "Viewed movies not found" }))
});


// find all viewed films
router.get("/allViewed/:id", (req, res) => {
    const {id} = req.params

    User.findById(id)
        .populate("films.viewed")
        .then(user => {
            const viewedFilms = user.films.viewed
            res.json(viewedFilms)})
        .catch(err => res.json({ err, errMessage: "Viewed films not found" }))
});

// find user
router.get("/:id", isLoggedIn, (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json({ err, errMessage: "No user found" }))
});


// update user information
router.put("/updateuser/:id", (req, res) => {
  const { id } = req.params
  const userData  = req.body

User.findOneAndUpdate( id, userData, {new:true} )
  .then(updatedUser => res.json(updatedUser))
  .catch(err => res.json({ err, errMessage: "Couldn't update user" }))
})

// TODO termina esta ruta para buscar por id e insertar el viewed al usuario 
router.put("/viewed", (req, res) => {
    const  id  = req.session.currentUser._id;
    const { film } = req.body

  User.findOne({id: filmApiId})
  .then(film => {

  User.findByIdAndUpdate( id, { $push: {"films.viewed": film} })
    .then(updatedUserViewed => res.json(updatedUserViewed))
    .catch(err => res.json({ err, errMessage: "Can't watch this" }))
  })
});

router.put("/remove-viewed/:id", (req, res) => {
  const { id } = req.params
  const { film } = req.body
  console.log(req.body)

User.findByIdAndUpdate( id, { $pull: {"films.viewed": film} })
  .then(updatedUserViewed => res.json(updatedUserViewed))
  .catch(err => res.json({ err, errMessage: "Can't watch this" }))
})

router.delete("/deleteUser/:id", (req, res) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(deletedReviews => res.json({ deletedReviews }))
    .catch(err => res.json({ err, errMessage: "Can't touch this" }))
})

module.exports = router