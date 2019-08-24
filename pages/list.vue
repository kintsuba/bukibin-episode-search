<template>
  <main class="container">
    <section class="section"><h1 class="title">セリフリスト</h1></section>
    <b-table
      :data="quotes"
      :columns="columns"
      narrowed
      striped
      hoverable
    ></b-table>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Quote } from "~/types";

@Component({
  components: {},
  async fetch({ $axios, store }) {
    const rawQuotes: Quote[] = await $axios.$get(
      "https://script.google.com/macros/s/AKfycbxfKWk-N1c4657XAp1UjNqLgDtjKqoIn_bhUHuYswk9A7iagXM/exec"
    );
    store.commit("setQuotes", rawQuotes);
  }
})
export default class extends Vue {
  columns = [
    {
      field: "id",
      label: "ID",
      width: "40",
      numeric: true
    },
    {
      field: "quote",
      label: "セリフ"
    },
    {
      field: "character",
      label: "キャラ"
    },
    {
      field: "episode",
      label: "話数",
      numeric: true
    }
  ];

  @State quote!: Quote;

  public get quotes(): Quote[] {
    return this.$store.state.quotes;
  }
}
</script>

<style scoped></style>
