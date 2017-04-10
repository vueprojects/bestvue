<template>
	<div id="all-indent">
		<div class="indent" v-for="(item, index) in lists" @click="toIndentDetail(item)">
		  <div class="indent-content">
		    <div class="left">
          <img v-bind="{'src': item.imgSrcPath}" style="width: 100%; height: 100%;" />  
        </div>
		    <div class="right">
		    	<div class="title">{{ item.details[0]['itemTitle'] }}</div>
		    	<div class="total">
		    		<span>数量:</span>
		    		<span>{{ item.details[0]['buyCount'] }}</span>
		    		<span>件</span>
		    	</div>
		    	<div class="time">
		    		<span>日期:</span>
		    		<span>{{ item.details[0]['skuDesc'] }}</span>
		    	</div>
		    </div>
		  </div>
		  <div class="indent-btn">
		    <div class="btn" :class="{ 'btn-active' : item.orderStatus === '01', 'btn-refuse' : item.orderStatus !== '01' }">{{ item.orderStatus | textDict('indentStatus') }}</div>
		  </div>
		</div>

    <div v-if="lists.length === 0" style="text-align: center;margin-top:100px;">
      暂无订单
    </div>


		<!-- 底部导航 -->
		<div style="position:fixed;bottom:0;width:100%;background:#fff;">
		  <bottom-nav></bottom-nav>
		</div>
	</div>
</template>

<script>
  	import bottomNav from "./../components/bottomNav"
    import reqData from "./../../../models/uop/reqData"

  	export default {
	    data(){
	      return {
	        lists: [],
          getListParams: {
            page: 1, 
            pageSize: 10
          }
	      }
	    },
	    props: {
	      
	    },
	    components: {
	      bottomNav
	    },
	    mounted() {
        this.getLists( this.getListParams );
	    	document.getElementById('all-indent').addEventListener('scroll', this.handleScroll);
	    },
	    methods: {

        //请求列表数据
        getLists(params){
          this.$uop.loading.show({
            text: 'Loading'
          });

          //请求列表
          reqData.req({
            apiName: 'allIndent',
            url: '/order-service/orders',
            method: 'get',
            params
          }).then((res) => {
            this.$uop.loading.hide();
            this.checkLists(res.data);
          }).catch((err) => {
            this.$uop.loading.hide();
            this.$uop.toast.show({
              type: 'text',
              text: '系统异常',
              onShow () {
              },
              onHide () {
              }
            })
          })
        },

        //处理列表数据
        checkLists(data){
          let [code, lists, msg] = [data.code, data.data, data.message];
          console.log(lists);
          if( code === '200' ){
            this.lists = this.lists.concat(lists);
            this.lists.forEach((item, index) => {
              this.lists[index]['imgSrcPath'] = item['details'][0]['picPath'];
            })
            console.log(this.lists)
          }else{
            this.$uop.toast.show({
              type: 'text',
              text: msg,
              onShow () {
              },
              onHide () {
              }
            })
          }
        },

        //跳转到订单详情
        toIndentDetail(detail){
          localStorage.setItem('indentDetail', JSON.stringify(detail));
          this.$store.commit('UPDATE_INDENT_DETAIL', detail);
          this.$router.push({name: 'detailIndent', params: { id: detail.id } })
        },

        //监听下拉事件
	    	handleScroll (e) {
  				let dom = document.getElementById('all-indent');
  				if(dom.scrollHeight - dom.scrollTop - dom.offsetHeight <= 10){
  					//下拉刷新
            if(this.lists.length % 10 === 0){
              this.getListParams.page += 1;
              this.getLists( this.getListParams );
            }
  				}
  			}
	    }
  	}

</script>

<style lang="scss" scoped>
  $baseRem: 100;

  #all-indent{
  	height: calc(100% - 56px); overflow-y: auto;

  	.indent{
  		border-bottom: 1px solid #F7F8FB;

  		.indent-content{
  			padding-left: 20px; padding-top: 30px; overflow: hidden;

  			.left{
  				float: left;
  				width: 20%; height: 160rem/$baseRem;
  			}

  			.right{
  				float: left;
  				width: 75%;
  				margin-left: 5%;

  				div{
  					width: 100%;
  					word-wrap: break-word;
  				}

  				.title{
  					font-size: 22rem/$baseRem; color: #000;
  				}

  				.total{
  					font-size: 20rem/$baseRem; color: #595A61; padding-top: 50rem/$baseRem;
  				}

  				.time{
  					font-size: 20rem/$baseRem; color: #595A61; padding-top: 20rem/$baseRem;
  				}
  			}
  		}

  		.indent-btn{
  			width: 100%; overflow: hidden; margin-top: 10px; margin-bottom: 30px;

  			.btn{
  				float: right;
  				color: #fff;
  				margin-right: 30px;
  				padding: 7px 13px;
  				border-radius: 24px;
  			}

  			.btn-active{
  				color: #fff;
				  box-shadow: 0 5px 12px 0 rgba(255,149,121,0.48);
  				background-image: linear-gradient(-49deg, #FFA280 0%, #FD4D4F 100%);
  			}

  			.btn-refuse{
  				color: #595A61;
  				border: 3px solid #C6D1DA;
				  box-shadow: 0 5px 12px 0 #C6D1DA;
  			}
  		}
  	}
  }
</style>