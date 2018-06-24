<template>
<div class="headNav dd-row dd-center">
  
        <div class="square" @click="login"></div>

    <div class="content dd-row dd-center  dd-h-2side">
        <div class="left">
            <h1><a href="http://derlol.top/">derlol</a></h1>
        </div>
        <div class="right search dd-row">
                <input  type="text" @keydown.enter="search" @input="search">
                <button class="btn btn-info" @click="search">搜索</button>
        </div>
    </div>
</div>
     
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    login(){
      alert(1)
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

.square{
  width: 15pt;
  height: 15pt;
  background: red;
  position: absolute;
  top: 0;
  right: 0;
} 
</style>