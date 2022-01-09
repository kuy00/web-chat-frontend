<template>
    <div>
        <button v-on:click="test">connect</button>
        <textarea v-model="message" />
    </div>
</template>

<script>
import Echo from "laravel-echo"

export default {
    name: 'Socket',
    data() {
        return {
            socket: null,
            message: '',
        }
    },
    async created() {
        window.io = require('socket.io-client')
        this.socket = new Echo({
            broadcaster: 'socket.io',
            host: 'http://localhost:6001',
        })
        this.socket.channel('laravel_database_test')
            .listen('test', (e) => {
                this.message = e.message
            })
    },
    methods: {
        test: function (event) {
            console.log(event)
            console.log('test')
        }
    },
}
</script>
