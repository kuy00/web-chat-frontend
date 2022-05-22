import axios from 'axios'
import store from '../store'

const config = {
  withCredentials: false,
}
const http = async function (url, method = 'GET', payload = {}) {
  let result
  await axios({
    url: '/api' + url,
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
