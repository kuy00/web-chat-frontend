import Echo from 'laravel-echo'

class Socket {
  socket = Object

  connect () {
    console.log('connect')
    this.socket = new Echo({
      broadcaster: 'socket.io',
      host: 'http://127.0.0.1:6001',
      auth: {
        headers: {
          Authorization: this.$store.getters.getToken,
        },
      },
    })
  }
}

export default Socket
