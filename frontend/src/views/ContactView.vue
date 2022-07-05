<template>
  <div class="ContactView p-2">
    <div class="flex flex-col justify-center items-center max-w-md rounded overflow-hidden shadow-lg bg-white text-gray-900 p-2 ">
      <h1 class="text-center text-blue-600 text-4xl py-5">
        Contact
      </h1>
      <p class="text-justify">
        Have you did find any bug or have a suggestion? Please contact the developers with the following form:
      </p>
      <form 
        method="post"
        class="bg-white w-full p-4"
      >
        <div class="mb-1">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" 
            for="clientName"
          >
            Full name
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            :class="{'border-red-500': v$.clientName.$error}"
            name="clientName"
            id="clientName" 
            type="text"
            placeholder="Satoru Gojo"
            v-model.trim="clientName"
          >
          <p 
            v-if="v$.clientName.$error"
            class="text-red-500 text-xs italic"
          >Please fill out this field.</p>
        </div>
        <div class="mb-1">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" 
            for="clientEmail"
          >
            Prefered e-mail
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="{'border-red-500': v$.clientEmail.$error}"
            name="clientEmail"
            id="clientEmail" 
            type="email" 
            placeholder="satoru.gojo@gmail.com"
            v-model.trim="clientEmail"
          >
          <p 
            v-if="v$.clientEmail.$error"
            class="text-red-500 text-xs italic"
          >Please fill out this field.</p>
        </div>
        <div class="mb-1">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" 
            for="clientPhone"
          >
            Prefered telephone number
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            :class="{'border-red-500': v$.clientPhone.$error}"
            name="clientPhone"
            id="clientPhone" 
            type="tel" 
            placeholder="+5591986253389"
            v-model.trim="clientPhone"
          >
          <p 
            v-if="v$.clientPhone.$error"
            class="text-red-500 text-xs italic"
          >Please fill out this field.</p>
        </div>
        <div class="mb-6">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" 
            for="clientMessage"
          >
            Describe your message
          </label>
          <textarea 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            :class="{'border-red-500': v$.clientMessage.$error}"
            name="clientMessage"
            id="clientMessage" 
            type="tel" 
            placeholder="My name is Satoru Gojo and I ..."
            v-model.trim="clientMessage"
          ></textarea>
          <p 
            v-if="v$.clientMessage.$error"
            class="text-red-500 text-xs italic"
          >Please fill out this field.</p>
        </div>
        <div class="flex items-center justify-center">
          <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors" 
            type="button"
            @click="sendMessage()"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import { required, email, numeric, minLength } from "@vuelidate/validators"

export default {  
  name: "ContactView",

  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      clientMessage: '',
    }
  },

  validations() {
    return {
      clientName: { required, minLength: minLength(5) },
      clientEmail: { required, email },
      clientPhone: { required, numeric, minLength: minLength(11) },
      clientMessage: { required, minLength: minLength(10) },
    }
  },

  methods: {
    sendMessage() {
      this.v$.$touch()
    }
  },

  mounted() {
    document.title = "Contact | CoinApp - Crypto Financial Market Online"
  }
}
</script>
