<template>
  <div class="research-container">
      <v-header :qid="qid" :pageend="pageend"></v-header>
      <div class="research-body">
        <div class="body-wrapper">
          <v-question :qid="qid" :usetemp_radio="usetemp_radio" :researchData="researchData"></v-question>
          <div class="body-option">
            <fieldset v-if="qid <= usetemp_radio" class="body-radios">
                <label v-for="(option, index) in researchData.options">
                  <input type="radio" name="option-group" :value="index" v-model="selected" class="ff15-check"/>
                  <span class="icon-checked"></span>
                  <span class="option-text">{{option.label}}
                    <input type="text" v-if="option.type == 'text'" class="other-option" placeholder="" @click="setFocus" v-model="explain"/>
                  </span>
                </label>
              </fieldset>
              <fieldset v-else="qid == usetemp_text" class="body-sentence">
                <textarea maxlength=50 class="sentence-ta" placeholder="写下你对最终幻想15的想法吧..." v-model="explain"></textarea>
              </fieldset>
          </div>
          <div class="btn-wrapper">
            <span class="btn-re btn-prev" @click="prevPage" v-if="qid > pagestart">上一题</span>
            <span class="btn-re btn-next" @click="nextPage" v-if="qid < pageend">下一题</span>
            <span class="btn-re btn-submit" @click="submitData" v-if="qid == pageend">提交</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import reqData from '../../../../models/ff15/reqData.js';
