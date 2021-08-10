!function(){"use strict";Vue.use(VueNumeric["default"]),Vue.config.devtools=!0;var a=document.getElementById("vue-pmg-roi");if(0===a.length)return!1;new Vue({el:a,delimiters:["{%","%}"],beforeCreate:function(){this.PRICELIST=JSON.parse(a.dataset.pricelist||null),this.PRODUCT_KEY=a.dataset.pricelistProductKey,this.HOURS_MULTIPLIER=1.67},data:{numberOfEndpoints:50,numberOfAdmins:1,averageHourlyRate:70,apps:[{name:"Zoom",minutes:4},{name:"Google Chrome",minutes:3},{name:"Mozilla Firefox",minutes:3},{name:"Java",minutes:5},{name:"Adobe",minutes:5}]},computed:{avgNumberOfEndpoints:function(){return this.numberOfAdmins?this.numberOfEndpoints/this.numberOfAdmins:0},totalHoursSaved:function(){var a=this.HOURS_MULTIPLIER;return this.apps.reduce(function(b,c){return b+c.minutes*a},0)},unitPrice:function(){return this.getUnitPrice(this.PRICELIST.products[this.PRODUCT_KEY],this.avgNumberOfEndpoints)},totalLicenceCost:function(){return this.numberOfEndpoints*this.unitPrice},totalSoftCostSavings:function(){return this.averageHourlyRate*this.totalHoursSaved},roi:function(){return this.averageHourlyRate?this.totalLicenceCost/this.averageHourlyRate:0}},methods:{getUnitPrice:function(a,b,c){var d=this.getTierPriceKeyForQuantity(a,b),e=a.prices[d];return e-=e*(c||0)},getTierPriceKeyForQuantity:function(a,b){return b=b<1?1:b,this.getReversedArrayKeys(a.prices).filter(function(a){return b>=Number(a)})[0]},getReversedArrayKeys:function(a){return Object.keys(a).reverse()},formatPrice:function(a){var b=this.PRICELIST,c=this.getFixedPrice(a);return b.priceFormat.replace("#c",b.currencySymbol).replace("#p",c)},getFixedPrice:function(a){var b=this.PRICELIST.decimalSeparator,c=this.PRICELIST.precision,d=this.PRICELIST.thousandSeparator,e=parseFloat(Number(a)).toFixed(c),f=e.toString().split(".");return f[0]=f[0].replace(/\B(?=(\d{3})+(?!\d))/g,d),f.join(b)},htmlDecode:function(a){return(new DOMParser).parseFromString(a,"text/html").documentElement.textContent}},filters:{toFixed:function(a,b){return parseFloat(Number(a)).toFixed(b)}}})}();
//# sourceMappingURL=smb-pmg-roi.js.map