<template>
  <div class="CoinsView p-2">
    <h1 class="text-white text-4xl text-center my-6">
      The main crypto assets at your disposal.
    </h1>
    <AppCoins />
    <p class="text-white text-sm text-center my-6">
      Have you didn't find your crypto? Take a look at the complete list 
      <router-link 
        to="/coins-complete"
        class="text-blue-600 hover:text-blue-800 transition-colors"  
      >here.</router-link>
    </p>
  </div>
</template>

<script>
import AppCoins from '@/components/AppCoins.vue'

export default {  
  name: "CoinsView",
  components: {
    AppCoins,
  },
  mounted() {
    document.title = "Coins | CoinApp - Crypto Financial Market Online"
  }
}
</script>
