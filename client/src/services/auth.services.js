import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    })
  }

  signup = (data) => this.app.post("/signup", data)
  login = (data) => this.app.post("/login", data)
  logout = () => this.app.get("/logout")
  isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService