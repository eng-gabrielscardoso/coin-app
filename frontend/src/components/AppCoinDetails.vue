<template>
  <div class="mt-6 p-2 lg:px-6 bg-white rounded w-10/12 min-h-screen">
    <div class="flex flex-col md:flex-row justify-between items-center w-full">
      <div class="flex justify-center items-center md:w-5/12 my-4">
        <img 
          :src="coinDetails.image.small" 
          :alt="coinDetails.name + ' image'" 
          :title="coinDetails.name"
        >
        <h1 class="text-black text-6xl">
          {{ this.coinDetails.name }}
        </h1>
      </div>
      <AppChart 
        :coinData="coinDetails"
        class="flex items-center justify-center w-full md:w-7/12 h-64 border rounded"
      />
    </div>
    <div class="my-4 text-md">
      <p 
        v-html="coinDetails.description.en"
        class="font-light"
      ></p>
    </div>
  </div>
</template>

<script>
import AppChart from "./AppChart.vue"

export default {
  name: "AppCoinDetails",
  props: {
    coinDetails: {
      type: Object,
      required: true,
    }
  },
  components: {
    AppChart,
  },
}
</script>
