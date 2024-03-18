<script setup lang="ts">
import { ref } from 'vue';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const visible = ref(false);

const modules = [Pagination];
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <section v-show="visible">
    <div
      class="mask"
      @click.stop="(()=>{console.log('close mask')})"
    />
    <Transition name="fade">
      <div class="popup-change-skin">
        <div class="title">
          JUMP皮肤使用场景
        </div>
        <div
          class="close-btn"
          @click.stop="(()=>{console.log('close')})"
        >
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/ed93ca1710402834455.png">
        </div>
        <div class="change-con">
          <div class="skin-tabs">
            <!-- active 选中态 -->
            <div
              v-for="i in 4"
              :key="i"
              class="skin-tab"
            >
              <!-- 选中态图片 -->
              <img src="https://vip.image.video.qpic.cn/vupload/20240315/e121361710474422866.png">
              <!-- 默认图片 -->
              <img src="https://vip.image.video.qpic.cn/vupload/20240315/801c221710474422997.png">
            </div>
          </div>
          <div class="skin-slogan">
            波子汽水 热烈的夏天文案占位
          </div>
          <!-- 使用场景 -->
          <div class="scenes">
            <Swiper
              ref="scenesSwiper"
              class="scenes-box"
              :modules="modules"
              :loop="false"
              slides-per-view="auto"
              :auto-height="true"
              :initial-slide="0"
              :pagination="{ clickable: true }"
              @swiper="onSwiper"
              @slide-change="onSlideChange"
            >
              <SwiperSlide
                v-for="(item, index) in 3"
                :key="index"
                class="swiper-slide"
              >
                <!-- 叠加皮肤待定  图片占位 -->
                <div class="swiper-item">
                  <img src="https://vip.image.video.qpic.cn/vupload/20240314/ebe56a1710402834720.png">
                  <div class="scene-title">
                    1.个人中心-身份卡板
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="change-btn">
          确认使用
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-change-skin.scss"></style>
