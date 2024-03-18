<script setup lang="ts">
import { ref } from 'vue';

import Header from '@/components/header/header.vue';
import Introduce from '@/components/introduce/introduce.vue';
import Invite from '@/components/invite/invite.vue';
import Paybar from '@/components/paybar/paybar.vue';
import PopupChangeSkin from '@/components/popup/popup-change-skin/popup-change-skin.vue';
import PopupVerify from '@/components/popup/popup-verify/popup-verify.vue';
import Privilege from '@/components/privilege/privilege.vue';
import Question from '@/components/question/question.vue';
import Stickybar from '@/components/stickybar/stickybar.vue';
import UserCombo from '@/components/user-combo/user-combo.vue';

const show = ref(false);
const changeShow = () => {
  show.value = !show.value;
};
</script>

<template>
  <section class="page-main">
    <Stickybar :visible="show" />
    <button @click="changeShow">
      点击
    </button>
    <!-- 占位 -->
    <Header />
    <main class="main">
      <!-- 用户套餐 -->
      <UserCombo />
      <!-- 邀请拼团 -->
      <Invite />
      <!-- 权益详情 -->
      <Privilege />
      <!-- 权益一览 -->
      <div class="summary">
        <img
          src="https://vip.image.video.qpic.cn/vupload/20240315/45d3791710467820040.png"
          alt=""
        >
      </div>
      <!--什么是JUMP -->
      <Introduce />
      <!-- 常见问题 -->
      <Question />
    </main>
    <Paybar />
    <!-- 验证 -->
    <PopupVerify />
    <!-- 换肤 -->
    <PopupChangeSkin />
  </section>
</template>

<style lang="scss" src="./app.scss" scoped></style>
