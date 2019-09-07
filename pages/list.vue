<template>
  <main class="container">
    <section class="section"><h2 class="title">セリフリスト</h2></section>
    <div class="field has-text-right is-hidden-mobile">
      <b-switch v-model="isColored">色を付ける</b-switch>
    </div>
    <b-table
      :data="quotes"
      :columns="columns"
      narrowed
      hoverable
      :striped="!isColored"
      :row-class="(row, index) => charaClass(row.character)"
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
  isColored: boolean = false;

  columns = [
    {
      field: "quote",
      label: "セリフ"
    },
    {
      field: "character",
      label: "キャラ",
      width: "110"
    },
    {
      field: "episode",
      label: "話数",
      width: "55",
      numeric: true
    }
  ];

  charaClassMap = new Map([
    ["御剣ちより", "chiyori-color"],
    ["栗山弓", "yumi-color"],
    ["盾木水瀬", "minase-color"],
    ["色井真夜", "maya-color"],
    ["栗山籤", "kushi-color"],
    ["盾木桜華", "ouka-color"],
    ["複数人", "multiple-color"],
    ["その他", "other-color"]
  ]);
  charaLighterClassMap = new Map([
    ["キャラ", "yumi-color"],
    ["御剣ちより", "chiyori-lighter-color"],
    ["栗山弓", "yumi-lighter-color"],
    ["盾木水瀬", "minase-lighter-color"],
    ["色井真夜", "maya-lighter-color"],
    ["栗山籤", "kushi-lighter-color"],
    ["盾木桜華", "ouka-lighter-color"],
    ["複数人", "multiple-lighter-color"],
    ["その他", "other-lighter-color"]
  ]);

  @State quote!: Quote;

  public get quotes(): Quote[] {
    return this.$store.state.quotes;
  }

  private charaClass(chara: string): string {
    if (this.isColored) {
      const characterClass = this.charaClassMap.get(chara);
      return (characterClass || "") + " no-border";
    } else {
      return "";
    }
  }
  private charaLighterClass(chara: string): string {
    const characterClass = this.charaLighterClassMap.get(chara);
    return characterClass || "";
  }
}
</script>

<style scoped></style>
