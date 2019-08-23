<template>
  <div class="sf-site-all">
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1>武器瓶のセリフから第何回か検索するやつ</h1>
        </a>
      </div>
    </nav>
    <nuxt class="sf-site-content" />
    <bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Bottom from "~/components/Bottom.vue";

@Component({
  components: {
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
