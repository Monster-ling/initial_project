<script>
export default {
  props: {
    accountType: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<template>
  <i
    v-if="accountType=='qq'"
    class="icon icon_qq_bg"
  >
    <svg class="none">
      <symbol
        id="svg_icon_qq"
        viewBox="0 0 32 32"
      >
        <path d="M26.547 19.372c-0.24-0.769-0.567-1.659-0.893-2.508l-1.22-2.993v-0.933c0-5.137-2.447-10.275-8.44-10.275s-8.433 5.137-8.433 10.275v0.933l-1.22 2.993c-0.327 0.849-0.653 1.739-0.9 2.508-1.14 3.641-0.773 5.177-0.487 5.218 0.607 0.081 2.36-2.751 2.36-2.751 0.113 2.143 1.133 4.027 2.68 5.289l0.013 0.010c-0.791 0.221-1.482 0.54-2.108 0.951l0.028-0.017c-0.226 0.105-0.38 0.33-0.38 0.591 0 0.093 0.020 0.182 0.055 0.262l-0.002-0.004c0.367 0.647 6.6 0.405 8.393 0.2 1.793 0.2 7.987 0.445 8.393-0.2 0.039-0.079 0.061-0.172 0.061-0.27 0-0.26-0.158-0.483-0.384-0.578l-0.004-0.002c-0.594-0.403-1.285-0.723-2.025-0.922l-0.048-0.011c1.559-1.273 2.577-3.157 2.686-5.282l0.001-0.018s1.753 2.832 2.367 2.751c0.28-0.041 0.647-1.537-0.493-5.218z" />
      </symbol>
    </svg>
    <svg class="svg_icon svg_icon_qq"><use xlink:href="#svg_icon_qq" /></svg>
  </i>
  <i
    v-else-if="accountType=='wx'"
    class="icon icon_wechat_bg"
  >
    <svg class="none">
      <symbol
        id="svg_icon_wechat"
        viewBox="0 0 32 32"
      >
        <path d="M26.567 24.22c-0.139 0.111-0.228 0.28-0.228 0.471 0 0.013 0 0.026 0.001 0.039l-0-0.002c0 0.063 0.033 0.095 0.033 0.159 0.127 0.507 0.353 1.301 0.353 1.333 0 0.063 0.033 0.127 0.033 0.19-0 0.14-0.114 0.254-0.255 0.254-0.002 0-0.004-0-0.006-0h0c-0.061-0.009-0.115-0.031-0.161-0.064l0.001 0.001-1.767-1.016c-0.107-0.080-0.242-0.127-0.388-0.127-0.011 0-0.022 0-0.033 0.001l0.002-0c-0.011-0.001-0.024-0.001-0.037-0.001-0.068 0-0.133 0.012-0.193 0.034l0.004-0.001c-0.789 0.22-1.696 0.347-2.632 0.349h-0.001c-4.44 0-8.013-2.952-8.040-6.6 0-3.651 3.6-6.603 8.040-6.603s8.040 2.953 8.040 6.603c-0.057 2.077-1.133 3.892-2.744 4.967l-0.022 0.014zM18.62 16.125c-0.537 0.009-0.968 0.446-0.968 0.984 0 0.543 0.441 0.984 0.984 0.984s0.984-0.44 0.984-0.984v0c-0.005-0.544-0.447-0.984-0.993-0.984-0.003 0-0.005 0-0.008 0h0zM23.993 16.125c-0.537 0.009-0.968 0.446-0.968 0.984 0 0.543 0.441 0.984 0.984 0.984s0.984-0.44 0.984-0.984v0c-0.009-0.545-0.453-0.984-1-0.984-0 0-0 0-0 0v0zM12.513 19.204c-0 0.024-0.001 0.052-0.001 0.081 0 0.666 0.117 1.304 0.333 1.895l-0.012-0.038h-0.513c-1.123-0-2.209-0.163-3.234-0.465l0.081 0.020c-0.073-0.021-0.158-0.033-0.245-0.033-0.017 0-0.034 0-0.051 0.001l0.002-0c-0.192 0.004-0.369 0.063-0.517 0.162l0.004-0.002-2.12 1.206c-0.055 0.034-0.121 0.056-0.191 0.063l-0.002 0c-0.006 0-0.013 0.001-0.021 0.001-0.166 0-0.3-0.134-0.3-0.3 0-0.006 0-0.013 0.001-0.019l-0 0.001c0.005-0.082 0.026-0.157 0.061-0.225l-0.001 0.003c0.033-0.032 0.293-0.984 0.453-1.587 0.022-0.047 0.035-0.102 0.035-0.16 0-0.011-0-0.022-0.001-0.032l0 0.001c-0.007-0.207-0.106-0.389-0.258-0.507l-0.002-0.001c-1.974-1.309-3.276-3.495-3.346-5.99l-0-0.010c0-4.381 4.313-7.933 9.653-7.933 4.793 0 8.78 2.889 9.487 6.635h-0.513c-4.86-0.003-8.78 3.235-8.78 7.235zM9.1 9.617c-0.615 0.004-1.114 0.497-1.127 1.109l-0 0.001c0.002 0.614 0.5 1.111 1.115 1.111 0.004 0 0.008-0 0.013-0h-0.001c0.615-0.004 1.114-0.497 1.127-1.11l0-0.001c0-0 0-0.001 0-0.001 0-0.613-0.497-1.109-1.109-1.109-0.006 0-0.012 0-0.018 0h0.001zM15.5 9.617c-0.615 0.004-1.114 0.497-1.127 1.109l-0 0.001c-0 0.005-0 0.010-0 0.016 0 0.622 0.504 1.127 1.127 1.127s1.127-0.504 1.127-1.127c0-0.622-0.504-1.127-1.127-1.127v0z" />
      </symbol>
    </svg>
    <svg class="svg_icon svg_icon_wechat"><use xlink:href="#svg_icon_wechat" /></svg>
  </i>
</template>

<style lang="scss">
/*! darkmode: all off */
.none {
  display: none!important
}

.icon,
.svg_icon {
  display: inline-block;
  color: inherit;
}

.svg_icon path,
.svg_icon use {
  fill: currentColor;
}

.icon_qq_bg,
.icon_qq_bg_white,
.icon_wechat_bg,
.icon_wechat_bg_white {
  width: 16px;
  height: 16px;
  background-color: #4baef4;
  border-radius: 100%;
  text-align: center
}

.icon_qq_bg .svg_icon_qq,
.icon_qq_bg_white .svg_icon_qq,
.icon_wechat_bg .svg_icon_qq,
.icon_wechat_bg_white .svg_icon_qq {
  width: 8px;
  color: #fff
}

.icon_wechat_bg,
.icon_wechat_bg_white {
  background-color: #51c332
}

.icon_wechat_bg .svg_icon_wechat,
.icon_wechat_bg_white .svg_icon_wechat {
  width: 8px;
  color: #fff
}
.icon_qq_bg,.icon_qq_bg_white,
.icon_wechat_bg,
.icon_wechat_bg_white {
  position: relative;
  width: 16px;
  height: 16px;
  background-color: #4baef4;
  border-radius: 100%
}

.icon_qq_bg .svg_icon_qq,
.icon_qq_bg_white .svg_icon_qq,
.icon_wechat_bg .svg_icon_qq,
.icon_wechat_bg_white .svg_icon_qq {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  width: 10px;
  height: 10px;
  color: #fff
}

.icon_qq_bg_white {
  background-color: #fff
}

.icon_qq_bg_white .svg_icon_qq {
  color: #4baef4
}

.icon_wechat_bg,
.icon_wechat_bg_white {
  background-color: #51c332
}

.icon_wechat_bg .svg_icon_wechat,
.icon_wechat_bg_white .svg_icon_wechat {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  width: 10px;
  height: 10px;
  color: #fff
}

.icon_wechat_bg_white {
  background-color: #fff
}

.icon_wechat_bg_white .svg_icon_wechat {
  color: #51c332
}
</style>
