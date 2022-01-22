<template>
  <div>
    <button v-on:click='connect'>connect</button>
    <textarea v-model='message' />
  </div>
</template>

<script>
import Echo from 'laravel-echo'

export default {
  name: 'socket-component',
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
        host: 'http://localhost:6001',
      })
      this.socket.channel('laravel_database_test').listen('test', (e) => {
        this.message = e.message
      })
    },
  },
}
</script>
