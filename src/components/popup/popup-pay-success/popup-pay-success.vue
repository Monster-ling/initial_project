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
        class="popup-pay-success"
      >
        <div class="pay-title">
          <img
            src="https://vip.image.video.qpic.cn/vupload/20240319/2d718e1710817098604.png"
            alt=""
          >
        </div>
        <div class="pay-con">
          <div class="txt">
            腾讯视频VIP年卡已到账，可在「个人中心-视频VIP」中查看有效期
          </div>
          <div class="pic">
            <img
              src="https://vip.image.video.qpic.cn/vupload/20240319/d5b6a61710815997519.png"
              alt=""
            >
          </div>
          <div class="txt">
            下次可在「个人中心-JUMP套餐」中查看JUMP特权
          </div>
          <div class="pic">
            <img
              src="https://vip.image.video.qpic.cn/vupload/20240319/f2a0a91710815997522.png"
              alt=""
            >
          </div>
        </div>
        <div class="pay-btn popup-btn">
          我知道了
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-pay-success.scss"></style>
