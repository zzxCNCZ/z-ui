
import Vue from "vue";
import MultiImagePreview from '../Image-Preview/src/multi-image-preview'

const PreviewerConstructor = Vue.extend(MultiImagePreview);

let instance

const ImgPreview = (options = {}) => {
    if (typeof options === 'string') {
        options = {
            url: options
        };
    }
    options.show = true

    instance = new PreviewerConstructor({})
    for (let prop in options) {
        // eslint-disable-next-line no-prototype-builtins
        if (options.hasOwnProperty(prop)) {
            instance[prop] = options[prop];
        }
    }
    instance.$mount()
    document.body.appendChild(instance.$el)
    return instance
};

export default ImgPreview
