<template>
  <div class="app">
    <BaseNavbar />
    <router-view class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900 to-black" />
    <BaseFooter />
  </div>
</template>
<script>
import BaseNavbar from '@/components/template/BaseNavbar'
import BaseFooter from '@/components/template/BaseFooter'

export default {  
  name: "HomeView",
  components: {
    BaseNavbar,
    BaseFooter,
  },
}
</script>
