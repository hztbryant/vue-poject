<template>
    <div>
       <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbolist" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
                     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                     <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
                     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                     <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
                     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                     <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div>
                        </router-link>
                    </li>
                     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                     <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div>
                        </router-link>
                    </li>
                     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div>
                        </router-link>
                    </li>
		            
		        </ul> 
    </div>
</template>
<script>
 import {Toast} from "mint-ui"
export default {
   
    data(){
        return{
            lunbolist:[]
        }
    },
    created(){
        this.getbo()
    },
    methods:{
        getbo(){
            this.$http.get("api/getlunbo").then(result=>{
                // console.log(result);
                
                if(result.body.status==0){
                    this.lunbolist=result.body.message
                }else{
                    Toast("加载图片失败")
                }
                
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 300px;
}
.mui-grid-9{
    background-color: #fff;
    border:0;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-table-view-cell{
        border:0;
    }
}

</style>
