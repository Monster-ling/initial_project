<script setup lang="ts">

</script>

<template>
  <div class="mod-combo">
    <div class="combo-tabs">
      <!-- tab选中态 visited -->
      <div class="tab visited">
        <div class="title" />
        <div class="desc">
          5大权益
        </div>
      </div>
      <div class="tab">
        <div class="title" />
        <div class="desc">
          7大权益
        </div>
      </div>
    </div>
    <div class="combo-con">
      <div class="pay-ways">
        <div class="pay-way">
          <!-- 单个套餐下 不显示标题 边框背景不同-->
          <div class="way-title">
            一次性支付
          </div>
          <div class="way-price">
            <span class="price-num">168</span>元
          </div>
          <div class="way-desc">
            <span
              v-if="true"
              class="discount"
            > 256元</span>
            <div v-else>
              12个月共180元, 可关闭
              <img src="https://vip.image.video.qpic.cn/vupload/20240313/2ca1491710293543018.png">
            </div>
          </div>
        </div>
        <!-- active 选中态 -->
        <div class="pay-way active">
          <div class="way-title">
            一次性支付
          </div>
          <div class="way-price">
            <span class="price-num">168</span>元
          </div>
          <div class="way-desc">
            <span
              v-if="false"
              class="discount"
            > 256元</span>
            <div v-else>
              12个月共180元, 可关闭
              <img src="https://vip.image.video.qpic.cn/vupload/20240313/2ca1491710293543018.png">
            </div>
          </div>
        </div>
      </div>
      <ul class="combo-list">
        <!-- :class="lock" -->
        <li
          v-for="item in 6"
          :key="item"
          class="combo-item"
          @click="(()=>{console.log('click:',item)})"
        >
          <div class="combo-icon">
            <img
              src="https://vfiles.gtimg.cn/vupload/20220908/3b35e81662624869748.png"
              alt=""
            >
            <div
              v-if="false"
              class="combo-tips"
            >
              待领
            </div>
          </div>
          <div class="combo-txt">
            <div class="title">
              腾讯视频VIP
            </div>
            <div class="desc">
              4年
            </div>
          </div>
        </li>
      </ul>
      <div class="detail-btn">
        查看明细
        <img src="https://vip.image.video.qpic.cn/vupload/20240312/bb2f9c1710234409329.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./combo.scss"></style>
