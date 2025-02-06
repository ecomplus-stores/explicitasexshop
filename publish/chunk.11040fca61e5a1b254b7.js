(window.webpackJsonp=window.webpackJsonp||[]).push([[32,9,10],{260:function(e,i,t){"use strict";t(10),t(5),t(19),t(17),t(42),t(239);var s=t(41),a=t(40),n=t(57),r=t(110),l=t(44),p=t(7),o=t(264),c=t(266),h=t.n(c),u=t(273);const d="object"==typeof window&&window.localStorage,g="shipping-to-zip",m=e=>{const i={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((t=>{void 0!==e[t]&&(i[t]=e[t])})),i};var v={name:"ShippingCalculator",components:{CleaveInput:h.a,ShippingLine:u.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(n.a)(s.j),i19calculateShipping:()=>Object(n.a)(s.E),i19zipCode:()=>Object(n.a)(s.ye),i19freeShipping:()=>Object(n.a)(s.Cb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},isToCalculate(){if(this.localZipCode)return 8===this.localZipCode.replace(/\D/g,"").length},productionDeadline(){let e=0;return this.shippedItems.forEach((i=>{if(i.quantity&&i.production_time){const{days:t,cumulative:s}=i.production_time,a=s?t*i.quantity:t;a>e&&(e=a)}})),e}},methods:{formatMoney:r.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((e=>{const{validated:i,error:t,response:s}=e;if(i&&!t){s.shipping_services.forEach((i=>{this.shippingServices.push({app_id:e.app_id,...i})}));const i=s.free_shipping_from_value;i&&(!this.freeFromValue||this.freeFromValue>i)&&(this.freeFromValue=i)}})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,i)=>{const t=e.shipping_line.total_price-i.shipping_line.total_price;return t<0?-1:t>0?1:e.shipping_line.delivery_time&&i.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<i.shipping_line.delivery_time.days?-1:1})),this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(o.a)(this.shippingServices,this.shippingAppsSort))):i?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){!this.isScheduled&&this.isToCalculate&&(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:i}=this,t={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(t.items=this.localShippedItems,t.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(p.c)({url:"/calculate_shipping.json",method:"POST",storeId:i,data:t}).then((i=>{let{data:t}=i;return this.parseShippingOptions(t.result,e)})).catch((i=>{e||this.scheduleRetry(4e3),console.error(i)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),d&&d.setItem(g,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(m);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,i)=>e+Object(l.a)(i)*i.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&d){const e=d.getItem(g);e&&(this.localZipCode=e)}}};i.a=v},270:function(e,i,t){"use strict";t.d(i,"a",(function(){return s})),t.d(i,"b",(function(){return a}));var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"shipping-calculator position-relative"},[e.canInputZip?t("form",{staticClass:"shipping-calculator__form",on:{submit:function(i){return i.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),t("div",{staticClass:"input-group"},[t("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(i){e.localZipCode=i},expression:"localZipCode"}}),t("div",{staticClass:"input-group-append"},[t("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[t("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),t("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut"}},[!e.canSelectServices||void 0!==typeof e.selectedService&&null!==e.selectedService?e._e():t("div",{staticClass:"alert alert-warning px-3 py-2 mb-2",staticStyle:{width:"100%","max-width":"370px","z-index":"2"},attrs:{role:"alert"}},[t("small",[e._v("Escolha uma forma de envio abaixo")])])]),e.isToCalculate?e._e():t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Necessário inserir o cep completo (8 dígitos) para cálculo ")]),t("div",{staticClass:"shipping-calculator__services"},[t("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?t("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[e._v("Loading...")])]):t("div",{key:"services",staticClass:"list-group"},e._l(e.shippingServices,(function(i,s){return t(e.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===s},attrs:{href:e.canSelectServices&&"#"},on:{click:function(i){return i.preventDefault(),e.setSelectedService(s)}}},[t("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[t("shipping-line",{attrs:{"shipping-line":i.shipping_line,"production-deadline":e.productionDeadline}}),t("small",[e._v(e._s(i.label))])]}),null,{service:i})],2)])})),1)]),t("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?t("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[t("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),t("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?t("div",{staticClass:"progress"},[t("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[t("span",[e._v(" "+e._s(e.i19freeShipping)+" "),t("i",{staticClass:"i-truck mx-1"}),t("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)],1)},a=[]}}]);