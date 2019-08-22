<template>
  <main class="container">
    <section class="section">
      <h1 class="title has-text-centered">武器瓶セリフ検索</h1>
    </section>
    <section class="section">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <p class="bd-notification is-primary"></p>
          <b-field label="セリフを入力してください" is-large>
            <b-autocomplete
              v-model="input"
              rounded
              size="is-large"
              :data="filteredQuotes"
              placeholder="例: 『間違って2って書いた後横着して直した3』"
              icon="magnify"
              @select="option => (selected = option)"
            >
              <template slot="empty"
                >No results found
              </template>
            </b-autocomplete>
          </b-field>
          <p>
            <small>{{ input }}</small>
          </p>
        </div>
      </div>
      <div class="column is-half">
        <p>{{ seleted }}</p>
      </div>
    </section>
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
  input: string = "";
  seleted: string = "seleted";

  @State quote!: Quote;

  public get filteredQuotes(): string[] {
    return this.$store.getters.getFilteredQuotes(this.input);
  }

  public get appearQuote(): string {
    return this.$store.getters.getAppearQuote(this.seleted);
  }
}
</script>

<style scoped></style>
