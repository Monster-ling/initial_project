<script setup lang="ts">
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import 'swiper/css';
import Avatar from '@/components/common/avatar/avatar.vue';

const modules = [Autoplay];

</script>

<template>
  <div class="notice">
    <Swiper
      ref="noticeSwiper"
      class="swiper-wrap swiper-no-swiping"
      :modules="modules"
      direction="vertical"
      height="24"
      no-swiping="true"
      no-swiping-class="stop-swiping"
      speed="500"
      loop="true"
      allow-touch-move="false"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <SwiperSlide
        v-for="(item, index) in 5"
        :key="index"
        class="swiper-slide"
      >
        <div class="swiper-item">
          <Avatar />
          <span>{{ index }}文*琦刚购买了JUMP+套餐</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" src="./notice.scss"></style>
