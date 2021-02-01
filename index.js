/*
* @author kongchengji
* Date: 2021/2/1
*/
import Vue from 'vue'

import wzc_select from "./select/wzc-select";
import wzc_option from "./select/wzc-option";
import wzc_button from "./button/wzc-button";
import wzc_switch from "./Switch/wzc-switch";
import wzc_slider from "./Slider/wzc-slider";
import wzc_collapse from "./Collapse/wzc-collapse";
import wzc_collapse_item from "./Collapse/wzc-collapse-item";
import wzc_color_picker from "./ColorPicker/wzc-color-picker";
import wzc_timeline from "./TimeLine/wzc-timeline";
import wzc_timeline_option from "./TimeLine/wzc-timeline-option";
import wzc_dividingline from "./DividingLine/wzc-dividingline";
import wzc_picview from "./PicView/wzc-picview"

const components = [
    wzc_select,
    wzc_option,
    wzc_button,
    wzc_switch,
    wzc_collapse,
    wzc_collapse_item,
    wzc_color_picker,
    wzc_slider,
    wzc_timeline,
    wzc_timeline_option,
    wzc_dividingline,
    wzc_picview,
]

const install = function(Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name, component))
    // Vue.prototype.$message = Message
  }
  
  
export default {
    install,
    wzc_select,
    wzc_option,
    wzc_button,
    wzc_switch,
    wzc_collapse,
    wzc_collapse_item,
    wzc_color_picker,
    wzc_slider,
    wzc_timeline,
    wzc_timeline_option,
    wzc_dividingline,
    wzc_picview,
}