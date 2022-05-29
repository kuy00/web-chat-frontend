import Echo from 'laravel-echo'
import store from '../store'

class Socket {
  socket = Object

  connect () {
    this.socket = new Echo({
      broadcaster: 'socket.io',
      host: 'http://127.0.0.1:6001',
      auth: {
        headers: {
          Authorization: store.getters.getToken,
        },
      },
    })
  }
}

export default Socket
