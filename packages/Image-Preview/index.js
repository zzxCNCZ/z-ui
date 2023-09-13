// 导入组件，组件必须声明 name
import ZImagePreview from './src'
// 为组件提供 install 安装方法，供按需引入
ZImagePreview.install = function (Vue) {
    Vue.component(ZImagePreview.name, ZImagePreview)
}
// 导出组件
export default ZImagePreview
