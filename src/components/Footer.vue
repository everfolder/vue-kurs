<script setup lang="js">
  import footerIcon from "@/components/layout/ComponentHeader.vue"
</script>

<template>
  <footer>
    <nav>
      <div class="footer-content">
        <div class="footer-content__location-user">
          <div class="footer-content__location-user__location">
            <div class="footer-content__location-user__location-icon">
              <svg width="16" height="20" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 8.50001C16.5 14.5 8.50001 20.5 8.50001 20.5C8.50001 20.5 0.5 14.5 0.5 8.50001C0.5 6.37827 1.34286 4.34344 2.84315 2.84315C4.34345 1.34286 6.37828 0.5 8.50001 0.5C10.6218 0.5 12.6566 1.34286 14.1568 2.84315C15.6572 4.34344 16.5 6.37827 16.5 8.50001Z" stroke="#7B5537" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.50012 11.4999C10.157 11.4999 11.5001 10.1567 11.5001 8.49982C11.5001 6.84297 10.157 5.49982 8.50012 5.49982C6.84327 5.49982 5.50012 6.84297 5.50012 8.49982C5.50012 10.1567 6.84327 11.4999 8.50012 11.4999Z" stroke="#7B5537" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="footer-content__location-user__location-city">
              Нижний новгород
            </div>
          </div>
          <div class="footer-content__location-user__user">
            <div class="footer-content__location-user__user-title">
              Пользователям
            </div>
            <div class="footer-content__location-user__user-listLink">
              <ul>
                <li><router-link to="/about">О нас</router-link></li>
                <li>Предложения</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-content__product-contact">
          <div class="footer-content__product-contact__product">
            <p align="right" class="footer-content__product-contact__product-title">
              Товары
            </p>
            <div class="footer-content__product-contact__product-linkList">
              <ul>
                <li><p align="right">Поиск по предложениям</p></li>
                <li><p align="right">Фильтры</p></li>
              </ul>
            </div>
          </div>
          <div class="footer-content__product-contact__contact">
            <p align="right" class="footer-content__product-contact__contact-title">
              <router-link to="/contact">Контакты</router-link>
            </p>
            <div class="footer-content__product-contact__contact-linkList">
              <ul>
                <li><p align="right">8 999 999 99 99</p></li>
                <li><p align="right">hand-made@mail.ru</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-mobile-content">
        <router-link to="/">
          <footerIcon text="Гланая">
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7611 7.43409L8.56361 0.236557C8.48927 0.1616 8.40082 0.102105 8.30336 0.0615044C8.20591 0.0209034 8.10138 0 7.99581 0C7.89023 0 7.7857 0.0209034 7.68825 0.0615044C7.5908 0.102105 7.50235 0.1616 7.428 0.236557L0.23047 7.43409C0.119502 7.54655 0.0443308 7.68936 0.0144417 7.8445C-0.0154473 7.99963 0.00128508 8.16015 0.0625276 8.30579C0.122523 8.45183 0.224406 8.57685 0.355338 8.66509C0.486269 8.75332 0.640389 8.80083 0.798275 8.80162H1.598V14.6396C1.61258 15.0137 1.77476 15.3668 2.04904 15.6216C2.32331 15.8764 2.68736 16.0121 3.0615 15.9991H5.19677C5.40887 15.9991 5.61228 15.9149 5.76226 15.7649C5.91223 15.6149 5.99649 15.4115 5.99649 15.1994V11.2808C5.99649 11.0687 6.08075 10.8653 6.23073 10.7153C6.3807 10.5653 6.58412 10.481 6.79622 10.481H9.19539C9.40749 10.481 9.61091 10.5653 9.76089 10.7153C9.91086 10.8653 9.99512 11.0687 9.99512 11.2808V15.1994C9.99512 15.4115 10.0794 15.6149 10.2294 15.7649C10.3793 15.9149 10.5827 15.9991 10.7948 15.9991H12.9301C13.3043 16.0121 13.6683 15.8764 13.9426 15.6216C14.2169 15.3668 14.379 15.0137 14.3936 14.6396V8.80162H15.1933C15.3512 8.80083 15.5053 8.75332 15.6363 8.66509C15.7672 8.57685 15.8691 8.45183 15.9291 8.30579C15.9903 8.16015 16.0071 7.99963 15.9772 7.8445C15.9473 7.68936 15.8721 7.54655 15.7611 7.43409Z" fill="#7B5537"/>
              </svg>
            </template>
          </footerIcon>
        </router-link>
        <router-link to="/">
          <footerIcon text="Каталог">
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4286 0H0V2.28571H11.4286V0Z" fill="#7B5537"/>
                <path d="M0 4.57141H16V6.85713H0V4.57141Z" fill="#7B5537"/>
                <path d="M11.4286 9.14282H0V11.4285H11.4286V9.14282Z" fill="#7B5537"/>
                <path d="M16 13.7142H0V15.9999H16V13.7142Z" fill="#7B5537"/>
              </svg>
            </template>
          </footerIcon>
        </router-link>
        <router-link to="">
          <footerIcon text="Корзина">
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75055 17C6.1915 17 6.54895 16.6409 6.54895 16.198C6.54895 15.755 6.1915 15.396 5.75055 15.396C5.30961 15.396 4.95215 15.755 4.95215 16.198C4.95215 16.6409 5.30961 17 5.75055 17Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5329 17C14.9738 17 15.3313 16.6409 15.3313 16.198C15.3313 15.755 14.9738 15.396 14.5329 15.396C14.0919 15.396 13.7345 15.755 13.7345 16.198C13.7345 16.6409 14.0919 17 14.5329 17Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1H2.59681L4.72056 10.9609C4.79846 11.3257 5.00053 11.6518 5.29198 11.8831C5.58343 12.1144 5.94602 12.2364 6.31738 12.228H14.1258C14.4891 12.2275 14.8415 12.1024 15.1246 11.8735C15.4076 11.6445 15.6045 11.3254 15.6826 10.9689L17 5.01003H3.4511" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </footerIcon>
        </router-link>
        <router-link to="/heart">
          <footerIcon text="Нравится">
            <template #icon>
              <svg width="18" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 10.7778C17.641 9.48 19 7.92442 19 5.88889C19 4.59227 18.4784 3.34877 17.5502 2.43192C16.6218 1.51508 15.3628 1 14.05 1C12.466 1 11.35 1.44444 9.99998 2.77778C8.64999 1.44444 7.53396 1 5.94999 1C4.63717 1 3.37812 1.51508 2.44981 2.43192C1.52152 3.34877 1 4.59227 1 5.88889C1 7.93333 2.35 9.48891 3.7 10.7778L9.99998 17L16.3 10.7778Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </footerIcon>
        </router-link>
        <router-link to="">
          <footerIcon text="Профиль">
            <template #icon>
              <svg width="16" height="16" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11117 9.88893C10.5658 9.88893 12.5556 7.89906 12.5556 5.44445C12.5556 2.98985 10.5658 1 8.11117 1C5.65655 1 3.66675 2.98985 3.66675 5.44445C3.66675 7.89906 5.65655 9.88893 8.11117 9.88893Z" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.2221 17.0001C15.2221 15.1141 14.473 13.3054 13.1394 11.9717C11.8058 10.6382 9.99709 9.88892 8.11108 9.88892C6.22514 9.88892 4.41637 10.6382 3.08279 11.9717C1.7492 13.3054 1 15.1141 1 17.0001" stroke="#7B5537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </footerIcon>
        </router-link>
      </div>
    </nav>
  </footer>
