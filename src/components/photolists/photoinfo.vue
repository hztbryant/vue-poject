<template>
    <div class="photoinfo-container">
        <h3>{{infolist.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{infolist.add_time|dateFormat}}</span>
            <span>点击次数:{{infolist.click}}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
        <vue-preview :slides="list" @close="handleClose" class="Ha"></vue-preview>

        <!-- 图片详细内容区域 -->

        <div class="content">
            {{infolist.content}}
        </div>

        <!-- 评论子组件 -->
        <cmtinfo :id="id"></cmtinfo>
    </div>
</template>
<script>
import comment from "../subcomponents/comment.vue"
export default {
    data(){
        return {
            id:this.$route.params.id,
            infolist:{},
            list:[]
        }
    },
    created(){
        this.getinfo()
        this.getpreview()
    },
    methods:{
        getinfo(){
            this.$http.get("api/getimageInfo/"+this.id).then(function (res) {
                // console.log(res);
                if(res.body.status===0){
                    this.infolist=res.body.message
                }
                
              })
        },
        handleClose () {
        console.log('close event')
      },
        getpreview(){
            this.$http.get("api/getthumimages/"+this.id).then(function (res) {
                console.log(res);
                if(res.body.status===0){
                    res.body.message.forEach(item=>{
                        item.w=300
                        item.h=300
                        item.msrc=item.src
                    })
                    this.list=res.body.message
                }
                
              })
        }
    },
    components:{
        "cmtinfo":comment
    }
}
</script>
<style lang="scss" scoped>
    .photoinfo-container{
        padding:3px;
        h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .Ha{
      figure {
    margin: 1em 40px;
}
      a{
        img{
          width: 200px!important;
      }
      }
      
  }
    }
</style>