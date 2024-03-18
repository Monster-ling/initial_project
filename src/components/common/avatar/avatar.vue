<script setup lang="ts">
import AccountIcon from './account-icon.vue';
</script>

<template>
  <div class="mod-avatar">
    <div class="avatar-img">
      <img
        v-if="false"
        src="#"
        class="img"
        alt="头像"
      >
      <img
        v-else
        src="https://vfiles.gtimg.cn/vupload/201911/e7dfb21572937570864.svg"
        class="img"
        alt="头像"
      >
      <AccountIcon
        v-if="false"
        :account-type="'wx'"
      />
    </div>
  </div>
</template>

<style lang="scss" src="./avatar.scss"></style>
