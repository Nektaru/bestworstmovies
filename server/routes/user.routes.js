const router = require("express").Router()
const User = require("../models/User.model")
const Film = require("../models/Film.model")
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

// adds a movie to the watch list of the user
router.put("/viewed", (req, res) => {
    const id  = req.session.currentUser._id;
    const {filmApiId} = req.body
    
  Film.findOne({id: filmApiId})
  .then(film => {
    User.findByIdAndUpdate( id, { $push: {"films.viewed": film} }, {new:true})
      .populate('films.viewed films.fav')
      .then(updatedUserViewed => res.json(updatedUserViewed))
      .catch(err => res.json({ err, errMessage: "Can't watch this" }))
  })
});

// removes a viewed movie from the user
router.put("/remove-viewed", (req, res) => {
  const id = req.session.currentUser._id
  const { filmApiId } = req.body
  console.log(id, "el del user", filmApiId, "el de la api")
  Film.findOne({id: filmApiId})
  .then(film => {
    console.log('fiiiiiiiiiiiiiilm', film)
    User.findByIdAndUpdate( id, { $pull: {"films.viewed": film._id} }, {new:true})
      .populate('films.viewed films.fav')
      .then(updatedUserViewed => res.json(updatedUserViewed))
      .catch(err => res.json({ err, errMessage: "Can't delete this" }))
})
});

router.delete("/deleteUser/:id", (req, res) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(deletedReviews => res.json({ deletedReviews }))
    .catch(err => res.json({ err, errMessage: "Can't touch this" }))
})

module.exports = router