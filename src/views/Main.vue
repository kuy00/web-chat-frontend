<template>
  <div id="container">
    <SideMenu />
  </div>
</template>

<script>
import SideMenu from './SideMenu'

export default {
  name: 'main-view',
  components: {
    SideMenu,
  },
}
</script>

<style scoped>
  #container {
    display: flex;
    flex-direction: column;
  }
</style>
