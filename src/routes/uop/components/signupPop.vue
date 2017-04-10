<template>
    <div class="signup_pop">
        <div class="black_cover"></div>
        <div class="pop">
            <div class="one">
                <div class="icon_right"></div>
                <h2>报名提交</h2>
                <p>恭喜您已成功提交报名信息，<br>我们会尽快审核您的信息，谢谢！</p>
            </div>
            <router-link tag="div" to="/" class="back_btn" >返回首页</router-link>
            <router-link tag="div" :to="{name:'detailIndent', params:{id:orderId}}" class="back_btn">查看订单</router-link>
        </div>
    </div>
</template>