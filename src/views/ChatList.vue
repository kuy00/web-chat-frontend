<template>
  <div id='container'>
    <SideMenu />
    <div class='div'>
      chat list
    </div>
    <ChattingRoom />
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import ChattingRoom from '../components/ChattingRoom.vue'

export default {
  name: 'ChatList',
  components: {
    SideMenu,
    ChattingRoom,
  },
}
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .div {
    flex: 1;
  }
</style>
