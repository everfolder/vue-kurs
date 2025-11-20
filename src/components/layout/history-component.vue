<script setup lang="ts">
  import { defineProps } from "vue";
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <div class="h-container">
    <div class="h-container__title">
      {{ title }}
    </div>
    <div class="h-container__description">
      {{ text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  .h-container{
    max-width: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    color: var(--main-gray-text);

    &__title{
      font-size: 5.3125rem;
    }
    &__description{
      margin-top: -1rem;
      font-size: 1rem;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .h-container{
      width: 127px;
      &__title{
        font-size: 2.5rem;
        text-align: center;
      }
      &__description{
        margin-top: 0;
        font-size: 0.875rem;
      }
    }
  }
</style>