</template>

<style scoped lang="scss">

  a{
    text-decoration: none;
    color: var(--main-gray-text);
  }

  footer{
    min-width: 64rem;
    box-sizing: border-box;
    padding: 1.25rem;
    font-family: "Montserrat", sans-serif;
    color: var(--main-gray-text);
    border-radius: 8px;
    margin-top: 1.9375rem;
    width: 100%;
    background-color: var(--white-background);
    transition: width 0.3s ease;
  }
  ul{
    margin-top: 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    li{
      list-style: none;
    }
  }

  .footer-content{

    width: 100%;
    display: inline-flex;
    justify-content: space-between;

    &__location-user, &__product-contact{
      align-items: start;
      display: inline-flex;
    }
    &__location-user{
      gap: 2rem;
      &__location{
        display: inline-flex;
        align-items: center;
        font-size: 1.25rem;
        gap: 0.625rem;
      }
      &__user{
         &-title{
           font-size: 1.25rem;
         }
      }
    }

    &__product-contact{
      gap: 2rem;
      &__product{

        &-title{
          font-size: 1.25rem;
        }
      }

      &__contact{

        &-title{
          font-size: 1.25rem;
        }
      }
    }
  }
  .footer-mobile-content{
    display: none;
  }

  @media (max-width: 1024px) {
    footer{
      margin-top: 1.25rem;
      min-width: 53.5rem;
      padding: 0.9375rem 5.25rem 0.9375rem 5.25rem;
      transition: width 0.3s ease;
    }
    .footer-content{
      display: none;
    }
    .footer-mobile-content{
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (max-width: 856px) {
    footer{
    min-width: 48rem;
    }
  }

  @media (max-width: 768px) {
    footer{
      padding: 10px 9px 10px 9px;
      min-width: 0;
      width: 26.25rem;
    }
  }

  @media (max-width: 440px) {
    footer{
      width: 24.375rem;
    }
  }
</style>