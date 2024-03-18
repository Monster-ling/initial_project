<script setup lang="ts">
import Avatar from '@/components/common/avatar/avatar.vue';
</script>

<template>
  <div class="mod-paybar">
    <div class="paybar">
      <div class="paybar-btn btn-direct">
        <div class="price">
          ¥688
        </div>
        <div class="txt">
          单独购买
        </div>
      </div>
      <div class="paybar-btn btn-invite">
        <div class="tips">
          立省15元
        </div>
        <div class="price">
          ¥618
        </div>
        <div class="invite-con">
          <div class="invite-avatar">
            <Avatar />
            <Avatar />
          </div>
          <div class="invite-txt">
            邀1位好友拼团
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./paybar.scss"></style>
