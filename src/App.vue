<template>
  <div id="app">
    <notifications position="bottom center" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width : 100vw;
  height : 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
