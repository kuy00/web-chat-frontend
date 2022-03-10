<template>
  <div id='side_menu'>
    <router-link to="/">
      <svg-loader
        class='img'
        :svgFile='peopleSvg'
        :width=50
        :height=50
        :fill="setStyle('/')"
      />
    </router-link>
    <router-link to="/chat/list">
      <svg-loader
        class='img'
        :svgFile='meesageSvg'
        :width=50
        :height=50
        :fill="setStyle('/chat/list')"
      />
    </router-link>
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
