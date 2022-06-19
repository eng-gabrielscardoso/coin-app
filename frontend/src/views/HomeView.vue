<template>
  <div class="HomeView">
    <BaseNavbar />
    <AppHeadline />
    <BaseFooter />
  </div>
</template>

<script>
import BaseNavbar from '@/components/template/BaseNavbar'
import AppHeadline from '@/components/AppHeadline'
import BaseFooter from '@/components/template/BaseFooter.vue'

export default {  
  name: "HomeView",
  components: {
    BaseNavbar,
    AppHeadline,
    BaseFooter,
  },
  mounted() {
    document.title = "CoinApp - Crypto Financial Market Online"
  }
}
</script>
