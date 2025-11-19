<script lang="js">
import { defineComponent, ref } from 'vue'
import HeaderIconComponent from "@/components/layout/ComponentHeader.vue";
import BurgerMainLink from "@/components/layout/Burger-main-link.vue";
import BurgerFooterlink from "@/components/layout/Burger-footerlink.vue"

export default defineComponent({
  name: "header",
  components: { HeaderIconComponent, burgerMainLink: BurgerMainLink, burgerFooterLink: BurgerFooterlink },
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    }

    return { isMenuOpen, toggleMenu };
  }
})
</script>

<template>
  <header>
    <nav class="header">
        <div class="header__logo">
                <router-link to="/">
          <div class="header__logo__icon">
            <svg width="67" height="60" viewBox="0 0 67 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.8392 44.2649C35.2289 44.2649 45.2727 34.6132 45.2727 22.7071C45.2727 10.801 35.2289 1.14917 22.8392 1.14917C10.4496 1.14917 0.405762 10.801 0.405762 22.7071C0.405762 34.6132 10.4496 44.2649 22.8392 44.2649Z" fill="#E2D9C4"/>
              <path d="M64.3236 14.1198L64.3209 14.1143C64.1167 13.6975 63.6166 13.5267 63.2038 13.7329L0.747398 44.9286C0.334641 45.1347 0.165558 45.6397 0.369734 46.0565L0.372432 46.062C0.576608 46.4788 1.07673 46.6495 1.48948 46.4434L63.9459 15.2477C64.3587 15.0415 64.5277 14.5365 64.3236 14.1198Z" fill="#32363E"/>
              <path d="M65.5326 16.1029C66.343 15.6981 66.5349 14.4205 65.9611 13.2492C65.3873 12.078 64.2652 11.4567 63.4548 11.8615C62.6443 12.2663 62.4524 13.5439 63.0262 14.7152C63.6 15.8864 64.7221 16.5077 65.5326 16.1029Z" fill="#32363E"/>
              <path d="M59.233 3.16632L59.2287 3.16197C58.9031 2.83318 58.3752 2.83319 58.0496 3.16197L3.53235 58.2097C3.20672 58.5385 3.20673 59.0716 3.53234 59.4004L3.53665 59.4047C3.86227 59.7335 4.3902 59.7335 4.71582 59.4047L59.233 4.35696C59.5587 4.02818 59.5587 3.49511 59.233 3.16632Z" fill="#32363E"/>
              <path d="M61.0216 4.63644C61.7275 3.92366 61.5579 2.59683 60.6429 1.67286C59.7278 0.748897 58.4137 0.577692 57.7078 1.29046C57.0019 2.00324 57.1715 3.33008 58.0866 4.25404C59.0016 5.17801 60.3157 5.34921 61.0216 4.63644Z" fill="#32363E"/>
              <path d="M34.4029 48.7019C46.8765 48.7019 56.9885 38.4915 56.9885 25.8965C56.9885 13.3014 46.8765 3.09106 34.4029 3.09106C21.9292 3.09106 11.8173 13.3014 11.8173 25.8965C11.8173 38.4915 21.9292 48.7019 34.4029 48.7019Z" fill="#E2D9C4"/>
              <path d="M48.9426 35.8889C48.9426 39.0046 48.3218 41.9789 47.202 44.6829C45.1631 49.6053 41.4628 53.6551 36.8008 56.1132C36.0583 56.5127 35.2853 56.863 34.4941 57.1702C32.3031 58.0244 29.9478 58.5468 27.489 58.6697C14.556 55.9842 4.90342 44.3572 5.04949 30.524C5.06166 29.6329 5.11035 28.748 5.20164 27.8815C6.48581 24.4155 8.58553 21.349 11.2634 18.9216C11.9816 18.2702 12.7484 17.6618 13.5518 17.1026C17.1913 14.5707 21.5977 13.0835 26.357 13.0835C31.8528 13.0835 36.886 15.0623 40.8055 18.3624C45.7778 22.5412 48.9487 28.8463 48.9487 35.895L48.9426 35.8889Z" fill="#E2D9C4"/>
              <path d="M44.0371 59.2595C56.5108 59.2595 66.6227 49.0491 66.6227 36.4541C66.6227 23.859 56.5108 13.6487 44.0371 13.6487C31.5635 13.6487 21.4515 23.859 21.4515 36.4541C21.4515 49.0491 31.5635 59.2595 44.0371 59.2595Z" fill="#E2D9C4"/>
              <path d="M46.0456 40.6024C43.7998 42.9622 40.5741 44.2773 36.3686 44.5416V47.9215H31.0615V44.4924C26.8317 44.1974 23.5938 42.87 21.3542 40.5102C19.1084 38.1504 17.9885 34.9364 17.9885 30.8743C17.9885 26.8122 19.1084 23.5675 21.3542 21.2384C23.5999 18.9093 26.8377 17.5819 31.0615 17.2562V14.0483H36.3686V17.207C40.5741 17.502 43.7998 18.8417 46.0456 21.2138C48.2913 23.5859 49.4112 26.8061 49.4112 30.8743C49.4112 34.9425 48.2913 38.2426 46.0456 40.6024ZM31.0615 38.8878V22.9099C28.5175 23.2049 26.6369 23.9977 25.4136 25.2943C24.1903 26.5849 23.5756 28.4469 23.5756 30.8805C23.5756 35.5694 26.0709 38.2426 31.0615 38.894V38.8878ZM41.9983 36.4604C43.2338 35.1392 43.8485 33.2648 43.8485 30.8313C43.8485 26.0809 41.3532 23.4446 36.3625 22.9099V38.8878C38.8822 38.5929 40.7567 37.7817 41.9922 36.4604H41.9983Z" fill="white"/>
              <path d="M58.8933 19.1612C54.5296 9.37783 44.8344 2.51962 33.5081 2.39671C18.8405 2.23693 6.67438 13.4338 5.20762 27.8815C5.11633 28.748 5.06764 29.6329 5.05547 30.524C4.9094 44.3572 14.562 55.9842 27.495 58.6697C29.2478 59.0384 31.0554 59.2412 32.9117 59.2596C34.3054 59.2781 35.6687 59.1859 37.0137 59.0077C50.6405 57.1518 61.2182 45.4326 61.3704 31.1324C61.4191 26.8675 60.5305 22.8116 58.9055 19.1612H58.8933ZM36.8007 56.1132C35.7417 56.2607 34.6645 56.3406 33.569 56.3467C33.4107 56.3529 33.2586 56.3529 33.1003 56.3467C19.224 56.1992 8.10462 44.7197 8.25068 30.7083C8.29937 26.4373 9.3827 22.4244 11.2694 18.9154C12.5231 16.5802 14.1299 14.4662 16.0105 12.6472C20.5812 8.22865 26.8073 5.53698 33.642 5.61687C42.546 5.7152 50.318 10.4778 54.7 17.5819C55.3755 18.6696 55.9659 19.8065 56.465 20.9987C57.8039 24.139 58.5281 27.6111 58.4855 31.2553C58.3516 44.0007 48.9364 54.4417 36.8007 56.1132Z" fill="#F2EEE0"/>
            </svg>
          </div>
                </router-link>
          <div class="header__logo__name">
            <div class="header__logo__name-main">
              ФИБОНАЧЧИ
            </div>
            <div class="header__logo__name-desc">
              ярмарка мастеров
            </div>
          </div>
        </div>
      <div class="header__catalog">
        <div class="header__catalog-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4286 0H0V2.28571H11.4286V0Z" fill="#7B5537"/>
            <path d="M0 4.57153H16V6.85725H0V4.57153Z" fill="#7B5537"/>
            <path d="M11.4286 9.14282H0V11.4285H11.4286V9.14282Z" fill="#7B5537"/>
            <path d="M16 13.7144H0V16.0001H16V13.7144Z" fill="#7B5537"/>
          </svg>
        </div>
        <div class="header__catalog-text">
          Каталог
        </div>
        <div class="header__catalog-downArrow">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="header__search">
        <input type="text" class="header__search-input" placeholder="Поиск товаров">
        <svg class="header__search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3738 12.3876L17 17M14.3333 7.66667C14.3333 11.3485 11.3485 14.3333 7.66667 14.3333C3.98476 14.3333 1 11.3485 1 7.66667C1 3.98476 3.98476 1 7.66667 1C11.3485 1 14.3333 3.98476 14.3333 7.66667Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="header__icons">
        <div class="header__icons-block">
          <HeaderIconComponent text="Корзина">
            <template #icon>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75055 17C6.1915 17 6.54895 16.6409 6.54895 16.198C6.54895 15.755 6.1915 15.396 5.75055 15.396C5.30961 15.396 4.95215 15.755 4.95215 16.198C4.95215 16.6409 5.30961 17 5.75055 17Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5329 17C14.9738 17 15.3313 16.6409 15.3313 16.198C15.3313 15.755 14.9738 15.396 14.5329 15.396C14.0919 15.396 13.7345 15.755 13.7345 16.198C13.7345 16.6409 14.0919 17 14.5329 17Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1H2.59681L4.72056 10.9609C4.79846 11.3257 5.00053 11.6518 5.29198 11.8831C5.58343 12.1144 5.94602 12.2364 6.31738 12.228H14.1258C14.4891 12.2275 14.8415 12.1024 15.1246 11.8735C15.4076 11.6445 15.6045 11.3254 15.6826 10.9689L17 5.01003H3.4511" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </HeaderIconComponent>

          <router-link to="/heart">
            <HeaderIconComponent text="Нравится">
              <template #icon>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3 10.7778C17.641 9.48 19 7.92442 19 5.88889C19 4.59227 18.4784 3.34877 17.5502 2.43192C16.6218 1.51508 15.3628 1 14.05 1C12.466 1 11.35 1.44444 9.99998 2.77778C8.64999 1.44444 7.53396 1 5.94999 1C4.63717 1 3.37812 1.51508 2.44981 2.43192C1.52152 3.34877 1 4.59227 1 5.88889C1 7.93333 2.35 9.48891 3.7 10.7778L9.99998 17L16.3 10.7778Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </HeaderIconComponent>
          </router-link>

          <HeaderIconComponent text="Профиль">
            <template #icon>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11105 9.88893C10.5657 9.88893 12.5555 7.89906 12.5555 5.44445C12.5555 2.98985 10.5657 1 8.11105 1C5.65643 1 3.66663 2.98985 3.66663 5.44445C3.66663 7.89906 5.65643 9.88893 8.11105 9.88893Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.2221 17.0001C15.2221 15.1141 14.473 13.3054 13.1394 11.9717C11.8058 10.6382 9.99709 9.88892 8.11108 9.88892C6.22514 9.88892 4.41637 10.6382 3.08279 11.9717C1.7492 13.3054 1 15.1141 1 17.0001" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </HeaderIconComponent>
        </div>
      </div>
      <div class="header__burger" @click="toggleMenu">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0001 35H35V30L10.0001 30V35Z" fill="#7B5537"/>
          <path d="M35 25L0.000133514 25V20L35 20V25Z" fill="#7B5537"/>
          <path d="M10.0001 15L35 15V10L10.0001 10V15Z" fill="#7B5537"/>
          <path d="M0.000133514 5L35 5V-9.53674e-07L0.000133514 -9.53674e-07V5Z" fill="#7B5537"/>
        </svg>
      </div>
    </nav>
    <div class="header__mobile-menu" v-if="isMenuOpen">
      <div class="header__mobile-menu__logo-close">
        <svg width="67" height="60" viewBox="0 0 67 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.8392 44.2649C35.2289 44.2649 45.2727 34.6132 45.2727 22.7071C45.2727 10.801 35.2289 1.14917 22.8392 1.14917C10.4496 1.14917 0.405762 10.801 0.405762 22.7071C0.405762 34.6132 10.4496 44.2649 22.8392 44.2649Z" fill="#E2D9C4"/>
          <path d="M64.3236 14.1198L64.3209 14.1143C64.1167 13.6975 63.6166 13.5267 63.2038 13.7329L0.747398 44.9286C0.334641 45.1347 0.165558 45.6397 0.369734 46.0565L0.372432 46.062C0.576608 46.4788 1.07673 46.6495 1.48948 46.4434L63.9459 15.2477C64.3587 15.0415 64.5277 14.5365 64.3236 14.1198Z" fill="#32363E"/>
          <path d="M65.5326 16.1029C66.343 15.6981 66.5349 14.4205 65.9611 13.2492C65.3873 12.078 64.2652 11.4567 63.4548 11.8615C62.6443 12.2663 62.4524 13.5439 63.0262 14.7152C63.6 15.8864 64.7221 16.5077 65.5326 16.1029Z" fill="#32363E"/>
          <path d="M59.233 3.16632L59.2287 3.16197C58.9031 2.83318 58.3752 2.83319 58.0496 3.16197L3.53235 58.2097C3.20672 58.5385 3.20673 59.0716 3.53234 59.4004L3.53665 59.4047C3.86227 59.7335 4.3902 59.7335 4.71582 59.4047L59.233 4.35696C59.5587 4.02818 59.5587 3.49511 59.233 3.16632Z" fill="#32363E"/>
          <path d="M61.0216 4.63644C61.7275 3.92366 61.5579 2.59683 60.6429 1.67286C59.7278 0.748897 58.4137 0.577692 57.7078 1.29046C57.0019 2.00324 57.1715 3.33008 58.0866 4.25404C59.0016 5.17801 60.3157 5.34921 61.0216 4.63644Z" fill="#32363E"/>
          <path d="M34.4029 48.7019C46.8765 48.7019 56.9885 38.4915 56.9885 25.8965C56.9885 13.3014 46.8765 3.09106 34.4029 3.09106C21.9292 3.09106 11.8173 13.3014 11.8173 25.8965C11.8173 38.4915 21.9292 48.7019 34.4029 48.7019Z" fill="#E2D9C4"/>
          <path d="M48.9426 35.8889C48.9426 39.0046 48.3218 41.9789 47.202 44.6829C45.1631 49.6053 41.4628 53.6551 36.8008 56.1132C36.0583 56.5127 35.2853 56.863 34.4941 57.1702C32.3031 58.0244 29.9478 58.5468 27.489 58.6697C14.556 55.9842 4.90342 44.3572 5.04949 30.524C5.06166 29.6329 5.11035 28.748 5.20164 27.8815C6.48581 24.4155 8.58553 21.349 11.2634 18.9216C11.9816 18.2702 12.7484 17.6618 13.5518 17.1026C17.1913 14.5707 21.5977 13.0835 26.357 13.0835C31.8528 13.0835 36.886 15.0623 40.8055 18.3624C45.7778 22.5412 48.9487 28.8463 48.9487 35.895L48.9426 35.8889Z" fill="#E2D9C4"/>
          <path d="M44.0371 59.2595C56.5108 59.2595 66.6227 49.0491 66.6227 36.4541C66.6227 23.859 56.5108 13.6487 44.0371 13.6487C31.5635 13.6487 21.4515 23.859 21.4515 36.4541C21.4515 49.0491 31.5635 59.2595 44.0371 59.2595Z" fill="#E2D9C4"/>
          <path d="M46.0456 40.6024C43.7998 42.9622 40.5741 44.2773 36.3686 44.5416V47.9215H31.0615V44.4924C26.8317 44.1974 23.5938 42.87 21.3542 40.5102C19.1084 38.1504 17.9885 34.9364 17.9885 30.8743C17.9885 26.8122 19.1084 23.5675 21.3542 21.2384C23.5999 18.9093 26.8377 17.5819 31.0615 17.2562V14.0483H36.3686V17.207C40.5741 17.502 43.7998 18.8417 46.0456 21.2138C48.2913 23.5859 49.4112 26.8061 49.4112 30.8743C49.4112 34.9425 48.2913 38.2426 46.0456 40.6024ZM31.0615 38.8878V22.9099C28.5175 23.2049 26.6369 23.9977 25.4136 25.2943C24.1903 26.5849 23.5756 28.4469 23.5756 30.8805C23.5756 35.5694 26.0709 38.2426 31.0615 38.894V38.8878ZM41.9983 36.4604C43.2338 35.1392 43.8485 33.2648 43.8485 30.8313C43.8485 26.0809 41.3532 23.4446 36.3625 22.9099V38.8878C38.8822 38.5929 40.7567 37.7817 41.9922 36.4604H41.9983Z" fill="white"/>
          <path d="M58.8933 19.1612C54.5296 9.37783 44.8344 2.51962 33.5081 2.39671C18.8405 2.23693 6.67438 13.4338 5.20762 27.8815C5.11633 28.748 5.06764 29.6329 5.05547 30.524C4.9094 44.3572 14.562 55.9842 27.495 58.6697C29.2478 59.0384 31.0554 59.2412 32.9117 59.2596C34.3054 59.2781 35.6687 59.1859 37.0137 59.0077C50.6405 57.1518 61.2182 45.4326 61.3704 31.1324C61.4191 26.8675 60.5305 22.8116 58.9055 19.1612H58.8933ZM36.8007 56.1132C35.7417 56.2607 34.6645 56.3406 33.569 56.3467C33.4107 56.3529 33.2586 56.3529 33.1003 56.3467C19.224 56.1992 8.10462 44.7197 8.25068 30.7083C8.29937 26.4373 9.3827 22.4244 11.2694 18.9154C12.5231 16.5802 14.1299 14.4662 16.0105 12.6472C20.5812 8.22865 26.8073 5.53698 33.642 5.61687C42.546 5.7152 50.318 10.4778 54.7 17.5819C55.3755 18.6696 55.9659 19.8065 56.465 20.9987C57.8039 24.139 58.5281 27.6111 58.4855 31.2553C58.3516 44.0007 48.9364 54.4417 36.8007 56.1132Z" fill="#F2EEE0"/>
        </svg>
        <div class="header__mobile-menu__logo-close-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="close-icon" @click="toggleMenu"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15681 8L16 14.8432L14.8424 16L8 9.1568L1.15681 16L0 14.8432L6.8424 8L0 1.1568L1.15681 0L8 6.8432L14.8424 0L16 1.1568L9.15681 8Z" fill="#7B5537"/> </svg>
        </div>
      </div>
      <div class="header__mobile-menu__main-links">
