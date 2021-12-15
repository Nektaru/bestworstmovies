const router = require("express").Router()
const Review = require("../models/Review.model")
const Film = require("../models/Film.model")


router.get("/allReviews", (req, res) => {
  Review.find()
    .then(allReviews => res.json(allReviews))
    .catch(err => res.json({ err, errMessage: "Review not found" }))
});

router.get("/allMovieReviews/:id", (req, res) => {
    const {id} = req.params

    Film.findOne({id})
      .then(film => {

        Review.find({film: film._id})
          .then(allMovieReviews => res.json(allMovieReviews))
          .catch(err => res.json({ err, errMessage: "Reviews not found" }))
      })
      .catch(err => res.json({ err, errMessage: "Film not found" }))
    
});

router.get("/allUserReviews/:id", (req, res) => {
    const {id} = req.params

    Review.find({userId:id})
        .populate("film")
        .then(allUserReviews => {
            console.log(allUserReviews)
            res.json(allUserReviews)})
        .catch(err => res.json({ err, errMessage: "Review not found" }))
});

router.get("/:id", (req, res) => {
  const { id } = req.params

  Review.findById(id)
    .then(theReview => res.json(theReview))
    .catch(err => res.json({ err, errMessage: "No review?" }))
});

router.post("/newReview", (req, res) => {
  const { title, filmApiId, comment } = req.body
  const userId = req.session.currentUser._id

  Film.findOne({id: filmApiId})
      .then(film => {

        Review.create({ userId, title, film: film._id, comment })
          .then(createdReview => {res.json(createdReview)})
          .catch(err => console.log({err, errMEssage: "Can't create"}))
      })
      .catch(err => res.json({ err, errMessage: "Film not found" }))
});

router.delete("/deleteReviews/:id", (req, res) => {
  const { id } = req.params

  Review.findByIdAndDelete(id)
    .then(deletedReviews => res.json({ deletedReviews }))
    .catch(err => res.json({ err, errMessage: "Can't delete film" }))
})


module.exports = router