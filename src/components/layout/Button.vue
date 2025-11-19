<script setup lang="ts">
  import { defineComponent } from 'vue'
  const props = defineProps({
    text: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
  .btn{
    border-radius: 5px;
    height: 1.875rem;
    width: 12.25rem;
    border: none;
    background-color: var(--orange-background);
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    color: white;
    text-align: center;
  }
</style>