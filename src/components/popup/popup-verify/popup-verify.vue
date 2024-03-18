<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <section v-show="visible">
    <div
      class="mask"
      @click.stop="(()=>{console.log('close mask')})"
    />
    <Transition name="lift">
      <div
        v-if="visible"
        class="popup-verify"
      >
        <div class="title">
          本套餐为18-24岁专享 需通过验证购买
        </div>
        <div
          class="close-btn"
          @click.stop="(()=>{console.log('close')})"
        >
          <img src="https://vip.image.video.qpic.cn/vupload/20240314/6dcae11710397951922.png">
        </div>
        <div class="con">
          <div class="item">
            <div class="item-label">
              真实姓名
            </div>
            <div class="item-value">
              用户用户
            </div>
          </div>
          <div class="item">
            <div class="item-label">
              身份证号
            </div>
            <div class="item-value">
              XXXXXXXXXXXXXXXXXX
            </div>
          </div>
          <div class="item">
            <div class="item-label">
              学校 (选填)
            </div>
            <div class="item-value">
              用户用户
            </div>
          </div>
        </div>
        <div
          v-if="true"
          class="verify-btn"
        >
          去认证
        </div>
        <div
          v-else
          class="verify-btn is--disable"
        >
          暂不符合认证资格
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" src="./popup-verify.scss"></style>
