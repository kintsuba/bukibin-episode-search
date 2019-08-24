<template>
  <main>
    <section class="section">
      <div class="columns is-mobile is-centered">
        <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
          <p id="warning" class="has-text-centered">
            <small>※現在第40回までのセリフが登録済みです</small>
          </p>
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
        <div
          v-if="selected"
          class="column is-full-mobile is-two-thirds-tablet is-half-desktop box"
        >
          <p id="episode" class="is-size-2 has-text-centered">
            第{{ appearQuotes[0].episode }}回
          </p>
          <p
            id="quote"
            class="is-size-3 has-text-centered"
            :class="{ 'wf-nicomoji': isWagomu }"
          >
            {{ appearQuotes[0].quote }}
          </p>
          <p id="character" class="is-size-5 is-pulled-right">
            （{{ appearQuotes[0].character }}）
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

  public get isWagomu(): boolean {
    if (
      this.appearQuotes[0].quote === "ベンッ" ||
      this.appearQuotes[0].quote === "ベベベンッ" ||
      this.appearQuotes[0].quote === "♪べべべベーン べ べ べ ベーン"
    ) {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<style scoped>
.wf-nicomoji {
  font-family: "Nico Moji", -apple-system, BlinkMacSystemFont, Roboto,
    "游ゴシック体 ", YuGothic, " Yu Gothic Medium ", sans-serif;
}
div#result {
  margin-top: 30px;
}
p#quote {
  margin-top: 20px;
  margin-bottom: 30px;
}
p#character {
  margin-right: 10px;
}
p#warning {
  margin-bottom: 10px;
}
</style>
