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
      <slot name="icon"></slot>
      <span class="text">{{ text }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.icon-text {
  gap: 0.875rem;
  display: inline-flex;
  align-items: center;
}
.text {
  font-size: 1.25rem;
  color: var(--main-gray-text);
}
</style>
