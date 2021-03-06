const router = require("express").Router()
const Film = require("../models/Film.model")


router.get("/allFilms", (req, res) => {
  Film.find()
    .then(allFilms => res.json(allFilms))
    .catch(err => res.json({ err, errMessage: "Películas not found" }))
})

router.get("/:id", (req, res) => {
  const { id } = req.params

  Film.findById(id)
    .then(theFilm => res.json(theFilm))
    .catch(err => res.json({ err, errMessage: "¿Existe esa película?" }))
})

router.delete("/deleteFilms/:id", (req, res) => {
  const { id } = req.params

  Film.findByIdAndDelete(id)
    .then(deletedFilms => res.json({ deletedFilms }))
    .catch(err => res.json({ err, errMessage: "Problema borrando Films" }))
})

module.exports = router