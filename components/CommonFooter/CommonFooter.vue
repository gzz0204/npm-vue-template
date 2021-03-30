<template>
  <div class="footer">
    <div class="common-footer"></div>
    <div class="N-nav-bottom">
      <div class="N-nav-bottom-main">
        <div class="ntes_foot_link">
          <span class="N-nav-bottom-copyright">
            <span class="N-nav-bottom-copyright-icon">&copy;</span>
            1997-2021网易公司版权所有
          </span>
          <a href="http://corp.163.com/" target="_blank">About NetEase</a> |
          <a
            href="http://gb.corp.163.com/gb/about/overview.html"
            target="_blank"
            >公司简介</a
          >
          |
          <a href="http://gb.corp.163.com/gb/contactus.html" target="_blank"
            >联系方法</a
          >
          |
          <a href="http://corp.163.com/gb/job/job.html" target="_blank"
            >招聘信息</a
          >
          | <a href="http://help.163.com/ " target="_blank">客户服务</a> |
          <a href="http://gb.corp.163.com/gb/legal.html" target="_blank"
            >隐私政策</a
          >
          | <a href="http://emarketing.163.com/" target="_blank">广告服务</a> |
          <a href="http://jubao.aq.163.com/" target="_blank"
            >不良信息举报 Complaint Center</a
          >
          |
          <a href="https://jubao.163.com/" target="_blank">廉正举报</a>
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
  height: 208px;
  clear: both;
  background: url('../../src/assets/footer.png') no-repeat center;
  background-size: 2560px 208px;
}
.N-nav-bottom-copyright {
  margin-right: 10px;
}
.N-nav-bottom {
  height: 84px;
  background: #272789;
  font-size: 12px;
  color: #ffffff;
}
.N-nav-bottom .N-nav-bottom-main {
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
}
.N-nav-bottom .N-nav-bottom-main a {
  font-size: 12px;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
  }
}
</style>
