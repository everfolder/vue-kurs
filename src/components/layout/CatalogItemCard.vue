<script setup lang="js">
  import statusOrder from "@/components/layout/item-status-only-order.vue";
  import statusAvailable from "@/components/layout/item-status-Available.vue"
  import { defineProps } from "vue";
  const props = defineProps({
    img: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    littleTitle: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      required: true
    }
  })

</script>

<template>
  <div class="i-content">
    <div class="i-content__img-block">
      <div class="i-content__img-block__heart">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3 9.77775C16.641 8.48 18 6.92442 18 4.88889C18 3.59227 17.4784 2.34877 16.5502 1.43192C15.6218 0.515078 14.3628 0 13.05 0C11.466 0 10.35 0.444442 8.99998 1.77778C7.64999 0.444442 6.53396 0 4.94999 0C3.63717 0 2.37812 0.515078 1.44981 1.43192C0.521516 2.34877 0 3.59227 0 4.88889C0 6.93333 1.35 8.48891 2.7 9.77775L8.99998 16L15.3 9.77775Z" fill="white"/>
        </svg>
      </div>
      <div class="i-content__img-block__img">
        <img :src=img alt="" class="i-content__img-block__img__item-image">
      </div>
    </div>
    <div class="i-content__info-block">
      <span class="i-content__info-block__price">
        {{ price }}
      </span>
      <span class="i-content__info-block__title">
        {{ littleTitle }}
      </span>
    </div>
    <div class="i-content__state-block__status-button">
      <div class="i-content__state-block__status-button__status">
        <statusOrder v-if="status === 1" />
        <statusAvailable v-if="status === 2" />
      </div>
      <button class="i-content__state-block__status-button__btn">
        В корзину
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .i-content{
    display: flex;
    flex-direction: column;
    background-color: var(--white-background);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 13.125rem;
    border-radius: 8px;

    &__img-block{
      position: relative;

      &__heart{
        position: absolute;
        top: 11px;
        right: 11px; // чтобы было в верхнем правом углу
        z-index: 2;
      }
      &__img{
        position: relative;
      }
    }

    &__info-block{
      padding: 0.4375rem 0.4375rem 0 0.4375rem;
      display: flex;
      flex-direction: column;

      &__price{
        font-family: "MontserratBold", sans-serif;
      }

      &__title{
        font-size: 0.875rem;
      }
    }

    &__state-block__status-button{
      margin-top: auto;
      padding: 0.875rem 0.4375rem 0.4375rem 0.4375rem;
      display: flex;
      flex-direction: column;

      &__status{}
      &__btn{
        margin-top: 0.3125rem;
        color: white;
        font-size: 1rem;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        width: 100%;
        padding: 0.3125rem 0.625rem 0.3125rem 0.625rem ;
        border: none;
        border-radius: 5px;
        background-color: var(--orange-background);
      }
    }
  }

  @media (max-width: 1298px) {
    .i-content{
      width: 11.875rem;
      &__img-block{

        &__img{

          &__item-image{max-width: 11.875rem;}
        }
      }

      &__info-block{
        padding: 0.3125rem 0.3125rem 0.3125rem;
      }
    }
  }

  @media (max-width: 1024px) {
    .i-content{
      width: 13.125rem;
      &__img-block{

        &__img{

          &__item-image{max-width: 13.125rem;}
        }
      }
    }
  }

  @media (max-width: 768px) {
    .i-content{
      width: 10.46875rem;
      &__img-block{

        &__img{

          &__item-image{width: 10.46875rem;}
        }
      }
    }
  }

  @media (max-width: 440px) {
    .i-content{
      width: 9.375rem;
      &__img-block{

        &__img{

          &__item-image{width: 9.375rem;}
        }
      }
    }
  }
</style>