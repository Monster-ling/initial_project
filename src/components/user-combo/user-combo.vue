<script setup lang="ts">
import Combo from '@/components/combo/combo.vue';
import Arrow from '@/components/common/arrow/arrow.vue';
import Avatar from '@/components/common/avatar/avatar.vue';

</script>

<template>
  <section class="mod-user-combo">
    <!-- 会员加 active  -->
    <div class="vip-card">
      <div class="card-bg" />
      <div class="card-info">
        <Avatar />
        <div class="user-info">
          <div class="user-name">
            <span>用户用户用户</span>
            <img
              class="vip-level"
              src="https://vip.image.video.qpic.cn/vupload/20231215/ee47621702610134327.png"
              alt=""
            >
          </div>
          <div class="user-status">
            还未开通
          </div>
          <div
            v-if="false"
            class="order"
          >
            续费管理与开通记录
            <Arrow
              border-color="#fff"
              alias="right"
            />
          </div>
        </div>
      </div>
    </div>
    <Combo />
  </section>
</template>

<style lang="scss" src="./user-combo.scss"></style>
