(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{241:function(t,e,o){"use strict";o.r(e);o(10),o(5),o(17);var n=o(7),i=o(44),a=o(34),s=o(130);window._info=window._info||{};const r=[],c=Array.isArray(window.modulesToFetch)?window.modulesToFetch:[{endpoint:"list_payments"},{endpoint:"calculate_shipping"}];if(Object.keys(s.b).length||s.a){const{resource:t,body:e}=window.storefront&&window.storefront.context||{},o={utm:s.b};e&&e._id&&"products"===t&&(o.items=[{product_id:e._id,categories:e.categories,quantity:1,price:Object(i.a)(e)}]),s.a&&(o.discount_coupon=s.a),c.push({endpoint:"apply_discount",reqOptions:{method:"post",data:o}})}c.forEach((t=>{let{endpoint:e,reqOptions:o}=t;const i={};window._info[e]=i;const s=new Promise((t=>{Object(n.c)({url:`/${e}.json`,...o,axiosConfig:{timeout:1e4}}).then((t=>{let{data:o}=t;const{result:n}=o;Array.isArray(n)&&n.forEach((t=>{let{error:o,response:n}=t;if(!o){let t,o;switch(e){case"calculate_shipping":t="free_shipping_from_value",o=n[t],"number"==typeof o&&(void 0===i[t]||o<i[t])&&(i[t]=o);break;case"list_payments":t="installments_option",o=n[t],o&&(!i[t]||o.monthly_interest<i[t].monthly_interest||o.max_number>i[t].max_number)&&(i[t]=o),t="discount_option",o=n[t],o&&(!i[t]||o.value>i[t].value)&&n.payment_gateways.forEach((e=>{let{discount:n}=e;n&&"freight"!==n.apply_at&&n.value===o.value&&(i[t]={apply_at:n.apply_at,...o})})),t="loyalty_points_programs",o=n[t],o&&(i[t]={...i[t],...o});break;default:t="available_extra_discount",o=n[t],o&&(!i[t]||o.value>i[t].value)&&(i[t]=o)}}})),a.a.emit(`info:${e}`,i)})).catch((t=>{console.error(t),a.a.emit(`info:${e}`,t)})).finally(t)}));r.push(s)})),Promise.all(r).then((()=>a.a.emit("info",window._info)))}}]);