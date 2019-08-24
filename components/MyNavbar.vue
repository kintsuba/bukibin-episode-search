<template>
  <b-navbar class="is-primary">
    <template slot="brand">
      <b-navbar-item href="/">
        <h1>武器瓶のセリフから第何回か検索するやつ</h1>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="/">
        <b-icon
          pack="fas"
          icon="home"
          size="is-small"
          custom-class="nav-icon"
        ></b-icon>
        &nbsp;&nbsp;Home
      </b-navbar-item>
      <b-navbar-item href="/list">
        <b-icon
          pack="fas"
          icon="list"
          size="is-small"
          custom-class="nav-icon"
        ></b-icon>
        &nbsp;&nbsp;List
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<style scoped>
.nav-icon {
  margin-right: 5px;
}
</style>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class MyNavbar extends Vue {}
</script>
