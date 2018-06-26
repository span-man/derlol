<template>
    <div class="home">
        <div style="clear: both;  ">
        <div class="fl" v-for="(x,index) in all_star" :key="index">
            <a :href="x.url" target="_blank">
                <span style="display: block; text-align: center;">{{x.name}}</span>
            </a>
        </div>
    </div>
    <div style="clear: both;"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            all_star: [
                {
                    "url": "/#/index",
                    "name": "all-link"
                }, 
            ]
        }
    }    
}
</script>
<style scoped>
   * {
            font-family: "微软雅黑";

        }

        a {
            text-decoration: none;
            color: #666;
        }

        body {
            background-image: url("http://wallpaperscraft.com/image/league_of_legends_lol_elise_girl_armor_claws_minimalism_97279_1600x1200.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
        }

        article {
            margin: 200px auto;
            width: 1200px;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
        }

        .fl {
            float: left;
            width: 300px;
            box-sizing: border-box;
            padding: 10px;
            display: block;
            height: 80px;
        }

     

        .home .fl {
            transition: 0.3s;
        }

        .home .fl:hover {

            transform: translate(0px, 10px) scale(1.2, 1.2);
        }

        .home .fl a {
            display: block;
            background: #52935c;
            padding: 10px 20px;
            font-size: 30px;
            color: white;
        }
</style>
