<template>
  <div class="guess-like">
    <div class="title">
      <span><i class="icon-uop_cnxh" style="color:#FF726F;"></i></span>
      <span>{{ guessLikeText['gsl-title'] }}</span>
    </div>
    <div class="content">
      <div class="left" @click="href('1')">
        <div class="img">
          <img src="./../assets/imgs/cainixihuan-1.png" />
        </div>
        <div style="font-size:0.26rem;color:#000;margin-top:8px;">{{ guessLikeText['gus-like-1-title'] }}</div>
        <div style="font-size:0.22rem;color:#939499;margin-top:6px;">{{ guessLikeText['gus-like-1-content'] }}</div>
       
      </div>

      <div class="right" @click="href('2')">
        <div class="img">
          <img src="./../assets/imgs/cainixihuan-2.png" />
        </div>
        <div style="font-size:0.26rem;color:#000;margin-top:8px;">{{ guessLikeText['gus-like-2-title'] }}</div>
        <div style="font-size:0.22rem;color:#939499;margin-top:6px;">{{ guessLikeText['gus-like-2-content'] }}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import guessLikeTextJson from "./../json/guessLikeTextJson"

  export default {
    data() {
      return {
        guessLikeText: guessLikeTextJson
      }
    },

    methods:{
      href(data) {
        let hrefData = {
          '1' : 'https://mp.weixin.qq.com/s?__biz=MzA4NTAyMzIwMw==&mid=2656132414&idx=2&sn=ec4263902007749e3462b702733d331c&chksm=847bbdb2b30c34a4d432b510cc8fe58c094091732455120758606161ca83f4a9f09a6c88688a&mpshare=1&scene=1&srcid=0324l4QsmjJ8aMwZwTCm53A7&pass_ticket=R4yD3jAD6lwaZ2DdluI%2FocU4DoMXwJW%2FA3UUaM%2B0uz86WcWgqqlL2%2FnMB%2BayoHdH#rd',
          '2' : 'http://mp.weixin.qq.com/s?__biz=MzA3OTQ2NjAwMw==&mid=2653644714&idx=1&sn=4cb27daf3e76e8460ae5b43e2fb9b82f&chksm=846cdcd6b31b55c008d88948aa3cc889ab5a57d982d3978d45a351ef9a1a49c0400992e1f0b8&mpshare=1&scene=1&srcid=03215E6nofDgoRlNiUBW19vd#rd'
        }
        window.location.href = hrefData[data];
      }
    }
  }
</script>

<style lang="scss" scoped>
  $baseRem: 100;

  .guess-like{
    padding: 0 4%;

    .title{
      padding: 15px 0; font-size: 30rem/$baseRem;color:#292A34;
    }

    .content{
      overflow: hidden;

      .left{
        width: 48%;
        float: left;
        .img{
          width: 100%; height: 210rem/$baseRem;

          img{
            width: 100%; height: 100%;
          }
        }
      }

      .right{
        width: 48%;
        float: left;
        margin-left: 4%;
        .img{
          width: 100%; height: 210rem/$baseRem;

          img{
            width: 100%; height: 100%;
          }
        }
      }
    }
  }
</style>