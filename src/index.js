/**
 * Created by cyl on 2018/4/10.
 */
import  FeBanner from "./package/FeBanner/index";
import  CardA from "./package/CardA/index";
const components = [
    FeBanner,
    CardA
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