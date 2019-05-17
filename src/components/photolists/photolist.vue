<template>
    <div>
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id">
							{{item.title}}
						</a>
						
					</div>
				</div>

			</div>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js"
export default {
    data(){
        return {
            cates:[]
        }
    },
    created(){
        this.getphotolist();
    },
   
    mounted() {
        mui(".mui-scroll-wrapper").scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        })
  },
    methods:{
        getphotolist(){
            this.$http.get("api/getimgcategory").then(function (res) {
                console.log(res);
                
                res.body.message.unshift({title:"全部",id:0})
                this.cates=res.body.message
            })
        }
    },
    
}
</script>
<style lang="scss" scoped>
    *{
        touch-action:pan-y;
    }
</style>