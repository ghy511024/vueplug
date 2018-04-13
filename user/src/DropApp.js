/**
 * Created by ghy on 2018/4/13.
 */
var DropApp = {
    init: function () {
        this.initEvent();
    },
    initEvent: function () {
        var _this = this;
        $("#weight-list").on("click", "li", function () {
            var _id = $(this).attr("_id");
            _this.addWeight(_id);
            // 渲染交互组件面板
        })
        $("#weight-wrap").on("click", ".item-inner", function () {
            var id = $(this).attr("id");
            console.log(id);
            console.log(JSON.stringify(store.state.map),"||||||||||||",JSON.stringify(store.state.source_data))
            console.log(store.state.map[id])
            store.state.coption = store.state.map[id];
        })
    },
    // 动态添加组件
    addWeight: function (_id) {
        var data = store.state.source_data[_id];
        console.log(data);
        var dom_data = this.createDom(data)

        $("#weight-wrap").append($(dom_data["dom"]));
        this.registStore(_id, dom_data["idstr"])

        new Vue({
            el: "#"+dom_data["idstr"],
            data: function () {
                return store.state.map[dom_data["idstr"]]._data
            }
        })
        // 渲染面板
        // store.state.coption = store.state.map[dom_data["idstr"]];
        // console.log(JSON.stringify(store.state.coption))
    },
    renderOperate: function () {

    },
    create: function (list) {
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var dom = $("<li _id='" + item._id + "'>" + item.name + "</li>")
            $("#weight-list").append(dom);
        }
    },
    _deepClone:function(){

    },
    /**
     * @param _id 组件的id
     * @param weight_id 临时分配的组件id
     * */
    registStore(_id, weight_id){
        // var tmpobj={};
        var tmpObj=_extend({},store.state.source_data[_id])
        // var tmpObj = Object.assign({}, store.state.source_data[_id]);
        store.state.map[weight_id] = tmpObj;
    },
    createDom: function (item) {
        var name = item.name;
        var or_name = name;
        // 处理name
        name = name.replace(/[A-Z]{1}/g, function ($1, $2, $3) {
            if ($2 == 0) {
                return $1.toLowerCase();
            } else {
                return "-" + $1.toLowerCase();
            }
        })
        var props = "";
        // 处理属性
        for (var key in item._data) {
            if (!!key) {
                props += " :" + key + "=" + "'" + key + "'";
            }

        }
        var _ids = or_name + "_" + this.getCount();
        var dom = `
        <div class='drop-item'>
             <div class="item-inner" id="${_ids}">
                 <${name}${props}></${name}>
             </div>
        </div>`
        console.log(dom);
        return {
            idstr: _ids,
            dom: dom
        }
    }
    ,
    getCount: (function () {
        var count = 0;
        return function () {
            return count++;
        }
    })()

}

function _extend(child, parent){
    var i, toStr = Object.prototype.toString, astr = "[object Array]";
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === "object") {
                if (child[i] == null) {
                    child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                }
                _extend(child[i], parent[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}
DropApp.init();
window.DropApp = DropApp;