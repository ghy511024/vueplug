<style lang="scss">
    .el-card {
        border: 1px solid #ccc;
        width: 100%;
        min-height: 250px;
        min-width: 375px;
        position:relative;
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
            width:100%
        }
    }
</style>

<template>
    <div class="el-card" :class="{defback:(imglink==''||imglink==null)}">
        <h2>{{title}}</h2>
        <img :src="imglink" alt="">
    </div>
</template>

<script>
    export default {
        name: 'FeBanner',
        props: {
            imglink: {
                type: String,
                default: function () {
                    return "http://www.getuikit.net/docs/images/placeholder_600x400.svg";
                }
            },
            title: String,
        }
    };
</script>
