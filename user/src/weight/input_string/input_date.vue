<style>

</style>
<template>
    <div class="input_string">
        <label for="">Date 输入组件--{{name}}</label> <input type="date">
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        props: {
            name: String
        },
    }
</script>