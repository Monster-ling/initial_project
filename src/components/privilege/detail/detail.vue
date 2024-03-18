<script setup lang="ts">
import PrivilegeItem from '@/components/privilege/privilege-item/privilege-item.vue';

</script>

<template>
  <PrivilegeItem
    :privilege-index="1"
    class="mod-detail"
  >
    <template #privilege-con>
      <div class="detail-con">
        <img
          src="https://vip.image.video.qpic.cn/vupload/20240313/e86e441710297568393.png"
          alt=""
        >
        <div
          class="detail-btn"
          @click="(()=>{console.log('click')})"
        />
      </div>
    </template>
  </PrivilegeItem>
</template>

<style lang="scss" src="./detail.scss"></style>
