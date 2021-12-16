import axios from 'axios'

class FilmService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/films`,
      withCredentials: true
    })
  }

  getAllFilms = () => this.app.get("/allFilms")
  getOneFilm = (id) => this.app.get(`/film/${id}`)
  createReview = (filmData) => this.app.post("/newReview", filmData)
}

export default FilmService;