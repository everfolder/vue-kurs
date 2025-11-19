<script setup lang="js">
  import HistoryComponent from '@/components/layout/history-component.vue'
  import HeroBanner from '@/components/layout/HeroBanner.vue'
</script>

<template>
  <div class="a-container">
    <HeroBanner />
    <div class="a-container__history">
      <div class="a-container__history-title">
        Наша история
      </div>
      <div class="a-container__history-chronology">
        <HistoryComponent title="2024" text="Возникновение идеи о создании бренда"/>
        <svg class="a-container__history-chronology__arrow" width="64" height="54" viewBox="0 0 64 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 27L62.5 27M62.5 27L37.0833 52.5M62.5 27L37.0833 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <HistoryComponent title="2025" text="Начало истории бренда ФИБОНАЧЧИ"/>
      </div>
    </div>
    <div class="a-container__mission">
      <div class="a-container__mission-text">
        Наша миссия - превращать творчество в самореализацию
      </div>
    </div>
    <div class="a-container__command">
      <div class="a-container__command-img">
        <img src="@/assets/pictures/Dmitry.png" alt="">
      </div>
      <div class="a-container__command-text">
        <div class="a-container__command-text__title">
          Мотолин Дмитрий
        </div>
        <div class="a-container__command-text__disc">
          Основатель и президент ФИБОНАЧЧИ
        </div>
        <div class="a-container__command-text__text">
          Мы каждый день совершенствуем наши навыки, что бы отвечать требованиям, которые нам
          ставит и неизбежно будет ставить далее время! Мы не адаптируемся к будущему — мы создаём
          его. Наша цель — не просто идти в ногу со временем, а задавать новые стандарты, опережая
          ожидания рынка и наших клиентов.  Мы понимаем: наш рост — это гарантия вашего успеха. Быть
          на шаг впереди — значит предлагать вам не просто работающие решения, а стратегические
          преимущества, которые остаются актуальными завтра и послезавтра.Наш главный проект — это
          наше собственное развитие. И мы инвестируем в него без остатка.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .a-container{
    color: var(--main-gray-text) ;
    transition: all 0.3s ease;

    &__history{
      padding: 1.375rem 0 1.375rem 0;
      width: 100%;
      display: inline-flex;
      gap: 9%;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      color: var(--white-background);
      border-radius: 8px;
      background-color: var(--dark-background);
      transition: all 0.3s ease;

      &-title{
        font-family: "Montserrat", sans-serif;
        font-size: 3.25rem;
      }

      &-chronology{
        align-items: center;
        display: inline-flex;

        &__arrow{
          margin: 0 0.9375rem 0 0.9375rem;
        }
      }
    }

    &__mission{
      background-color: var(--white-toBlack-color);
      display: flex;
      justify-content: center;
      height: 69px;
      margin-top: 50px;
      border-radius: 8px;

      &-text{
        text-align: center;
        justify-content: center;
        display: flex;

        font-size: 2rem;
        font-family: "MontserratBold", sans-serif;
        width: 100%;
        align-items: center;
      }
    }

    &__command{
      margin-top: 2.75rem;
      display: inline-flex;
      width: 100%;
      justify-content: space-between;
      transition: all 0.3s ease;

      &-text{
        max-width: 51.3125rem;
        display: flex;
        flex-direction: column;
        color: var(--main-gray-text) ;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        gap: 0.9375rem;
        text-align: justify;
        &__title{
          font-size: 2rem;
        }
        &__disc{

        }
        &__text{

        }
      }
    }
  }

  @media (max-width: 1298px) {
    .a-container{
      &__mission{
        &-text{
          font-size: 1.5rem;
        }
      }
      &__command{
        gap: 2rem;
        width: 1024px;
      }
    }
  }

  @media (max-width: 1024px) {
    .a-container{
      transition: all 0.3s ease;

      &__history{
        transition: all 0.3s ease;

        &-title{
          max-width: 11.25rem;
        }
      }
      &__mission{
        font-size: 1.5rem;
      }
      &__command{
        width: 856px;
        display: flex;
        align-items: center;
      }
    }
  }

  @media (max-width: 856px) {
    .a-container{

      &__history{
        padding: 1.25rem;

        &-title{
          font-size: 2rem;
        }
      }
      &__mission{
        width: 48rem;
        &-text{
          width: 80%;
        }
      }
      &__command{
        width: 768px;
      }
    }
  }

  @media (max-width: 768px) {
    .a-container{
      height: auto;
      transition: all 0.3s ease;

      &__history{
        padding: 1.25rem;
        flex-direction: column;
        transition: all 0.3s ease;

        &-title{
          max-width: 15rem;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
      }
      &__mission{
        margin-top: 13px;
        width: 26.25rem;

        &-text{
          font-size: 0.875rem;
        }
      }
      &__command{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 420px;
        gap: 22px;

        &-text{
          box-sizing: border-box;
          padding: 0 20px 0 20px;
          width: 100%;
          &__title{
            width: 100%;
            text-align: center;
          }
          &__disc{
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }

  @media (max-width: 440px) {
    .a-container{
      &__mission{
        width: 24.375rem;
      }
      &__command{
        width: 24.375rem;
      }
    }
  }
</style>