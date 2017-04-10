<template>
<div>
    <div class="info-name">
        <input type="text" autofocus="autofocus" autocomplete="off" name="info-name" placeholder="姓名" v-model.trim="info.infoname" v-on:focus="highBorder" v-on:blur="normalBorder($event,'name')"/>
        <i class="info-name-icon"></i>
    </div>
    <div class="info-cellphone">
        <input type="tel" name="info-cellphone" autocomplete="off" max-length="11" placeholder="手机号码" pattern="[0-9]*" v-model.trim="info.infocellphone" v-on:focus="highBorder" v-on:blur="normalBorder($event,'cellphone')"/>
        <i class="info-cellphone-icon"></i>
    </div>
    <div class="info-address">
        <input type="text" name="info-address" autocomplete="off" placeholder="地址" v-model="info.infoaddress" v-on:focus="highBorder" v-on:blur="normalBorder($event,'address')"/>
        <i class="info-address-icon"></i>
    </div>
</div>
</template>
<script>
export default{}
</script>
<style lang="scss">

</style>

