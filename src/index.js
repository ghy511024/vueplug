/**
 * Created by cyl on 2018/4/10.
 */
import  Card from "./package/card/index";
const components = [
    Card
];
const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default  {
    install
}