<template>
  <div class="plrEmpty mt20">
    <group title="">
      <x-textarea :max="200" name="detail" placeholder="" :show-counter="false" ref="autosize"></x-textarea>
    </group>
    <div class="mt15">
      <x-button :text="submit001" :disabled="disable001" @click.native="submit" type="primary"></x-button>
    </div>
  </div>
</template>

<script>
import { XTextarea, Group, XInput,XButton } from 'vux'
// import Autosize from 'autosize'

export default {
  components: {
    XTextarea,
    Group,
    XInput,
    XButton
  },
  data (){
  	return{
  		'submit001': '提交',
      	'disable001': false,
  	}
  },
  mounted () {
  	this.$el.parentElement.parentNode.style.background = '#fafafa';
    // Autosize(this.$refs.autosize.$refs.textarea)
  },
  beforeDestroy () {
    // Autosize.destroy(this.$refs.autosize.$refs.textarea)
  },
  methods:{
  	submit(){
  		console.log("提交")
  	}
  }
}
</script>