<style lang="scss">
    .el-card {
        border: 1px solid #ccc;
        width: 100%;
        min-height: 250px;
        min-width: 375px;
        position: relative;
        img {
            width: 100%;
        }
        &.defback {
            background-image: url("http://www.getuikit.net/docs/images/placeholder_600x400.svg");
            background-size: cover;
        }
        h2 {
            position: absolute;
            top: 20px;
            text-align: center;
            width: 100%
        }
    }
</style>

<template>
    <div class="el-card" :class="{defback:(imglink==''||imglink==null)}">
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
        name: 'FeBanner',
        props: {
            card_img_left: "",
        },
        computed: {}
    }
    ;
</script>
