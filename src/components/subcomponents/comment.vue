<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="addcomment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in cmtlist" :key="item.add_time">
                <div class="cmt-title">
                  第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
                </div>
                <div class="cmt-body">
                  {{item.content==="undefined"?"此用户很懒什么都没说":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
    
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            pageIndex:1,
            cmtlist:[],
            msg:''
        }
    },
    props:["id"],
    created(){
        this.getcomment()
    },
    methods:{
        getcomment(){
           
               this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(res=>{
                // console.log(res);
                if(res.body.status==0){
                   this.cmtlist=this.cmtlist.concat(res.body.message)
                }else{
                    Toast("获取新闻失败。。。")
                }
                
              })
        },
        getmore(){
            this.pageIndex++
            this.getcomment()
        },
        addcomment(){
            if(this.msg.trim().length===0){
                return Toast("内容为空，请重新输入")
            }
            this.$http.post("api/postcomment/"+this.$route.params.id,{content:this.msg.trim()},{emulateJSON:true}).then(function (res) {
                console.log(res);
                
               const ha={
                   user_name:"黄志涛",
                   add_time: Date.now(),
                    content: this.msg.trim()
               }
               this.cmtlist.unshift(ha)
                this.msg = "";
              })
        }
    }
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size:18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
    }
</style>
