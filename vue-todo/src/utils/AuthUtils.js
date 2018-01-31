import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

export default {login}

function login (email, password) {
  const url = `${BASE_URL}/api/auth/login`
  return axios.post(url, {
    email,
    password
  })
    .then(response => response.data)
    .then(data => {
      console.log(data)
    })
}
