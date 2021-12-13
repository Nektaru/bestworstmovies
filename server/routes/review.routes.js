const router = require("express").Router()
const Review = require("../models/Review.model")


router.get("/allReviews", (req, res) => {
  Review.find()
    .then(allReviews => res.json(allReviews))
    .catch(err => res.json({ err, errMessage: "Review not found" }))
});

router.get("/allMovieReviews/:id", (req, res) => {
    const {id} = req.params

    Review.find({film:id})
      .then(allMovieReviews => res.json(allMovieReviews))
      .catch(err => res.json({ err, errMessage: "Review not found" }))
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
  const { userId, film, comment } = req.body

  Review.create({ userId, film, comment })
    .then(createdReview => {res.json(createdReview)})
    .catch(err => console.log({err, errMEssage: "Can't create"}))
});


//SOLO PARA MODERADORES

/* router.put(  "/editFilm/:id", (req, res) => {
  const { id } = req.params
  const { title, poster, cast, rating, images, trailer } = req.body

  Review.findByIdAndUpdate(id, { title, poster, cast, rating, images, trailer }, { new: true })
    .then(updatedFilm => res.json(updatedFilm))
    .catch(err => res.json({ err, errMessage: "Problema editando Review" }))
}) */

router.delete("/deleteReviews/:id", (req, res) => {
  const { id } = req.params

  Review.findByIdAndDelete(id)
    .then(deletedReviews => res.json({ deletedReviews }))
    .catch(err => res.json({ err, errMessage: "Can't delete film" }))
})

module.exports = router