<script setup lang="js">
import Status from "@/components/layout/CatalogMainStatus.vue";
import Item from "@/components/layout/CatalogItemCard.vue"
import HeroBanner from "@/components/layout/HeroBanner.vue";

import Obormot from "@/assets/pictures/Obormot.png"

const products = [
  {
    id: 1,
    img: Obormot,
    price: "16 750 ₽",
    littleTitle: "Керамическая статуэтка “Кот-обормот”",
    status: 2
  }
]
</script>

<template>
  <HeroBanner />
  <div class="content">
    <div class="content__status-filter">
      <Status text="Избранное"/>
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
    <div class="content__line"></div>
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
</template>

<style lang="scss" scoped>
.content{
  margin-bottom: 100px;
  box-sizing: border-box;
  max-width: 81.125rem;
  margin-top: 2.1875rem;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  padding: 1.25rem;
  background-color: var(--white-background);
  transition: width 0.3s ease;

  &__line{
    height: 1px;
    width: 100%;
    background-color: var(--dark-background);
    margin: 20px 0 20px 0;
  }

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
.show-more{
  width: 100%;
  display: flex;
  justify-content: center;
  &__btn{
    margin-top: 1.25rem;
    color: white;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    width: 100%;
    max-width: 12.25rem;
    padding: 0.3125rem 0.625rem 0.3125rem 0.625rem ;
    border: none;
    border-radius: 5px;
    background-color: var(--orange-background);
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