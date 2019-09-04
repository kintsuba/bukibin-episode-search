<template>
  <main>
    <section class="section">
      <div class="columns is-mobile is-centered">
        <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop">
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
          class="column is-full-mobile is-four-fifths-tablet is-three-fifths-desktop is-half-fullhd"
        >
          <transition name="fade-fast" mode="out-in">
            <article v-if="!selected" class="message is-info">
              <div class="message-body">
                <p>現在第142回までのセリフが登録済みです</p>
              </div>
            </article>
            <div v-else class="card">
              <div class="card-content">
                <p id="episode" class="is-size-2 has-text-centered">
                  第{{ appearQuotes[0].episode }}回
                </p>
                <p
                  id="quote"
                  class="is-size-3 has-text-centered"
                  :class="{ 'wf-nicomoji': isWagomu }"
                >
                  <span v-html="quoteForDisplay"></span>
                </p>
                <p id="character" class="is-size-5 has-text-right">
                  （{{ appearQuotes[0].character }}）
                </p>
              </div>
              <b-collapse
                :open.sync="isOpen"
                animation="slide-fade"
                aria-id="relatedQuoteList"
              >
                <hr class="card-border" />

                <b-table
                  :data="getCurrentEpisodeQuotes"
                  :columns="columns"
                  hoverable
                  striped
                ></b-table>
              </b-collapse>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span
                    id="related-button"
                    class="cs-pointer"
                    aria-controls="relatedQuoteList"
                    role="button"
                    @click="isOpen = !isOpen"
                  >
                    <b-icon
                      v-if="!isOpen"
                      pack="fas"
                      icon="angle-down"
                      size="is-small"
                    ></b-icon>
                    <b-icon
                      v-if="isOpen"
                      pack="fas"
                      icon="angle-up"
                      size="is-small"
                    ></b-icon>
                    この回の台詞一覧を見る
                  </span>
                </p>
              </footer>
            </div>
          </transition>
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
  isOpen: boolean = false;

  columns = [
    {
      field: "quote",
      label: "セリフ"
    },
    {
      field: "character",
      label: "キャラ",
      width: "105"
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

  public get filteredQuotes(): string[] {
    return this.appearQuotes.map(q => q.quote);
  }

  public get appearQuotes(): Quote[] {
    return this.$store.getters.getAppearQuotes(this.input);
  }

  public get getCurrentEpisodeQuotes(): Quote[] {
    return this.$store.getters.getQuotesFromEppisode(
      this.appearQuotes[0].episode
    );
  }

  public get quoteForDisplay(): string {
    const quote = this.appearQuotes[0].quote;
    if (quote === "ベートーベンッ") {
      return quote.replace(/ベンッ/, '<span class="wf-nicomoji">ベンッ</span>');
    } else return quote;
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
  private charaClass(chara: string): string {
    const characterClass = this.charaClassMap.get(chara);
    return characterClass || "";
  }
  private charaLighterClass(chara: string): string {
    const characterClass = this.charaLighterClassMap.get(chara);
    return characterClass || "";
  }
}
</script>

<style scoped>
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
span#related-button {
  padding: 3px;
}
hr.card-border {
  border-top: 1px solid #dbdbdb;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
