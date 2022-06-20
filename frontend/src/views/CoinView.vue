<template>
  <div class="CoinView">
    <LoadingAnimation 
      v-if="showLoading" 
      class="relative"
    />
    <div 
      v-else
      class="mt-6 p-2 lg:px-6 bg-white rounded w-10/12 min-h-screen"
    >
      <div class="flex flex-col md:flex-row justify-between items-center w-full">
        <div class="flex justify-center items-center md:w-5/12 my-4">
          <img 
            :src="coinDetails.image.small" 
            :alt="coinDetails.name + ' image'" 
            :title="coinDetails.name"
          >
          <h1 class="text-black text-6xl">
            {{ this.coinDetails.name }}
          </h1>
        </div>
        <div class="flex items-center justify-center w-full md:w-7/12 h-64 bg-gray-500 rounded">
          <AlertIcon />
          Charts in development
        </div>
      </div>
      <div class="my-4 text-md">
        <p 
          v-html="coinDetails.description.en"
          class="font-light"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/plugins/api"
import AlertIcon from "@/assets/icons/AlertIcon.vue"
import LoadingAnimation from "@/assets/animations/Loading.vue"

export default {  
  name: "CoinView",
  components: {
    AlertIcon,
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
