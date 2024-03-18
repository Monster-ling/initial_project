<script setup lang="ts">
defineProps({
  borderColor: {
    type: String,
    default: 'rgba(0,0,0, 0.2)',
  },
  alias: {
    type: String,
    default: 'right',
  },
});
</script>

<template>
  <i
    :style="{borderColor: borderColor}"
    :class="['mod-arrow', alias]"
  />
</template>

<style lang="scss" src="./arrow.scss"></style>
