"use strict";var k=function(r,n){return function(){return n||r((n={exports:{}}).exports,n),n.exports}};var S=k(function(B,x){
function g(r,n,i,v,q){var s,c,f,o,t,a,e,u,y;if(s=i.data,c=i.accessors[0],r===1||v===0)return e=c(s,q),e===e&&r-n>0?0:NaN;for(o=q,f=0,a=0,u=0,y=0;y<r;y++)e=c(s,o),e===e&&(f+=e*e,a+=e,u+=1),o+=v;return t=u-n,t<=0?NaN:(f-a/u*a)/t}x.exports=g
});var p=k(function(C,l){
var j=require('@stdlib/array-base-arraylike2object/dist'),m=S();function O(r,n,i,v,q){var s,c,f,o,t,a,e,u;if(r<=0)return NaN;if(o=j(i),o.accessorProtocol)return m(r,n,o,v,q);if(r===1||v===0)return a=i[q],a===a&&r-n>0?0:NaN;for(c=q,s=0,t=0,e=0,u=0;u<r;u++)a=i[c],a===a&&(s+=a*a,t+=a,e+=1),c+=v;return f=e-n,f<=0?NaN:(s-t/e*t)/f}l.exports=O
});var b=k(function(D,N){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=p();function h(r,n,i,v){return R(r,n,i,v,P(r,v))}N.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),z=p();w(d,"ndarray",z);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
