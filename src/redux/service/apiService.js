import axios from 'axios'

class ApiService {
  _apiUrl = 'https://jsonplaceholder.typicode.com/users'

  async getUsers() {
    const response = await axios.get(`${this._apiUrl}`)
    return await response.data
  }

  async createUser(data) {
    const response = await axios.post(`${this._apiUrl}`, data)
    return await response.data
  }

  async deleteUser(id) {
    const response = await axios.delete(`${this._apiUrl}/${id}`)
    return await response.data
  }

  async updateUser(obj) {
    const response = await axios.put(`${this._apiUrl}/${obj.id}`, obj.data)
    return await response.data
  }
}

export default ApiService