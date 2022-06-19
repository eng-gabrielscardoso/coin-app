<template>
  <div class="HomeView">
    <BaseNavbar />
    <HelloVue />
  </div>
</template>

<script>
import BaseNavbar from '@/components/template/BaseNavbar'
import HelloVue from '@/components/HelloVue'

export default {  
  name: "HomeView",
  components: {
    BaseNavbar,
    HelloVue,
  },
  mounted() {
    document.title = "App Coin - Crypto Financial Market Online"
  }
}
</script>
