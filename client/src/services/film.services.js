import axios from 'axios'

class FilmService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/films',
      withCredentials: true
    })
  }

  getAllFilms = () => this.app.get("/allFilms")
  getOneFilm = (id) => this.app.get(`/film/${id}`)
  createReview = (filmData) => this.app.post("/newReview", filmData)
}

export default FilmService