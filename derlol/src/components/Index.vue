
<template>
<div class="index">
    <HeadNav v-on:search="search($event)"></HeadNav>
    <div style="height:55px;"></div>
    <BodyLink ref="child"></BodyLink>
</div>
   
</template>
<script>
import HeadNav from '@/components/HeadNav'
import BodyLink from '@/components/BodyLink'
export default {
  data() {
    return {};
  },
  components:{
    HeadNav,
    BodyLink
  },
  methods:{
    search(_searchStr){
      // console.log("_searchStr--->",_searchStr)
      this.$refs.child.search(_searchStr)
    }
  }
};
</script>
<style scoped>


</style>