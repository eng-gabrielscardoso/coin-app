<template>
  <div class="HomeView">
    <AppHeadline />
  </div>
</template>

<script>
import AppHeadline from '@/components/AppHeadline'
import { useLayoutState } from '@/store/layout'

export default {  
  name: "HomeView",
  setup() {
    const { setTopTitle } = useLayoutState()
    return { setTopTitle }
  },
  components: {
    AppHeadline,
  },
  mounted() {
    this.setTopTitle("CoinApp - Crypto Financial Market Online")
  }
}
</script>
