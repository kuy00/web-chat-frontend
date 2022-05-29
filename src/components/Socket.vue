<template>
  <div>
    <button @click="connect">
      connect
    </button>
    <textarea v-model="message" />
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
      this.socket = new Echo({
        broadcaster: 'socket.io',
        host: 'http://127.0.0.1:6001',
        auth: {
          headers: {
            Authorization: this.$store.getters.getToken,
          },
        },
      })
      this.socket.private('user.' + this.$store.getters.getUser.user_id).listen('BroadCastEvent', (e) => {
        console.log(e)
        this.message = e.message
      })
    },
  },
}
</script>
