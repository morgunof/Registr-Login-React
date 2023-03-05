import axios from "axios"
import { generateToken } from '../utils/generateToken'

export class AuthService {

  static baseUrl = 'https://63ed1d643d9c852c3f565970.mockapi.io/users'

  static async registration(user) {
    const token = generateToken()
    const postData = {...user, token}
    const { data } = await axios.post(this.baseUrl, postData) 

    return data
  }

  static async login (user) {
    const users = await this.getAllUsers()

    const findUser = users.find(u => u.email === user.email && u.password === user.password)

    return findUser
  }

  static async getAllUsers() {
    const { data } = await axios.get(this.baseUrl)

    return data
  }
}
