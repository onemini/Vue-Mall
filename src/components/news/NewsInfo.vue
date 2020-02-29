<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{ newsinfo.add_time | dateFormat}}</span>
            <span>点击: {{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论 -->
        <comment-box :id=this.id></comment-box>
    </div>
</template>
<script>
//1.导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id: this.$route.params.id,
            newsinfo: {}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo() {
            this.$axios.get("api/getnew/" + this.id).then(result => {
                if (result.data.status === 0) {
                    this.newsinfo = result.data.message[0];
                }else{
                    Toast("获取新闻失败！");
                }
            })
        }
    },
    components:{
        "comment-box": comment
    }
}
</script>
<style lang="less" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>