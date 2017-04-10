<template>
<div class="research-header">
    <div class="header-title">
        <div class="title-text">
        <p>完成以下问卷即可获取精美明信片一套</p>
        <p>（限量200份）</p>
        </div>
    </div>
    <div class="header-avator"></div>
    <div class="header-counter">{{qid}} / {{pageend}}</div>
</div>
</template>
<script>
export default{
    props:['qid','pageend'],
    data: function(){
        return {}
    }
}
</script>
<style lang="scss" scoped>
$baseFontSize: 100;

.research-header {
  width: 100%;
  height: 220rem/$baseFontSize;
}

.header-title {
  padding: 0 11rem/$baseFontSize;
  width: 728rem/$baseFontSize;
  height: 162rem/$baseFontSize;
  background: url('./images/dia_title_frame.svg') no-repeat;
  background-size: cover;
}

.header-title .title-text {
  font-size: 28rem/$baseFontSize;
  padding: 42rem/$baseFontSize 52rem/$baseFontSize 0;
  text-align: right;
  line-height: 1.5;
}

.header-avator {
  position: absolute;
  top: 32rem/$baseFontSize;
  left: 32rem/$baseFontSize;
  width: 172rem/$baseFontSize;
  height: 190rem/$baseFontSize;
  background: url('./images/dia_character_2.png') no-repeat;
  background-size: cover;
}

.header-counter {
  margin-right: 76rem/$baseFontSize;
  color: #9cbfed;
  text-align: right;
}
</style>

