<template>
  <div class="HomeView">
    <BaseNavbar />
    <HelloVue />
    <BaseFooter />
  </div>
</template>

<script>
import BaseNavbar from '@/components/template/BaseNavbar'
import HelloVue from '@/components/HelloVue'
import BaseFooter from '@/components/template/BaseFooter.vue'

export default {  
  name: "HomeView",
  components: {
    BaseNavbar,
    HelloVue,
    BaseFooter,
  },
  mounted() {
    document.title = "App Coin - Crypto Financial Market Online"
  }
}
</script>
