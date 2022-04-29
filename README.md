# z-ui

![QQ2022042916200520224291622192.gif](https://chevereto.zhuangzexin.top/images/2022/04/29/QQ2022042916200520224291622192.gif)

## Install
```bash
yarn add '@zzxcncz/z-ui'
```

## Config
edit main.js:
```javascript
import zui from '@zzxcncz/z-ui'
import '@zzxcncz/z-ui/lib/zui.css'
```
## Usage
```html
<z-button></z-button>

<z-image-preview :img-list="imgList"></z-image-preview>

```

## plugins
### z-image-preview
#### options
| Attribute | Default | Type   | Description                      |
| --------- | ------- | ------ | -------------------------------- |
| imgList   | []      | Array  | image list                       |
| width     | 150px   | string |                                  |
| height    | 150px   | string |                                  |
| fit       | cover   | string | refer to native object-fit style |
| customClass       | cover   | string | custom class name |
#### usages
e.g.
```html
<template>
    <div id="app">
        <z-image-preview :img-list="imgList"></z-image-preview>
        <button @click="preview">showPreview</button>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                imgList: ['https://chevereto.zhuangzexin.top/images/2021/07/27/image.png',
                    'https://chevereto.zhuangzexin.top/images/2021/04/06/imagec8d56ccba4b0c67d.png']
            }
        },
        methods: {
            preview () {
                this.$ZPreviewer({
                    imgList: this.imgList,
                    nowImgIndex: 1
                })
            }
        }
    }
</script>
```
### ZPreviewer
> it can be used to preview image by invoke global function
#### usages
```javascript
                this.$ZPreviewer({
                    imgList: this.imgList,
                    nowImgIndex: 1
                })
```





