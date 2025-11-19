<script setup lang="js">
  import { defineProps } from "vue";
  const props = defineProps({
    text: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <span class="status">{{ text }}</span>
</template>

<style scoped lang="scss">
  .status {
    font-size: 2rem;
    font-family: "MontserratBold", sans-serif;
  }

  @media (max-width: 768px) {
    .status {
      font-size: 1rem;
    }
  }
</style>