<template>
    <div>
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getcatephoto(item.id)">
							{{item.title}}
						</a>	
					</div>
				</div>
		</div>
        <ul class="photoul">
            <router-link v-for="item in list" :key="item.id"  :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>


</template>
<script>
import mui from "../../lib/mui/js/mui.js"
export default {
    data(){
        return {
            cates:[],
            list:[]
        }
    },
    created(){
        this.getphotolist();
        this.getcatephoto(0)
    },
   
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        })
  },
    methods:{
        getphotolist(){
            this.$http.get("api/getimgcategory").then(function (res) {
                // console.log(res);
                
                res.body.message.unshift({title:"全部",id:0})
                this.cates=res.body.message
            })
        },
        getcatephoto(cateId){
            this.$http.get("api/getimages/"+cateId).then(function (res) {
                // console.log(res);
                this.list=res.body.message
                
              })
        }
    },
    
}
</script>
<style lang="scss" scoped>
    *{
        touch-action:pan-y;
    }
   
.photoul{
     
    list-style: none;
    margin:0;
    padding:10px;
    padding-bottom:10px;
    li{
        position: relative;
        margin-bottom:10px;
        text-align: center;
        box-shadow:0 0 9px #999;
        background-color: #ccc;
        img{
            width: 100%;
            vertical-align: middle;
        }
         img[lazy=loading] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
        .info{
            width: 100%;
            position: absolute;
            bottom:0;
            color:white;
            background: rgba(0,0,0,.4);
            .info-title{
                font-size:14px;
            }
            .info-body{
                font-size:13px;
            }
        }
    }
}
</style>