<template>
  <footer class="flex justify-center items-center p-6 bg-gray-700 text-white">
    {{ currentYear}} &copy; {{ author}}
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {
      author: "Gabriel Santos Cardoso",
      currentYear: new Date().getFullYear(),
    }
  }
}
</script>
