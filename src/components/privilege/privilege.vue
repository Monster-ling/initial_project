<script setup lang="ts">

import Coupon from './coupon/coupon.vue';
import Detail from './detail/detail.vue';
import DressUp from './dress-up/dress-up.vue';
import Gift from './gift/gift.vue';
import Welfare from './welfare/welfare.vue';

</script>

<template>
  <div class="mod-privilege">
    <div class="privilege-title">
      JUMP+套餐 权益详情
    </div>
    <Detail />
    <!-- 内容抵扣券 -->
    <Coupon />
    <!-- 装扮 -->
    <DressUp />
    <!-- 生活福利 -->
    <Welfare />
    <!-- 惊喜礼包 -->
    <Gift />
  </div>
</template>

<style lang="scss" src="./privilege.scss"></style>
