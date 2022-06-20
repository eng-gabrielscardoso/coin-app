<template>
  <div class="CoinView">
    <LoadingAnimation 
      v-if="showLoading" 
      class="relative"
    />
    <AppCoinDetails 
      v-else
      :coinDetails="coinDetails"
    />
  </div>
</template>

<script>
import api from "@/plugins/api"
import AppCoinDetails from "@/components/AppCoinDetails.vue"
import LoadingAnimation from "@/assets/animations/Loading.vue"

export default {  
  name: "CoinView",
  components: {
    AppCoinDetails,
    LoadingAnimation,
  },
  data() {
    return {
      coin: this.$route.params.coin,
      coinDetails: {},
      showLoading: true,
    }
  },
  methods: {
     init() {
      this.fetchMainCoins()
    },

    fetchMainCoins() {
      api
        .get(`/details/${this.coin}`)
        .then(response => this.coinDetails = response.data)
        .finally(() => this.showLoading = false)
    },
  },  
  mounted() {
    this.init()
    document.title = `${this.coin[0].toUpperCase() + this.coin.slice(1,)} | CoinApp - Crypto Financial Market Online`
  }
}
</script>
