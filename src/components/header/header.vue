<script setup lang="ts">
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import Notice from '@/components/header/notice/notice.vue';

const modules = [Pagination];
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <div class="mod-header">
    <div class="logo">
      <img src="https://vip.image.video.qpic.cn/vupload/20240314/ff07e41710402834454.png">
    </div>
    <div class="rule">
      <img src="https://vip.image.video.qpic.cn/vupload/20240314/08a1611710402834454.png">
    </div>
    <Notice />
    <div class="banner">
      <Swiper
        ref="bannerSwiper"
        class="banner-box"
        :modules="modules"
        :loop="true"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide
          v-for="(item, index) in 3"
          :key="index"
          class="swiper-slide"
        >
          <div class="swiper-item">
            <img src="https://vip.image.video.qpic.cn/vupload/20240314/ebe56a1710402834720.png">
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss" src="./header.scss"></style>
