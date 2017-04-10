<template>
  <div>
    <alert v-model="showAlert" title="title" @on-show="onShow" @on-hide="onHide">{{ msg }}</alert>
  </div>
</template>



<script>
import { Alert, Group, XSwitch, Cell } from 'vux'

export default {
  computed:{
    showAlert() {
      return this.$store.state.showErrorAlert.show
    },
    msg() {
      return this.$store.state.showErrorAlert.msg
    }
  },
  props:{
    title: String
  },
  components: {
    Alert
  },
  methods: {
    onHide () {
      let errorObj = {
        show: false
      };
      this.$store.commit('showAlert', errorObj);
    },
    onShow () {
      // console.log('on show')
    }
  }
}
</script>