import { MutationTree, GetterTree } from "vuex";
import { RootState, Quote } from "~/types";

export const state = (): RootState => ({
  quotes: []
});

export const mutations: MutationTree<RootState> = {
  setQuotes(state: RootState, quotes: Quote[]): void {
    state.quotes = quotes;
  }
};

export const getters: GetterTree<RootState, RootState> = {
  getQuotes: (state: RootState) => {
    return state.quotes.map(q => q.quote);
  },
  getFilteredQuotes: (state: RootState, getters) => (input: string) => {
    return getters.getQuotes.filter((q: string) => q.includes(input));
  },
  getAppearQuote: (state: RootState) => (input: string) => {
    return state.quotes.filter(q => q.quote.includes(input));
  },
  getAppearEpisode: (state: RootState, getters) => (input: string) => {
    return getters.getAppearQuotes(input).episode;
  },
  getAppearCharacter: (state: RootState, getters) => (input: string) => {
    return getters.getAppearQuotes(input).character;
  }
};

// export const actions: ActionTree<RootState, RootState> = {
//   async nuxtServerInit({ commit }, context) {
//     let people: Person[] = [];

//     // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
//     people = context.isStatic
//       ? localRandomData
//       : await context.app.$axios.$get("./random-data.json");

//     commit("setPeople", people.slice(0, 10));
//   }
// };
