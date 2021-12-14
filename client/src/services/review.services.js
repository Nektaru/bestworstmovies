import axios from 'axios'

class ReviewService {

  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/reviews',
      withCredentials: true
    })
  }

  getAllReviews = () => this.app.get("/allReviews")
  getOneReview = (id) => this.app.get(`/reviews/${id}`)
  getAllMovieReviews = (id) => this.app.get(`/allMovieReviews/${id}`)
  getAllUserReviews = (id) => this.app.get(`/allUserReviews/${id}`)
  createReview = (reviewData) => this.app.post("/newReview", reviewData)
  
}

export default ReviewService;