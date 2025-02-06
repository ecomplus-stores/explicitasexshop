/*! For license information please see chunk.4816b9fafcb8a7fe2e8e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,10,32],{239:function(e,t,i){"use strict";var a=i(26),s=i(71),n=i(25),o=i(9),r=i(46),l=TypeError;a({target:"Iterator",proto:!0,real:!0},{reduce:function(e){o(this),n(e);var t=r(this),i=arguments.length<2,a=i?void 0:arguments[1],p=0;if(s(t,(function(t){i?(i=!1,a=t):a=e(a,t,p),p++}),{IS_RECORD:!0}),i)throw new l("Reduce of empty iterator with no initial value");return a}})},260:function(e,t,i){"use strict";i(10),i(5),i(19),i(17),i(42),i(239);var a=i(41),s=i(40),n=i(57),o=i(110),r=i(44),l=i(7),p=i(264),c=i(266),u=i.n(c),h=i(273);const d="object"==typeof window&&window.localStorage,m="shipping-to-zip",g=e=>{const t={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((i=>{void 0!==e[i]&&(t[i]=e[i])})),t};var f={name:"ShippingCalculator",components:{CleaveInput:u.a,ShippingLine:h.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:s.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(n.a)(a.j),i19calculateShipping:()=>Object(n.a)(a.E),i19zipCode:()=>Object(n.a)(a.ye),i19freeShipping:()=>Object(n.a)(a.Cb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},isToCalculate(){if(this.localZipCode)return 8===this.localZipCode.replace(/\D/g,"").length},productionDeadline(){let e=0;return this.shippedItems.forEach((t=>{if(t.quantity&&t.production_time){const{days:i,cumulative:a}=t.production_time,s=a?i*t.quantity:i;s>e&&(e=s)}})),e}},methods:{formatMoney:o.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((e=>{const{validated:t,error:i,response:a}=e;if(t&&!i){a.shipping_services.forEach((t=>{this.shippingServices.push({app_id:e.app_id,...t})}));const t=a.free_shipping_from_value;t&&(!this.freeFromValue||this.freeFromValue>t)&&(this.freeFromValue=t)}})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,t)=>{const i=e.shipping_line.total_price-t.shipping_line.total_price;return i<0?-1:i>0?1:e.shipping_line.delivery_time&&t.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<t.shipping_line.delivery_time.days?-1:1})),this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(p.a)(this.shippingServices,this.shippingAppsSort))):t?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){!this.isScheduled&&this.isToCalculate&&(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:t}=this,i={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(i.items=this.localShippedItems,i.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(l.c)({url:"/calculate_shipping.json",method:"POST",storeId:t,data:i}).then((t=>{let{data:i}=t;return this.parseShippingOptions(i.result,e)})).catch((t=>{e||this.scheduleRetry(4e3),console.error(t)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),d&&d.setItem(m,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(g);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,t)=>e+Object(r.a)(t)*t.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&d){const e=d.getItem(m);e&&(this.localZipCode=e)}}};t.a=f},263:function(e,t,i){var a=i(268);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(194).default)("9248a57e",a,!0,{})},264:function(e,t,i){"use strict";t.a=(e,t)=>e.sort(((e,i)=>{if(e.app_id===i.app_id)return 0;const a=t.indexOf(e.app_id),s=t.indexOf(i.app_id);return a>-1?s>-1?a<s?-1:1:a>-1?-1:1:s>-1?1:0}))},265:function(e,t,i){"use strict";var a=i(41),s=i(57),n={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(s.a)(a.P)},watch:{canShow(e){e&&this.count++}}},o=i(70),r=Object(o.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[e.canShow?i("div",{key:e.count},[e._m(0)]):e._e()])],1)}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+e.variant,attrs:{role:"alert"}},[e._t("default"),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":e.i19close},on:{click:function(t){return e.$emit("dismiss")}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])],2)}],!1,null,null,null);t.a=r.exports},267:function(e,t,i){"use strict";i(263)},268:function(e,t,i){(t=i(193)(!0)).push([e.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,4BAA4B,uCAAuC,CAAC,8BAA8B,qBAAqB,CAAC,kCAAkC,CAAC,0BAA0B,CAAC,6BAA6B,CAAC,4BAA4B,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),e.exports=t},270:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping-calculator position-relative"},[e.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(t){return t.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(t){e.localZipCode=t},expression:"localZipCode"}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[i("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut"}},[!e.canSelectServices||void 0!==typeof e.selectedService&&null!==e.selectedService?e._e():i("div",{staticClass:"alert alert-warning px-3 py-2 mb-2",staticStyle:{width:"100%","max-width":"370px","z-index":"2"},attrs:{role:"alert"}},[i("small",[e._v("Escolha uma forma de envio abaixo")])])]),e.isToCalculate?e._e():i("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Necessário inserir o cep completo (8 dígitos) para cálculo ")]),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},e._l(e.shippingServices,(function(t,a){return i(e.canSelectServices?"a":"div",{key:a,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===a},attrs:{href:e.canSelectServices&&"#"},on:{click:function(t){return t.preventDefault(),e.setSelectedService(a)}}},[i("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[i("shipping-line",{attrs:{"shipping-line":t.shipping_line,"production-deadline":e.productionDeadline}}),i("small",[e._v(e._s(t.label))])]}),null,{service:t})],2)])})),1)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[i("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),i("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[e._v(" "+e._s(e.i19freeShipping)+" "),i("i",{staticClass:"i-truck mx-1"}),i("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)],1)},s=[]},274:function(e,t,i){"use strict";var a=i(270),s=i(260),n=(i(267),i(70)),o=Object(n.a)(s.a,a.a,a.b,!1,null,null,null);t.a=o.exports},277:function(e,t,i){"use strict";t.a=e=>{"object"==typeof window&&"function"==typeof window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,500)}},282:function(e,t,i){"use strict";t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(;e.offsetParent;)t+=e.offsetTop,e=e.offsetParent;return window.scroll({top:t,behavior:"smooth"})}},472:function(e,t,i){"use strict";i.r(t);var a=i(43),s=i(114),n=i(307),o=i(4);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product";const i=document.getElementById(t);if(i){const r=document.getElementById(`${t}-dock`),l=Boolean(r),{storefront:p}=window;let c,u,h,d;p&&(c=p.getScopedSlots,u=p.context&&p.context.body,h=p.theme&&p.theme.product);const m=()=>{const e=document.getElementById("product-loading");e&&e.remove(),delete i.dataset.toRender};l&&(d=m);const{buyText:g,strHasQuantitySelector:f,strHasPromotionTimer:v,lowQuantityToWarn:A,maxVariationOptionsBtns:C,quoteInfo:_}=e,S=(e,t)=>"_"===e?Boolean(h&&h[t]):!!e&&Boolean(e.trim()),y=e=>{if(e&&-1===e.indexOf("http")){const t=e.replace(/\D/g,"");return"https://"+(o.isMobile?"api":"web")+".whatsapp.com/send?phone="+encodeURIComponent(t)+`&text=Cotar produto: ${encodeURIComponent(window.location.href)}`}return e};new a.a({render:a=>a(n.default,{attrs:{id:r?null:t},props:{...e.props,product:l&&u&&u.available&&Object(s.a)(u)?u:null,buyText:g,hasQuantitySelector:S(f,"hasQuantitySelector"),hasPromotionTimer:S(v,"hasPromotionTimer"),lowQuantityToWarn:A,maxVariationOptionsBtns:C,quoteLink:y(_),isSSR:l},on:{"update:product"(t){l||m(),e.$emit&&e.$emit("update:product",t)}},scopedSlots:Object.assign({buy:e.buy?function(){return a("span",{domProps:{innerHTML:e.buy}})}:void 0},"function"==typeof c?c(i,a,!r):{})}),mounted:d}).$mount(r||i)}}}},0,[40,41]]);
//# sourceMappingURL=chunk.4816b9fafcb8a7fe2e8e.js.map