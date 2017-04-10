<template>
  <div>
    <div style="overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>


    <card :header="{title:'我的钱包'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>1130</span>
          <br/>
          待使用
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          待支付
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          待评价
        </div>
        <div>
          <span>88</span>
          <br/>
          待退款
        </div>
      </div>
    </card>


    <div>
	    <form-preview :header-label="付款金额" header-value="¥2400.00" :body-items="list1" :footer-buttons="buttons1"></form-preview>
	    <br>
	    <form-preview :header-label="付款金额" header-value="¥2400.00" :body-items="list1" :footer-buttons="buttons2"></form-preview>
	    <br>
	    <form-preview :header-label="付款金额" header-value="¥2400.00" :body-items="list1"></form-preview>
	</div>

	<group title="其他">
      <cell title="我的收藏" is-link></cell>
      <cell title="家庭成员" is-link></cell>
    </group>


  </div>
</template>

<script>
import { Masker, Card, FormPreview , Cell, Group } from 'vux'

export default {
  components: {
    Masker,
    Card,
    FormPreview,
    Cell,
    Group
  },
  data () {
    return {
      list: [{
        title: '洗颜新潮流！人气洁面皂排行榜',
        img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
      }],
      list1: [{
        label: '商品',
        value: '电动打蛋机'
      }, {
        label: '标题标题',
        value: '名字名字名字'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons1: [{
        style: 'default',
        text: '辅助操作'
      }, {
        style: 'primary',
        text: '跳转到首页',
        link: '/'
      }],
      buttons2: [{
        style: 'primary',
        text: '点击事件',
        onButtonClick: () => {
          alert('clicking')
        }
      }]
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>