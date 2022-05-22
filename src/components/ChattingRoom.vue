<template>
  <div id='chatting-room'>
    <div v-if='isVisible'>
      <div id='top-container'>
        <svg-loader
          id='svg-container'
          :svgFile='leftSvg'
          :width=30
          :height=30
          fill='gray'
          @click='prev'
        />
        <div id='image-container'>
          <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2207573D58CFDE2704BB29">
        </div>
        <div>
          <span>{{modelValue.name}}</span>
        </div>
      </div>
      <div id='main-container'>
      </div>
      <div id='bottom-container'>
        <div>
          <div id="input-container">
            <input />
            <div>
              <svg-loader
                id='svg-container'
                :svgFile='sendSvg'
                :width=30
                :height=30
                fill='white'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import left from '@/assets/left.svg'
import send from '@/assets/send.svg'
import Http from '../utils/axios'
import { error } from '../notification'
import store from '../store'

export default {
  name: 'ChattingRoom',
  props: {
    modelValue: Object,
  },
  watch: {
    modelValue: function (newValue, oldValue) {
      this.createDirectMessage()
    },
  },
  data: function () {
    return {
      leftSvg: left,
      sendSvg: send,
      directMessage: {},
    }
  },
  computed: {
    isVisible: function () {
      return !(Object.keys(this.modelValue).length === 0)
    },
  },
  methods: {
    createDirectMessage: async function () {
      const payload = {
        name: this.modelValue.name,
        users: [
          store.getters.getUser.user_id,
        ],
      }

      if (store.getters.getUser.user_id !== this.modelValue.id) {
        payload.users.push(this.modelValue.id)
      }

      const result = await Http('/direct-message', 'post', payload)

      if (result.status === 200) {
        this.directMessage = result.data.data
      } else {
        error(this, result.data.message)
      }
    },
    prev: function () {
      this.$emit('update:modelValue', {})
    },
  },
}
</script>

<style scoped>
  #chatting-room {
    flex: 2;
    background-color: #f2f3f5;
  }
  #chatting-room > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #top-container {
    flex: 1;
    background-color: #ebeced;
    display: flex;
    padding: 10px 0px;
  }
  #top-container div {
    align-self: center;
  }
  #svg-container {
    margin: 0px 11px;
    cursor: pointer;
    align-self: center;
  }
  #image-container {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 10px;
  }
  #image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #main-container {
    flex: 25;
  }
  #bottom-container {
    flex: 1;
    padding: 10px;
  }
  #bottom-container > div {
    background-color: white;
    min-height: 60px;
    height: 100%;
    border-radius: 10px;
    display: flex;
    border: 2px solid gray;
  }
  #input-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    padding: 0px 10px;
  }
  #input-container > input {
    width: 100%;
    height: 100%;
    align-self: center;
    border: none;
    padding: 10px;
    font-size: 20px;
  }
  #input-container > input:focus {
    outline: none;
  }
  #input-container > div {
    background-color: gray;
    width: 50px;
    min-height: 50px;
    height: 75%;
    border-radius: 50px;
    display: flex;
    align-self: center;
  }
</style>
