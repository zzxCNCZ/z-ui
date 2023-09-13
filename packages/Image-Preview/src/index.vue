<template>
  <div
       :class="['img-wrapper',customClass]"
  >
    <div v-for="(img, index) in imgList" :key="index" :style="{width: width, height: height}" class="img-item">
      <img :src="img"  :style="{objectFit: fit }" @click="showPhotoPreview(index)" @error="handleImgError" alt=""/>
    </div>
    <multi-image-preview :show="multiImageVisible" ref="multiImagePreview" :img-list="imgList" :now-img-index="imgIndex"></multi-image-preview>
  </div>
</template>

<script>
import MultiImagePreview from './multi-image-preview.vue';
export default {
  name: "ZImagePreview",
  props: {
    imgList: {
      type: Array,
      default () {
        return []
      }
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '150px'
    },
    fit: {
      type: String,
      default: 'cover'
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imgIndex: 0,
      errorImg: require('./img/image-not-found.png'),
      multiImageVisible: false
    }
  },
  components: {
    MultiImagePreview
  },
  methods: {
    showPhotoPreview (index) {
      this.imgIndex = index
      this.multiImageVisible = true
      this.$nextTick(() => {
        this.$refs.multiImagePreview.init()
      })
    },
    handleImgError(e) {
      e.target.src = this.errorImg
      e.target.onerror = null
    }
  }
}
</script>

<style scoped>
.img-wrapper {
  width: 100%;
  height: 100%;
}
.img-item {
  margin-left: 5px;display:inline-block;box-sizing: border-box;
}

.img-item img {
  cursor: zoom-in;width: 100%; height: 100%;
}
</style>
