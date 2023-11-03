import{l as m,r as l,c as y,w as f,o as g,a as q}from"./vue.esm-bundler.fd807677.js";const d={__name:"Input",props:{label:{type:String,required:!1},placeholder:{type:String,required:!1},prependIcon:{type:String,required:!1},prependInnerIcon:{type:String,required:!1},appendIcon:{type:String,required:!1},appendInnerIcon:{type:String,required:!1},messages:{type:String,required:!1},error:{type:String,required:!1},errorMessages:{type:String,required:!1},maxErrors:{type:Number,required:!1},disabled:{type:Boolean,required:!1},density:{type:String,required:!1},readonly:{type:Boolean,required:!1},clearable:{type:Boolean,required:!1},focused:{type:Boolean,required:!1},rules:{type:Array,required:!1,default:()=>[e=>!!e||"Required.",e=>(e||"").length<=20||"Max 20 characters",e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Invalid e-mail."]},validateOn:{type:String,required:!1},ValidationValue:{type:String,required:!1}},setup(e){const r=m("");return(u,a)=>{const c=l("v-text-field"),p=l("v-form");return g(),y(p,null,{default:f(()=>[q(c,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),label:e.label,placeholder:e.placeholder,"prepend-icon":e.prependIcon,"prepend-inner-icon":e.prependInnerIcon,"append-icon":e.appendIcon,"append-inner-icon":e.appendInnerIcon,messages:e.messages,"error-messages":e.errorMessages,"max-errors":e.maxErrors,disabled:e.disabled,density:e.density,readonly:e.readonly,clearable:e.clearable,focused:e.focused,rules:e.rules,"validate-on":e.validateOn,ValidationValue:e.ValidationValue,onInput:a[1]||(a[1]=t=>u.$emit("input",t))},null,8,["modelValue","label","placeholder","prepend-icon","prepend-inner-icon","append-icon","append-inner-icon","messages","error-messages","max-errors","disabled","density","readonly","clearable","focused","rules","validate-on","ValidationValue"])]),_:1})}}},b=d;d.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"placeholder",type:{name:"string"},required:!1},{name:"prependIcon",type:{name:"string"},required:!1},{name:"prependInnerIcon",type:{name:"string"},required:!1},{name:"appendIcon",type:{name:"string"},required:!1},{name:"appendInnerIcon",type:{name:"string"},required:!1},{name:"messages",type:{name:"string"},required:!1},{name:"error",type:{name:"string"},required:!1},{name:"errorMessages",type:{name:"string"},required:!1},{name:"maxErrors",type:{name:"number"},required:!1},{name:"disabled",type:{name:"boolean"},required:!1},{name:"density",type:{name:"string"},required:!1},{name:"readonly",type:{name:"boolean"},required:!1},{name:"clearable",type:{name:"boolean"},required:!1},{name:"focused",type:{name:"boolean"},required:!1},{name:"rules",type:{name:"array"},required:!1,defaultValue:{func:!1,value:`[
  (value) => !!value || "Required.",
  (value) => (value || "").length <= 20 || "Max 20 characters",
  (value) => {
    const pattern =
      /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
]`}},{name:"validateOn",type:{name:"string"},required:!1},{name:"ValidationValue",type:{name:"string"},required:!1}],events:[{name:"input"}],sourceFiles:["/home/tulex/Entwicklung/Projekte/NUXT/N4/components/layout/Input.vue"]};const v={title:"Layout/Input",component:b,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},prependIcon:{control:"select",options:["$vuetify","mdiPlus","mdiAccount"]},prependInnerIcon:{control:"select",options:["$vuetify","mdiPlus","mdiAccount"]},appendIcon:{control:"select",options:["$vuetify","mdiPlus","mdiAccount"]},appendInnerIcon:{control:"select",options:["$vuetify","mdiPlus","mdiAccount"]},messages:{control:"text"},error:{control:"boolean"},errorMessage:{control:"text"},maxErrors:{control:"number"},disabled:{control:"boolean"},readonly:{control:"boolean"},clearable:{control:"boolean"},density:{control:"select",options:["default","comfortable","compact"]},focused:{control:"boolean"},rules:{control:"array"},validateOn:{control:"array",options:["lazy","blur","input","submit","blur lazy","input lazy","submit lazy","lazy blur","lazy input","lazy submit"]},validationValue:{control:"text"}}},n={args:{}};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Primary"];export{n as Primary,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Input.stories.5d99b621.js.map