<script setup lang="ts">
const props = defineProps<{
  /** 是否是历史订单 */
  isHistory: boolean;

}>();
</script>

<template>
  <!-- is-history   -->
  <section
    class="order-item"
    :class="{'is-history':isHistory}"
  >
    <div class="top">
      <div class="pay-pic">
        <img
          src="#"
          alt=""
        >
      </div>
      <div class="pay-detail">
        <div class="title">
          <div class="txt">
            腾讯视频VIP月卡
          </div>
          <div
            v-if="!isHistory"
            class="real-price"
          >
            <span class="num">16</span>
            <span class="unit">元</span>
          </div>
          <div
            v-else
            class="status"
          >
            已完成
          </div>
        </div>
        <div class="sub">
          <div class="account">
            充值账号：13800138000
          </div>
          <div
            v-if="isHistory"
            class="account"
          >
            充值日期：2024-5-1 10:00
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        抵扣积分
      </div>
      <div class="price">
        <span class="num">800</span>
        <span class="unit">积分</span>
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        实付金额
      </div>
      <div class="price">
        <span class="num">12</span>
        <span class="unit">元</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./order-item.scss" scoped></style>
