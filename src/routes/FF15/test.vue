<template>
    <div>
        <button @click='btnClick'>测试</button>
        <button @click='onLoading'>loading</button>
        <button @click='onToast'>toast</button>
    </div>
</template>
<script>
export default{
    methods:{
        btnClick(){

        },
        onLoading(){
            this.$uop.loading.show({
                text: 'Loading'
            })
            setTimeout(() => {
                this.$uop.loading.hide()
            }, 2000)
        },
        onToast(){
            const _this = this
            this.$uop.toast.show({
                type:'text',
                text: 'Hello World',
                onShow () {
                    console.log('Plugin: I\'m showing')
                },
                onHide () {
                    console.log('Plugin: I\'m hiding')
                    _this.show9 = false
                }
            })
        
        }
    }
}
</script>