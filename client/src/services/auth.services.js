import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api',
      withCredentials: true
    })
  }

  signup = (data) => this.app.post("/signup", data)
  login = (data) => this.app.post("/login", data)
  logout = () => this.app.get("/logout")
  isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService