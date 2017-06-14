<template>
  <div class='address'>
      <ul class='name-tele'>
        <li><input type="text" placeHolder='收货人姓名'></li>
        <li><input type="text" placeHolder='手机号码'></li>
      </ul>
      <ul class='dizhi'>
        <li><span class='dizhi-dfg'>所在地区</span><span class='diqu-right'>></span></li>
        <li><input type="text" placeHolder='详细地址'></li>
        <li>
          <label>
            <span class='dizhi-dfg'>设为默认地址</span>
            <div>
              <input type="checkbox" class='radioTwo'>
              <p class='radioDui'><span></span></p>
            </div>
          </label>
        </li>
      </ul> 
      <h3 class="add-address">添加地址</h3>   
  </div>
</template>
<script>
import '@/static/css/iconfont.css'
export default {
  data () {
    return {
       
    }
  }
}
</script>
<style lang='less' scoped>
.address{
  width: 100%;
  position: relative;
  .name-tele,.dizhi{
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
    li{
      font-size: 12px;
      text-align: left;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px solid #eee;
      position: relative;
      .diqu-right{
        font-size: 16px;
        position: absolute;
        top: 0;
        right: 10px;
      }
      input{
        padding-left: 10px;
      }
      .dizhi-dfg{
        padding-left: 10px;
      }
      div{
        position: absolute;
        top: 5px;
        right: 10px;
        .radioTwo{
          display: none;
        }
        .radioDui{
          display: inline-block;
          width: 15px;
          height: 15px;
          border: 1px solid #ccc;
          border-radius: 50%;
          line-height: 15px;
          span{
            display: inline-block;
            content: '';
            width: 10px;
            height: 6px;
            border-color: transparent;
            border-left: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            margin-left: 2px;
            margin-top: 2px;
            transform: rotate(-45deg);
            display: none;
          }
        }
        input:checked + .radioDui{
          background: #991f33;  
        }
        input:checked + .radioDui span{
          display: block;  
        }
      }

    }
  }
  .add-address{
    font-size: 14px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #991f33;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
