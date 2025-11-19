<template>
  <div class="icon-text">
    <slot name="icon"></slot>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.icon-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  margin-top: 4px;
  font-size: 1rem;
  color: $main-gray-text;
}
</style>
