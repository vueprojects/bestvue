<template>
  <div>
    <div class="advertisement">
      <div class="box">
        <div class="top">
          <div class="top-left">
            <div class="top-left-top">
              <div class="text">
                <span>
                  <img style="width: 0.25rem;margin-top:1px;" src="./../assets/imgs/adv-icon-1.png">
                </span>
                <span style="margin-left: 4px; margin-top: 2px;">{{ indexText['adv-text-1'] }}</span>
              </div>
              <div class="text2">{{ indexText['adv-text-1-2'] }}</div>
            </div>
            <div class="top-left-bottom">
              <div class="text1">
                <span>
                  <img style="width: 0.25rem;margin-top:1px;" src="./../assets/imgs/adv-icon-2.png">
                </span>
                <span style="margin-left: 4px; margin-top: 2px;">{{ indexText['adv-text-2-1'] }}</span>
              </div>
              <div class="text2">{{ indexText['adv-text-2-2'] }}</div>
              <div class="text3">{{ indexText['adv-text-2-3'] }}</div>
              <div class="text4">{{ indexText['adv-text-2-4'] }}</div>
            </div>
          </div>

          <div class="top-right">
            <div class="text1">
              <span>
                <img style="width: 0.25rem;margin-top:1px;" src="./../assets/imgs/adv-icon-4.png">
              </span>
              <span style="margin-left: 4px; margin-top: 2px;">{{ indexText['adv-text-3-1'] }}</span>
            </div>
            <div class="text2">{{ indexText['adv-text-3-2'] }}</div>
            <div class="text3">{{ indexText['adv-text-3-3'] }}</div>
            <div class="text4">{{ indexText['adv-text-3-4'] }}</div>
          </div>
        </div>
<!--         <div class="bottom">
          <div class="left">
            <div class="text1">
              <span>
                <img style="width: 0.25rem;margin-top:1px;" src="./../assets/imgs/adv-icon-3.png">
              </span>
              <span style="margin-left: 4px;">{{ indexText['adv-text-4-1'] }}</span>
            </div>
            <div class="text2">{{ indexText['adv-text-4-2'] }}</div>
          </div>
          <div class="right">
            <div class="text1">
               <span>
                <img style="width: 0.25rem;margin-top:1px;" src="./../assets/imgs/adv-icon-5.png">
              </span>
              <span style="margin-left: 4px;">{{ indexText['adv-text-5-1'] }}</span>
            </div>
            <div class="text2">{{ indexText['adv-text-5-2'] }}</div>
          </div>
        </div> -->
      </div>
    </div>
	</div>
</template>

<script>
  import indexTextJson from "./../json/indexTextJson"
  
  export default {
    data(){
      return {
        indexText: indexTextJson
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import "./../assets/css/sass/function.scss";
  $baseRem: 100;
  $baseAdvertisementBoder: #E7E7E7;

    //广告位
    .advertisement{
      padding:0 4%;

      .box{
        width: 100%; 
        // height: 540rem/$baseRem;
        border: 1px solid $baseAdvertisementBoder;
        border-bottom: 0px solid $baseAdvertisementBoder;

        .top{
          height: 360rem/$baseRem; border-bottom: 1px solid $baseAdvertisementBoder;

          .top-left{
            width: 49%; height: 100%;
            float: left; border-right: 1px solid $baseAdvertisementBoder;

            .top-left-top{
              height: 179rem/$baseRem; border-bottom: 1px solid $baseAdvertisementBoder;
              background: url('./../assets/imgs/adv-img-1.png') no-repeat 95% 50%;
              background-size: 30% 60%;

              .text{
                font-size: 28rem/$baseRem; color: #F13637; padding-top: 24rem/$baseRem; padding-left: 23rem/$baseRem;
                overflow: hidden;

                span{
                  float: left;
                }
              }

              .text2{
                font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 10rem/$baseRem; padding-left: 24rem/$baseRem;
              }
              .text3{
                font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 1%; padding-left: 3%;
              }
            }
            .top-left-bottom{
              height: 179rem/$baseRem;
              background: url('./../assets/imgs/adv-img-2.png') no-repeat 95% 50%;
              background-size: 30% 60%;

              .text1{
                overflow: hidden;
                font-size: 28rem/$baseRem; color: #867BD2; padding-top: 10rem/$baseRem; padding-left: 24rem/$baseRem;

                span{
                  float: left;
                }
              }
              .text2{
                font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 8rem/$baseRem; padding-left: 24rem/$baseRem;
              }
              .text3{
                font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 8rem/$baseRem; padding-left: 24rem/$baseRem;
              }
              .text4{
                font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 8rem/$baseRem; padding-left: 24rem/$baseRem;
              }
            }
          }

          .top-right{
            float: left;
            width: 50%; height: 100%;
            background: url('./../assets/imgs/adv-img-3.png') no-repeat;
            background-size: 100% 100%;

            .text1{
              overflow: hidden;
              font-size: 28rem/$baseRem; color: #FF8D33; padding-top: 25rem/$baseRem; padding-left: 24rem/$baseRem;

              span{
                float: left;
              }
            }
            .text2{
              font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 8rem/$baseRem; padding-left: 24rem/$baseRem;
            }
            .text3{
              font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 8rem/$baseRem; padding-left: 24rem/$baseRem;
            }
            .text4{
              font-size: 20rem/$baseRem; color: #A6A6A6; padding-top: 8rem/$baseRem; padding-left: 24rem/$baseRem;
            }
          }
        }

        .bottom{
          height:180rem/$baseRem;

          .left{
            width: 49%; height: 100%; float: left; border-right: 1px solid $baseAdvertisementBoder;
            background: url('./../assets/imgs/adv-img-3.png') no-repeat right 50%;
            background-size: 40% 60%;

            .text1{
              overflow: hidden; 
              font-size: 28rem/$baseRem; color: #7DC9F6; padding-top: 3%; padding-left: 10%;

              span{
                float: left;
              }
            }
            .text2{
              font-size: 16rem/$baseRem; color: #A6A6A6; padding-top: 5%; padding-left: 5%;
            }
          }
          .right{
            width:49%;height:100%; float: left;
            background: url('./../assets/imgs/adv-img-5.png') no-repeat right 50%;
            background-size: 40% 60%;

            .text1{
              overflow: hidden;
              font-size: 28rem/$baseRem; color: #867BD2; padding-top: 3%; padding-left: 10%;

              span{
                float: left;
              }
            }

            .text2{
              font-size: 16rem/$baseRem; color: #A6A6A6; padding-top: 5%; padding-left: 5%;
            }
          }
        }
      }
    }
</style>