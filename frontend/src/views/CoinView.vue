<template>
  <div class="CoinView">
    <BaseIcon 
      v-if="showLoading"
      name="fa-circle-notch"
      animation="spin"
      scale="2"
      class="relative text-blue-600"
    />
    <AppCoinDetails 
      v-else
      :coinDetails="coinDetails"
    />
  </div>
</template>

<script>
import AppCoinDetails from "@/components/AppCoinDetails.vue"
import api from "@/plugins/api"
import { useLayoutState } from "@/store/layout"

export default {  
  name: "CoinView",
  setup() {
    const { setTopTitle } = useLayoutState()
    return { setTopTitle }
  },
  components: {
    AppCoinDetails,
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
  created() {
    this.init()
  },
  mounted() {
    this.setTopTitle(`${this.coin[0].toUpperCase() + this.coin.slice(1,)} | CoinApp`)
  }
}
</script>
