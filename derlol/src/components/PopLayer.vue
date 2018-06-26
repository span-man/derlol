<template>
    <div class="mask" v-if="showBool">
        <div class="popLayer dd-column dd-center" >
            <div class="head dd-row dd-h-right">
                <img src="@/assets/img/wrong.png" @click="close" alt="x">
            </div>
            <div class="body dd-column dd-center">
                <span class="hint">{{username}}</span>
                <div><input class="dd-input" type="text" v-model="username" placeholder="username"/></div>
                <div><input class="dd-input" type="text" v-model="password" placeholder="password"/></div>
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
      username: "",
      password: ""
    };
  },
  methods: {
    confirm() {
        alert(123)
      //   this.$router.push({ path: "/" });
      let url = "http://localhost:2999/userLogin";

        // this.axios.get(url).then(res =>{
        //     alert(666)
        //     console.log(res)
        // })

      this.axios({
        method: "post",
        url: url,
        params: {
          username: this.username.toString(),
          username: this.password.toString()
        }
      }).then(res => {
        console.log("res-->", res);
      });
    },
    close() {
      this.showBool = !this.showBool;
    },
    // 取消 再次选择是否真的取消
    cancle() {
      if (confirm("真的取消吗？")) {
        this.close();
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
