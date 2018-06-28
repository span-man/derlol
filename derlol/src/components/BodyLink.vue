<template>
    <div class="bodyLink dd-row dd-center">
        <div class="content dd-row">
            <a v-for="(l,index) in links" 
            v-show="!!l.bool" :key="index" :href="l.url">{{l.name}}</a>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      links: []
    };
  },
  mounted() {
    let url = this.domain + "/getLinks";
    this.axios.get(url).then((res) => {
      console.log("res.data-数据-->", res.data);
      let temp = JSON.parse(JSON.stringify(res.data));
      let len = temp.length;
      for (let i = 0; i < len; i++) {
        temp[i].bool = 1;
      }
      // 注意先后顺序 才能正常运行
      this.links = temp;
    });
  },
  methods: {
    search(_searchStr) {
      console.log("222222222->", _searchStr);
      // console.log("this.links->", this.links);
      let len = this.links.length;
      console.log(len);
      for (let i = 0; i < len; i++) {
        if (this.links[i].name.search(_searchStr) != -1) {
          console.log(i);
          this.links[i].bool = 1;
        } else {
          this.links[i].bool = 0;
        }
      }
    }
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

