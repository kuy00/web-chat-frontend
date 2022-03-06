<template>
  <div ref="svg" id="container">
    <svg-loader
      :svgFile='peopleSvg'
      width=100
      height=100
      fill='blue'
    />
  </div>
</template>

<script>
import people from '@/assets/people.svg'

export default {
  name: 'side-menu',
  data: function () {
    return {
      peopleSvg: people,
    }
  },
}
</script>

<style scoped>
  .icon {
    width: 50px;
    height: 50px;
  }
</style>
