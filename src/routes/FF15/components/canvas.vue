<template>
	<div>
    <!-- <canvas v-bind:id="canvasWH.id" v-bind:width="canvasWH.width" v-bind:height="canvasWH.height"></canvas> -->
    <canvas v-bind:id="canvasWH.id" v-bind:width="canvasWH.width*2" v-bind:height="canvasWH.height*2" v-bind:style="'width:' + canvasWH.width + 'px;height:' + canvasWH.height + 'px;'"></canvas>
	</div>
</template>
<script>
  import reqData from './../../../models/ff15/reqData'
  const presentType = {
    '001' : '官方限量卫衣',
    '002' : '主题精美台历',
    '003' : 'XBOX主机游戏机',
    '004' : '游戏鼠标'
  }

  export default {
    props: {
      canvasWH: Object
    },
    mounted(){
      let type = this.canvasWH.type;
      switch(type){
        case 'address':
          this.address();
          break;
        case 'noAddress':
          this.address();
          break;
        case 'addressSuccess':
          this.address();
          break;
        case 'addressSuccessMessage':
          this.addressSuccessMessage();
          break; 
      }
    },
    methods: {
      address(){
        setTimeout( () => {
          let type = this.canvasWH.type;
          let present = this.canvasWH.present;
          let w = parseInt(this.canvasWH.width) * 2;
          let h = parseInt(this.canvasWH.height) * 2;
          let context = document.getElementById(this.canvasWH.id).getContext("2d"); 

          // polyfill 提供了这个方法用来获取设备的 pixel ratio
          var getPixelRatio = function(context) {
              var backingStore = context.backingStorePixelRatio ||
                  context.webkitBackingStorePixelRatio ||
                  context.mozBackingStorePixelRatio ||
                  context.msBackingStorePixelRatio ||
                  context.oBackingStorePixelRatio ||
                  context.backingStorePixelRatio || 1;
          
              return (window.devicePixelRatio || 1) / backingStore;
          };

          var ratio = getPixelRatio(context);

          //轮廓  
          context.moveTo(0, 0);//第一个起点
          context.lineTo(w-20, 0);//第二个点
          context.lineTo(w, 20);//第三个点（以第二个点为起点）
          context.lineTo(w, h-15);
          context.lineTo(w-15, h-5);
          context.lineTo(w-80, h-5);
          context.lineTo(w-80, h-15);
          context.lineTo(20, h-15);
          context.lineTo(0, h-35);
          context.lineTo(0, 0);
          context.lineWidth = 3;
          context.fillStyle="#041030";
          context.strokeStyle = '#508fd8';
          // context.shadowColor = "#0076ff";   
          // context.shadowOffsetX = 1;   
          // context.shadowOffsetY = 1;  
          // context.shadowBlur = 5;   
          context.fill();
          context.stroke();

          //单线
          context.moveTo(w - 70, h - 15);
          context.lineTo(w- 20, h - 15);
          context.lineWidth = 2;
          context.strokeStyle = '#9CBFED';
          context.stroke();

          //小方块
          context.fillStyle = "#9CBFED"; 
          context.fillRect(w-92, h-10, 6, 6);
          for(var i = 0; i < 10; i ++){
            let dif = 10 * i;
            context.fillRect(w - 92 - dif, h-10, 6, 6);
          }

          //文字
          let textObj = {
            context,
            type,
            h,
            present,
            ratio
          }
          this.text(textObj);

        }, 50);
      },

      addressSuccessMessage(){
        setTimeout( () => {
          let type = this.canvasWH.type;
          let present = this.canvasWH.present;
          let w = parseInt(this.canvasWH.width) * 2;
          let h = parseInt(this.canvasWH.height) * 2;
          let context = document.getElementById(this.canvasWH.id).getContext("2d"); 

          //轮廓  
          context.moveTo(0, 0);//第一个起点
          context.lineTo(w, 0);//第二个点
          context.lineTo(w, h-15);
          context.lineTo(w-15, h-5);
          context.lineTo(w-80, h-5);
          context.lineTo(w-80, h-15);
          context.lineTo(20, h-15);
          context.lineTo(0, h-35);
          context.lineTo(0, 0);
          context.lineWidth = 3;
          context.fillStyle="#041030";
          context.strokeStyle = '#508fd8';
          // context.shadowColor = "#0076ff";   
          // context.shadowOffsetX = 0;   
          // context.shadowOffsetY = 0;   
          // context.shadowBlur = 5;   
          context.fill();
          context.stroke();

          //单线
          context.moveTo(w - 70, h - 15);
          context.lineTo(w- 20, h - 15);
          context.lineWidth = 2;
          context.strokeStyle = '#9CBFED';
          context.stroke();

          context.moveTo(10, 10);
          context.lineTo(w - 10, 10);
          context.lineWidth = 2;
          context.strokeStyle = '#9CBFED';
          context.stroke();

          //小方块
          context.fillStyle = "#9CBFED"; 
          context.fillRect(w-92, h-10, 6, 6);
          for(var i = 0; i < 10; i ++){
            let dif = 10 * i;
            context.fillRect(w - 92 - dif, h-10, 6, 6);
          }

          //文字
          let textObj = {
            context,
            type,
            h,
            present
          }
          this.text(textObj);

        }, 100);
      },

      text({context, type, h, present, ratio}){
        if(type === 'address'){
          if(this.$route.query.questionState || sessionStorage.getItem('questionState')){
            let query = this.$route.query.questionState || sessionStorage.getItem('questionState');
            if(query == '00'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("恭喜您获得【"+ present +"】及主题精美明信片", 20, 55);
              context.fillText("我们会在10个工作日内与您联系并送达", 20, h - 150);
              context.fillText("非常感谢！", 20, h - 110);
            }else if(query == '01'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("恭喜您获得【"+ present +"】", 20, 55);
              context.fillText("主题精美明信片已被先到的小伙伴拿光啦", 20, 95);
              context.fillText("请继续关注我们，更多好礼不间断放送！", 20, h - 120);
              context.fillText("得下次速速来参加哦~~~", 20, h - 80);
            }else if(query == '02'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("人品大爆发，恭喜中奖啦！！！", 20, 55);
              context.fillText("【" + present + "】已收入囊中", 20, 95);
              context.fillText("奖多不烫手，趁热继续拿拿拿~~~", 20, h - 120);
              context.fillText("(奖品数量有限，先到先得哦~)", 20, h - 70);
            }
          }else{
            context.font="28px Arial";
            context.fillStyle = "#fff";
            context.fillText("人品大爆发，恭喜中奖啦！！！", 20, 55);
            context.fillText("【" + present + "】已收入囊中", 20, 95);
            context.fillText("奖多不烫手，趁热继续拿拿拿~~~", 20, h - 120);
            context.fillText("(奖品数量有限，先到先得哦~)", 20, h - 70);
          }
        }else if (type === 'noAddress'){
          if(this.$route.query.questionState || sessionStorage.getItem('questionState')){
            let query = this.$route.query.questionState || sessionStorage.getItem('questionState');
            if(query == '00'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("很遗憾您并未抽中我们的奖品!", 20, 55);
              context.fillText("但感谢您留下对电影的宝贵建议", 20, h - 150);
              context.fillText("您获得的主题精美明信片", 20, h - 110);
              context.fillText("我们会在10个工作日内与您联系并送达", 20, h - 70);
              context.fillText("谢谢！", 20, h - 40);
            }else if(query == '01'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("非常感谢您的参与", 20, 55);
              context.fillText("非常抱歉奖品已经派发完毕!", 20, 95);
              context.fillText("不要气馁哦,持续关注【小红巢】", 20, h - 120);
              context.fillText("更多精彩好礼等你来拿！", 20, h - 80);
            }else if(query == '02'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("哎呀，与装备擦肩而过，静静陪你哭一秒", 20, 70);
              context.fillText("BUT努力终会有回报，再迈出一步", 20, h - 150);
              context.fillText("高清原版信片套装即刻奉上！", 20, h - 110);
              context.fillText("(奖品数量有限，先到先得哦~)", 20, h - 70);
            }
          }else{
            context.font="28px Arial";
            context.fillStyle = "#fff";
            context.fillText("哎呀，与装备擦肩而过，静静陪你哭一秒", 20, 70);
            context.fillText("BUT努力终会有回报，再迈出一步", 20, h - 150);
            context.fillText("高清原版信片套装即刻奉上！", 20, h - 110);
            context.fillText("(奖品数量有限，先到先得哦~)", 20, h - 70);
          }
        }else if(type === 'addressSuccess'){
          if(this.$route.query.questionState){
            let query = this.$route.query;
            if(query.questionState == '00'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("恭喜您获得【"+ query.present +"】及主题精美明信片", 20, 55);
              context.fillText("我们会在10个工作日内与您联系并送达", 20, h - 110);
              context.fillText("非常感谢！", 20, h - 70);
            }else if(query.questionState == '01'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("恭喜您获得【"+ query.present +"】", 20, 55);
              context.fillText("主题精美明信片已被先到的小伙伴拿光啦", 20, 95);
              context.fillText("请继续关注我们，更多好礼不间断放送！", 20, h - 120);
              context.fillText("记得下次速速来参加哦~~~", 20, h - 70);
            }else if(query.questionState == '02'){
              context.font="28px Arial";
              context.fillStyle = "#fff";
              context.fillText("您已完成了魔力抽奖", 20, 55);
              context.fillText("完成问卷获取精美信片一套", 20, h - 120);
              context.fillText("(限量200份送完为止)", 20, h - 70);
            }
          }else{
            context.font="28px Arial";
            context.fillStyle = "#fff";
            context.fillText("您已完成了魔力抽奖", 20, 55);
            context.fillText("完成问卷获取精美信片一套", 20, h - 120);
            context.fillText("(限量200份送完为止)", 20, h - 70);
          }
          
        }else if(type === 'addressSuccessMessage'){
          let type = this.$route.params.type;
          if(type === '0'){
            this.$uop.loading.show({
              text: 'Loading'
            })
            reqData.req({
              apiName:'getAddressMessage',
              params:{
                openId: sessionStorage.getItem('openId')
              }
            }).then((res) => {
              this.$uop.loading.hide();
              let data = JSON.parse(res.data).data;
              let messages = {
                name: data.memberName,
                phone: data.phone,
                address: data.address
              }
              this.messagess(messages, context);
            }).catch((res) => {
              this.$uop.loading.hide();
            })
          }else if(type === '1'){
            let messages = JSON.parse(localStorage.getItem('addressMessage'));
            this.messagess(messages, context);
          }
        }
      },
      messagess(messages, context){
          context.font="40px Arial";
          context.fillStyle = "#fff";

          let nameImg = new Image();
          let name = '';
          nameImg.src = require('../assets/imgs/ic_person_fill.png');
          nameImg.onload = () => {
            if(messages.name === null){
              name = ''
            }else{
              name = messages.name.length > 3 ? messages.name.substr(0,3) + '...' : messages.name;
            }
            context.drawImage(nameImg, 20, 15, 70, 70);
            context.fillText(name, 120, 70);
          }

          let phoneImg = new Image();
          phoneImg.src = require('../assets/imgs/ic_phone_fill.png');
          phoneImg.onload = () => {
            context.drawImage(phoneImg, 20, 100, 70, 70);
            context.fillText(messages.phone === null ? '' : messages.phone, 120, 146);
          }

          let addressImg = new Image();
          addressImg.src = require('../assets/imgs/ic_place_fill.png');
          addressImg.onload = () => {
            context.drawImage(addressImg, 20, 180, 70, 70);
            if(messages.address === null){
              context.fillText('', 120, 220);
            }else{
              context.fillText(messages.address.substr(0,9) + '...', 120, 220);
            }
          }
      }
    }
  }

</script>
<style lang="scss" scoped>
  #canvasBox{
    z-index: 999;
  }

  .canvas-item{
    width:100%;
    height: 100%;
  }
</style>