<script setup lang="ts">
import Avatar from '@/components/common/avatar/avatar.vue';
</script>

<template>
  <div class="mod-invite">
    <!-- 拼团 -->
    <div class="invite-con">
      <div class="invite-title">
        <img src="#">
      </div>
      <div class="invite-main">
        <div class="invite-dress">
          装扮占位
        </div>
        <div class="invite-info">
          <div class="user">
            <div class="user-item">
              <Avatar />
              <div class="name">
                用户名用户名
              </div>
            </div>
            <!-- 拼团状态 -->
            <div class="invite-status plus-icon">
              <!-- 待加入 plus-icon-->
              <!-- 拼团成功 success-icon -->
            </div>
            <div class="user-item">
              <Avatar />
              <div class="name">
                xxxx
              </div>
            </div>
          </div>
          <div class="invite-btn">
            <div class="tips">
              立省15元
            </div>
            <div class="txt">
              去邀请好友
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 邀请记录 -->
    <div class="invite-record">
      <div class="record-info">
        <Avatar />
        <div class="username">
          xxxx
        </div>
        <div>邀你加入TA的团</div>
        <div class="record-from">
          最近扫码
        </div>
        <!-- is-disable 失效 -->
        <div class="record-btn">
          加入
        </div>
        <div class="close-btn">
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/ed93ca1710402834455.png">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./invite.scss"></style>
