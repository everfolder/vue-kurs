<script setup>
import CellImgBlock from '@/components/layout/Cell-img-block.vue'
import Catalog from '@/components/layout/MainScreenCatalog.vue'

import img1 from '@/assets/pictures/img1.png'
import img2 from '@/assets/pictures/img2.png'
import img3 from '@/assets/pictures/img3.png'
import img4 from '@/assets/pictures/img4.png'

const imageList = [img1, img2, img3, img4]
</script>

<template>
  <div class="content">
    <CellImgBlock :images="imageList" />
    <Catalog />
  </div>
</template>

<style scoped lang="scss">

</style>