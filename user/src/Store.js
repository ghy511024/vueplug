/**
 * Created by ghy on 2018/4/13.
 */
import vuex from 'vuex'

var store = new vuex.Store({
    state: {
        source_data: {},
        map: {
            // zujian1: {
            //     specific: [{
            //         _id: "input_string",
            //         name: "title",
            //     }, {
            //         _id: "input_number",
            //         name: "title",
            //     }
            //     ],
            //     spacing: [],
            //     styling: [],
            //     _data: {
            //         title: "ghy",
            //         imglink: "ghy",
            //         title2: 2
            //     }
            // }
        },
        coption: {
            specific: [],
            spacing: [],
            styling: [],
            _data: {}
        }
    },
    modules: {},
})

var MyStore = {
    regisStore: function (array) {
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            var _id = item["_id"];
            this._regist_one(_id, item);
        }
    },
    _regist_one: function (_id, component) {
        var conf = {}
        var _data = {};
        conf["name"] = component.name || []
        conf["specific"] = component.specific || []
        conf["spacing"] = component.spacing || []
        conf["styling"] = component.styling || []
        full_pro(conf["specific"]);
        full_pro(conf["spacing"]);
        full_pro(conf["styling"]);
        conf["_data"] = _data;

        function full_pro(array) {
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                var name = item.name;
                var _default = item.default || "";
                if (!!name) {
                    _data[name] = _default;
                }
            }
        }

        // store.state.map["_data"]=_data;
        store.state.source_data[_id] = conf;
        // console.log(JSON.stringify(store.state.map))
    }
}
if (typeof  window !== "undefined") {
    window.store = store;
    window.MyStore = MyStore;
}


export default store