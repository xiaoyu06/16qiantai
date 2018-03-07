<template>
    <!--推荐商品-->
    <div class="left-220">
        <ul class="side-img-list">

            <li v-for="(item,i) in list" :key="item.id">
                <div class="img-box">
                    <label>{{i+1}}</label>
                    <img :src="item.img_url">
                </div>
                <div class="txt-box">
                    <a href="/goods/show-98.html">{{item.title}}</a>
                    <span>{{item.add_time | date}}</span>
                </div>
            </li>

            <!-- <li>
                <div class="img-box">
                    <label>2</label>
                    <img src="/upload/201504/20/thumb_201504200258403759.jpg">
                </div>
                <div class="txt-box">
                    <a href="/goods/show-97.html">三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</a>
                    <span>2015-04-20</span>
                </div>
            </li>

            <li>
                <div class="img-box">
                    <label>3</label>
                    <img src="/upload/201504/20/thumb_201504200242250674.jpg">
                </div>
                <div class="txt-box">
                    <a href="/goods/show-95.html">惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）</a>
                    <span>2015-04-20</span>
                </div>
            </li>

            <li>
                <div class="img-box">
                    <label>4</label>
                    <img src="/upload/201504/20/thumb_201504200239192345.jpg">
                </div>
                <div class="txt-box">
                    <a href="/goods/show-94.html">金士顿（Kingston） DataTraveler SE9 32GB 金属U盘</a>
                    <span>2015-04-20</span>
                </div>
            </li> -->

        </ul>
    </div>
    <!--/推荐商品-->
</template>

<script>
export default {
  // 接收父传过来的list数据
  props: ["list"],

  // 局部过滤器
 filters: {
     //日期过滤器
     date(tplDate){
         let data = new Date(tplDate);
         return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
     }
 }
};
</script>

<style scoped>

</style>