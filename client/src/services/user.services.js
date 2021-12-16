import axios from 'axios'

class UserServices {

  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/users`,
      // baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    })
  }

  getAllViewed = (id) => this.app.get(`/allViewed/${id}`)
  createViewed = (viewedData) => this.app.put(`/viewed`, viewedData)
  removeViewed = (viewedData) => this.app.put(`/remove-viewed`, viewedData)
  findUser = (id) => this.app.get(`/${id}`)
  editUser = (id, userData) => this.app.put(`/updateuser/${id}`, userData)

}

export default UserServices;