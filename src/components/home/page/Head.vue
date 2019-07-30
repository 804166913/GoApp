<template>
    <div class="Head">
       <div class="Head-left">
           <span class="iconfont">
               &#xe601;
           </span>
       </div>
       <div class="Head-seach">
            <span class="iconfont">
               &#xe607;
           </span>
           输入城市/景点/游玩主题
       </div>
       <div class="Head-right">
           北京
            <span class="iconfont">
              &#xe615;
           </span>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.Head{
    width: 100%;
    line-height: 0.88rem;
    background-color: rgb(70,180,210);
    color:white;
    font-size: 0.36rem;
    display: flex;
}
.Head-left {
    width: 0.4rem;
    padding: 0 0.2rem;
    text-align: center;
    font-weight: bold;
}
.Head-seach{
    flex: 1;
    background: white;
    height: 0.6rem;
    margin: 0.16rem 0;
    line-height: 0.6rem;
    border-radius: 0.1rem;
    color: darkgray;
    font-size: 0.28rem;
    padding-left: 0.2rem;
}
.Head-right{
    font-size: 0.28rem;
    padding: 0 0.2rem;
}
</style>