import header from './header.vue';
import question from './question.vue';

  export default {
    components: {
      'v-header': header,
      'v-question': question
    },
    props:{

    },
    data() {
      return {
        finish: false,
        openid: {},
        data: {},
        ver: (this.$route.query.paramter >= 20000) ? 'online' : 'offline',
        scene: this.$route.query.paramter,
        'bgImg': require('../../assets/imgs/bg_wo_character.png'),
        researchData: {},
        qid: this.$route.params.qid,
        transdata: [],
        pagestart: 1,
        pageend: {},
        usetemp_radio: {},
        usetemp_text: 7,
        index: {},
        currentpage: {},
        prevpage: {},
        nextpage: {},
        selected: null,
        explain: null,
        info_obj: {
          infoname: null,
          infocellphone: null,
          infoaddress: null
        },
        switch: true,
        limit: 200
      }
    },
    created() {
      //this.$uop.loading.hide();
      // reqData.req({
      //   apiName: 'isFinish',
      //   params: {},
      //   method: 'post'
      // }).then().catch();
      //获取数据
      if(this.qid == 1){
        this.getData();
        //获取openids
        this.getOpenid();
      }
    },
    beforeMount() {
      //组件创建完毕获取数据
      if(this.qid > 1){
        this.updateData();
      }
    },
    mounted () {
      this.bgImgH = Number(document.documentElement.clientHeight);
      let bodyNode = this.$el.parentElement.parentNode;
      bodyNode.style.background  = "url(" + this.bgImg + ")";
      bodyNode.style.backgroundSize = "cover";
      bodyNode.style.fontSize = 16+'px';
    },
    watch: {
      //如果路由有变化，再次执行该方法
      '$route'(to,from) {
          this.updateData();
          this.resetSelected();
          this.resetMark();
      }
    },
    methods: {
      getData: function() {
        if(this.ver == 'online') {
            //加载不同问卷调查
            this.data = require('./data/research.json');
          }else {
            this.data = require('./data/research_offline.json');
          }
          this.pageend = this.data.research.length;
          this.usetemp_radio = this.pageend-1;
          this.updateData();
      },
      getOpenid: function() {
        if(window.sessionStorage.getItem('openId')) {
          this.openid = window.sessionStorage.getItem('openId');
        }else {
          this.openid = null;//'orCI-wzV8y2uNbnWA4hG67RMtotc'
        }
      },
      updateData: function () {
        this.qid = this.$route.params.qid;
        this.currentpage = this.$route.params.qid;//当前页面索引，和数据文件保持一致
        //判断页面状态 上一个页面 下一个页面
        this.index = this.currentpage - 1;//数据索引从1开始，数组索引从0开始
        this.researchData = this.data.research[this.index];

        //更新页面上一页 下一页路由数据
        this.prevpage = parseInt(this.currentpage) - 1;
        this.nextpage = parseInt(this.currentpage) + 1;
      },
      setFocus: function(ev) {
        //点击注明设置选中状态
        let node = ev.target.parentNode.parentNode.firstChild;
        node.checked = true;
        this.selected = node.value;
      },
      prevPage: function (ev) {
        //记录数据到对象
        this.saveData();
        this.$router.replace({name: 'research', params: { qid: this.prevpage}, query: {paramter: this.scene}});
      },
      nextPage: function (ev) {
        //判断是否已经做了调查
        if(this.selected != null){
          //记录数据到对象
          this.saveData();
          this.$router.replace({name: 'research', params: { qid: this.nextpage}, query: {paramter: this.scene}});
        }else{
          //选项为空判断处理
          if(this.ver == 'offline'){
            //线下版本问卷
            if(this.qid >= this.usetemp_text){
              this.saveData();
              this.$router.replace({name: 'research', params: { qid: this.nextpage}, query: {paramter: this.scene}});
            }else{
              this.$uop.toast.show({
                type: 'text',
                text: '请选择一个选项继续问卷'
              });
            }
          }else{
            //线上版本问卷
            this.$uop.toast.show({
              type: 'text',
              text: '请选择一个选项继续问卷'
            });
          }
        }
      },
      saveData: function() {
        let tempObj = {id: parseInt(this.index) + 1, sel: this.selected, mark: this.explain};
        this.transdata[this.index] = tempObj;
      },
      resetSelected: function() {
        //重置、记录的选项索引
        //判断数据里面是否有对应的selected值
        if(this.transdata[this.index]){
          this.selected = this.transdata[this.index].sel;
        }else{
          this.selected = null;
        }
      },
      resetMark: function() {
        //重置、记录注明的内容
        if(this.transdata[this.index]){
          this.explain = this.transdata[this.index].mark;
        }else{
          this.explain = null;
        }
      },
      submitData: function(ev) {
        if(this.switch){
          //1.提交所有调研数据到服务器
          //2.转到下一个路由
          this.switch = false;

          //添加第7题数据
          let textData = {
            id: parseInt(this.index) + 1,
            mark: this.explain,
            sel: null
          };
          
          //this.transdata.push(textData);//屏蔽第7题数据
          //组装数据
          let postJson = {
            "memberOpenid": this.openid,
            "consignee": 'null',
            "address": 'null',
            "phoneNo": 'null',
            "answerArr": this.transdata 
          };
          //提交数据
          //console.log(postJson);//输出提交数据
          this.$uop.loading.show({
              text: 'Loading'
          })
          //保存this变量指向
          let _this = this;
          reqData.req({
            apiName: 'sendAnswer',
            params: {...postJson},
            method: 'post'
          }).then(res => {
            let resData = JSON.parse(res.data);
            //console.log(resData);
            if(resData.code == '200'){            
              this.$uop.loading.hide();                
              if(resData.data > 0){
                //明信片库存有货
                //存储sessionStorage('questionState' ,'00')  代表抽中了明信片
                window.sessionStorage.setItem('questionState', '00');
                _this.$router.replace({name: 'cardGet', params: {paramter: _this.scene}, query: {paramter: _this.scene}});
              }else{
                //明信片库存无货
                //sessionStorage('questionState' ,'01')  代表未抽中了明信片
                window.sessionStorage.setItem('questionState', '01');
                _this.$router.replace({name: 'cardLost', params: {paramter: _this.scene}, query: {paramter: _this.scene}});
              }
            }else{
              _this.submitDataFail();
            }
          }).catch(function(err){
            console.log(err);
            _this.submitDataFail();
          });
        }
      },
      submitDataFail: function(){
        this.$uop.loading.hide();
        this.$uop.toast.show({
            type: 'text',
            text: '提交失败！请稍后重试'
        });
        this.switch = true;
      }

    }
  }

</script>
<style lang="scss" scoped>
@import './css/research.scss'
</style>