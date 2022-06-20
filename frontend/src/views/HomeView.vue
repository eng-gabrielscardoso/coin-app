<template>
  <div class="HomeView">
    <AppHeadline />
  </div>
</template>

<script>
import AppHeadline from '@/components/AppHeadline'

export default {  
  name: "HomeView",
  components: {
    AppHeadline,
  },
  mounted() {
    document.title = "CoinApp - Crypto Financial Market Online"
  }
}
</script>
