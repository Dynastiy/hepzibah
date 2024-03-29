import i18n, { selectedLocale } from "@/plugin/i18n";

export default {
  namespaced: true,
  state: {
    locale: selectedLocale,
  },

  mutations: {
    updateLocale(state, newLocale) {
      state.locale = newLocale;
    },
  },

  actions: {
    changeLocale({ commit }, newLocale) {
      i18n.locale = newLocale;
      commit("updateLocale", newLocale);
    },
  },
};
