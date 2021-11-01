<template>
  <div class="mask-cont"
       @touchmove="touchmoveEvent"
       @click.stop
       v-loading="loading"
       :class="[show && 'show_pop', !customClass && 'defaultClass']">
    <div :class="[show && 'show-main', customClass && 'customClass']">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: Boolean,
      default: false
    },
    preventBoo: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    touchmoveEvent(e) {
      this.preventBoo && e.preventDefault();
    }
  }
}
</script>

<style scoped lang="less">
.mask-cont {
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .45);
  visibility: hidden;
  z-index: 99;
  opacity: 0;
  &.defaultClass {
    align-items: center;
  }
  &.show_pop {
    visibility: visible;
    opacity: 1;
    transition: all linear .2s;
  }
  .show-main {
    z-index: 100;
    animation: showPop linear .2s;
    &.customClass {
      margin-top: 236px;
    }
  }
  .show-main::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
}
@media screen and (min-width: 1000px) {
  .mask-cont {
    position: absolute;
  }
}
@keyframes showPop {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}


</style>