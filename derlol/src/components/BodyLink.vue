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
    this.axios.get(url).then(res => {
      // console.log("res.data--->", res.data);
      let str = JSON.stringify(res.data);
      console.log("str--->", str);
      let json = String.parseJSON(str);
      // String.parseJSON() 
      console.log("json--->",json);
      this.links = json
      let len = this.links.length;
      for (let i = 0; i < len; i++) {
        this.links[i].bool = 1;
      }
    });
  },
  methods: {
    search(_searchStr) {
      console.log("222222222->", _searchStr);
      console.log("this.links->", this.links);

      // let len = this.links.length;
      // for (let i = 0; i < len; i++) {
      //   if (this.links[i].name.search(_searchStr) != -1) {
      //     this.links[i].bool = 1;
      //   } else {
      //     this.links[i].bool = 0;
      //   }
      // }
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

