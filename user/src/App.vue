<style lang="scss">
    body {
        margin: 0px;
    }
</style>

<template>
    <div class="my-app">
        {{$store.state.ghy}}
        <component :is="item._id" :name="item.name" v-for="(item,index) in $store.state.coption.specific" :id="index"
                   :val="item.val||''" @blur="_blur" :_mydata="$store.state.coption._data"></component>
    </div>

</template>
<script>
    import input_string from "./weight/input_string/input_string.vue"
    import input_number from "./weight/input_string/input_number.vue"
    import input_date from "./weight/input_string/input_date.vue"
    export default{
        data(){
            return {
                specific: [],
                spacing: [],
                styling: [],
            }
        },
        mounted(){
            var _this = this;
        },
        props: {
            register: Function
        },
        methods: {
            _blur(){
                console.log("sdfsdf");
            }
        },
        components: {
            input_string,
            input_number,
            input_date
        }
    }
</script>