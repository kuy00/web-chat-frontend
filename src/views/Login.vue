<template>
  <div id='container'>
    <div id='login'>
      <div id='div'>
        <span id='label_text'>Sign In</span>
      </div>
      <form id='login_form'>
        <input class='input' type='text' v-model='id' placeholder='ID' required/>
        <input class='input' type='password' v-model='password' placeholder='PASSWORD' @keyup.enter='login' required/>
        <button type='button' id='login_btn' @click='login'>LOGIN</button>
      </form>
      <div id='div'>
        <span id='sign_up' @click='signup'>Create Your Account</span>
      </div>
    </div>
  </div>
</template>

<script>
import Http from '../utils/axios'
import { error } from '../notification'

export default {
  name: 'LoginView',
  data: function () {
    return {
      id: '',
      password: '',
    }
  },
  methods: {
    login: async function () {
      const result = await Http('/login', 'post', {
        user_id: this.id,
        password: this.password,
      })
      if (result.status === 200) {
        this.$store.commit('setAuthInfo', {
          user_id: result.data.data.accessToken.tokenable_id,
          name: result.data.data.accessToken.name,
          token: result.data.data.plainTextToken,
        })
        this.$router.push('/socket')
      } else {
        error(this, result.data.message)
      }
    },
    signup: function () {
      console.log('sign up')
    },
  },
}
</script>

<style scoped>
  #container {
    height: 100%;
    width: 100%;
    display: flex;
  }
  #login {
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  #div {
    flex: 1;
  }
  #label_text {
    padding: 2px;
    border-bottom: 4px solid #267DFF;
    font-size: 30px;
    font-weight: bold;
  }
  #login_form {
    flex: 3;
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
  }
  .input {
    padding: 10px;
    margin-bottom: 10px;
  }
  #login_btn {
    background-color: #267DFF;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: 0px;
    border-radius: 100px;
    height: 60px;
    margin-top: 40px;
    cursor: pointer;
  }
  #sign_up {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
