<template>
  <div class="flex flex-wrap justify-center align-center gap-2 w-full md:w-4/6">
    <LoadingAnimation 
      v-if="showLoading" 
      class="relative"
    />
    <AppCoinCard
      v-for="coin in coinsDetails"
      :key="coin"
      :coinDetails="coin"
    />
  </div>
</template>

<script>
import api from "@/plugins/api"
import AppCoinCard from './AppCoinCard.vue'
import LoadingAnimation from "@/assets/animations/Loading.vue"

export default {
  name: "AppCoins",
  components: {
    AppCoinCard,
    LoadingAnimation,
  },
  data() {
    return {
      coinsDetails: [],
      mainCoins: [
        "bitcoin",
        "ethereum",
        "litecoin",
        "bitcoin-cash",
        "chainlink",
        "stellar",
        "polkadot",
        "cardano",
        "solana",
        "avalanche-2",
        "terra-luna",
        "tether",
      ],
      showLoading: true,
    }
  },
  methods: {
    init() {
      this.fetchMainCoins()
    },

    fetchMainCoins() {
      this.mainCoins.forEach(coin => {
        api
          .get(`/details/${coin}`)
          .then(response => this.coinsDetails.push(response.data))
          .finally(() => this.showLoading = false)
      })
    },
  },
  mounted() {
    this.init()
  },
}
</script>
