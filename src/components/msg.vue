<template>
  <div id="all">
    <msg :title="options.serverMsg" :description="options.desciprtion" :buttons="options.buttons" :icon="options.icon"></msg>
  </div>
</template>



<script>
import { Msg, Divider, XButton } from 'vux'

export default {
  mounted() {
  	window.setTimeout(()=> {
  		document.getElementById("all").style.right = 0;
  	},1);
  },
  components: {
    Msg,
    Divider,
    XButton
  },
  props:{
  	options:{
  		type:Object,
  		default:()=>{
  			return {}
  		}
  	}
  },
  // methods: {
  //   changeIcon () {
  //     if (!this.icon || this.icon === 'success') {
  //       this.icon = 'warn'
  //       return
  //     }
  //     if (this.icon === 'warn') {
  //       this.icon = 'info'
  //       return
  //     }
  //     if (this.icon === 'info') {
  //       this.icon = 'waiting'
  //       return
  //     }
  //     if (this.icon === 'waiting') {
  //       this.icon = 'success'
  //     }
  //   }
  // },
  data () {
    return {
      // description: 'msg description',
      // icon: '',
      // buttons: [{
      //   type: 'primary',
      //   text: 'primary button',
      //   onClick: this.changeIcon.bind(this)
      // }, {
      //   type: 'default',
      //   text: 'secondary button',
      //   link: '/demo'
      // }]
    }
  }
}
</script>

<style scoped>
	#all{  
		width: 100%;
	    position: absolute;  
	    right: -100vw;  
	    transition:right 1s;  
	    -moz-transition:right 1s;/* Firefox 4 */  
	    -webkit-transition:right 1s; /* Safari and Chrome */  
	    -o-transition:right 1s; /* Opera */  
	} 
</style>