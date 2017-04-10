<template>
  <div>
    <!-- <img src="../img/vux_logo.png" style="width: 100%"> -->
    <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" ></search>
  </div>
</template>

<script>
  import { Search, Group, Cell } from 'vux'

  export default {
    components: {
      Search,
      Group,
      Cell
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      }
    },
    data () {
      return {
        results: [],
        value: 'test'
      }
    }
  }

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 8; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>
<style lang="scss" scoped>
  $bgc:blue;

  #search-bg{
    background-color:$bgc;
  }
</style>