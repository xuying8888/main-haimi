<template>
   <div class='allType'>
     <bannerNav :banner-nav='bannerNav' class='bannerXiang'></bannerNav>
     <translate :translate-text='translateText'></translate>
     <pingfen :pingfen-text='translateText'></pingfen>
     <introductCont :introduct-cont='translateText'></introductCont>
     <contList :getbuy-things='getbuyThings'></contList>
     <div class="zhezhaoceng" :style="{display:display}" @click='zhezhao'>
         <shopsFooter :get-bought='translateText'></shopsFooter>     
     </div>
     <div class="footer">
        <ul>
           <li class='footerBefore'>
            <router-link to='/homePage/recommendPage/2'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwREQwNzM2ODNBNTExRTZCREQ3RTkyQkJFQ0RBQjk1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwREQwNzM3ODNBNTExRTZCREQ3RTkyQkJFQ0RBQjk1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzBDQTY2Mzk4M0E1MTFFNkJERDdFOTJCQkVDREFCOTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzBDQTY2M0E4M0E1MTFFNkJERDdFOTJCQkVDREFCOTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5h35j3AAACJElEQVR42uyaP0gCYRjGs6JBqMWWlgoaasuxP0NQQRCV1RDVVFDtQVtD2drSFqhRkw1BYkItOSQZjk1BW9BQi0MNDYHYc/AIh0Rk+p2nPS/88Dzf78+PO757v0NPPp9v+E/R2PDPQsISlrCEJSxhCUtYwqaiuZTkeDxeiTE9YJ+fW6DsYj4QCJgRrkC0gGOwzO8dYAV81uMt3QYuKftOlniurd6ErSt5A8bACxghLzx3w5y6EO4Fd8APHsEQuCdDPOdnTm+tCw+ANOgGGTAMnmy/P/FchjlptqlJ4WmQBD6Q4K2b/SYvy98SzE2ybU0Jr4EY8IIImAMfP+R/MCfCNjH2URPCOyAMmkAQrIPcL9rlmBtk2zD7cq2wNckQ2OXkN3hcauyybY7HIfbtKmHrNjznFSrcnuEy+rPazrOvdfbtdYuwtdBcg5miBajcuLAtdDMcw1dtYetRcgsGix4xlQr7o2yQY3VXS7ifxUJfURFR6bAXK30cs99p4VGQYjmYtJWJpqJQjiY5ZopzcER4EVyx4D8Fk9wImI4DcGTbbFxxLkaFN0GU2zwrpsADGHdAeJVjT9i2mlHOyZjwLDfuhWgFPayQnIp80cuEaZPCe+AZHFK+8JjoclC4HSyAE/AKto294uGi0Vnl11Jv4Iy4+o2HK0LCEpawhCUsYQlLWMISlrCEjWwPf7sx1xV2S3j0f2kJS1jCEpawhCUsYQlL+E/xJcAAKflu8nh0B+AAAAAASUVORK5CYII=" alt="">
            </router-link>
           </li>
           <li class='footerBefore'>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjhDMDlENjBBMjUyMTFFNkFFRjdDQzEyNzM5QUMyN0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjhDMDlENUZBMjUyMTFFNkFFRjdDQzEyNzM5QUMyN0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzA5QUQyNDU4NDU5MTFFNjgxNDZEQTExNkFEMDNDNEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzA5QUQyNDY4NDU5MTFFNjgxNDZEQTExNkFEMDNDNEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oNFMPAAADiUlEQVR42uyaWWgTURSGJ1ErVkFRxA1iUqutC2IjKC5PQh8ENVYfihtVFBeMC7hSxQqiiOCDVbEqLihaEUHy0AcVii+CvnRTEWk1dalVRMRSQdQa/0P/wCUktSYz6WRyD3zMdGZy7vx3PedOXZFIxMgmcxtZZlqwFqwFa8FasBasBWvBWrBV1j9VB6FQ6H9/0g88BDlgHvidSvmBQMD2LbwSzAezwCqnd2npUYeUvyvAACcLXgvywUvwAvjAOqcKljF7gOeHicFrA50oeAPwgqfgNrgDmoCH9xwleBAoV1r3D6ngtXI+4xjBm8A4UAfuqqsar40Fm50ieDDYz3OZodVNtIgya+/jsxkvOAhGgcegJs79Gt6TZ7ZmuuCJYI/SuoksOpb3ctmyb2ipmKypM2Lw8N498KCH397n/WLQDMKggcgYrwdtfSIYsbPEwpMVUX5QBIbFebyTk9T2XrguBafBUlaeUKLc/6xUQB3PWzjbW9rCT8DMONc/Kq1Sn8QLfQWrmVxMYiX6WalyPpI9oFj5jYz9OVYL/qnMsMfBI9Z4u0lDo4thp3BTue5hRc8Fu4ArmTkomUkrwJaTAmdz7LUb1ttbzuiFLLsVLLdcMPJPGUsLOaYWgMt8AavNxbIWsWzp2u/TsixBdAsL/MactjINgk+wrA6wmL0sfeswRDfisIxjOqhEU1aY+N7Nsko4caY/8IDoWta6TDTHwHoLxJbRdxfz6dq+jrQkzdvGMXYeLDFRrPi6RN9SRrVdQstz4AjX0GqunalaEX2Jz6Msw1axtMTKVSAXnDTBXyV9ic+Ddk0eoi9mRgv7lbTRttnSCB47TPD1hcfhdhbs4/G1Cb7CMT5tLThsgq9WHvOypYWjgr12FuyNedlElkN6sleZIHjCP7r0dAYqneQWmJrJXdqbQPA0Cm1gSucmssvRxLy3MNO69FAuS9+5+yE2ha3YSKE/wCmje49aEvoz4BdYAZ6Ba9ztEGvjvTGGiZ9i3BaN3wJww+j+rFLKLEciJ9mR3Ak+gQ+Mj/MZTUlysAY8B1fAePCGcXSeHQX7lKO8tHwHlo/dZylqB0XGmiTxW9iyF7l1JFmRfGEcbXa3tkJwLlurikKDRu+2WKU1N7J3XOW1IXYWLJtusvN4ga0lrfYuyQhLvhnLVvB1zubNpu0T6f+X1oK1YC1YC9aCtWAtWAvWgrXgpOyvAAMAXEvE4BWoKdUAAAAASUVORK5CYII=" alt="">
           </li>
           <li class='footerBefore'>
            <router-link to='/bought'>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyNDMwNTI3ODNBNjExRTY4QzNCRjE4RkY0MUI1MTFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyNDMwNTI4ODNBNjExRTY4QzNCRjE4RkY0MUI1MTFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjIzMEIyNTg4M0E2MTFFNjhDM0JGMThGRjQxQjUxMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjIzMEIyNTk4M0E2MTFFNjhDM0JGMThGRjQxQjUxMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xph1cAAAB2klEQVR42uyazytEURTH3zAUSbLTYGMWIku/ZoEaNjbzLyhLO/4FC/+EhT9hVmowRdGQlWGULIiFYkWUkuf7cl5pUoy575zR+576dHs13ZnPnHfPPe/2Er7ve3GKJi9mQWEKU5jCFKYwhSlM4agiWcuH8/n8bxvvhKZELpdjhp1kWDtzXMMUpnDkwmPgEvhG7IOUpvAaGDBMWAasaAp3yDgPun+gXaq8K5blu1uj3Jaq4wyMgj6wqZzdWRn3NDNclnFEWbYFTIF3UIyD8KQspxPwEAfh8Hbe0t6W7sC9FKWUonBWxqK2sEWWO2X/f621YLkWHlISnpbdpQRe4pDhcP3uWPXSp8rCWWvhivS1wS3dHLFsDxgGj+DISvgJXIE2kFbK7i54s3w81FrH4frdtn4e1qrUda3f/5bhQdArzU4lDsJfs+tbC19I55OW4tVw+69r4aBinsu2FMU6DuadqbdguRQO4lDGY8/92VXwh3bJgcNNowivSjMQ1XtQ12Cp3kmSDn/QLRj3Gjx4Lk3h2qMfFKTHLsi1xRxqwutgzvs8ZAvGDaM51IQnqq4zRnOoCZeqrg+M5lATXpRu6FnGBaM5vo0E35emMIUpTGEKU5jCFKYwhf8UHwIMALudjU3NJkhkAAAAAElFTkSuQmCC" alt="">
             </router-link>
           </li>
           <li class='footer2' @click='buyThis'>加入购物车</li>
           <li class='footer3'>立即购买</li>
       </ul>
     </div>
     
   </div>   
