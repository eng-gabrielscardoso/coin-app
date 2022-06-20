<template>
  <div class="NotFoundView">
    <div class="p-4 bg-white rounded text-center">
      <span class="text-2xl text-black">
        404 Page Not Found
      </span>
      <br>
      <span>
        Back to 
        <router-link 
          to="/"
          class="text-blue-600 hover:text-blue-800 cursor-pointer"
        >Home</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {  
  name: "NotFoundView",
  mounted() {
    document.title = "About | CoinApp - Crypto Financial Market Online"
  }
}
</script>
