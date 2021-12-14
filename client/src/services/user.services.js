import axios from 'axios'

class UserServices {

  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/users',
      withCredentials: true
    })
  }

  getAllViewed = (id) => this.app.get(`/allViewed/${id}`)
  createViewed = (id, viewedData) => this.app.put(`/viewed/${id}`, viewedData)

//   getAllReviews = () => this.app.get("/allReviews")
//   getOneReview = (id) => this.app.get(`/reviews/${id}`)
//   getAllMovieReviews = (id) => this.app.get(`/allMovieReviews/${id}`)
//   getAllUserReviews = (id) => this.app.get(`/allUserReviews/${id}`)
//   createReview = (reviewData) => this.app.post("/newReview", reviewData)
  
}

export default UserServices;