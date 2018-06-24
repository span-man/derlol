<template>
    <div class="bodyLink dd-row dd-center">
        <div class="content dd-row">
            <a v-for="(l,index) in links" :key="index" :href="l.url">{{l.name}}</a>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { url: "http://www.derlol.top", name: "der" },

        { url: "http://fanyi.youdao.com/", name: "（翻译）有道翻译" },
        { url: "http://fanyi.baidu.com/", name: "（翻译）百度翻译" },

        { url: "http://font.chinaz.com", name: "（字体）站长素材" },
        { url: "http://www.hellofont.cn", name: "（字体）字由" },
        {
          url: "http://fontface.codeandmore.com/",
          name: "（字体）字体转换网站"
        },
        { url: "http://www.popzitizh.com/", name: "（字体）字体转换为图片1" },
        { url: "http://www.diyiziti.com/", name: "（字体）字体转换为图片2" },
        {
          url: "http://www.fontconverter.org/",
          name: "（字体）字体转为网页可用的三种格式"
        },

        { url: "http://www.uugai.com", name: "（商标）自定义商标网" },
        { url: "http://www.58pic.com/", name: "（图片）千图网" },
        { url: "https://www.pexels.com/", name: "（图片）国外素材图 pexels" },
        { url: "https://pixabay.com/", name: "（图片）国外素材图 pixabay" },

        { url: "https://www.kuvva.com", name: "（壁纸）插画师作品 kuvva" },
        {
          url: "https://www.vladstudio.com/zh/wallpapers/",
          name: "（壁纸）多桌面壁纸"
        },
        { url: "http://wallls.com/", name: "（壁纸）国外壁纸网站 wallss" },
        {
          url: "https://www.textures.com/",
          name: "（图片，素材）物体表面材质 textures"
        },

        {
          url: "https://ecomfe.github.io/zrender-doc/public/api.html",
          name: "（canvas框架）ZRender api"
        },

        {
          url: "https://huke88.com/course/2/8325.html",
          name: "(c4d学习) 虎嗅网 c4d学习"
        },

        { url: "https://www.flaticon.com/", name: "(图标) 扁平化图标 flation" },

        {
          url: "https://www.bilibili.com/video/av4050443/index_15.html#page=15",
          name: "（python）小甲鱼 "
        },
        {
          url: "http://pygame.org/download.shtml",
          name: "（python 模块）pygame模块下载 "
        },
        {
          url:
            "https://www.bilibili.com/video/av7635196/?from=search&seid=10653502385195071466",
          name: "（scrapy 框架 爬虫）慢速男"
        },

        {
          url: "http://www.imooc.com/learn/47",
          name: "（java）慕课网java spring"
        },
        {
          url: "http://blog.csdn.net/industriously/article/details/52851588",
          name: "（java 软件）使用IntelliJ IDEA开发Spring MVC HelloWorld"
        },

        {
          url: "http://www.qingpingshan.com/jb/javascript/358694.html",
          name: "(nodejs) node 爬虫"
        },
        {
          url:
            "https://www.bilibili.com/video/av10274152/?from=search&seid=5151579666508140933",
          name: "(php) 视频教程"
        },
        {
          url: "https://www.w3cschool.cn/php/php-mysql-connect.html",
          name: "（php）最新api教程"
        },
        {
          url: "http://blog.csdn.net/qq_34341290/article/details/52964215",
          name: "（php csdn）pdo增删改查文字教程"
        },

        {
          url:
            "http://www.oracle.com/technetwork/cn/database/enterprise-edition/downloads/index.html",
          name: "(数据库 oracle) 下载"
        },

        {
          url: "https://processon.com/",
          name: "（软件安装 流程图绘制 process）process on "
        },

        {
          url: "https://www.cnblogs.com/landeanfen/p/4976838.html",
          name: "(bootstrap 框架 组件 ) bootstrap table"
        },

        {
          url: "http://www.w3school.com.cn/sql/sql_wildcards.asp",
          name: "(sql) sql学习w3c"
        },
        {
          url: "http://www.lxway.com/4042802552.htm",
          name: "（sql） 编程资料库"
        },

        {
          url: "http://blog.csdn.net/u013088062/article/details/50130991",
          name: "（软件 pycharm）调试"
        },
        {
          url: "https://www.jianshu.com/p/b4390919a5b5",
          name: "(软件 设置) webstorm es6语法支持"
        },
        {
          url: "http://www.iocoder.cn/?jianshu",
          name: "（程序 java等）芋道源码 纯源码解析博客"
        },

        {
          url: "https://open.alipay.com/channel/miniIndex.htm",
          name: "（支付宝小程序）入口"
        },
        {
          url: "https://docs.alipay.com/mini/introduce",
          name: "（支付宝小程序）开放平台"
        },

        {
          url:
            "https://www.w3cschool.cn/weixinapp/weixinapp-notice.html#消息管理",
          name: "(微信小程序)小程序发送模板消息"
        },
        {
          url: "http://blog.csdn.net/yelin042/article/details/71435628",
          name: "(微信小程序)上拉加载下拉刷新"
        },
        {
          url: "http://kf.qq.com/faq/161222NneAJf161222U7fARv.html",
          name: "(微信小程序) 微信商户cert安全证书"
        },

        {
          url:
            "https://beian.aliyun.com/order/orderStatusDetail.htm?spm=a3c00.7621333.a3c20.4.4117c52bRW5rfe&baOrderId=22110592432",
          name: "（域名 备案 阿里云）阿里云备案"
        },

        {
          url: "http://z-dm.jd.com/",
          name: "（京东众筹）京东众筹新版后台登陆"
        },
        { url: "", name: "" },
        { url: "", name: "" }
      ]
    };
  }
};
</script>

<style scoped>
.content {
  width: var(--cont-width);
  background: #f1f1f1;
  flex-wrap: wrap;
}
.content a {
  box-sizing: border-box;
  display: inline-block;
  background: #222a37;
  height: 30pt;
  padding: 0pt 10pt;
  line-height: 30pt;
  font-size: 16pt;
  margin: 2pt 5pt;
  color: #fdd188;
  text-decoration: none;
}
</style>

