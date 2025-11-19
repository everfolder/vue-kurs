<script setup lang="ts">
  import Button from "@/components/layout/Button.vue"
  import Form from "@/components/layout/Form.vue"
</script>

<template>
  <div class="c-content">
    <div class="c-content__title">
      <div class="c-content__title-text">
        Мы открыты для обратной связи и с удовольствием ответим на все ваши вопросы и предложения.
      </div>
    </div>
    <div class="c-content__line"></div>
    <div class="c-content__address">
      <div class="c-content__address-content">
        <div class="c-content__address-content__text">
          Мы находимся по адресу ул. октябрьская д. 16\10, Нижний Новгород
        </div>
        <div class="c-content__address-content__img">
          <img src="@/assets/pictures/Map.png" alt="" class="c-content__address-content__img-img">
        </div>
      </div>
    </div>
    <div class="c-content__contact">
      <div class="c-content__contact-text">
        <div class="c-content__contact-text__title">
          Наши контакты
        </div>
        <div class="c-content__contact-text__text">
          <div class="c-content__contact-text__text-number">
            8 999 999 99 99
          </div>
          <div class="c-content__contact-text__text-email">
            hand-made@mail.ru
          </div>
        </div>
        <div class="c-content__contact-text__icon">
          <div><img src="@/assets/pictures/MAX.png" alt=""></div>
          <div><img src="@/assets/pictures/VK.png" alt=""></div>
        </div>
      </div>
      <form class="c-content__contact-form">
        <!--          Компонент формы!-->
        <!--          Компонент кнопки!-->
        <Form />
        <Button text="Отправить" />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .c-content{
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    color: $main-gray-text;
    border-radius: 8px;
    padding: 20px;
    margin-top: 2rem;
    background-color: $white-background;
    transition: all 0.3s ease;

    &__title{
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 1.5rem;
      text-align: center;
      &-text{
        width: 90%;
      }
    }
    &__line{
      margin: 1.25rem 0 1.25rem 0;
      width: 100%;
      height: 1px;
      background-color: $dark-background;
    }
    &__address{
      width: 100%;

      &-content{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 2rem;
        font-family: "Montserrat", sans-serif;
        color: $main-gray-text;
        font-size: 1.5rem;

        &__text{
          text-align: center;
        }
      }
    }
    &__contact{
      margin-top: 2rem;
      width: 100%;
      font-size: 1.5rem;
      display: inline-flex;
      justify-content: center;
      gap: 8.3125rem;

      &-text{

        &__title{

        }
        &__text{
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          margin: 2.5rem 0 1.5625rem 0;
          &-number{

          }
          &-email{

          }

        }
        &__icon{
          display: inline-flex;
          gap: 0.625rem;
        }
      }

      &-form{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
    }
  }

  @media (max-width: 1298px){
    .c-content{
      max-width: 1024px;

      &__contact{
        gap: 62px;
      }
    }
  }

  @media (max-width: 1024px){
    .c-content{
      width: 856px;
    }
  }

  @media (max-width: 856px){
    .c-content{
      max-width: 768px;
    }
  }

  @media (max-width: 768px){
    .c-content{
      max-width: 420px;
      &__address{

        &-content{

          &__img{

            &-img{
              width: 390px;
            }
          }
        }
      }

      &__contact{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &-text{

          &__text{
            margin: 0.3125rem 0 1.5625rem 0;
            gap: 0;
          }
        }
      }
    }
  }

  @media (max-width: 440px){
    .c-content{
      max-width: 390px;
      &__address{

        &-content{

          &__img{

            &-img{
              width: 330px;
            }
          }
        }
      }

      &__contact{


        &-text{

          &__text{

          }
        }
      }
    }
  }
</style>