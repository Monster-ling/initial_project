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
        class="popup-invite"
      >
        <div class="invite-title">
          <Avatar />
          <span>邀你组搭子拼团</span>
        </div>
        <div
          class="close-btn"
          @click.stop="(()=>{console.log('close')})"
        >
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/ed93ca1710402834455.png">
        </div>
        <div class="invite-con">
          <div class="invite-desc">
            加入<span class="name">用户用户用户</span> 的团，可享以下权益
          </div>

          <div class="weal-list">
            <div
              v-for="i in 2"
              :key="i"
              class="weal-item"
            >
              <img
                class="weal-pic"
                src="#"
              >
              <div class="weal-txt">
                <div class="title">
                  拼团价买JUMP套餐15元/月
                </div>
                <div class="desc">
                  按月支付全年可省24元
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="invite-btn popup-btn">
          加入TA的团
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-invite.scss"></style>
