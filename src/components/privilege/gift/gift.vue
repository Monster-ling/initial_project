<script setup lang="ts">
import BenefitItem from '@/components/common/benefit-item/benefit-item.vue';
import PrivilegeItem from '@/components/privilege/privilege-item/privilege-item.vue';

</script>

<template>
  <PrivilegeItem
    :privilege-index="1"
    class="mod-gift"
  >
    <template #privilege-con>
      <div class="scroll-list">
        <BenefitItem
          v-for="i in 6"
          :key="i"
        />
      </div>
    </template>
  </PrivilegeItem>
</template>

<style lang="scss" src="./gift.scss"></style>
