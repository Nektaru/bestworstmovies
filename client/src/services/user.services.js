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
  findUser = (id) => this.app.get(`/${id}`)
  editUser = (id, userData) => this.app.put(`/updateuser/${id}`, userData)

}

export default UserServices;