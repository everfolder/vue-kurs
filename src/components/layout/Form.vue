<script setup lang="ts">

</script>

<template>
<div class="f-content">
  <form action="" class="f-content__form">
    <input type="text" class="f-content__form-email" placeholder="Ваш email...">
    <textarea type="text" class="f-content__form-message" placeholder="Что вас интересует / беспокоит?"></textarea>
  </form>
</div>
</template>

<style scoped lang="scss">
  .f-content{

    &__form{
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      color: var(--main-gray-text);

      &-email{
        background-color: transparent;
        font-family: "Montserrat", sans-serif;
        box-sizing: border-box;
        font-size: 1.5rem;
        border-radius: 8px;
        border: 2px solid var(--light-background);
        width: 23.8125rem;
        padding: 0.625rem;
      }
      &-message{
        background-color: transparent;
        font-family: "Montserrat", sans-serif;
        box-sizing: border-box;
        text-align: start;
        font-size: 1.5rem;
        border-radius: 8px;
        border: 2px solid var(--light-background);
        height: 15rem;
        width: 38.6875rem;
        padding: 0.625rem;
      }
    }
  }

  @media (max-width: 1024px) {
    .f-content{
      &__form{

        &-email{
          width: 502px;
        }
        &-message{
          width: 502px;
        }
      }
    }
  }

  @media (max-width: 856px){
    .f-content{
      &__form{

        &-email{
          width: 410px;
        }
        &-message{
          width: 410px;
        }
      }
    }
  }

  @media (max-width: 768px){
    .f-content{
      &__form{

        &-email{
          width: 390px;
        }
        &-message{
          width: 390px;
        }
      }
    }
  }

  @media (max-width: 440px){
    .f-content{
      &__form{

        &-email{
          width: 327px;
        }
        &-message{
          width: 327px;
        }
      }
    }
  }
</style>