</template>
<script>
import bannerNav from '@/components/bannerNav/'
import translate from './component/translate'
import pingfen from './component/pingfen'
import introductCont from './component/introductCont'
import contList from './component/tuijianCont'
import shopsFooter from './component/shopsFooter'
export default {
  data () {
    return {
      bannerNav:[],
      translateText:[],
      getbuyThings:[],
      display: 'none'
    }
  },
  components: {
    bannerNav,
    translate,
    pingfen,
    introductCont,
    contList,
    shopsFooter
  },
  created () {
    let ProductID=this.$route.params.ProductID;
    this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+ProductID+"&platform=WAP",
      {
          jsonp:"_callback"
      }
     ).then(function (res) {
        var data=res.data.data;
        // 要转成json对象
        this.bannerNav = JSON.parse(data.ProductPictures);
        this.translateText = res.data.data;
        this.getbuyThings = data.Recommend;
        console.log(data)
     }, function (response) {
        console.log(response)
     })   
  },
  methods: {
    buyThis () {
      if(this.display=='none'){
        this.display='block'
      }
      
    },
    zhezhao() {
      if(this.display=='block'){
        this.display='none'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer{
  height: 40px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  ul{
    width: 100%;
    height: 42px;
    display: flex;
    .footerBefore{
      margin-top: 6px;
      margin-bottom: 6px;
      width: 130px;
      border-right: 1px solid #eee;
      img{
        width: 70%;
      }
    }
    .footer2{
      line-height: 42px;
    }
    .footer3{
      line-height: 42px;
      background: #801a2a;
      color: #fff;
    }
  }
}
.zhezhaoceng{
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40px;
  background: rgba(0,0,0,0.2);
  font-size: 12px;
}
</style>
