// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,a=Object.prototype,n=a.toString,o=a.__defineGetter__,i=a.__defineSetter__,l=a.__lookupGetter__,u=a.__lookupSetter__;function c(e,r,t,a){var n,o,i,l,u,c,_;if(e<=0)return NaN;if(1===e||0===a)return(u=t[0])==u&&e-r>0?0:NaN;for(o=a<0?(1-e)*a:0,n=0,l=0,c=0,_=0;_<e;_++)(u=t[o])==u&&(n+=u*u,l+=u,c+=1),o+=a;return(i=c-r)<=0?NaN:(n-l/c*l)/i}function _(e,r,t,a,n){var o,i,l,u,c,_,f;if(e<=0)return NaN;if(1===e||0===a)return(c=t[n])==c&&e-r>0?0:NaN;for(i=n,o=0,u=0,_=0,f=0;f<e;f++)(c=t[i])==c&&(o+=c*c,u+=c,_+=1),i+=a;return(l=_-r)<=0?NaN:(o-u/_*u)/l}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(l.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=a,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_});export{c as default,_ as ndarray};
//# sourceMappingURL=mod.js.map