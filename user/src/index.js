/**
 * Created by ghy on 2018/4/12.
 */

import store from "./Store";
import DropApp from "./DropApp";

import App from './App.vue';

class Main {
    constructor() {
        this.cache = {}
        this.list = [{
            _id: "input_string",
            name: "tisdfstle"// 对应组件自身名字
        }, {
            _id: "input_string",
            name: "sss"// 对应组件自身名字
        }]
    }

    initApp(el, param) {
        if (this.cache[el]) {
            return;
        }
        new Vue({
            el: el,
            render: function (h) {
                return h(App)
            },
            store
        })
    }

    // 组件注册
    regisStore(_id, component) {

    }
}
var instance = new Main();

if ( typeof window!== "undefined") {
    window.App = instance;
}

export default instance;