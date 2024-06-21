<script setup lang="ts">
import { ref } from 'vue';

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
        class="popup-invite-join"
      >
        <div class="join-title">
          您已加入其他团
        </div>
        <div
          class="close-btn"
          @click.stop="(()=>{console.log('close')})"
        >
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/ed93ca1710402834455.png">
        </div>
        <div class="join-con">
          <div class="join-desc">
            每名用户1种套餐仅支持加入1个团哦<br>您已拥有拼团价优惠开通权益
          </div>
          <div class="join-pic">
            <img src="#">
          </div>
        </div>
        <div class="join-btn popup-btn">
          我知道了 查看活动
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-invite-join.scss"></style>
