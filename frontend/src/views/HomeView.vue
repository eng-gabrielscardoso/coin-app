<template>
  <div class="HomeView">
    <HelloVue />
  </div>
</template>

<script>
import HelloVue from '@/components/HelloVue.vue'

export default {  
  name: "HomeView",
  components: {
    HelloVue,
  },
  mounted() {
    document.title = "App Coin - Crypto Financial Market Online"
  }
}
</script>
