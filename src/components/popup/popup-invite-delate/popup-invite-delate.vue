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
        class="popup-invite-delate"
      >
        <div class="delate-title">
          晚来一步 TA已集齐团员
        </div>
        <div
          class="close-btn"
          @click.stop="(()=>{console.log('close')})"
        >
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/ed93ca1710402834455.png">
        </div>
        <div class="delate-con">
          <div class="delate-desc">
            不要遗憾，自己开团也可以享以下福利
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
        <div class="delate-btn popup-btn">
          我知道了 查看活动
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-invite-delate.scss"></style>
