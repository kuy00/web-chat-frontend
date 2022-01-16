import axios from 'axios'
import { notify } from '@kyvg/vue3-notification'

const config = {
  withCredentials: false,
}
const baseUrl = process.env.VUE_APP_API_URL
const http = async function (url, method = 'GET', payload = {}) {
  var result = await axios({
    url: baseUrl + url,
    method: method,
    data: payload,
    config: config,
  })
  .then((res) => {
    return res
  })
  .catch((error) => {
    notify({
      type: 'error',
      text: error.response.data.message,
    })
    return error.response
  })

  return result
}

export default http
