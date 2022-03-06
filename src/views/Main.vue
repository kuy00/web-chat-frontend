<template>
  <div id="container">
    <SideMenu />
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'

export default {
  name: 'MainView',
  components: {
    SideMenu,
  },
}
</script>

<style scoped>
  #container {
    /* flex-direction: row; */
    align-self: flex-start;
    /* display: flex;
    flex-direction: column; */
  }
</style>
