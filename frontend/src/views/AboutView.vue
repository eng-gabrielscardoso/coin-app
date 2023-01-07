<template>
  <div class="AboutView px-2">
    <div class="flex flex-col justify-center items-center max-w-md rounded overflow-hidden shadow-lg bg-white text-gray-900 p-2 hover:bg-gray-200 hover:text-gray-500 transition-colors">
      <h1 class="text-center text-blue-600 text-4xl py-5">
        CoinApp
      </h1>
      <p>
        CoinApp is a web application developed by Gabriel Santos Cardoso, with the purpose of chart visualization, real-time quotation, capitalization and market volume of crypto-assets.
      </p>
      <div class="flex flex-col items-center py-5">
        <span class="flex justify-center text-gray-500 text-center text-sm">
          Take a look at the author's portfolio and in documentation of application:
        </span>
        <ul class="flex justify-between items-center py-3 w-1/5">
            <li 
            class="hover:text-gray-600 transition-colors py-2 lg:py-0"
            title="Documentation"
          >
            <a 
              href="http://github.com/eng-gabrielscardoso/coin-app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BaseIcon name="fa-github" scale="1.5" />
            </a>
          </li>
          <li 
            class="hover:text-gray-600 transition-colors py-2 lg:py-0"
            title="Author"
          >
            <a 
              href="http://linkedin.com/in/eng-gabrielscardoso" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BaseIcon name="fa-linkedin" scale="1.5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  name: "AboutView",
  mounted() {
    document.title = "About | CoinApp - Crypto Financial Market Online"
  }
}
</script>
