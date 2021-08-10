/* Polyfill service v3.105.0
 * Disable minification (remove `.min` from URL path) for more info */

(function(self, undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function Get(n,t){return n[t]}function IsCallable(n){return"function"==typeof n}function RequireObjectCoercible(e){if(null===e||e===undefined)throw TypeError(Object.prototype.toString.call(e)+" is not coercible to Object.");return e}function SameValueNonNumber(e,n){return e===n}function ToBoolean(o){return Boolean(o)}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function IsRegExp(e){if("object"!==Type(e))return!1;var n="Symbol"in self&&"match"in self.Symbol?Get(e,self.Symbol.match):undefined;if(n!==undefined)return ToBoolean(n);try{var t=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(l){}finally{e.lastIndex=t}return!1}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function SameValueZero(n,e){return Type(n)===Type(e)&&("number"===Type(n)?!(!isNaN(n)||!isNaN(e))||(1/n===Infinity&&1/e==-Infinity||(1/n==-Infinity&&1/e===Infinity||n===e)):SameValueNonNumber(n,e))}function ToInteger(n){if("symbol"===Type(n))throw new TypeError("Cannot convert a Symbol value to a number");var t=Number(n);return isNaN(t)?0:1/t===Infinity||1/t==-Infinity||t===Infinity||t===-Infinity?t:(t<0?-1:1)*Math.floor(Math.abs(t))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}if (!("defineProperty"in Object&&function(){try{var e={}
return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()
)) {!function(e){var t=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),r="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function n(o,i,f){if(e&&(o===window||o===document||o===Element.prototype||o instanceof Element))return e(o,i,f);if(null===o||!(o instanceof Object||"object"==typeof o))throw new TypeError("Object.defineProperty called on non-object");if(!(f instanceof Object))throw new TypeError("Property description must be an object");var c=String(i),a="value"in f||"writable"in f,p="get"in f&&typeof f.get,s="set"in f&&typeof f.set;if(p){if(p===undefined)return o;if("function"!==p)throw new TypeError("Getter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineGetter__.call(o,c,f.get)}else o[c]=f.value;if(s){if(s===undefined)return o;if("function"!==s)throw new TypeError("Setter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineSetter__.call(o,c,f.set)}return"value"in f&&(o[c]=f.value),o}}(Object.defineProperty);}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}if (!("includes"in Array.prototype
)) {CreateMethodProperty(Array.prototype,"includes",function e(r){"use strict";var t=ToObject(this),o=ToLength(Get(t,"length"));if(0===o)return!1;var n=ToInteger(arguments[1]);if(n>=0)var a=n;else(a=o+n)<0&&(a=0);for(;a<o;){var i=Get(t,ToString(a));if(SameValueZero(r,i))return!0;a+=1}return!1});}if (!("includes"in String.prototype
)) {CreateMethodProperty(String.prototype,"includes",function e(t){"use strict";var r=arguments.length>1?arguments[1]:undefined,n=RequireObjectCoercible(this),i=ToString(n);if(IsRegExp(t))throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var o=ToString(t),g=ToInteger(r),a=i.length,p=Math.min(Math.max(g,0),a);return-1!==String.prototype.indexOf.call(i,o,p)});}})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});