<template>
  <div id='chatting_room'>
    <div id='top-container' v-if='isVisible'>
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
  </div>
</template>

<script>
import left from '@/assets/left.svg'

export default {
  name: 'ChattingRoom',
  props: {
    modelValue: Object,
  },
  data: function () {
    return {
      leftSvg: left,
    }
  },
  computed: {
    isVisible: function () {
      return !(Object.keys(this.modelValue).length === 0)
    },
  },
  methods: {
    prev: function () {
      this.$emit('update:modelValue', {})
    },
  },
}
</script>

<style scoped>
  #chatting_room {
    flex: 2;
    background-color: #f2f3f5;
  }
  #top-container {
    height: 70px;
    background-color: #ebeced;
    display: flex;
  }
  #top-container div {
    align-self: center;
  }
  #svg-container {
    margin: 0px 15px;
    cursor: pointer;
  }
  #image-container {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 10px;
  }
  #image-container img  {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
