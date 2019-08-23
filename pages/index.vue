<template>
  <main class="container">
    <section class="section">
      <h1 class="title has-text-centered">
        武器瓶のセリフから第何回か検索するやつ
      </h1>
    </section>
    <section class="section">
      <div class="columns is-mobile is-centered">
        <div
          class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop"
        >
          <p class="bd-notification is-primary"></p>
          <b-field label="セリフを入力してください" is-large>
            <b-autocomplete
              v-model="input"
              rounded
              size="is-large"
              :data="filteredQuotes"
              placeholder="例: 「間違って2って書いた後横着して直した3」"
              icon="magnify"
              @select="option => (selected = option)"
            >
              <template slot="empty"
                >No results found
              </template>
            </b-autocomplete>
          </b-field>
        </div>
      </div>
      <div id="result" class="columns is-mobile is-centered">
        <div v-if="selected" class="column is-three-quarters">
          <p id="episode" class="is-size-1 has-text-centered">
            第{{ appearQuotes[0].episode }}回
          </p>
          <p id="character" class="is-size-3 has-text-centered">
            {{ appearQuotes[0].character }}
          </p>
          <p id="quote" class="is-size-4 has-text-centered">
            {{ appearQuotes[0].quote }}
          </p>
        </div>
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
  selected: Quote | undefined = undefined;

  @State quote!: Quote;

  public get filteredQuotes(): string[] {
    return this.appearQuotes.map(q => q.quote);
  }

  public get appearQuotes(): Quote[] {
    return this.$store.getters.getAppearQuotes(this.input);
  }

  public get displayResult(): boolean {
    if (this.appearQuotes) {
      return this.appearQuotes !== [];
    } else {
      return false;
    }
  }
}
</script>

<style scoped>
p#episode {
  margin-top: 30px;
}
p#character {
  margin-top: 30px;
}
p#quote {
  margin-top: 20px;
}
</style>
