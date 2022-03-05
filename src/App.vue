<template>
  <layout-header />
  <router-view />
  <layout-footer />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Header from '@/views/aConstant/layout/header.vue'
import Footer from '@/views/aConstant/layout/footer.vue'
import { userLogin } from '@/api/user'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    'layout-header': Header,
    'layout-footer': Footer
  },
  setup () {
    onMounted(() => {
      userLogin({ username: '1', password: '1' }).then((res) => {
        const { data } = res
        console.log(data)
      })
    })
    return {}
  }
})
</script>
<style lang="scss">
@import 'assets/css/global.css';
@import 'assets/css/layui-layer/layer.css';

body {
  margin-top: unset !important;
  padding-top: 61px;
  box-sizing: border-box;
}

body,
html {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  overflow-y: auto;
}

// 公用样式
.svg {
  position: relative;
  // top: -4px;
  svg {
    position: absolute;
    top: -10px;

    height: 50px;
  }
}
.gray {
  color: #999;
}

.orange {
  color: #ff5722;
}

.pull-right {
  float: right !important;
}

@for $i from 0 to 5 {
  .pd#{$i} {
    padding: $i * 10 + px !important;
  }
  .pt#{$i} {
    padding-top: $i * 10 + px !important;
  }
  .pl#{$i} {
    padding-left: $i * 10 + px !important;
  }
  .pr#{$i} {
    padding-right: $i * 10 + px !important;
  }
  .pb#{$i} {
    padding-bottom: $i * 10 + px !important;
  }
  .mr#{$i} {
    margin-right: $i * 10 + px !important;
  }
  .mt#{$i} {
    margin-top: $i * 10 + px !important;
  }
  .ml#{$i} {
    margin-left: $i * 10 + px !important;
  }
}

.mt20 {
  margin-top: -20px;
}

.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}

.d-hide {
  position: absolute;
  overflow: hidden;
  height: 0;
}

.d-flex {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &.flex-start {
    justify-content: flex-start;
  }
  &.flex-end {
    justify-content: flex-end;
  }
  &.flex-center {
    justify-content: center;
  }
}

.link {
  color: #01aaed;
}
.success {
  color: #5fb878;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes bounceOut {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}

.fade-leave-active {
  animation: bounceOut 0.3s;
}

.fade-enter-active,
.fade-enter-to {
  animation: bounceIn 0.3s;
}
</style>
