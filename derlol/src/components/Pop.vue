<template>
    <div class="pop dd-column">
        <div class="head dd-row dd-h-right">
            <img src="@/assets/img/logo.png" alt="x">
        </div>
        <div class="body">
            <p>{{msg ? msg : 'o.0'}}</p>
        </div>
        
    </div>
</template>
<script>
export default {
    props:['msg']
}
</script>
<style scoped>
    .pop{
        background: rgba(0,0,0,0.8);
        /* top: 20vw; */
        border-radius: 5pt;
        z-index: 99;
        position: fixed;
        height: 300pt;
        width: 100%;    
        padding: 5pt;
    }
    .head img{
        width: 20pt;
        height: 20pt;
    }
</style>
