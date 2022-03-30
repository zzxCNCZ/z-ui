# z-ui

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
## Use
```html
<z-button></z-button>
```

## current plugins
### z-image-preview
#### options
| Attribute | Default | Type   | Description                      |
| --------- | ------- | ------ | -------------------------------- |
| imgList   | []      | Array  | image list                       |
| width     | 150px   | string |                                  |
| height    | 150px   | string |                                  |
| fit       | cover   | string | refer to native object-fit style |
#### usages
e.g.
```html
<z-image-preview :img-list="imgList"></z-image-preview>
<template>
    <div id="app">
        <z-image-preview :img-list="imgList"></z-image-preview>
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
        }
    }
</script>
```




