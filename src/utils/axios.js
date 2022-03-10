import axios from 'axios'
import store from '../store'

const config = {
  withCredentials: false,
}
const baseUrl = process.env.VUE_APP_API_URL
const http = async function (url, method = 'GET', payload = {}) {
  let result
  await axios({
    url: baseUrl + url,
    method: method,
    data: payload,
    config: config,
    headers: {
      Authorization: store.getters.getToken,
    },
  }).then((res) => {
    result = res
  }).catch((error) => {
    result = error.response
  })

  return result
}

export default http
