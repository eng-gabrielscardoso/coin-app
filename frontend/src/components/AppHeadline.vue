<template>
  <main class="h-screen flex justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900 to-black">
    <div class="w-3/4 text-center">
      <h1 class="text-white text-6xl font-extrabold py-3">
        Quickly see the main crypto-assets in the global financial market.
      </h1>
      <p class="text-white font-light text-xl py-3">
        <a 
          href="http://github.com/eng-gabrielscardoso/coin-app" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-blue-700"
        >CoinApp</a> is a utility for viewing cryptocurrency market prices, charts, capitalization and volume.
      </p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
        <router-link to="/coins">
          Get Started
        </router-link>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppHeadline',
}
</script>
