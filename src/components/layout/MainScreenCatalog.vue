<script setup lang="js">
  import Status from "@/components/layout/CatalogMainStatus.vue";
  import Item from "@/components/layout/CatalogItemCard.vue"

  import FalloutItem from "@/assets/pictures/FalloutItem.png"
  import BlueNight from "@/assets/pictures/BlueNight.png"
  import AppleTea from "@/assets/pictures/AppleTea.png"
  import CherryTea from "@/assets/pictures/CherryTea.png"
  import Obormot from "@/assets/pictures/Obormot.png"
  import Mazok from "@/assets/pictures/Mazok.png"
  import Pomidori from "@/assets/pictures/Pomidori.png"
  import Cepka from "@/assets/pictures/Cepka.png"
  import Bottle from "@/assets/pictures/Bottle.png"
  import Teddy from "@/assets/pictures/Teddy.png"

  const products = [
    {
      id: 1,
      img: FalloutItem,
      price: "6 750 ₽",
      littleTitle: "Обложка на паспорт “Fallout Убежище 13” из м...",
      status: 2
    },
    {
      id: 2,
      img: BlueNight,
      price: "390 ₽",
      littleTitle: "Масляная картина “Синий вечер”",
      status: 2
    },
    {
      id: 3,
      img: AppleTea,
      price: "390 ₽",
      littleTitle: "Натуральный яблочный чай",
      status: 2
    },
    {
      id: 4,
      img: CherryTea,
      price: "6 750 ₽",
      littleTitle: "Натуральный вишневый чай",
      status: 1
    },
    {
      id: 5,
      img: Obormot,
      price: "16 750 ₽",
      littleTitle: "Керамическая статуэтка “Кот-обормот”",
      status: 2
    },
    {
      id: 6,
      img: Mazok,
      price: "2 750 ₽",
      littleTitle: "Фактурная картина “Импровизация”",
      status: 1
    },
    {
      id: 7,
      img: Pomidori,
      price: "6 750 ₽",
      littleTitle: "Доска деревянная нарезочная кухонная из ...",
      status: 1
    },
    {
      id: 8,
      img: Cepka,
      price: "1 750 ₽",
      littleTitle: "Бусы из натуральных материалов",
      status: 2
    },
    {
      id: 9,
      img: Bottle,
      price: "160 ₽",
      littleTitle: "Стеклянная баночка с пробкой",
      status: 2
    },
    {
      id: 10,
      img: Teddy,
      price: "27 000 ₽",
      littleTitle: "Мишка ТЕДДИ большой классический мишка  с ...",
      status: 2
    }
  ]
</script>

<template>
  <div class="content">
    <div class="content__status-filter">
      <Status text="Популярное"/>
      <div class="content__status-filter__filter">
        <div class="content__status-filter__filter-text">
          Фильтры
        </div>
        <div class="content__status-filter__filter-icon">
          <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.5L11.5 11.5L21.5 1.5" stroke="#7B5537" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="content__catalog">
      <Item
          v-for="p in products"
          :key="p.id"
          :img="p.img"
          :price="p.price"
          :littleTitle="p.littleTitle"
          :status="p.status"
      />
    </div>
  </div>
  <div class="show-more">
    <button class="show-more__btn">
      Показать ещё
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .content{
    box-sizing: border-box;
    max-width: 81.125rem;
    margin-top: 2.1875rem;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    padding: 1.25rem;
    background-color: var(--white-background);
    transition: width 0.3s ease;

    &__status-filter{
      color: var(--main-gray-text);
      width: 100%;
      display: flex;
      justify-content: space-between;


      &__filter{
        display: inline-flex;
        align-items: center;
        font-size: 2rem;
        gap: 1.4375rem;
      }
    }

    &__catalog{
      display: inline-flex;
      justify-content: space-between;
      gap: 3.1875rem;
      margin-top: 1.25rem;
      flex-wrap: wrap;
    }
  }
  .show-more {
    width: 100%;
    display: flex;
    justify-content: center;

    &__btn {
      margin-top: 1.25rem;
      color: white;
      font-size: 1rem;
      font-family: "Montserrat", sans-serif;
      text-align: center;
      width: 100%;
      max-width: 12.25rem;
      padding: 0.3125rem 0.625rem;
      border: none;
      border-radius: 5px;
      background-color: var(--orange-background);
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s;

      &:hover {
        background-color: var(--orange-background-hover);
      }

      &:active {
        background-color: var(--orange-background-active);
        transform: scale(0.98);
      }

      &:focus {
        outline: 2px solid var(--orange-background-focus);
        outline-offset: 2px;
      }
    }
  }

  @media (max-width: 1298px) {
    .content{
      width: 1024px;
      transition: width 0.3s ease;
    }
  }

  @media (max-width: 1024px) {
    .content{
      width: 856px;
      transition: width 0.3s ease;
    }
  }

  @media (max-width: 856px) {
    .content{
      width: 48rem;
      transition: width 0.3s ease;

      &__catalog{
        width: 100%;
        gap: 1.875rem;
      }
    }
  }

  @media (max-width: 768px) {
    .content{
      width: 26.25rem;

      &__status-filter{

        &__filter{
          gap: 0.5rem;
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 440px) {
    .content{
      width: 24.375rem;
    }
  }
</style>