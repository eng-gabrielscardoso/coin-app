<template>
  <header class="lg:flex lg:items-center w-full py-4 px-6 text-white border-b-2 border-b-gray-400 bg-black">
    <div class="flex justify-between items-center">
      <router-link 
        to="/"
        class="flex items-center hover:text-gray-600 transition-colors"
        title="CoinApp"
      >
        <BaseIcon name="fa-dollar-sign" scale="1.5" />
        CoinApp
      </router-link>
      <button 
        class="text-white transition-colors cursor-pointer block lg:hidden" 
        type="button" 
        @click="toggleNavbar()"
      >
        <BaseIcon name="fa-bars" scale="1.5" />
      </button>
    </div>
    <nav
      :class="{'hidden': !showMenu}"
      class="lg:flex lg:flex-grow lg:items-center"
    >
      <ul class="flex-col lg:flex lg:flex-row lg:justify-between text-center justify-center items-center list-none ml-auto lg:w-3/12">
        <li
          class="hover:text-gray-600 transition-colors py-2 lg:py-0"
          title="Coins"
        >
          <router-link to="/coins">
            Coins
          </router-link>
        </li>
        <li 
          class="hover:text-gray-600 transition-colors py-2 lg:py-0"
          title="About"
        >
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li 
          class="hover:text-gray-600 transition-colors py-2 lg:py-0"
          title="Contact"
        >
          <router-link to="/contact">
            Contact
          </router-link>
        </li>
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
    </nav>
  </header>
</template>

<script>

export default {
  name: "BaseNavbar",
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
