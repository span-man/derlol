<template>
<div class="headNav dd-row dd-center">
  
        <div class="square" @click="login"></div>
        <PopLayer ref="child"></PopLayer>
        <div class="leftsquare" @click="addLink"></div>
        <PopAddLink ref="child2"></PopAddLink>
    <div class="content dd-row dd-center  dd-h-2side">
        <div class="left">
            <h1><a href="http://derlol.top/">derlol</a></h1>
        </div>
        <div class="right search dd-row">
                <input  type="text" @keydown.enter="search" v-model="searchStr" @input="search">
                <button class="btn btn-info" @click="search">搜索</button>
        </div>
    </div>

</div>
     
</template>

<script>
import PopLayer from "@/components/PopLayer";
import PopAddLink from "@/components/PopAddLink";
export default {
  data() {
    return {
      searchStr:''
    };
  },
  components: {
    PopLayer,
    PopAddLink
  },
  methods: {
    login() {
      this.$refs.child.close();
    },
    addLink() {
      this.$refs.child2.close();
    },

    // search 搜索
    search() {
      console.log("searchStr--->",this.searchStr)
      this.$emit('search',this.searchStr)
      // let value = $("#s").val();
      // let arr = dataList;
      // arr.map(json => {
      //   if (json.name.search(value) != -1) {
      //     json.bool = 1;
      //   } else {
      //     json.bool = 0;
      //   }
      // });
      // vm.all_star = arr;
    },
    clickLabel(val) {
      $("#s").val(val);
      this.search();
    }
  }
};
</script>
<style scoped>
.headNav {
  background: #444;
  height: 40pt;
}
.headNav .content {
  width: var(--cont-width);
}
.headNav .content .left h1 a {
  color: wheat;
  text-decoration: none;
}
.headNav .content .left h1 a:hover {
  color: #fff;
}

/* search */
.search {
  border-radius: 0;
}
.search input {
  width: 180pt;
  border-radius: 0;
}
.search button {
  border-radius: 0;
}
/* search */

/* square */

.square {
  width: 15pt;
  height: 15pt;
  background: #014d67;
  position: absolute;
  top: 0;
  right: 0;
}

/* leftsquare */
.leftsquare {
  width: 15pt;
  height: 15pt;
  background: #387386;
  position: absolute;
  top: 0;
  left: 0;
}
</style>