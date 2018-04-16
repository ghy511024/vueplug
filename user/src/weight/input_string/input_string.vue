<style>

</style>
<template>
    <div class="input_string">
        <label for="">String 输入组件--{{name}}</label> <input type="text" v-model="_mydata[name]">
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        props: {
            name: String,
            _mydata: Object
        },
    }
</script>