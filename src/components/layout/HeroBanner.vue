<script setup lang="ts">

</script>

<template>
  <div class="a-container__preview">
    <div class="a-container__preview-text">
      <div class="a-container__preview-text__bepis">
        ФИБОНАЧЧИ
      </div>
      <div class="a-container__preview-text__text">
        IT-платформа, где встречаются коммерция, контент и сообщество в сфере ручной работы.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.a-container__preview{
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 2.75rem 0 2rem 0;
  background-color: var(--light-background);
  background-image: url("@/assets/pictures/PreviewBack.png");
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
  height: 19.4375rem;
  padding-left: 9.375rem;
  transition: all 0.3s ease;

  &-text{
    max-width: 38rem;

    &__bepis{
      font-family: "MontserratBold", sans-serif;
      font-size: 3rem;
    }
    &__text{
      margin-top: -0.5rem;
      padding-left: 1.1rem;
      font-family: "Montserrat", sans-serif;
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 1298px) {
  .a-container__preview {
    padding-left: 20px;
    transition: all 0.3s ease;
  }
}

@media (max-width: 1024px) {
  .a-container__preview {
    &-text{
      &__bepis{
        font-size: 2rem;
      }
      &__text{
        margin-top: 0;
        font-size: 1.2rem;
        max-width: 28rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .a-container__preview {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 420px;
    height: 150px;
    background-image: none;
    padding: 1.25rem;

    &-text{
      color: var(--main-placeholder);
      &__text{
        font-family: "MontserratSemi", sans-serif;
        font-size: 0.825rem;
        max-width: 21rem;
      }
    }
  }
}

@media (max-width: 440px) {
  .a-container__preview {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 390px;
    height: 150px;
    background-image: none;
    padding: 1.25rem;

    &-text{
      color: var(--main-placeholder);
      &__text{
        font-family: "MontserratSemi", sans-serif;
        font-size: 0.825rem;
        max-width: 21rem;
      }
    }
  }
}
</style>