<template>
  <div class="HomeView">
    <BaseNavbar />
    <div class="h-screen flex justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white">
      Contact
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import BaseNavbar from '@/components/template/BaseNavbar'
import BaseFooter from '@/components/template/BaseFooter.vue'

export default {  
  name: "HomeView",
  components: {
    BaseNavbar,
    
    BaseFooter,
  },
  mounted() {
    document.title = "Contact | CoinApp - Crypto Financial Market Online"
  }
}
</script>
