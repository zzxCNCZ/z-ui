// 导入组件，组件必须声明 name
import ZButton from './src'
// 为组件提供 install 安装方法，供按需引入
ZButton.install = function (Vue) {
    Vue.component(ZButton.name, ZButton)
}
// 导出组件
export default ZButton
