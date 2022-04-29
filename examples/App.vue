<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="preview">preview</button>
    <z-button type="primary" @click="preview">button</z-button>
    <div style="width: 800px;height: 150px;">
      <z-image-preview :img-list="imgList" custom-class="img-container"></z-image-preview>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      imgList: ['https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/04/06/imagec8d56ccba4b0c67d.png','https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
        'https://chevereto.zhuangzexin.top/images/2021/07/27/image.png'
      ]
    }
  },
  components: {
  },
  methods: {
    preview() {
      console.log(1)
      this.$ZPreviewer({
        imgList: this.imgList,
        nowImgIndex: 1
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.img-container {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
