<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <z-button type="primary">button</z-button>
    <z-image-preview :img-list="imgList"></z-image-preview>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      imgList: ['https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/04/06/imagec8d56ccba4b0c67d.png']
    }
  },
  components: {

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
