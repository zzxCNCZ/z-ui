<template>
  <div id="app">
    <div style="display: flex; width: 100%;">
      <z-button hover="grow" @click="preview" background-color="#ffffff" color="red">grow</z-button>
      <z-button hover="pulse" @click="preview" color="#409eff" background-color="#ecf5ff" border-color="#ecf5ff">pulse</z-button>
      <z-button hover="float" @click="preview">float</z-button>
      <z-button hover="buzz" @click="preview">buzz</z-button>
    </div>
    <div style="width: 800px;height: 150px;">
      <z-image-preview :img-list="imgList" custom-class="img-container"></z-image-preview>
    </div>
    <div>
      <z-rank title="排榜行" width="600px" :list="rankList" @click="rankClick"></z-rank>
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
      ],
      rankList: [{
        name: '张三',
        count: '100',
        desc: '这是一个描述'
      },{
        name: '李四',
        count: '100'
      },{
        name: '王五',
        count: '100'
      },{
        name: '赵六',
        count: '100'
      },{
        name: '孙七',
        count: '100'
      },{
        name: '周八',
        count: '100'
      },{
        name: '吴九',
        count: '100'
      },{
        name: '郑十',
        count: '100'
      },{
        name: '王十一',
        count: '100'
      }]
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
    },
    rankClick (data) {
      console.log(data)
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
