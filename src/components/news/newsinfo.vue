<template>
    <div class="newsinfocontainer">
        <h3>{{infolist.title}}</h3>

        <p>
            <span>发表时间:{{infolist.add_time}}</span>
            <span>点击:{{infolist.click}}</span>
        </p>
        <hr>
        <div>{{infolist.content}}</div>

        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import comment from "../subcomponents/comment.vue"

export default {
    data(){
        return{
            id:this.$route.params.id,
            infolist:{}
        }
    },
    created(){
        this.getnewsinfo()
    },
    methods:{
        getnewsinfo(){
            this.$http.get("api/getnew/"+this.id).then(res=>{
                // console.log(res);
                if(res.body.status==0){
                   this.infolist=res.body.message
                }else{
                    Toast("获取新闻失败。。。")
                }
                
              })
        }
    },
    components:{
        'comment':comment
    }
}
</script>
<style lang="scss" scoped>
    .newsinfocontainer{
        padding:0 4px;
        h3{
            text-align: center;
            font-size:16px;
            color:red;
        }
        p{
            display: flex;
            justify-content: space-between;
            color:#0499ea;
        }
        
    }
</style>