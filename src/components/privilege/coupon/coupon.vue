<script setup lang="ts">
import PrivilegeItem from '@/components/privilege/privilege-item/privilege-item.vue';

</script>

<template>
  <PrivilegeItem
    :privilege-index="4"
    privilege-title="内容抵扣券"
    class="mod-coupon"
  >
    <template #privilege-con>
      <div class="coupon-con">
        <img
          class="coupon-bg"
          src="https://vip.image.video.qpic.cn/vupload/20240313/f9eb011710300403150.png"
          alt=""
        >
        <div class="coupon-main">
          <div class="left">
            <div class="title">
              2元内容抵扣券 <span>x12张/年</span>
            </div>
            <div class="desc">
              可在购买单点付费内容时使用
            </div>
          </div>
          <div class="right">
            <!-- is--actived 黑色底  is--normal 带边框  is-disable 禁用 -->
            <div class="open-btn">
              开通后获得
            </div>
          </div>
        </div>
        <div class="coupon-list">
          <div class="scroll-list">
            <div class="coupon-item">
              <div class="coupon-pic">
                <img
                  src="#"
                  alt=""
                >
              </div>
              <div class="coupon-txt">
                查看所有可兑换内容
                <img
                  src="https://vip.image.video.qpic.cn/vupload/20240313/546da61710293543224.png"
                  alt=""
                >
              </div>
            </div>
            <div
              v-for="i in 4"
              :key="i"
              class="coupon-item"
            >
              <div class="coupon-pic">
                <img
                  src="#"
                  alt=""
                >
              </div>
              <div class="coupon-txt">
                《神隐》电视剧点映礼券
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PrivilegeItem>
</template>

<style lang="scss" src="./coupon.scss"></style>
