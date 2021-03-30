<template>
  <div class="footer">
    <div class="common-footer"></div>
    <div class="nav-bottom">
      <div class="nav-bottom-main">
        <div class="foot_link">
          <span class="nav-bottom-copyright">
            <span class="nav-bottom-copyright-icon">&copy;</span>
            1997-2021我是footer
          </span>
          |
          <a
            href="#"
            target="_blank"
            >公司简介</a
          >
          |
          <a href="" target="_blank"
            >帮助中心</a
          >
          |
          <a href="" target="_blank"
            >意见反馈</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'common-footer',
};
</script>
<style lang="less" scoped>
@import '~minireset.css';
a {
  text-decoration: none;
  outline: none;
  -webkit-backface-visibility: hidden;
}
.common-footer {
  width: 100%;
  height: 437px;
  clear: both;
  background: url('../../src/assets/footer.jpg') no-repeat center;
  background-size: 2560px 437px;
}
.nav-bottom-copyright {
  margin-right: 10px;
}
.nav-bottom {
  height: 84px;
  background: #404040;
  font-size: 12px;
  color: #ffffff;
}
.nav-bottom .nav-bottom-main {
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
}
.nav-bottom .nav-bottom-main a {
  font-size: 12px;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
  }
}
</style>
