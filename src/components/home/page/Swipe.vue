<template>
   <div class="container">
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in imgarr" :key="index" >
            <img :src=item>
        </mt-swipe-item>
    </mt-swipe>
   </div>
</template>

<script>
export default {
    name:"Swipe",
    data(){
        return {
            imgarr:[]
        }
    },
    created(){
         this.getImageUrl()
    },
    methods:{
        getImageUrl(){
            this.$http.get('http://localhost:8888/swipe').then(function(result){
                for(var arr in result.body){
                   this.imgarr.push(result.body[arr])
                }   
            })
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 2.5rem;
}
img{
    height: 100%;
    width: 100%;
}
</style>
