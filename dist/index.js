"use strict";var p=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var x=p(function(j,q){
function m(n,e,c,u){var s,i,f,v,r,a,t;if(n<=0)return NaN;if(n===1||u===0)return r=c[0],r===r&&n-e>0?0:NaN;for(u<0?i=(1-n)*u:i=0,s=0,v=0,a=0,t=0;t<n;t++)r=c[i],r===r&&(s+=r*r,v+=r,a+=1),i+=u;return f=a-e,f<=0?NaN:(s-v/a*v)/f}q.exports=m
});var k=p(function(w,S){
function O(n,e,c,u,s){var i,f,v,r,a,t,N;if(n<=0)return NaN;if(n===1||u===0)return a=c[s],a===a&&n-e>0?0:NaN;for(f=s,i=0,r=0,t=0,N=0;N<n;N++)a=c[f],a===a&&(i+=a*a,r+=a,t+=1),f+=u;return v=t-e,v<=0?NaN:(i-r/t*r)/v}S.exports=O
});var l=p(function(z,y){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=x(),b=k();R(o,"ndarray",b);y.exports=o
});var g=l();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
