<script setup lang="ts">
const props = defineProps({
  privilegeIndex: {
    type: Number,
    default: 1,
  },
  privilegeTitle: {
    type: String,
    default: '互动装扮',
  },
  subTitle: {
    type: String,
    default: 'HOT!',
  },
  privilegeDesc: {
    type: String,
    default: '每月可任选其三',
  },
});

</script>

<template>
  <div class="mod-privilege-item">
    <div class="privilege-item-title">
      <span class="title-underline">权益{{ privilegeIndex }}.</span>
      <span>{{ privilegeTitle }}</span>
      <span
        v-if="subTitle"
        class="sub-title"
      >{{ subTitle }} </span>
      <span
        v-if="privilegeDesc"
        class="desc"
      >{{ privilegeDesc }}</span>
    </div>
    <div class="privilege-item-con">
      <slot name="privilege-con" />
      <!-- <div class="scroll-list">
        <BenefitItem
          v-for="i in 2"
          :key="i"
        />
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" src="./privilege-item.scss"></style>
