<script setup lang="ts">
import { ref } from 'vue';

import Avatar from '@/components/common/avatar/avatar.vue';

const visible = ref(false);
</script>

<template>
  <section v-show="visible">
    <div
      class="mask"
      @click.stop="(()=>{console.log('close mask')})"
    />
    <Transition name="fade">
      <div
        v-if="visible"
        class="popup-invite-success"
      >
        <div class="success-title">
          恭喜您拼团成功
        </div>
        <div
          class="close-btn"
          @click.stop="(()=>{console.log('close')})"
        >
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/ed93ca1710402834455.png">
        </div>
        <div class="success-con">
          <div class="success-desc">
            您的搭子<span class="name">用户用户用户</span>已到位，可享拼团价购买
          </div>
          <div class="user">
            <div class="success-icon" />
            <Avatar />
            <Avatar />
          </div>
          <div class="success-combo">
            <div class="combo-left">
              <div class="title">
                JUMP套餐
              </div>
              <div class="type">
                按月支付
              </div>
            </div>
            <div class="combo-right">
              <div class="price">
                拼团价<span class="num">13</span>元/月
              </div>
              <div class="desc">
                连续享12月，可随时关闭
              </div>
            </div>
          </div>
        </div>
        <div class="success-btn popup-btn">
          立即支付
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-invite-success.scss"></style>
