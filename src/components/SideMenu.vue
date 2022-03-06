<template>
  <div id='side_menu'>
    <svg-loader
      class='img'
      @click='friendList'
      :svgFile='peopleSvg'
      :width=50
      :height=50
      :fill="setStyle('/')"
    />
    <svg-loader
      class='img'
      @click='chatList'
      :svgFile='meesageSvg'
      :width=50
      :height=50
      :fill="setStyle('/chat/list')"
    />
  </div>
</template>

<script>
import people from '@/assets/people.svg'
import meesage from '@/assets/meesage.svg'

export default {
  name: 'SlideMenu',
  data: function () {
    return {
      peopleSvg: people,
      meesageSvg: meesage,
    }
  },
  methods: {
    friendList: function () {
      this.$router.push('/')
    },
    chatList: function () {
      this.$router.push('/chat/list')
    },
    setStyle: function (path) {
      return this.$route.path === path ? 'white' : '#75787d'
    },
  },
}
</script>

<style scoped>
  #side_menu {
    width: 80px;
    background-color: #47484a;
  }
  .img {
    margin: 20px 0px;
  }
</style>
