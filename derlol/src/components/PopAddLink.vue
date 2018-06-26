<template>
    <div class="mask" v-show="showBool">
        <div class="popLayer dd-column dd-center" >
            <div class="head dd-row dd-h-2side">
                <h4>| 添加链接</h4>
                <img src="@/assets/img/wrong.png" @click="close" alt="x">
            </div>
            <div class="body dd-column dd-center">
                <span class="hint">{{username}}</span>
                <div><input class="dd-input" type="text" v-model="url" placeholder="url"/></div>
                <div><input class="dd-input" type="text" v-model="name" placeholder="name"/></div>
                <div><input class="dd-input" type="text" v-model="s" placeholder="s"/></div>
                <span class="hint">{{password}}</span>
            </div>
            <div class="foot dd-row dd-center">
                <button class="dd-btn-ccc " @click="cancle">取 消</button>
                <button class="dd-btn-red" @click="confirm">确 定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showBool: false,
      url: "",
      name: "",
      s: ""
    };
  },
  methods: {
    confirm() {
      let url = this.domain + "/addLink";

      //url正则验证
      function checkUrl(_url) {
        let urlP = /^((http|https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        return urlP.test(_url);
      }
      // 只能写字母 字母验证
      function checkLetter(_letter) {
        let letterP = /^(\w|\W){3}$/;
        return letterP.test(_letter);
      }

      if (!!this.url == 0 || !!this.name == 0 || !!this.s == 0) {
        alert("不能有空~");
        return false;
      }
      if (!checkUrl(this.url)) {
        alert("网址不对");
        return false;
      }
      if (!checkLetter(this.s)) {
        alert("s不对");
        return false;
      }

      this.axios({
        method: "post",
        url: url,
        params: {
          url: this.url.toString(),
          name: this.name.toString(),
          s: this.s.toString()
        }
      }).then(res => {
        console.log("res-->", res);
        if (res.data == -1) {
          alert("s不对了~");
        }else{
          window.location.reload();
        }
      });
    },
    close() {
      this.showBool = !this.showBool;
    },
    // 取消 再次选择是否真的取消
    cancle() {
      if (confirm("真的取消吗？")) {
        this.showBool = false;
        this.url = "";
        this.name = "";
        this.s = "";
      } else {
      }
    }
  },
  components: {}
};
</script>
<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.popLayer {
  background: rgba(255, 255, 255, 1);
  /* top: 20vw; */
  border-radius: 5pt;
  margin: 100pt auto;
  width: 400pt;
  padding: 5pt 5pt 20pt 5pt;
}
.head {
}
.head img {
  width: 20pt;
  height: 20pt;
}
.body {
  width: 100%;
  padding: 10pt 0;
}
.body input {
  width: 200pt;
  margin: 5pt 0;
  padding: 0 4pt;
}
.foot button {
  margin: 0 10pt;
  border-radius: 0;
}

.hint {
  color: rgba(253, 21, 21, 0.87);
  font-weight: bold;
}
</style>
