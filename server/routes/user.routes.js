const router = require("express").Router()
const User = require("../models/User.model")


router.get("/allViewed", (req, res) => {
  User.find()
    .then(allViewed => res.json(allViewed))
    .catch(err => res.json({ err, errMessage: "Viewed movies not found" }))
});

// router.get("/allMovieViewed/:id", (req, res) => {
//     const {id} = req.params

//     User.find({film:id})
//       .then(allMovieReviews => res.json(allMovieReviews))
//       .catch(err => res.json({ err, errMessage: "User not found" }))
// });

router.get("/allViewed/:id", (req, res) => {
    const {id} = req.params

    User.findById(id)
        .populate("films.viewed")
        .then(user => {
            const viewedFilms = user.films.viewed
            res.json(viewedFilms)})
        .catch(err => res.json({ err, errMessage: "Viewed films not found" }))
});

router.get("/:id", (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then(oneViewed => res.json(oneViewed))
    .catch(err => res.json({ err, errMessage: "Haven't watched anything" }))
});

// router.post("/viewed", (req, res) => {
//   const { userId, film } = req.body
//    // {films: {$push: {viewed: film}}}
   
//   User.create({ userId, $push: {"films.viewed": film }})
//     .then(userViewed => {res.json(userViewed)})
//     .catch(err => console.log({err, errMEssage: "Can't create a viewed"}))
// });

router.put("/viewed/:id", (req, res) => {
    const { id } = req.params
    const { film } = req.body
    console.log(req.body)

  User.findByIdAndUpdate( id, { $push: {"films.viewed": film} })
    .then(updatedUserViewed => res.json(updatedUserViewed))
    .catch(err => res.json({ err, errMessage: "Can't watch this" }))
})

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