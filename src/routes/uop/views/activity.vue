<template>
    <div class="activity">
        <h1 class="title"><img :src="titlesrc" alt=""/>></h1>
        <div class="intro">{{ actdata.intro }}</div>
        <h3 class="title">相关活动</h3>
        <ul class="act_list">
            <li class="act_item" v-for="item in items">
                <div>
                    <a :href="item.item_link"><img :src="item.item_imgsrc" width="100%"/></a>
                </div>
                <p class="item_title">{{ item.item_title }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import activityJs from '../methods/activity';

    export default{
        data(){
            return{
                actid: 0,//0,1,2
                actdata: {},
                bgImg: {},
                titlesrc: {},//require('./../assets/imgs/title_family.png')
                items: {}
            }
        },
        mixins:[activityJs],
        created(){
            this.getData();
            //console.log(this.actdata);
        },
        mounted(){
            const body = this.$el.parentElement.parentElement;
            body.style.background = 'url(' + this.bgImg + ')';
        },
        methods: {
            getData: function(){
                this.actdata = this.actList[this.actid];
                this.bgImg = this.actdata['imgsrc'];
                this.titlesrc = this.actdata['titleimg'];
                this.items = this.actdata['items'];
            }
        }
    }
</script>