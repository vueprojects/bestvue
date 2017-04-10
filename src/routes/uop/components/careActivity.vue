<template>
	<div>
    <div class="care-choose">
      <div class="title">
        <div class="top">
          <span><i class="icon-uop_jx" style="color:#FF726F;"></i></span>
          <span>{{ indexText['car-c-title-1'] }}</span>
        </div>
        <div class="bottom">{{ indexText['car-c-title-2'] }}</div>
      </div>

      <div class="care-activity" v-for="(item, index) in careActivityLists" @click="toActivityDetail(item.id)">
        <div class="box">
          <div style="padding:0 4%;height:100%;">
            <div class="left">
              <img v-bind:src="item.imageSrc" style="width: 100%; height: 100%;" />
            </div>
            <div class="right">
              <div class="care-activity-title">{{ item.title }}</div>
              <div class="care-activity-time">
                <span>
                  <i class="icon-uop_time" style="color:#C7CBDF;"></i>
                </span>
                <span>{{ item.time }}</span>
              </div>
              <div class="care-activity-site">
                <span>
                  <i class="icon-uop_adress" style="color:#C7CBDF;"></i>
                </span>
                <span>{{ item.site }}</span>
              </div>
              <div class="care-activity-type">{{ item.type }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import getListsJson from "./../json/getListsJson"
  import indexTextJson from "./../json/indexTextJson"
  const careActivity = getListsJson['careActivity'];

  export default {
    data(){
      return {
        careActivityLists: careActivity,
        indexText: indexTextJson
      }
    },
    components: {
    },
    mounted() {
    },
    methods: {
      //跳转详情
      toActivityDetail(id) {
        this.$router.push({ name: 'activityDetail', params: { id }})
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "./../assets/css/sass/function.scss";
  $baseRem: 100;
  $baseAdvertisementBoder: #E7E7E7;

  //精选
  .care-choose{
    .title{
      padding: 20px 0 5px;
      .top{
        padding-left: 4%; font-size: 30rem/$baseRem!important; color: #292A34;
      }
      .bottom{
        padding-left: 4%; padding-top: 10px; font-size: 22rem/$baseRem;color:#939499;
      }
    }

    .care-activity{
      padding-bottom: 20px; border-bottom: 1px solid #EDF1F4; padding-top: 20px;

      .box{
        overflow: hidden;

        .left{
          width: 200rem/$baseRem; height: 100%; float: left;
        }

        .right{
          width: 60%; height: 100%; float: left; margin-left: 5%;
          div{
            width: 100%;
            line-height: 35rem/$baseRem;
            word-wrap: break-word;
          }

          .care-activity-title{
            font-size: 26rem/$baseRem; color: #000; line-height: 40rem/$baseRem;
          }

          .care-activity-time{
            font-size: 20rem/$baseRem; color:#939499; padding-top: 6rem/$baseRem;
            text-overflow:ellipsis; white-space:nowrap; overflow:hidden;
          }

          .care-activity-site{
            font-size: 20rem/$baseRem; color: #939499; padding-top: 6rem/$baseRem;
            text-overflow:ellipsis; white-space:nowrap; overflow:hidden;
          }

          .care-activity-type{
            font-size: 32rem/$baseRem; color: #E9403B; padding-top: 14rem/$baseRem;
          }
        }
      }
    }
  }

</style>