<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Transition name="drop">
    <div
      v-if="visible"
      class="mod-stickybar"
    >
      <div class="stickybar">
        <!-- JUMP 第一个item JUMP+ 第二个item -->
        <!-- active 选中态 -->
        <div class="stickybar-item active">
          <div class="title" />
          <div class="desc">
            5大权益
          </div>
        </div>
        <div class="stickybar-item">
          <div class="title" />
          <div class="desc">
            7大权益
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" src="./stickybar.scss"></style>
