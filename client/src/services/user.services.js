import axios from 'axios'

class UserServices {

  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/user',
      withCredentials: true
    })
  }

  getAllReviews = () => this.app.get("/allReviews")
  getOneReview = (id) => this.app.get(`/reviews/${id}`)
  getAllMovieReviews = (id) => this.app.get(`/allMovieReviews/${id}`)
  getAllUserReviews = (id) => this.app.get(`/allUserReviews/${id}`)
  createReview = (reviewData) => this.app.post("/newReview", reviewData)
  
}

export default UserServices;