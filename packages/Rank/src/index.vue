<template>
    <div :class="['rank-list', customClass, shadow ? 'shadow' : 'no-shadow']" :style="{'width': width}">
        <div class="rank-list-header">
            <div class="rank-list-header-title">
                <span v-if="!$slots.header">{{ title }}</span>
                <slot v-else name="header"></slot>
            </div>
        </div>
      <div class="rank-list-body">
        <div v-if="list.length > 0">
          <div class="rank-list-body-item" v-for="(rank, index) in list" :key="index" @click="rankClick(rank)">
            <div class="rank-list-body-item-rank">
              <div :style="rankStyle(index)"> {{index + 1}}</div>
            </div>
            <div class="rank-list-body-item-content">
              <span>{{rank.name}}</span><span v-if="rank.desc" class="description"> ({{rank.desc}})</span>
            </div>
            <div class="rank-list-body-item-count">
              <span>{{rank.count}}</span>
            </div>
          </div>
        </div>
        <div v-else>
          暂无数据
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ZRank',
  props: {
    title: {
      type: String,
      default: '排行榜'
    },
    shadow: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '600px'
    },
    customClass: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    // at least 3 items
    rankColor:{
      type: Array,
      default: () => ['#f59a23', '#8080ff', '#81d3f8']
    },
  },
  data () {
    return {
    }
  },
  methods: {
    rankStyle (val) {
      switch (val) {
        case 0:
          return {
            background: this.rankColor[0]
          }
        case 1:
          return {
            background: this.rankColor[1]
          }
        case 2:
          return {
            background: this.rankColor[2]
          }
        default:
          return {
            background: '#d7d7d7'
          }
      }
    },
    rankClick (rank) {
      this.$emit('click', rank);
    }
  }
}
</script>

<style scoped >

.rank-list {
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid #e6ebf5;
  color: rgba(0, 0, 0, 0.65);
  padding: 20px;
}

.rank-list.shadow,
.rank-list.shadow:focus,
.rank-list.shadow:hover
{
  -webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
}

.rank-list .rank-list-header {
  width: 100%;
  height: 30px;
}

.rank-list-header .rank-list-header-title {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.rank-list-header-title span {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.45);
}

.rank-list .rank-list-body {
  width: 100%;
  height: 350px;
  margin-top: 10px;
}

.rank-list .rank-list-body .rank-list-body-item {
  display: flex;
  align-items: center;
  height: 35px;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
}

.rank-list .rank-list-body .rank-list-body-item:hover {
  transform: translateZ(0) scale(1.05);
}

.rank-list-body-item .rank-list-body-item-rank {
  width: 45px;
}

.rank-list-body-item-rank div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 50%;
  background-color: #d7d7d7;
}
.rank-list-body-item .rank-list-body-item-content {
  width: 80%;
  font-size: 18px;
  padding-left: 10px;
}

.rank-list-body-item-content .description {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.rank-list-body-item-count {
  flex: 1;
  text-align: center;
  font-size: 18px;
  width: 100px;
}
</style>
