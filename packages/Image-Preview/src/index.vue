<template>
  <div style="display: flex; width: 100%; height: 100%;">
    <div v-for="(img, index) in imgList" :key="index" :style="{width: width, height: height}" style="margin-left: 5px;">
      <img :src="img"  :style="{objectFit: fit }"  style="cursor: zoom-in;width: 100%; height: 100%;" @click="showPhotoPreview(index)" alt=""/>
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
    }
  },
  data () {
    return {
      imgIndex: 0,
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
    }
  }
}
</script>

<style scoped>

</style>