<!--        Тут 2 компонента-->
        <burgerMainLink text="Каталог">
          <template #icon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4286 0H0V2.28571H11.4286V0Z" fill="#7B5537"/>
              <path d="M0 4.57129H16V6.857H0V4.57129Z" fill="#7B5537"/>
              <path d="M11.4286 9.14307H0V11.4288H11.4286V9.14307Z" fill="#7B5537"/>
              <path d="M16 13.7144H0V16.0001H16V13.7144Z" fill="#7B5537"/>
            </svg>
          </template>
        </burgerMainLink>

        <burgerMainLink text="Профиль">
          <template #icon>
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.11093 9.88893C10.5655 9.88893 12.5553 7.89906 12.5553 5.44445C12.5553 2.98985 10.5655 1 8.11093 1C5.65631 1 3.6665 2.98985 3.6665 5.44445C3.6665 7.89906 5.65631 9.88893 8.11093 9.88893Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.2221 17.0003C15.2221 15.1143 14.473 13.3056 13.1394 11.972C11.8058 10.6384 9.99709 9.88916 8.11108 9.88916C6.22514 9.88916 4.41637 10.6384 3.08279 11.972C1.7492 13.3056 1 15.1143 1 17.0003" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </burgerMainLink>
      </div>
      <div class="header__mobile-menu__line"></div>
      <div class="header__mobile-menu__footer-links">
