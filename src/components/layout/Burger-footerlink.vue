<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav>
    <div class="icon-text">
      <span class="text">{{ text }}</span>
      <slot name="icon"></slot>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.icon-text {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  color: $main-gray-text;
}
</style>
