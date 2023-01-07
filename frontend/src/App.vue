<template>
  <div class="app">
    <BaseNavbar />
    <router-view v-slot="{ Component }">
      <transition
        appear
        name="fade"
        mode="out-in"
      >
        <component :is="Component" class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900 to-black" />
      </transition>
    </router-view>
    <BaseFooter />
  </div>
</template>
<script>
import BaseFooter from "@/components/base/BaseFooter"
import BaseNavbar from "@/components/base/BaseNavbar"

export default {  
  name: "App",
  components: {
    BaseNavbar,
    BaseFooter,
  }
}
</script>
