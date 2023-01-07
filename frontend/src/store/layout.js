import { defineStore } from "pinia"

export const useLayoutState = defineStore("counter", {
  state: () => ({
    topTitle: ""
  }),
  actions: {
    setTopTitle(title) {
      this.topTitle = title
      document.title = this.topTitle
    }
  },
})
