/* eslint-disable no-undef */
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
  getAppearQuotes: (state: RootState) => (input: string) => {
    return state.quotes.filter(q => q.quote.includes(input));
  },
  getAppearEpisode: (state: RootState, getters) => (input: string) => {
    return getters.getAppearQuotes(input).episode;
  },
  getAppearCharacter: (state: RootState, getters) => (input: string) => {
    return getters.getAppearQuotes(input).character;
  },
  getQuotesFromEppisode: (state: RootState) => (input: number) => {
    return state.quotes.filter(q => q.episode === input);
  }
};
