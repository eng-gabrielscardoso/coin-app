<template>
  <header class="absolute lg:flex lg:items-center w-full py-4 px-6 text-white border-b-2 border-b-gray-400">
    <div class="flex justify-between items-center">
      <router-link 
        to="/"
        class="flex hover:text-gray-600 transition-colors"
        title="CoinApp"
      >
        <CurrencyIcon />
        CoinApp
      </router-link>
      <button 
        class="text-white hover:text-gray-600 transition-colors cursor-pointer block lg:hidden" 
        type="button" 
        @click="toggleNavbar()"
      >
        <MenuIcon />
      </button>
    </div>
    <nav
      :class="{'hidden': !showMenu}"
      class="lg:flex lg:flex-grow lg:items-center"
    >
      <ul class="flex-col lg:flex lg:flex-row justify-between list-none ml-auto lg:w-3/12">
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
            <GithubIcon />
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
            <LinkedinIcon  />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import CurrencyIcon from '@/assets/icons/CurrencyIcon.vue'
import GithubIcon from '@/assets/icons/GithubIcon.vue'
import LinkedinIcon from '@/assets/icons/LinkedinIcon.vue'
import MenuIcon from '@/assets/icons/MenuIcon.vue'

export default {
  name: "BaseNavbar",
  components: {
    CurrencyIcon,
    GithubIcon,
    LinkedinIcon,
    MenuIcon,
  },
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
