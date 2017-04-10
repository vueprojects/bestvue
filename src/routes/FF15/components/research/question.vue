<template>
<div>
  <div v-if="qid <= usetemp_radio" class="body-question">
    <span>{{qid}}.</span>
    <span class="question-text">{{researchData.question}}</span>
  </div>
  <div v-else class="body-question">
    <span class="question-text598">{{researchData.question}}</span>
  </div>
</div>
</template>
<script>
export default{
    props:['qid','usetemp_radio','researchData'],
    data: function(){
        return {}
    }
}
</script>
<style lang="scss">
$baseFontSize: 100;

.body-question {
  width: 598rem/$baseFontSize;
}

.body-question span {
  display: inline-block;
  vertical-align: top;
}

.body-question .question-text {
  width: 520rem/$baseFontSize;
}

.body-question .question-text598 {
  width: 598rem/$baseFontSize;
}
</style>

