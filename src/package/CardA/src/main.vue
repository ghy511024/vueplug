<style lang="scss" scoped="">
    .el-carda {
        border: 1px solid #ccc;
        width: 100%;
        height: 250px;
        width: 375px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .card-left {
        position: absolute;
        width: 200px;
        left: 0px;
        right: 0px;
        margin: auto;
        height:133px;
    }

    .card-right-top {
        position: absolute;
        width: 150px;
        left: 50px;
        bottom: 30px;
        width: 100px;
        height:70px;
    }

    .card-right-bottom {
        position: absolute;
        width: 150px;
        right: 50px;
        bottom: 30px;
        width: 100px;
        height:70px;
    }

</style>

<template>
    <div class="el-carda">
        <div class="card-left">
            <img :src="card_img_left||'http://www.getuikit.net/docs/images/placeholder_600x400.svg'"
                 alt=""></div>
        <div class="card-right-top">
            <img :src="card_img_right_top||'http://www.getuikit.net/docs/images/placeholder_600x400.svg'" alt="">
        </div>
        <div class="card-right-bottom">
            <img :src="card_img_right_bototm||'http://www.getuikit.net/docs/images/placeholder_600x400.svg'" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CardA',
        props: {
            card_img_left: String,
            card_img_right_top: String,
            card_img_right_bototm: String
        },
        computed: {}
    }
    ;
</script>
