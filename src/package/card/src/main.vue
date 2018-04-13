<style lang="scss">
    .el-card {
        border: 1px solid #ccc;
    }
</style>

<template>
    <div class="el-card">
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
                    return "";
                }
            },
            title: String,
        }
    };
</script>
