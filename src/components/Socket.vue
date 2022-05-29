<template>
  <div>
    <button v-on:click='connect'>connect</button>
    <textarea v-model='message' />
  </div>
</template>

<script>
import Echo from 'laravel-echo'

export default {
  name: 'SocketComponent',
  data: function () {
    return {
      socket: null,
      message: '',
    }
  },
  methods: {
    connect: function () {
      window.io = require('socket.io-client')
      this.socket = new Echo({
        broadcaster: 'socket.io',
        host: 'http://127.0.0.1:6001',
        auth: {
          headers: {
            Authorization: this.$store.getters.getToken,
          },
        },
      })
      this.socket.join('user.' + this.$store.getters.getUser.user_id).listen('BroadCastEvent', (e) => {
        console.log(e)
        this.message = e.message
      })
    },
  },
}
</script>
