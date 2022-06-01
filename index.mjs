// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t){var a,i,N,f,u,o,d;if(r<=0)return NaN;if(1===r||0===t)return(u=n[0])==u&&r-e>0?0:NaN;for(i=t<0?(1-r)*t:0,a=0,f=0,o=0,d=0;d<r;d++)(u=n[i])==u&&(a+=u*u,f+=u,o+=1),i+=t;return(N=o-e)<=0?NaN:(a-f/o*f)/N},n=function(r,e,n,t,a){var i,N,f,u,o,d,s;if(r<=0)return NaN;if(1===r||0===t)return(o=n[a])==o&&r-e>0?0:NaN;for(N=a,i=0,u=0,d=0,s=0;s<r;s++)(o=n[N])==o&&(i+=o*o,u+=o,d+=1),N+=t;return(f=d-e)<=0?NaN:(i-u/d*u)/f};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
