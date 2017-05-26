<template>
  <div class="translate">
    <h3 class='transTitle'>{{translateText.Subject}}</h3>
    <p class='transPrice'> 
      <span>￥{{translateText.FinalAmount}}</span>
      <span>￥{{translateText.FinalPrice}}</span>
      <span>月销{{translateText.MonthSalesNum}}件</span>
    </p>
    <ul class='transYou' v-if=''>
      <li><span>·</span>邮费{{translateText.LimitBuy}}元</li>
    </ul>
    <p class='transGood2'> 
      <span v-for='i in translateText.Promises'>{{i}}</span>
      <span class='clear'></span>
    </p>
    <ul class="transGood">
      <li v-if='translateText.Promotions' v-for='z in translateText.Promotions'>{{z.Subject}}<span>></span>
      </li>
    </ul>
    <ul class='transGood' v-if='translateText.PropertySku'>
      <li>请选择：
        <a href="javascript:;" v-for='x in translateText.PropertySku.Properties'>{{x.Name}},<span>></span></a>
      </li>
    </ul>
  </div>   
</template>
<script>
export default {
  name: 'Swiper',
  props: ['translateText'],
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.translate{
  text-align: left;
  .transTitle{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 20px;
    background: #fff;
  }
  .transPrice{
    background: #fff;
    line-height: 34px;
    position: relative;
    span:nth-child(1){
      color:#991f33;
      padding-left: 10px;
    }
    span:nth-child(2){
      font-size: 12px;
      padding-left: 10px;
      color:#ccc;
      text-decoration: line-through;
    }
    span:nth-child(3){
      color:#ccc;
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
  .transYou{
    height: 28px;
    line-height: 20px;
    font-size: 12px;
    border-top: 1px solid #eee;
    background: #fff;
    padding-left: 10px;
    color: #ccc;
    margin-bottom: 10px;
    span{
      display: inline-block;
      color: #000;
      font-size: 18px;
      padding-right: 5px;
      padding-top: 3px;
    }
  }
  .transGood{
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    margin-bottom: 10px;
    li{
      padding-left: 10px;
      height: 35px;
      line-height: 35px;
      background: #fff;
      position: relative;
      border-bottom: 1px solid #eee;
      span{
        font-size: 16px;
        color: #ccc;
        position: absolute;
        top: 5px;
        right: 20px;
      }
    }
  }
  .transGood2{
    height: 35px;
    line-height: 35px;
    font-size: 12px;
    border-bottom: 1px solid #eee;
    padding-left: 10px;
    padding-right: 10px;
    background: #fff;
    span{
      display: inline-block;
      float: left;
      padding-left: 20px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnpJREFUeNqsll1oTnEcx89zuEK5mJC3uEHy9twodmNjkUnUI2+JjNt5ibWZdqFJ8ja7k7ayEtOSm92x0YaSDJOYGxfCHk2UVkry+dX3cJydc55zHs+vPj31nHN+3////3v7Z67MzjoFbCFshvWwAKZABj7DEPTBLXga52R8zLPVcApWwS94AXfgk55Ph8XQAI3wCI7DvaRCE6AVauAD1EEHDEcsaBrshkPQC21QC6P+l9zAR2XQA/vgko7qbIyIo2fndMQt+rZHvkKFbCfdYEHbqRV+d5KbvXsYdshHt3yOEbIdrNCKbjjFWyfsla/WoFAF7NfWrzn/b9flq0a+/wg1w0dockpnTUqmZk8oqxS+mDIm/lOZFRGzFvnO2ks51UlHESLjdNTvYE7I86vynTOhchXjcEqRjGpmO9zVMQUtD89Nw1X+DxYhchn2wH3YAj8j3n1pGq4KK5+yTVk8D8BD2BjsAiG7KnMLrHw+fIV6339n4CA8gQ1JE8hW+wWmxqzGzv40/IDJ6n0W03XwLYGG+R4xoddK8TCz3VQqDucVm1ewVgtMYstMw46uX+1+XsSL72GNft9ClWZREpsLS+GBCXXpz60xH1idLILlEWkcZZ7PLhMa0NCyAE8q0J1HU4hMlE/LzAEv62xCzoCTJex15msmnPA3VW8y2gzaVQKRbZpNbfL9TzHWKinaVeWdRYrk1Dcfy+eYwWfnXw3PNE8uFIhZWEysBG4q7tX+mAY7w4gGVbu2bjV2LKagvYI8Cm/giL6tlK+/zTHmXleh69ZK33VrMHDdWqI6cZW5jV5M0tzrejW0rH426QJZ5dtdXrsw57e1+0j7LcAA6FyRSkLv93MAAAAASUVORK5CYII=) no-repeat 5px center;
      background-size: 10px; 
    }
  }

}
</style>
