<script setup lang="ts">
</script>

<template>
  <section class="mod-phone">
    <div class="phone-title">
      <div class="title">
        积分可充值腾讯视频会员
      </div>
      <div class="sub-title">
        <span>充值后不支持退款</span>
        <img src="https://vip.image.video.qpic.cn/vupload/20240510/84c6ff1715761056534.png">
      </div>
    </div>
    <div class="phone-item">
      <div class="item-value prefix">
        <div class="tel-btn" />
        <input
          type="number"
          pattern="[0-9]*"
          name="phone"
          required
          placeholder="请输入腾讯视频绑定的手机号"
        >
        <!-- 未填手机号时  disabled -->
        <div
          class="check-btn"
          :class="{disabled: true}"
          @click.stop="(()=>{console.log('click phone')})"
        >
          查询绑定
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./phone.scss" scoped></style>
