<script setup lang="ts">
import Arrow from '@/components/common/arrow/arrow.vue';
</script>

<template>
  <div class="mod-question">
    <div class="question-title">
      常见问题
    </div>
    <div class="question-list">
      <div
        v-for="i in 5"
        :key="i"
        class="question-item"
      >
        <div class="txt">
          {{ i }} 开通了Jump卡，还能开通腾讯视频VIP吗？
        </div>
        <Arrow
          :border-color="'rgba(0,0,0,0.3)'"
          :alias="'right'"
        />
      </div>
    </div>
    <div class="help-btn">
      JUMP帮助中心
      <Arrow
        :border-color="'#000'"
        :alias="'right'"
      />
    </div>
  </div>
</template>

<style lang="scss" src="./question.scss"></style>
