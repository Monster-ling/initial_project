<!-- TODO: 已经不需要该弹窗 -->
<script setup lang="ts">
</script>

<template>
  <div
    v-if="false"
    class="mask"
  >
    <div
      class="popup-authorize"
    >
      <div class="title">
        温馨提示
      </div>
      <div
        class="close-btn"
      >
        <img src="https://vip.image.video.qpic.cn/vupload/20240510/f3b31d1715931096574.png">
      </div>
      <div class="con">
        <div class="desc">
          我们将获取您的视频账号信息，用于给您确认会员到账为本人腾讯视频账号
        </div>
        <!-- disabled -->
        <div class="pay-btn">
          继续充值
        </div>
        <div class="tips">
          <!-- is-checked -->
          <div
            class="check-btn"
            :class="{'is-checked':true}"
          />
          本人已同意
          <span>《用户协议》</span>
          <span>《隐私政策》</span>
          <span>《儿童隐私保护声明》</span>
          <span>《个人信息采集清单》</span>和<span>《第三方信息共享清单》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./popup-authorize.scss"></style>
