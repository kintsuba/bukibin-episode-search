<template>
  <div class="sf-site-all">
    <my-navbar />
    <nuxt class="sf-site-content" />
    <bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import MyNavbar from "~/components/MyNavbar.vue";
import Bottom from "~/components/Bottom.vue";

@Component({
  components: {
    MyNavbar,
    Bottom
  }
})
export default class extends Vue {}
</script>

<style scoped>
.sf-site-all {
  min-height: 100vh; /* 全体の高さを最低でもビューポートの100%にする */
  display: flex; /* 子クラスを横並びにする */
  flex-direction: column; /* 子クラスの横並びの方向を縦にする */
}
.sf-site-content {
  flex: 1; /* flexに1つだけ数値を指定するとその要素は伸びる */
}
</style>
