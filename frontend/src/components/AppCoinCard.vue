<template>
  <div class="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-600 p-2 hover:cursor-pointer hover:bg-gray-200 hover:text-gray-500 transition-colors">
    <img :src="coinDetails.image.small" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="max-w-sm font-bold text-md">
        {{ coinDetails.name }}
      </div>
      <div class="max-w-sm max-h-10 font-light text-sm overflow-hidden text-ellipsis">
        <p v-html="coinDetails.description.en"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCoinCard",
  props: {
    coinDetails: {
      type: Object,
      required: true,
    }
  }
}
</script>
