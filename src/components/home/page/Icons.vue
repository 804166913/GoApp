<template>
        <div class="Icons">
           <mt-swipe :auto="0">
                <mt-swipe-item>
                    <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/hotel.png" alt="">
                        <p>特惠酒店</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/flight.png" alt="">
                        <p>低价机票</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/package.png" alt="">
                        <p>度假</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/train.png" alt="">
                        <p>火车票</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/piao.png" alt="">
                        <p>著名景点</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/bus.png" alt="">
                        <p>汽车票船票</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/freeTravel.png" alt="">
                        <p>自由行</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/tuan.png" alt="">
                        <p>旅游团购 </p>
                    </div>
               </mt-swipe-item>
               <mt-swipe-item>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/car.png" alt="">
                        <p>专车自驾游</p>
                    </div>
                     <div class="Icons-item">
                        <img src="//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png" alt="">
                        <p>周边短途</p>
                    </div>
               </mt-swipe-item>
            </mt-swipe>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    @media (min-width:800px) and (max-width:2000px){
        .Icons{
            width: 100%;
            height: 12rem;
        }
    }
    @media (max-width:700px) {
        .Icons{
            width: 100%;
            height: 4rem;
        }
    }
    .Icons-item{
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        float: left;
    }
     .Icons-item>img{
        width: 1.1rem;
        height: 1.1rem;
        display: block;
        margin:0 auto;
    }
     .Icons-item>p{
        font-size: 0.26rem;
        text-align: center;
    }
   
</style>
