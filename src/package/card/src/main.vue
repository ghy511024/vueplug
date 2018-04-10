<template>
    <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
        asdfasdfsdf{{ghy.ghy}}
        <div class="el-card__header" v-if="$slots.header || header">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="el-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ElCard',
        props: {
            header: {},
            bodyStyle: {},
            ghy: Object,
            shadow: {
                type: String
            }
        }
    };
</script>