<!--        тут 3 компонента-->
        <div class="dropdown">
          <button class="dropdown-toggle">
            <burgerFooterLink text="Пользователям">
              <template #icon>
                <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L11.5 11.5L21.5 1.5" stroke="#7B5537" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </burgerFooterLink>
          </button>

          <div class="dropdown-menu">
            <p class="dropdown-item">
              <router-link to="/about">
                О нас
              </router-link>
            </p>
            <p class="dropdown-item">
              <router-link to="/contact">
                Контакты
              </router-link>
            </p>
          </div>
        </div>

        <burgerFooterLink text="Товары">
          <template #icon>
            <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L11.5 11.5L21.5 1.5" stroke="#7B5537" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </burgerFooterLink>

        <burgerFooterLink text="Контакты">
          <template #icon>
            <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L11.5 11.5L21.5 1.5" stroke="#7B5537" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </burgerFooterLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-toggle {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white-background);
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 150px;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: var(--main-gray-text);
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-item:hover {
  background: #f5f5f5;
}

.dropdown-item:last-child {
  border-bottom: none;
}

a{
  text-decoration: none;
  color: var(--main-gray-text);
}
.header {
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  border-radius: 8px;
  background-color: var(--white-background);
  padding: 11px 20px;
  box-sizing: border-box;
  min-width: 1298px;
  width: 100%;
  max-height: 82px;
  display: flex;
  align-items: center;

  &__logo {
    box-sizing: border-box;
    max-width: 222px;
    max-height: 60px;
    width: 222px;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    &__name {
      color: var(--main-gray-text);
      &-main { font-size: 1.3125rem; }
      &-desc { font-size: 0.875rem; letter-spacing: 0.8px; }
    }
  }

  &__catalog {
    margin-left: 2.0625rem;
    box-sizing: border-box;
    max-width: 162px;
    max-height: 50px;
    height: 50px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    color: var(--main-gray-text);
    gap: 25px;
    background-color: var(--light-background);
    padding: 10px;
    transition: all 0.3s ease;
  }

  &__search {
    flex: 1 1 auto;
    max-width: 528px;
    margin-left: 2.5rem;
    position: relative;
    display: inline-flex;

    &-input {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      color: var(--main-placeholder);
      font-family: "Montserrat", sans-serif;
      padding: 0.5rem 2.5rem 0.5rem 1rem;
      border: 2px solid var(--light-background);
      border-radius: 8px;
      font-size: 1rem;
      transition: width 0.3s ease;

      &:focus { outline: none; border-color: #888; }
    }

    &-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }

  &__icons {
    &-block {
      box-sizing: border-box;
      max-width: 255px;
      width: 255px;
      margin-left: 1.25rem;
      display: inline-flex;
      justify-content: space-between;
      transition: all 0.3s ease;
    }
  }

  &__burger {
    display: none;
    cursor: pointer;
    width: 35px;
    height: 35px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__mobile-menu {
    width: 856px;
    position: fixed;
    top: 1.25rem;
    padding: 1.25rem;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    color: var(--main-gray-text);
    background-color: var(--white-background);
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
    animation: slideDown 0.3s ease forwards;

    &__logo-close{
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      &-icon{

      }
    }

    &__main-links{
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    &__line{
      margin: 1.25rem 0 1.25rem 0;
      height: 1px;
      width: 100%;
      background-color: var(--dark-background);
    }
    &__footer-links{
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
  }
}

@keyframes slideDown {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@media (max-width: 1298px) {
  .header {
    min-width: 1024px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
  }
  .header__logo{
    width: 67px;
  }
  .header__logo__name{
    display: none;
  }

  .header__catalog {
    margin-left: 1.5rem;
    gap: 15px;
    padding: 8px;
    font-size: 0.9rem;
  }

  .header__search {
    margin-left: 1.5rem;
    flex-grow: 1;

    &-input {
      width: 100%;
      height: 50px;
      font-size: 0.95rem;
      padding: 0.5rem 2rem 0.5rem 0.8rem;
    }

    &-icon {
      &-icon {
        position: absolute;
        right: 8px;

        pointer-events: none;
      }
    }
  }

  .header__icons-block {
    margin-left: 1rem;
    width: auto;
    gap: 10px;
  }
}

@media (max-width: 1024px) {
  .header{
    min-width: 856px;
    width: 100%;

    &__search {
      margin-left: 0;
      max-width: 628px;
      width: 628px;

      &-input{
        width: 100%;
      }
    }
    &__catalog, &__icons{
      display: none;
    }
    &__burger{
      display: block;
    }
  }
}

@media (max-width: 856px) {
  .header{
    min-width: 768px;
    width: 100%;

    &__search {
      margin-left: 0;
      max-width: 500px;
    }

    &__mobile-menu{
      width: 768px;
    }
  }
}

@media (max-width: 768px) {
  .header{
    margin-top: 2.1875rem;
    min-width: 420px;
    width: 100%;

    &__search {
      margin-left: 0;
      max-width: 185px;
    }

    &__mobile-menu{
      top: 35px;
      width: 420px;
    }
  }
}

@media (max-width: 440px) {
  .header{
    margin-top: 2.1875rem;
    min-width: 390px;
    width: 100%;

    &__search {
      max-width: 185px;
    }

    &__mobile-menu{
      top: 35px;
      width: 390px;
    }
  }
}
</style>