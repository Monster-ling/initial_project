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
        class="popup-invite-expired"
      >
        <div class="expired-title">
          晚来一步 活动已结束
        </div>
        <div
          class="close-btn"
          @click.stop="(()=>{console.log('close')})"
        >
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/ed93ca1710402834455.png">
        </div>
        <div class="expired-con">
          <div class="expired-desc">
            不要遗憾，腾讯视频VIP福利社有<br>更多精彩活动等你哦！
          </div>
          <div class="expired-pic">
            <img src="#">
          </div>
        </div>
        <div class="expired-btn popup-btn">
          去福利社看看
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-invite-expired.scss"></style>
