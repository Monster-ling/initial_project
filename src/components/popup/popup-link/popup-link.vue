<!-- TODO: 已经不需要该弹窗 -->
<script setup lang="ts">
</script>

<template>
  <div
    v-if="false"
    class="mask"
  >
    <!-- is-link 已绑定 -->
    <div
      class="popup-link"
      :class="{ 'is-link': false}"
    >
      <div class="link-title">
        绑定提示
      </div>
      <div
        class="close-btn"
      >
        <img src="https://vip.image.video.qpic.cn/vupload/20240510/f3b31d1715931096574.png">
      </div>
      <div class="link-con">
        <div class="link-desc">
          此手机号已绑定腾讯视频
          <!-- 确认下是否要省略 -->
          <span class="name">微信账号：咩…杨</span>
        </div>
        <div class="link-status">
          <img
            class="avatar"
            src="https://vip.image.video.qpic.cn/vupload/20240510/4aa1db1715929735842.png"
          >
          <div class="link-icon" />
          <img
            class="avatar"
            src="https://vip.image.video.qpic.cn/vupload/20240510/3918131715929736037.png"
          >
        </div>
        <div class="tips">
          请先前往腾讯视频APP，在【设置-个人信息-手机】处进行手机号绑定，绑定成功后才可在工银E生活APP中进行会员套餐的充值
        </div>
      </div>
      <div class="pay-btn">
        继续充值
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./popup-link.scss"></style>
