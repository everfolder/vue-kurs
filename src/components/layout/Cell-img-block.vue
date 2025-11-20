<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  images: {
    type: Array,   // просто Array
    required: true
  }
})
</script>

<template>
  <div class="images-block-over">
    <div class="images-block-over__img">
      <img
          v-for="(img, i) in props.images"
          :key="i"
          :src="img"
          class="image"
      >
      <img
          v-for="(img, i) in props.images"
          :key="i"
          :src="img"
          class="image"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  img{
    width: 18.75rem;
  }
  .images-block-over{
    margin-top: 2.1875rem;
    width: 1298px;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease;
    overflow-inline: hidden;

    &__img{
      display: flex;
      gap: 2rem;
      align-items: center;

      animation: scroll infinite 40s;
      @keyframes scroll {
        from{
          transform: translatex(0);
        }
        to{
          transform: translateX(-50%);
        }
      }
    }

  }

  @media (max-width: 1298px) {
    img{
      width: 250px;
    }
    .images-block-over{
      width: 1024px;
    }
  }

  @media (max-width: 1024px) {
    img{
      width: 200px;
    }
    .images-block-over{
      margin-top: 1.0625rem;
      width: 856px;
    }
  }

  @media (max-width: 856px) {
    img{
      width: 175px;
    }
    .images-block-over{
      width: 768px;
    }
  }

  @media (max-width: 768px) {
    .images-block-over{
      display: none;
    }
  }

  @media (max-width: 440px) {


  }
</style>