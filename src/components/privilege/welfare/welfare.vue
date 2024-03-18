<script setup lang="ts">
import BenefitItem from '@/components/common/benefit-item/benefit-item.vue';
import PrivilegeItem from '@/components/privilege/privilege-item/privilege-item.vue';

</script>

<template>
  <PrivilegeItem
    :privilege-index="1"
    privilege-title="生活福利"
    class="mod-welfare"
  >
    <template #privilege-con>
      <!-- 图片高度不同 -->
      <div class="scroll-list">
        <BenefitItem
          v-for="i in 6"
          :key="i"
        />
      </div>
    </template>
  </PrivilegeItem>
</template>

<style lang="scss" src="./welfare.scss"></style>
