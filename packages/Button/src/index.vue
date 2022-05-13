<template>
  <button
      :class="['z-button', hover]"
      :style="{'color': color, 'background-color': backgroundColor, 'border-color': borderColor}"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
  >
    <slot></slot>
  </button>
</template>

<script>
// [hover.css reference](https://ianlunn.github.io/Hover/#licenses)
export default {
  name: 'z-button',
  props: {
    type: String,
    hover: String,
    color: String,
    backgroundColor: String,
    borderColor: String
  },
  data () {
    return {
      tempColor: '',
      tempBackgroundColor: '',
      tempBorderColor: ''
    }
  },
  computed: {
  },
  methods: {
    mouseenter() {
      this.tempColor = this.color
      this.tempBackgroundColor = this.backgroundColor
      this.tempBorderColor = this.borderColor
      this.color = this.tempBackgroundColor
      this.backgroundColor = this.tempColor
      this.borderColor = this.tempColor
    },
    mouseleave() {
      this.color = this.tempColor
      this.backgroundColor = this.tempBackgroundColor
      this.borderColor = this.tempBorderColor
    }
  }
}
</script>

<style scoped>
@import '../css/button.css';
</style>
