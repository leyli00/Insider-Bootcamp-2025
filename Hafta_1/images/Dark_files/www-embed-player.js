(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ka=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function w(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ra(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a){return ta(a,a)}
function ta(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||va});
function wa(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function xa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
wa.prototype.G=function(a){this.i=a};
function ya(a,b){a.j={exception:b,xd:!0};a.h=a.M||a.o}
wa.prototype.return=function(a){this.j={return:a};this.h=this.o};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.A=function(a){this.h=a};
function za(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function Aa(a,b){a.h=b;a.M=0}
function Ba(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.xd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Da(a){this.h=new wa;this.i=a}
function Ea(a,b){xa(a.h);var c=a.h.u;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Ga(a)}a.h.u=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.xd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ga(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u["throw"],b,a.h.G):(ya(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||fa});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return la});
u("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.fc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.fc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fc=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).fc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).fc(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ua(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ua(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ma(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ra(a){var b=Ma(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Sa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(Math.random()*1E9>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Za=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wa:Xa;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(){return Date.now()}
function bb(a){return a}
function cb(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function db(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,db);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
cb(db,Error);db.prototype.name="CustomError";var eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var fb=globalThis.trustedTypes,gb;function hb(){var a=null;if(!fb)return a;try{var b=function(c){return c};
a=fb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function ib(){gb===void 0&&(gb=hb());return gb}
;function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){var b=ib();return new jb(b?b.createScriptURL(a):a)}
function lb(a){if(a instanceof jb)return a.h;throw Error("");}
;var mb=sa([""]),nb=ta(["\x00"],["\\0"]),ob=ta(["\n"],["\\n"]),pb=ta(["\x00"],["\\u0000"]);function qb(a){return a.toString().indexOf("`")===-1}
qb(function(a){return a(mb)})||qb(function(a){return a(nb)})||qb(function(a){return a(ob)})||qb(function(a){return a(pb)});function rb(a){this.h=a}
rb.prototype.toString=function(){return this.h};
var sb=new rb("about:invalid#zClosurez");function tb(a){this.Ge=a}
function ub(a){return new tb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var vb=[ub("data"),ub("http"),ub("https"),ub("mailto"),ub("ftp"),new tb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],wb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function xb(a){if(a instanceof rb)if(a instanceof rb)a=a.h;else throw Error("");else a=wb.test(a)?a:void 0;return a}
;function yb(a,b){b=xb(b);b!==void 0&&(a.href=b)}
;function zb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Ab(a){this.h=a}
Ab.prototype.toString=function(){return this.h+""};function Bb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){var b=ib();return new Cb(b?b.createScript(a):a)}
function Eb(a){if(a instanceof Cb)return a.h;throw Error("");}
;function Fb(a){var b=Bb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Gb(a,b){a.src=lb(b);Fb(a)}
;function Hb(){this.h=Ib[0].toLowerCase()}
Hb.prototype.toString=function(){return this.h};function Jb(a){var b="true".toString(),c=[new Hb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Hb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Lb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Mb(a,b){if(b instanceof jb)a.href=lb(b).toString(),a.rel="stylesheet";else{if(Lb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=xb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Nb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ob=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Pb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Qb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Rb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Ob(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Sb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Tb(a,b){b=Nb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Ub(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Vb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Wb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Xb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Yb[c])c=Yb[c];else{c=String(c);if(!Yb[c]){var f=/function\s+([^\(]+)/m.exec(c);Yb[c]=f?f[1]:"[Anonymous]"}c=Yb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Xb(a,b){b||(b={});b[Zb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Zb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Xb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Zb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Xb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Zb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Yb={};function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function ic(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function jc(a,b){b=ic(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function kc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var lc=/#|$/,mc=/[?&]($|#)/;function nc(a,b){for(var c=a.search(lc),d=0,e,f=[];(e=kc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(mc,"$1")}
;var oc=(new Date("2024-01-01T00:00:00Z")).getTime();function pc(a){var b=B.apply(1,arguments).filter(function(d){return d}).join("&");
if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}
function qc(a){var b=a.url;a=a.Wh;this.j=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.o=(new Date).getTime()-oc}
function rc(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}
;function sc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function tc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ra(d)?uc.apply(null,d):tc(d)}}
;function F(){this.ea=this.ea;this.M=this.M}
F.prototype.ea=!1;F.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
F.prototype[Symbol.dispose]=function(){this.dispose()};
function vc(a,b){a.addOnDisposeCallback($a(tc,b))}
F.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
F.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};function wc(){var a=xc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:sc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new yc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new yc(f))}))})}
function yc(a){F.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Zc=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void zc(b)})}
w(yc,F);yc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.vb&&{c:a.vb},a.cd&&{s:a.cd},a.dd!==void 0&&{p:a.dd}))};
yc.prototype.o=function(a){this.vm.e(a)};
function zc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Ac(a){var b=b===void 0?46:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)<=b&&c.push(Dc(d,1))});
return c}
function Ec(a){var b=b===void 0?46:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)>b&&c.push(Dc(d,1))});
return c}
;var Fc;function Gc(){F.apply(this,arguments);this.j=1;this[Fc]=this.dispose}
w(Gc,F);Gc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Gc.prototype.dispose=function(){--this.j||F.prototype.dispose.call(this)};
Fc=Symbol.dispose;function Hc(a){return{fieldType:2,fieldName:a}}
function Ic(a){return{fieldType:3,fieldName:a}}
;function Jc(a){this.h=a;a.Gc("/client_streamz/bg/frs",Ic("ke"))}
Jc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Kc(a){this.h=a;a.Gc("/client_streamz/bg/wrl",Ic("mn"),Hc("ac"),Hc("sc"),Ic("rk"),Ic("mk"))}
Kc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Lc(a){this.i=a;a.Kb("/client_streamz/bg/ec",Ic("en"),Ic("mk"))}
Lc.prototype.h=function(a,b){this.i.Ib("/client_streamz/bg/ec",a,b)};
function Mc(a){this.h=a;a.Gc("/client_streamz/bg/el",Ic("en"),Ic("rk"),Ic("mk"))}
Mc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Nc(a){this.i=a;a.Kb("/client_streamz/bg/cec",Hc("ec"),Ic("rk"),Ic("mk"))}
Nc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/cec",a,b,c)};
function Oc(a){this.i=a;a.Kb("/client_streamz/bg/po/csc",Hc("cs"),Ic("rk"),Ic("mk"))}
Oc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/csc",a,b,c)};
function Pc(a){this.i=a;a.Kb("/client_streamz/bg/po/ctav",Ic("av"),Ic("rk"),Ic("mk"))}
Pc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/ctav",a,b,c)};
function Qc(a){this.i=a;a.Kb("/client_streamz/bg/po/cwsc",Ic("su"),Ic("rk"),Ic("mk"))}
Qc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/cwsc",a,b,c)};function Rc(a){C.setTimeout(function(){throw a;},0)}
;var Sc,Tc=E("CLOSURE_FLAGS"),Uc=Tc&&Tc[610401301];Sc=Uc!=null?Uc:!1;function Vc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Wc,Xc=C.navigator;Wc=Xc?Xc.userAgentData||null:null;function Yc(a){return Sc?Wc?Wc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Vc().indexOf(a)!=-1}
;function Zc(){return Sc?!!Wc&&Wc.brands.length>0:!1}
function $c(){return Zc()?!1:I("Opera")}
function ad(){return I("Firefox")||I("FxiOS")}
function bd(){return Zc()?Yc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Zc()?0:I("Edge"))||I("Silk")}
;function cd(){return Sc?!!Wc&&!!Wc.platform:!1}
function dd(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;var ed=$c(),fd=Zc()?!1:I("Trident")||I("MSIE"),gd=I("Edge"),hd=I("Gecko")&&!(Vc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),id=Vc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");id&&I("Mobile");cd()||I("Macintosh");cd()||I("Windows");(cd()?Wc.platform==="Linux":I("Linux"))||cd()||I("CrOS");var jd=cd()?Wc.platform==="Android":I("Android");dd();I("iPad");I("iPod");dd()||I("iPad")||I("iPod");Vc().toLowerCase().indexOf("kaios");ad();var kd=dd()||I("iPod"),ld=I("iPad");!I("Android")||bd()||ad()||$c()||I("Silk");bd();var md=I("Safari")&&!(bd()||(Zc()?0:I("Coast"))||$c()||(Zc()?0:I("Edge"))||(Zc()?Yc("Microsoft Edge"):I("Edg/"))||(Zc()?Yc("Opera"):I("OPR"))||ad()||I("Silk")||I("Android"))&&!(dd()||I("iPad")||I("iPod"));var nd={},od=null;function pd(a,b){Ra(a);b===void 0&&(b=0);qd();b=nd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function rd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;sd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function sd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=od[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
qd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function qd(){if(!od){od={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));nd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];od[f]===void 0&&(od[f]=e)}}}}
;var td=typeof Uint8Array!=="undefined",ud=!fd&&typeof btoa==="function";function vd(a){if(!ud)return pd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var wd=/[-_.]/g,xd={"-":"+",_:"/",".":"="};function yd(a){return xd[a]||""}
function zd(a){return td&&a!=null&&a instanceof Uint8Array}
var Ad={};function Bd(a,b){Cd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Bd.prototype.sizeBytes=function(){Cd(Ad);var a=this.h;if(a!=null&&!zd(a))if(typeof a==="string")if(ud){wd.test(a)&&(a=a.replace(wd,yd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=rd(a);else Ma(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Dd;function Cd(a){if(a!==Ad)throw Error("illegal external caller");}
;var Ed=void 0;function Fd(a){a=Error(a);Vb(a,"warning");return a}
function Gd(a){if(a!=null){var b;var c=(b=Ed)!=null?b:Ed={};b=c[a]||0;b>=5||(c[a]=b+1,a=Error(),Vb(a,"incident"),Rc(a))}}
;var Hd=typeof Symbol==="function"&&typeof Symbol()==="symbol",Id=new Set;function Jd(a,b,c,d){c=c===void 0?!1:c;a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?(d===void 0?0:d)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b;c&&Id.add(a);return a}
var Kd=Jd("jas",void 0,!0,!0),Ld=Jd(void 0,"1oa",!0),Md=Jd(void 0,Symbol(),!0),Nd=Jd(void 0,"0actk"),Od=Jd(void 0,"8utk");Math.max.apply(Math,ra(Object.values({lh:1,jh:2,ih:4,oh:8,nh:16,mh:32,Nf:64,qh:128,hh:256,gh:512,kh:1024,Tf:2048,ph:4096,Uf:8192,Of:16384})));var J=Hd?Kd:"Fe",Pd={Fe:{value:0,configurable:!0,writable:!0,enumerable:!1}},Qd=Object.defineProperties;function Rd(a,b){Hd||J in a||Qd(a,Pd);a[J]|=b}
function Sd(a,b){Hd||J in a||Qd(a,Pd);a[J]=b}
function Td(a,b){Sd(b,(a|0)&-30975)}
function Ud(a,b){Sd(b,(a|34)&-30941)}
;function Vd(){return typeof BigInt==="function"}
;function Wd(a){return Array.prototype.slice.call(a)}
;var Xd={};function Yd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Zd,$d=[];Sd($d,55);Zd=Object.freeze($d);function ae(a){if(a&2)throw Error();}
function be(a,b){var c=bb(Md);(b=c?b[c]:void 0)&&(a[Md]=Wd(b))}
var ce=Object.freeze({});function de(a){a.Eh=!0;return a}
;var ee=de(function(a){return typeof a==="number"}),fe=de(function(a){return typeof a==="string"}),ge=de(function(a){return typeof a==="boolean"});
function he(){var a=ie;return de(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var je=de(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ke=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function le(a){var b=a;if(fe(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ee(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ke?BigInt(a):a=ge(a)?a?"1":"0":fe(a)?a.trim()||"0":String(a)}
var re=de(function(a){return ke?a>=me&&a<=ne:a[0]==="-"?oe(a,pe):oe(a,qe)}),pe=Number.MIN_SAFE_INTEGER.toString(),me=ke?BigInt(Number.MIN_SAFE_INTEGER):void 0,qe=Number.MAX_SAFE_INTEGER.toString(),ne=ke?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function oe(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var se=0,te=0;function ue(a){var b=a>>>0;se=b;te=(a-b)/4294967296>>>0}
function ve(a){if(a<0){ue(0-a);var b=y(we(se,te));a=b.next().value;b=b.next().value;se=a>>>0;te=b>>>0}else ue(a)}
function xe(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Vd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ye(c)+ye(a));return c}
function ye(a){a=String(a);return"0000000".slice(a.length)+a}
function ze(){var a=se,b=te;b&2147483648?Vd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(we(a,b)),a=b.next().value,b=b.next().value,a="-"+xe(a,b)):a=xe(a,b);return a}
function we(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var Ae=typeof BigInt==="function"?BigInt.asIntN:void 0,Be=Number.isSafeInteger,Ce=Number.isFinite,De=Math.trunc;function Ee(a){return a.displayName||a.name||"unknown type name"}
function Fe(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var Ge=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function He(a){switch(typeof a){case "bigint":return!0;case "number":return Ce(a);case "string":return Ge.test(a);default:return!1}}
function Ie(a){if(typeof a!=="number")throw Fd("int32");if(!Ce(a))throw Fd("int32");return a|0}
function Je(a){return a==null?a:Ie(a)}
function Ke(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Ce(a)?a|0:void 0}
function Le(a){var b=0;b=b===void 0?0:b;if(!He(a))throw Fd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return Me(a);case "bigint":return String(Ae(64,a));default:return Ne(a)}case 8192:switch(c){case "string":return b=De(Number(a)),Be(b)?a=le(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Vd()?le(Ae(64,BigInt(a))):le(Oe(a))),a;case "bigint":return le(Ae(64,a));default:return Be(a)?le(Pe(a)):le(Ne(a))}case 0:switch(c){case "string":return Me(a);case "bigint":return le(Ae(64,
a));default:return Pe(a)}default:return zb(b,"Unknown format requested type for int64")}}
function Qe(a){return a==null?a:Le(a)}
function Re(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Oe(a){a.indexOf(".");if(Re(a))return a;if(a.length<16)ve(Number(a));else if(Vd())a=BigInt(a),se=Number(a&BigInt(4294967295))>>>0,te=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");te=se=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),te*=1E6,se=se*1E6+d,se>=4294967296&&(te+=Math.trunc(se/4294967296),te>>>=0,se>>>=0);b&&(b=y(we(se,te)),a=b.next().value,b=b.next().value,se=a,te=b)}return ze()}
function Pe(a){He(a);a=De(a);if(!Be(a)){ve(a);var b=se,c=te;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:xe(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Ne(a){He(a);a=De(a);if(Be(a))a=String(a);else{var b=String(a);Re(b)?a=b:(ve(a),a=ze())}return a}
function Me(a){He(a);var b=De(Number(a));if(Be(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Oe(a)}
function Se(a){if(a==null)return a;if(typeof a==="bigint")return re(a)?a=Number(a):(a=Ae(64,a),a=re(a)?Number(a):String(a)),a;if(He(a))return typeof a==="number"?Pe(a):Me(a)}
function Te(a){if(typeof a!=="string")throw Error();return a}
function Ue(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ve(a){return a==null||typeof a==="string"?a:void 0}
function We(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ee(b)+" but got "+(a&&Ee(a.constructor)));}
function Xe(a,b,c){if(a!=null&&typeof a==="object"&&a.Rc===Xd)return a;if(Array.isArray(a)){var d=a[J]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Sd(a,e);return new b(a)}}
;function Ye(a){return a}
function Ze(a){return a}
function $e(a,b,c,d){return af(a,b,c,d,bf,cf)}
function df(a,b,c,d){return af(a,b,c,d,ef,ff)}
function af(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=gf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var v=m,x=c.length-1;x>=0;x--){var z=c[x];if(!(z==null||d&&x===c.length-1&&z===d)){z=x-b;var G=e(z,t)+f(n,p,v);G<l&&(a=1+z,l=G);n++;t--;v+=gf(z);p=Math.max(p,z)}}b=e(0,0)+f(n,p,v);b<l&&(a=0,l=b);if(d){n=h;p=g;v=m;t=k;for(var H in d)d=+H,isNaN(d)||d>=
1024||(n--,t++,v-=H.length,g=e(d,t)+f(n,p,v),g<l&&(a=1+d,l=g))}return a}
function ff(a,b,c){return c+a*3+(a>1?a-1:0)}
function ef(a,b){return(a>1?a-1:0)+(a-b)*4}
function cf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function bf(a){return 40+4*a}
function gf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;function hf(a,b,c){var d=Wd(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var g in f)b[g]=c(f[g])}be(d,a);return d}
function jf(a,b,c,d,e){if(a!=null){if(Array.isArray(a)){var f=a[J]|0;return a.length===0&&f&1?void 0:e&&f&2?a:kf(a,b,c,d!==void 0,e)}return b(a,d)}}
function kf(a,b,c,d,e){var f=d||c?a[J]|0:0;d=d?!!(f&32):void 0;for(var g=Wd(a),h=0,k=g.length,l=0;l<k;l++){var m=g[l];if(l===k-1&&Yd(m)){var n=void 0;var p=b,t=c,v=d,x=e,z=void 0;for(n in m){var G=jf(m[n],p,t,v,x);if(G!=null){var H=void 0;((H=z)!=null?H:z={})[n]=G}}n=z}else n=jf(g[l],b,c,d,e);g[l]=n;n!=null&&(h=l+1)}h<k&&(g.length=h);c&&(be(g,a),c(f,g));return g}
function lf(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return re(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(zd(a))return zd(a)&&Gd(Od),vd(a);if(a.Rc===Xd)return mf(a);if(a instanceof Bd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=vd(b)}return}return a}
var nf;function of(a,b){b&&(nf=b===Ze||b!==Ye&&b!==$e&&b!==df?Ze:b);try{return mf(a)}finally{nf=void 0}}
function mf(a){var b=a.F;a=kf(b,lf,void 0,void 0,!1);var c=b[J]|0;if((b=a.length)&&!(c&512)){var d=a[b-1],e=!1;Yd(d)?(b--,e=!0):d=void 0;var f,g=(f=nf)!=null?f:Ze;f=c&512?0:-1;c=b-f;g=g(c,f,a,d);d&&(a[b]=void 0);if(c<g&&d){c=!0;for(var h in d){var k=+h;k<=g?(e=k+f,a[e]=d[h],b=Math.max(e+1,b),e=!1,delete d[h]):c=!1}c&&(d=void 0)}for(c=b-1;b>0;c=b-1)if(h=a[c],h==null)b--,e=!0;else if(c-=f,c>=g)e=void 0,((e=d)!=null?e:d={})[c]=h,b--,e=!0;else break;e&&(a.length=b);d&&a.push(d)}return a}
;function K(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=a[J]|0;16384&d||!(64&d)||2&d||pf();if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Yd(g)){d|=256;b=d&512?0:-1;f-=b;if(f>=1024)throw Error("pvtlmt");for(var h in g)e=+h,e<f&&(c[e+b]=g[h],delete g[h]);d=d&-33521665|(f&1023)<<15;break a}}if(b){h=Math.max(b,e-(d&512?0:
-1));if(h>1024)throw Error("spvt");d=d&-33521665|(h&1023)<<15}}}Sd(a,d);return a}
function pf(){Gd(Nd)}
;function qf(a,b,c){c=c===void 0?Ud:c;if(a!=null){if(td&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[J]|0;if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Sd(a,d|34),d&4&&Object.freeze(a),a):kf(a,qf,d&4?Ud:c,!0,!0)}a.Rc===Xd&&(c=a.F,d=c[J]|0,a=d&2?a:new a.constructor(rf(c,d,!0)));return a}}
function rf(a,b,c){var d=c||b&2?Ud:Td,e=!!(b&32);a=hf(a,b,function(f){return qf(f,e,d)});
Rd(a,32|(c?2:0));return a}
function sf(a){var b=a.F,c=b[J]|0;return c&2?new a.constructor(rf(b,c,!1)):a}
;function tf(a,b){a=a.F;return uf(a,a[J]|0,b)}
function uf(a,b,c){if(c===-1)return null;var d=c+(b&512?0:-1),e=a.length-1;if(d>=e&&b&256)return a[e][c];if(d<=e)return a[d]}
function vf(a,b,c){var d=a.F,e=d[J]|0;ae(e);wf(d,e,b,c);return a}
function wf(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Sd(a,b)):a[f]=d);return b}
function xf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function yf(a,b,c){var d=a.F,e=d[J]|0;ae(e);if(b==null)return wf(d,e,3),a;if(!Array.isArray(b))throw Fd();var f=b[J]|0,g=f,h=xf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Wd(b),g=0,f=zf(f,e),f=Af(f,e,!0),k=!1);f|=21;h=4&f?4096&f?4096:8192&f?8192:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Wd(b),g=0,f=zf(f,e),f=Af(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=Wd(b),f=zf(f,e),f=Af(f,e,!0)),Sd(b,f));wf(d,e,3,b);return a}
function Bf(a,b,c,d){a=a.F;var e=a[J]|0;ae(e);if(d==null){var f=Cf(a);if(Df(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Cf(a);var g=Df(f,a,e,c);g!==b&&(g&&(e=wf(a,e,g)),f.set(c,b))}wf(a,e,b,d)}
function Cf(a){if(Hd){var b;return(b=a[Ld])!=null?b:a[Ld]=new Map}if(Ld in a)return a[Ld];b=new Map;Object.defineProperty(a,Ld,{value:b});return b}
function Df(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];uf(b,c,g)!=null&&(e!==0&&(c=wf(b,c,e)),e=g)}a.set(d,e);return e}
function Ef(a,b,c){a=a.F;var d=a[J]|0,e=uf(a,d,c);b=Xe(e,b,d);b!==e&&b!=null&&wf(a,d,c,b);return b}
function Ff(a,b,c){b=Ef(a,b,c);if(b==null)return b;a=a.F;var d=a[J]|0;if(!(d&2)){var e=sf(b);e!==b&&(b=e,wf(a,d,c,b))}return b}
function Bc(a,b,c){var d=void 0===ce?2:4;var e=a.F[J]|0,f=e,g=!(2&e);a=a.F;var h=!!(2&f);e=h?1:d;g&&(g=!h);d=uf(a,f,c);d=Array.isArray(d)?d:Zd;var k=d[J]|0;h=!!(4&k);if(!h){var l=k;l===0&&(l=zf(l,f));k=d;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,v=0,x=0;v<k.length;v++){var z=Xe(k[v],b,m);if(z instanceof b){if(!n){var G=!!((z.F[J]|0)&2);p&&(p=!G);t&&(t=G)}k[x++]=z}}x<v&&(k.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Sd(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(e===1||e===4&&32&
k))){xf(k)&&(d=Wd(d),k=zf(k,f),f=wf(a,f,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=sf(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;Sd(b,g);k=g}e===1||e===4&&32&k?xf(k)||(f=k,c=!!(32&k),k|=!d.length||16&k&&(!h||c)?2:2048,k!==f&&Sd(d,k),Object.freeze(d)):(e===2&&xf(k)&&(d=Wd(d),k=zf(k,f),k=Af(k,f,!1),Sd(d,k),f=wf(a,f,c,d)),xf(k)||(c=k,k=Af(k,f,!1),k!==c&&Sd(d,k)));return d}
function Gf(a,b,c,d){d!=null?We(d,b):d=void 0;return vf(a,c,d)}
function Hf(a,b,c,d){var e=a.F,f=e[J]|0;ae(f);if(d==null)return wf(e,f,c),a;if(!Array.isArray(d))throw Fd();for(var g=d[J]|0,h=g,k=xf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];We(t,b);k||(t=!!((t.F[J]|0)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=Wd(d),h=0,g=zf(g,f),g=Af(g,f,!0));g!==h&&Sd(d,g);wf(e,f,c,d);return a}
function zf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function Af(a,b,c){32&b&&c||(a&=-33);return a}
function If(a){a=tf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(Ae(64,a)):He(a)?c==="string"?Me(a):b?Ne(a):Pe(a):void 0;return b}
function Dc(a,b,c){c=c===void 0?0:c;var d;return(d=Ke(tf(a,b)))!=null?d:c}
function Jf(a,b){var c=c===void 0?"":c;var d;return(d=Ve(tf(a,b)))!=null?d:c}
function Kf(a){var b=b===void 0?0:b;a=tf(a,1);a=a==null?a:Ce(a)?a|0:void 0;return a!=null?a:b}
function Lf(a,b,c){return vf(a,b,Ue(c))}
function Mf(a,b,c){c=Ue(c);a=a.F;var d=a[J]|0;ae(d);wf(a,d,b,c===""?void 0:c)}
function Nf(a,b,c){if(c!=null){if(!Ce(c))throw Fd("enum");c|=0}return vf(a,b,c)}
;function L(a,b,c){this.F=K(a,b,c)}
r=L.prototype;r.toJSON=function(){return of(this)};
r.serialize=function(a){return JSON.stringify(of(this,a))};
function Of(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Rd(b,32);return new a(b)}
r.clone=function(){var a=this.F;return new this.constructor(rf(a,a[J]|0,!1))};
r.Rc=Xd;r.toString=function(){return this.F.toString()};function Pf(a){return function(b){return Of(a,b)}}
;function Qf(a){this.F=K(a)}
w(Qf,L);function Rf(a,b){return yf(a,b,Ie)}
;function Sf(a){this.F=K(a)}
w(Sf,L);var Tf=[1,2,3];function Uf(a){this.F=K(a)}
w(Uf,L);var Vf=[1,2,3];function Wf(a){this.F=K(a)}
w(Wf,L);function Xf(a){this.F=K(a)}
w(Xf,L);function Yf(a){this.F=K(a)}
w(Yf,L);function Zf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function $f(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],z=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var H=z^v&(x^z);var ca=1518500249}else H=v^x^z,ca=1859775393;else t<60?(H=v&x|z&(v|x),ca=2400959708):(H=v^x^z,ca=3395469782);H=((n<<5|n>>>27)&4294967295)+H+G+ca+p[t]&4294967295;G=z;z=x;x=(v<<30|v>>>2)&4294967295;v=n;n=H}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,je:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function ag(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,bg(Zf(d),a,c||null)].join(" "):null}
function bg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Ob(d,function(h){e.push(h)}),cg(e.join(" "));
var f=[],g=[];Ob(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Ob(d,function(h){e.push(h)});
a=cg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function cg(a){var b=$f();b.update(a);return b.je().toLowerCase()}
;function dg(a){this.h=a||{cookie:""}}
r=dg.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Tb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.bf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=eb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Tb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=eb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var eg=new dg(typeof document=="undefined"?null:document);function fg(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new dg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function gg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new dg(document)).get(b));return a?ag(a,c,d):null}
function hg(a){var b=Zf(String(C.location.href)),c=[];if(fg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new dg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?ag(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=gg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=gg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function ig(){}
ig.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
ig.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function jg(a){this.F=K(a)}
w(jg,L);function kg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return ab()};
this.i=this.h()}
kg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
kg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
kg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
kg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function lg(a){this.F=K(a)}
w(lg,L);function mg(a){this.F=K(a)}
w(mg,L);function ng(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=ng.prototype;r.clone=function(){return new ng(this.x,this.y)};
r.equals=function(a){return a instanceof ng&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function og(a,b){this.width=a;this.height=b}
r=og.prototype;r.clone=function(){return new og(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function pg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function qg(a){var b=rg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sg(a){for(var b in a)return!1;return!0}
function tg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ug(a){return a!==null&&"privembed"in a?a.privembed:!1}
function vg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function wg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function xg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=xg(a[c]);return b}
var yg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<yg.length;f++)c=yg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ag(a,b){this.h=a===Bg&&b||""}
Ag.prototype.toString=function(){return this.h};
var Bg={};new Ag(Bg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Cg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Dg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Eg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Fg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Gg(a){this.F=K(a)}
w(Gg,L);Gg.prototype.lc=function(){return Kf(this)};function Hg(a){this.F=K(a)}
w(Hg,L);function Ig(a){this.F=K(a)}
w(Ig,L);function Jg(a,b){Hf(a,Hg,1,b)}
;function Kg(a){this.F=K(a)}
w(Kg,L);var Lg=["platform","platformVersion","architecture","model","uaFullVersion"],Mg=new Ig,Ng=null;function Og(a,b){b=b===void 0?Lg:b;if(!Ng){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Hg;f=Lf(f,1,e.brand);return Lf(f,2,e.version)});
Jg(vf(Mg,2,Fe(a.mobile)),c);Ng=a.getHighEntropyValues(b)}var d=new Set(b);return Ng.then(function(e){var f=Mg.clone();d.has("platform")&&Lf(f,3,e.platform);d.has("platformVersion")&&Lf(f,4,e.platformVersion);d.has("architecture")&&Lf(f,5,e.architecture);d.has("model")&&Lf(f,6,e.model);d.has("uaFullVersion")&&Lf(f,7,e.uaFullVersion);return f}).catch(function(){return Mg.clone()})}
;function Pg(a){this.F=K(a)}
w(Pg,L);function Qg(a){this.F=K(a,4)}
w(Qg,L);function Rg(a){this.F=K(a,36)}
w(Rg,L);function Sg(a){this.F=K(a,19)}
w(Sg,L);Sg.prototype.Wb=function(a){return Nf(this,2,a)};function Tg(a,b){this.Wa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Sg;Number.isInteger(a)&&this.h.Wb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Ug(this,new Pg)}
Tg.prototype.Wb=function(a){this.h.Wb(a);return this};
function Ug(a,b){Gf(a.h,Pg,1,b);Kf(b)||Nf(b,1,1);a.Wa||(b=Vg(a),Jf(b,5)||Lf(b,5,a.locale));a.j&&(b=Vg(a),Ff(b,Ig,9)||Gf(b,Ig,9,a.j))}
function Wg(a,b){a.i=b}
function Xg(a){var b=b===void 0?Lg:b;var c=a.Wa?void 0:window;c?Og(c,b).then(function(d){a.j=d;d=Vg(a);Gf(d,Ig,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Vg(a){a=Ff(a.h,Pg,1);var b=Ff(a,Kg,11);b||(b=new Kg,Gf(a,Kg,11,b));return b}
function Yg(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(Ef(Ff(a.h,Pg,1),Kg,11)!==void 0){var h=Vg(a);var k=new Gg;k=Nf(k,1,a.i);k=vf(k,2,Fe(a.isFinal));d=vf(k,3,Je(d>0?d:void 0));d=vf(d,4,Je(f>0?f:void 0));d=vf(d,5,Je(g>0?g:void 0));f=d.F;g=f[J]|0;d=g&2?d:new d.constructor(rf(f,g,!0));Gf(h,Gg,10,d)}a=a.h.clone();h=Date.now().toString();a=vf(a,4,Qe(h));b=b.slice();b=Hf(a,Rg,3,b);e&&(a=new lg,e=vf(a,13,Je(e)),a=new mg,e=Gf(a,lg,2,e),a=new Qg,
e=Gf(a,mg,1,e),e=Nf(e,2,9),Gf(b,Qg,18,e));c&&vf(b,14,Qe(c));return b}
;var Zg=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function $g(a){this.h=this.i=this.j=a}
$g.prototype.reset=function(){this.h=this.i=this.j};
$g.prototype.getValue=function(){return this.i};function ah(a){this.F=K(a,8)}
w(ah,L);var bh=Pf(ah);function eh(a){this.F=K(a)}
w(eh,L);var fh=new function(){this.ctor=eh;this.isRepeated=0;this.h=Ff;this.defaultValue=void 0};function gh(a){F.call(this);var b=this;this.componentId="";this.h=[];this.Pa="";this.pageId=null;this.Qa=this.ha=-1;this.G=this.experimentIds=null;this.Y=this.Z=this.D=this.o=0;this.rb=1;this.timeoutMillis=0;this.oa=!1;this.logSource=a.logSource;this.hb=a.hb||function(){};
this.j=new Tg(a.logSource,a.Wa);this.network=a.network||null;this.mb=a.mb||null;this.bufferSize=1E3;this.P=a.zf||null;this.sessionIndex=a.sessionIndex||null;this.Ob=a.Ob||!1;this.logger=null;this.withCredentials=!a.qd;this.Wa=a.Wa||!1;this.U=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Fa=typeof URLSearchParams!=="undefined"&&!!(new URL(hh())).searchParams&&!!(new URL(hh())).searchParams.set;var c=Nf(new Pg,1,1);Ug(this.j,c);this.u=new $g(1E4);a=ih(this,a.ld);
this.i=new kg(this.u.getValue(),a);this.xa=new kg(6E5,a);this.Ob||this.xa.start();this.Wa||(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.Jc()}),document.addEventListener("pagehide",this.Jc.bind(this)))}
w(gh,F);function ih(a,b){return a.Fa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=gh.prototype;r.ba=function(){this.Jc();this.i.stop();this.xa.stop();F.prototype.ba.call(this)};
function jh(a){a.P||(a.P=hh());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
r.log=function(a){if(this.Fa){a=a.clone();var b=this.rb++;a=vf(a,21,Qe(b));this.componentId&&Lf(a,26,this.componentId);b=a;if(If(b)==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";vf(b,1,Qe(c))}Se(tf(b,15))==null&&vf(b,15,Qe((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),Gf(b,jg,16,c));b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Ob||this.i.enabled||this.i.start()}};
r.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.oa&&this.U)this.j.i=3,kh(this);else{var d=Date.now();if(this.Qa>d&&this.ha<d)b&&b("throttled");else{this.network&&(typeof this.network.lc==="function"?Wg(this.j,this.network.lc()):this.j.i=0);var e=Yg(this.j,this.h,this.o,this.D,this.mb,this.Z,this.Y),f=this.hb();if(f&&this.Pa===f)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=e.serialize();var g;this.G&&this.G.isSupported(d.length)&&(g=this.G.compress(d));
var h=lh(this,d,f),k=function(n){c.u.reset();c.i.setInterval(c.u.getValue());if(n){var p=null;try{var t=JSON.stringify(JSON.parse(n.replace(")]}'\n","")));p=bh(t)}catch(z){}if(p){n=Number;var v="-1";v=v===void 0?"0":v;var x;t=(x=If(p))!=null?x:v;x=n(t);x>0&&(c.ha=Date.now(),c.Qa=c.ha+x);p=fh.ctor?fh.h(p,fh.ctor,175237375):fh.h(p,175237375,null);if(p=p===null?void 0:p)p=Dc(p,1,-1),p!==-1&&(c.u=new $g(p<1?1:p),c.i.setInterval(c.u.getValue()))}}a&&a();c.D=0},l=function(n,p){var t=Bc(e,Rg,3);
var v;var x=(v=Se(tf(e,14)))!=null?v:void 0;v=c.u;v.h=Math.min(3E5,v.h*2);v.i=Math.min(3E5,v.h+Math.round(.1*(Math.random()-.5)*2*v.h));c.i.setInterval(c.u.getValue());n===401&&f&&(c.Pa=f);x&&(c.o+=x);p===void 0&&(p=c.isRetryable(n));p&&(c.h=t.concat(c.h),c.Ob||c.i.enabled||c.i.start());b&&b("net-send-failed",n);++c.D},m=function(){c.network&&c.network.send(h,k,l)};
g?g.then(function(n){h.Bc["Content-Encoding"]="gzip";h.Bc["Content-Type"]="application/binary";h.body=n;h.ce=2;m()},function(){m()}):m()}}}};
function lh(a,b,c){c=c===void 0?a.hb():c;var d={},e=new URL(jh(a));c&&(d.Authorization=c);a.sessionIndex&&(d["X-Goog-AuthUser"]=a.sessionIndex,e.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:a.pageId}),e.searchParams.set("pageId",a.pageId));return{url:e.toString(),body:b,ce:1,Bc:d,requestType:"POST",withCredentials:a.withCredentials,timeoutMillis:a.timeoutMillis}}
r.Jc=function(){this.j.isFinal=!0;this.flush();this.j.isFinal=!1};
function kh(a){mh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.U=!1);return d})}
function mh(a,b){if(a.h.length!==0){var c=new URL(jh(a));c.searchParams.delete("format");var d=a.hb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Yg(a.j,e,a.o,a.D,a.mb,a.Z,a.Y);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.Z=0;a.Y=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function hh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function nh(){this.Wd=typeof AbortController!=="undefined"}
nh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Wd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Bc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.A(3);break}if((l=b)==null){v.A(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.M=0;v.o=0;clearTimeout(f);Ca(v);break;case 2:m=Ba(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.A(3)}})};
nh.prototype.lc=function(){return 4};function oh(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.mb=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(oh,F);function ph(a,b){a.i=b;return a}
function qh(a,b){a.network=b;return a}
function rh(a,b){a.h=b}
function sh(a){a.j=!0;return a}
oh.prototype.qd=function(){this.u=!0;return this};
function th(a){a.network||(a.network=new nh);var b=new gh({logSource:a.logSource,hb:a.hb?a.hb:hg,sessionIndex:a.sessionIndex,zf:a.Ua,Wa:a.o,Ob:!1,qd:a.u,ld:a.ld,network:a.network});vc(a,b);if(a.i){var c=a.i,d=Vg(b.j);Lf(d,7,c)}b.G=new ig;a.componentId&&(b.componentId=a.componentId);a.mb&&(b.mb=a.mb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new jg),c=b.experimentIds,d=d.serialize(),Lf(c,4,d)):b.experimentIds&&vf(b.experimentIds,4));a.j&&(b.oa=b.U);Xg(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Wb&&a.network.Wb(a.logSource);a.network.nf&&a.network.nf(b);return b}
;function uh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;F.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new oh(a,"0"),a.componentId=b,vc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&ph(a,e),g&&qh(a,g),b=th(a));this.h=b}
w(uh,F);
uh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Yf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Xf;f=Lf(f,1,e.i);var g=vh(e);f=yf(f,g,Te);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Kc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Uf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&Bf(v,1,Vf,Qe(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);Bf(v,2,Vf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Wf;p=Gf(t,Uf,2,p);t=l;v=[];x=wh(e);for(var z=0;z<x.length;z++){var G=x[z],H=t[z],ca=new Sf;switch(G){case 3:Bf(ca,1,Tf,Ue(String(H)));break;case 2:G=Number(H);Number.isFinite(G)&&Bf(ca,2,Tf,Je(G));break;case 1:Bf(ca,3,Tf,Fe(H==="true"))}v.push(ca)}Hf(p,Sf,1,v);g.push(p)}}Hf(f,Wf,4,g);c.push(f);e.clear()}Hf(a,Xf,1,c);b=this.h;if(a instanceof Rg)b.log(a);else try{var da=new Rg,Na=a.serialize();var Kb=Lf(da,8,Na);b.log(Kb)}catch(ja){}this.h.flush()}};function xh(a){this.h=a}
;function yh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function wh(a){return a.fields.map(function(b){return b.fieldType})}
function vh(a){return a.fields.map(function(b){return b.fieldName})}
r=yh.prototype;r.Xd=function(a){var b=B.apply(1,arguments),c=this.Kc(b);c?c.push(new xh(a)):this.Id(a,b)};
r.Id=function(a){var b=this.kd(B.apply(1,arguments));this.h.set(b,[new xh(a)])};
r.Kc=function(){var a=this.kd(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.we=function(){var a=this.Kc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.kd=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function zh(a,b){yh.call(this,a,3,b)}
w(zh,yh);zh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.we(b);d&&(c=d.h);this.Id(c+a,b)};function Ah(a,b){yh.call(this,a,2,b)}
w(Ah,yh);Ah.prototype.record=function(a){this.Xd(a,B.apply(1,arguments))};function Bh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Bh.prototype.stopPropagation=function(){this.j=!0};
Bh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ch(a,b){Bh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
cb(Ch,Bh);
Ch.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Ch.Aa.preventDefault.call(this)};
Ch.prototype.stopPropagation=function(){Ch.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ch.prototype.preventDefault=function(){Ch.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Dh="closure_listenable_"+(Math.random()*1E6|0);var Eh=0;function Fh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.oc=e;this.key=++Eh;this.Vb=this.ec=!1}
function Gh(a){a.Vb=!0;a.listener=null;a.proxy=null;a.src=null;a.oc=null}
;function Hh(a){this.src=a;this.listeners={};this.h=0}
Hh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ih(a,b,d,e);g>-1?(b=a[g],c||(b.ec=!1)):(b=new Fh(b,this.src,f,!!d,e),b.ec=c,a.push(b));return b};
Hh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ih(e,b,c,d);return b>-1?(Gh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Jh(a,b){var c=b.type;c in a.listeners&&Tb(a.listeners[c],b)&&(Gh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Ih(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Vb&&f.listener==b&&f.capture==!!c&&f.oc==d)return e}return-1}
;var Kh="closure_lm_"+(Math.random()*1E6|0),Lh={},Mh=0;function Nh(a,b,c,d,e){if(d&&d.once)Oh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Nh(a,b[f],c,d,e);else c=Ph(c),a&&a[Dh]?a.listen(b,c,Sa(d)?!!d.capture:!!d,e):Qh(a,b,c,!1,d,e)}
function Qh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Rh(a);h||(a[Kh]=h=new Hh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Sh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Zg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Th(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Mh++}}
function Sh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Uh;return a}
function Oh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Oh(a,b[f],c,d,e);else c=Ph(c),a&&a[Dh]?Vh(a,b,c,Sa(d)?!!d.capture:!!d,e):Qh(a,b,c,!0,d,e)}
function Wh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Wh(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=Ph(c),a&&a[Dh])?a.i.remove(String(b),c,d,e):a&&(a=Rh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ih(b,c,d,e)),(c=a>-1?b[a]:null)&&Xh(c))}
function Xh(a){if(typeof a!=="number"&&a&&!a.Vb){var b=a.src;if(b&&b[Dh])Jh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Th(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Mh--;(c=Rh(b))?(Jh(c,a),c.h==0&&(c.src=null,b[Kh]=null)):Gh(a)}}}
function Th(a){return a in Lh?Lh[a]:Lh[a]="on"+a}
function Uh(a,b){if(a.Vb)a=!0;else{b=new Ch(b,this);var c=a.listener,d=a.oc||a.src;a.ec&&Xh(a);a=c.call(d,b)}return a}
function Rh(a){a=a[Kh];return a instanceof Hh?a:null}
var Yh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Ph(a){if(typeof a==="function")return a;a[Yh]||(a[Yh]=function(b){return a.handleEvent(b)});
return a[Yh]}
;function Zh(){F.call(this);this.i=new Hh(this);this.xa=this;this.Z=null}
cb(Zh,F);Zh.prototype[Dh]=!0;r=Zh.prototype;r.addEventListener=function(a,b,c,d){Nh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Wh(this,a,b,c,d)};
function $h(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new Bh(b,a):b instanceof Bh?b.target=b.target||a:(e=b,b=new Bh(c,a),zg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=ai(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ai(g,c,!0,b)&&e,b.j||(e=ai(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ai(g,c,!1,b)&&e}
r.ba=function(){Zh.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Vh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Gh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function ai(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Vb&&g.capture==c){var h=g.listener,k=g.oc||g.src;g.ec&&Jh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var bi=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function ci(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
ci.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function di(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function ei(){this.i=this.h=null}
ei.prototype.add=function(a,b){var c=fi.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
ei.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var fi=new ci(function(){return new gi},function(a){return a.reset()});
function gi(){this.next=this.scope=this.h=null}
gi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
gi.prototype.reset=function(){this.next=this.scope=this.h=null};var hi,ii=!1,ji=new ei;function ki(a,b){hi||li();ii||(hi(),ii=!0);ji.add(a,b)}
function li(){var a=Promise.resolve(void 0);hi=function(){a.then(mi)}}
function mi(){for(var a;a=ji.remove();){try{a.h.call(a.scope)}catch(b){Rc(b)}di(fi,a)}ii=!1}
;function ni(){}
function oi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function pi(a){this.X=0;this.ab=void 0;this.ub=this.Sa=this.parent_=null;this.nc=this.Ic=!1;if(a!=ni)try{var b=this;a.call(void 0,function(c){qi(b,2,c)},function(c){qi(b,3,c)})}catch(c){qi(this,3,c)}}
function ri(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ri.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var si=new ci(function(){return new ri},function(a){a.reset()});
function ti(a,b,c){var d=si.get();d.i=a;d.h=b;d.context=c;return d}
function ui(a){return new pi(function(b,c){c(a)})}
pi.prototype.then=function(a,b,c){return vi(this,bi(typeof a==="function"?a:null),bi(typeof b==="function"?b:null),c)};
pi.prototype.$goog_Thenable=!0;function wi(a,b,c,d){xi(a,ti(b||ni,c||null,d))}
r=pi.prototype;r.finally=function(a){var b=this;a=bi(a);return new Promise(function(c,d){wi(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Dc=function(a,b){return vi(this,null,bi(a),b)};
r.catch=pi.prototype.Dc;r.cancel=function(a){if(this.X==0){var b=new yi(a);ki(function(){zi(this,b)},this)}};
function zi(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?zi(c,b):(f?(d=f,d.next==c.ub&&(c.ub=d),d.next=d.next.next):Ai(c),Bi(c,e,3,b)))}a.parent_=null}else qi(a,3,b)}
function xi(a,b){a.Sa||a.X!=2&&a.X!=3||Ci(a);a.ub?a.ub.next=b:a.Sa=b;a.ub=b}
function vi(a,b,c,d){var e=ti(null,null,null);e.child=new pi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof yi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;xi(a,e);return e.child}
r.xf=function(a){this.X=0;qi(this,2,a)};
r.yf=function(a){this.X=0;qi(this,3,a)};
function qi(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.xf,f=a.yf;if(d instanceof pi){wi(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var k=d.then;if(typeof k==="function"){Di(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,Ci(a),b!=3||c instanceof yi||Ei(a,c))}}
function Di(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ci(a){a.Ic||(a.Ic=!0,ki(a.qe,a))}
function Ai(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.ub=null);return b}
r.qe=function(){for(var a;a=Ai(this);)Bi(this,a,this.X,this.ab);this.Ic=!1};
function Bi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.nc;a=a.parent_)a.nc=!1;if(b.child)b.child.parent_=null,Fi(b,c,d);else try{b.j?b.i.call(b.context):Fi(b,c,d)}catch(e){Gi.call(null,e)}di(si,b)}
function Fi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Ei(a,b){a.nc=!0;ki(function(){a.nc&&Gi.call(null,b)})}
var Gi=Rc;function yi(a){db.call(this,a)}
cb(yi,db);yi.prototype.name="cancel";function Hi(a,b){Zh.call(this);this.j=a||1;this.h=b||C;this.o=Za(this.tf,this);this.u=ab()}
cb(Hi,Zh);r=Hi.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.tf=function(){if(this.enabled){var a=ab()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),$h(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=ab())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){Hi.Aa.ba.call(this);this.stop();delete this.h};function Ii(a){F.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new Hi(this.flushInterval);this.h.listen("tick",this.Yb,!1,this);vc(this,this.h)}
w(Ii,F);r=Ii.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ji(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Yb()}
r.Yb=function(){var a=this.i.values();a=[].concat(ra(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Ki(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Kb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new zh(a,b))};
r.Gc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ah(a,b))};
function Li(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Ib=function(a){this.Vd(a,1,B.apply(1,arguments))};
r.Vd=function(a,b){var c=B.apply(2,arguments),d=Li(this,a);d&&d instanceof zh&&(d.j(b,c),Ji(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Li(this,a);d&&d instanceof Ah&&(d.record(b,c),Ji(this))};
function Ki(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Mi(){}
Mi.prototype.serialize=function(a){var b=[];Ni(this,a,b);return b.join("")};
function Ni(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ni(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Oi(d,c),c.push(":"),Ni(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Oi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Pi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Qi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Oi(a,b){b.push('"',a.replace(Qi,function(c){var d=Pi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Pi[c]=d);return d}),'"')}
;function Ri(){Zh.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.oa="";this.ha=!1}
cb(Ri,Zh);var Si=/^https?$/i,Ti=["POST","PUT"],Ui=[];function Vi(a,b,c,d,e,f,g){var h=new Ri;Ui.push(h);b&&h.listen("complete",b);Vh(h,"ready",h.ee);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Ri.prototype;r.ee=function(){this.dispose();Tb(Ui,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=bi(Za(this.Bd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Wi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Nb(Ti,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.oa&&(this.J.responseType=this.oa);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.wf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Wi(this,g)}};
r.wf=function(){typeof La!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),$h(this,"timeout"),this.abort(8))};
function Wi(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Xi(a);Yi(a)}
function Xi(a){a.P||(a.P=!0,$h(a,"complete"),$h(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,$h(this,"complete"),$h(this,"abort"),Yi(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Yi(this,!0));Ri.Aa.ba.call(this)};
r.Bd=function(){this.ea||(this.U||this.D||this.j?Zi(this):this.Ne())};
r.Ne=function(){Zi(this)};
function Zi(a){if(a.h&&typeof La!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Bd.bind(a),0);else if($h(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if($i(a))$h(a,"complete"),$h(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Xi(a)}}finally{Yi(a)}}}
function Yi(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||$h(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function $i(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=cc(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Si.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function aj(){}
aj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Vi(a.url,function(d){d=d.target;if($i(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Bc,a.timeoutMillis,a.withCredentials)};
aj.prototype.lc=function(){return 1};function bj(a,b){this.logger=a;this.event=b;this.startTime=cj()}
bj.prototype.done=function(){this.logger.Sb(this.event,cj()-this.startTime)};
function dj(){Gc.apply(this,arguments)}
w(dj,Gc);function ej(a,b){var c=cj();b=b();a.Sb("n",cj()-c);return b}
function fj(){dj.apply(this,arguments)}
w(fj,dj);r=fj.prototype;r.Oc=function(){};
r.Bb=function(){};
r.Sb=function(){};
r.Ha=function(){};
r.Ac=function(){};
r.Nd=function(){};
function gj(a){return{rf:new Jc(a),errorCount:new Nc(a),eventCount:new Lc(a),pe:new Mc(a),Zh:new Kc(a),bi:new Oc(a),uh:new Pc(a),ai:new Qc(a)}}
function hj(a,b,c,d){a=sh(qh(ph(new oh(1828,"0"),a),new aj));b.length&&rh(a,Rf(new Qf,b));d!==void 0&&(a.Ua=d);var e=new uh(1828,"","",!1,"",th(a));vc(e,a);var f=new Ii({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.Yb()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function ij(a,b){F.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(ij,F);function jj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-cj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=cj(),a.timer=void 0}},b)}}
function kj(a,b,c){dj.call(this);this.metrics=a;this.Da=b;this.ob=c}
w(kj,dj);kj.prototype.Oc=function(a){this.metrics.rf.record(a,this.Da)};
kj.prototype.Bb=function(a){this.metrics.eventCount.h(a,this.Da)};
kj.prototype.Sb=function(a,b){this.metrics.pe.record(b,a,this.ob,this.Da)};
kj.prototype.Ha=function(a){this.metrics.errorCount.h(a,this.ob,this.Da)};
function lj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",ob:a.ob||"",kc:a.kc||[],sc:a.sc|0,Ua:a.Ua,uc:a.uc||function(){},
Hb:a.Hb||function(e,f){return hj(e,f,c.uc,c.Ua)}};
b=c.Hb("46",c.kc.concat(b));kj.call(this,gj(b),c.Da,c.ob);var d=this;this.options=c;this.service=b;this.i=!a.Hb;this.h=new ij(function(){return void d.service.Yb()},c.sc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(lj,kj);lj.prototype.Nd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Hb("46",this.options.kc.concat(a));this.h=new ij(function(){return void b.service.Yb()},this.options.sc);
this.metrics=gj(this.service)};
lj.prototype.Ac=function(){jj(this.h)};
function cj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function mj(a){this.F=K(a)}
w(mj,L);function nj(a){this.F=K(a)}
w(nj,L);function oj(a){this.F=K(a,0,"bfkj")}
w(oj,L);var pj=function(a){return de(function(b){return b instanceof a&&!((b.F[J]|0)&2)})}(oj);function Cc(a){this.F=K(a)}
w(Cc,L);function qj(a){this.F=K(a)}
w(qj,L);var rj=Pf(qj);function sj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function tj(a,b,c){if(a.disable)return new fj;b=b?Ac(b):[];if(c)return c.Nd(b),c.share();a={Da:a.Da,ob:a.ob,kc:a.Ah,sc:a.Kh,Ua:a.Ua,uc:a.uc,Hb:a.Hb};c=b;c=c===void 0?[]:c;return new lj(a,c)}
function uj(a){function b(v,x,z,G){Promise.resolve().then(function(){k.done();h.Ac();h.dispose();g.resolve({Zd:v,qf:x,Re:z,wh:G})})}
function c(v,x,z,G){if(!d.logger.ea){var H="k";x?H="h":z&&(H="u");H!=="k"?G!==0&&(d.logger.Bb(H),d.logger.Sb(H,v)):d.i<=0?(d.logger.Bb(H),d.logger.Sb(H,v),d.i=Math.floor(Math.random()*200)):d.i--}}
F.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new qj;if("challenge"in a&&pj(a.challenge)){var e=Jf(a.challenge,4);var f=Jf(a.challenge,5);Jf(a.challenge,7)&&(this.h=rj(Jf(a.challenge,7)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var v,x,z;return A(function(G){if(G.h==1)return G.yield(d.j,2);v=G.i;x=v.qf;(z=x)==null||z();G.h=0})});
this.logger=tj(a.zd||{},this.h,a.xh);vc(this,this.logger);var g=new sj;this.j=g.promise;this.logger.Bb("t");var h=this.logger.share(),k=new bj(h,"t");if(!C[f])throw this.logger.Ha(25),Error("EGOU");if(!C[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=C[f].a;f=[];for(var m=[],n=Ac(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=Ec(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.Yh,c,[f,m],Jf(this.h,5))).next().value;this.Zc=g.promise.then(function(){})}catch(v){throw this.logger.Ha(28),
v;
}}
w(uj,F);uj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Bb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Zd;return new Promise(function(e){var f=new bj(b,"n");d(function(g){f.done();b.Oc(g.length);b.Ac();b.dispose();e(g)},[a.vb,
a.cd,a.Bf,a.dd])})})};
uj.prototype.ed=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Bb("n");var c=ej(this.logger,function(){return b.u([a.vb,a.cd,a.Bf,a.dd])});
this.logger.Oc(c.length);this.logger.Ac();return c};
uj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Re)==null||c(a)})};function vj(a){if(!a)return null;a=Ve(tf(a,4));return a===null||a===void 0?null:kb(a)}
;function wj(){this.promises={};this.h=null}
function xj(){wj.h||(wj.h=new wj);return wj.h}
function yj(a,b){return zj(a,Ff(b,mj,1),Ff(b,nj,2),Jf(b,3))}
function zj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Aj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Aj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Aj(a,b){return b?Bj(b):a?Cj(a):Promise.resolve()}
function Bj(a){return new Promise(function(b,c){var d=Dg("SCRIPT"),e=vj(a);Gb(d,e);d.onload=function(){Eg(d);b()};
d.onerror=function(){Eg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Cj(a){return new Promise(function(b){var c=Dg("SCRIPT");if(a){var d=Ve(tf(a,6));d=d===null||d===void 0?null:Db(d)}else d=null;c.textContent=Eb(d);Fb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Eg(c);b()})}
;var Dj=window;function Ej(a){var b=Fj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Gj(){var a=[];Ej(function(b){a.push(b)});
return a}
var Fj={Cf:"allow-forms",Df:"allow-modals",Ef:"allow-orientation-lock",Ff:"allow-pointer-lock",Gf:"allow-popups",Hf:"allow-popups-to-escape-sandbox",If:"allow-presentation",Jf:"allow-same-origin",Kf:"allow-scripts",Lf:"allow-top-navigation",Mf:"allow-top-navigation-by-user-activation"},Hj=oi(function(){return Gj()});
function Ij(){var a=Jj(),b={};Ob(Hj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Jj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Kj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Lj=(new Date).getTime();function Mj(a){Zh.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Nj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Oj(this)}
w(Mj,Zh);function Pj(){var a=Qj;Mj.h||(Mj.h=new Mj(a));return Mj.h}
Mj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Mj.h};
Mj.prototype.ta=function(){return this.h};
function Oj(a){a.D=a.Ca.pa(function(){var b;return A(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Nj(a),3):c.yield(Nj(a),3);Oj(a);c.h=0})},3E4)}
function Nj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?$h(a,"networkstatus-online"):$h(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function Rj(){this.data=[];this.h=-1}
Rj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Rj.prototype.get=function(a){return!!this.data[a]};
function Sj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Tj(){this.blockSize=-1}
;function Uj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
cb(Uj,Tj);Uj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Vj(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Uj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Vj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Vj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Vj(this,e);f=0;break}}this.i=f;this.o+=b}};
Uj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Vj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Wj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Xj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Yj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Wj(a).match(/\S+/g)||[],b=Nb(a,b)>=0);return b}
function Zj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Yj(a,"inverted-hdpi")&&Xj(a,Array.prototype.filter.call(a.classList?a.classList:Wj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function ak(){}
ak.prototype.next=function(){return bk};
var bk={done:!0,value:void 0};ak.prototype.sb=function(){return this};function ck(a){if(a instanceof dk||a instanceof ek||a instanceof fk)return a;if(typeof a.next=="function")return new dk(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new dk(function(){return a[Symbol.iterator]()});
if(typeof a.sb=="function")return new dk(function(){return a.sb()});
throw Error("Not an iterator or iterable.");}
function dk(a){this.h=a}
dk.prototype.sb=function(){return new ek(this.h())};
dk.prototype[Symbol.iterator]=function(){return new fk(this.h())};
dk.prototype.i=function(){return new fk(this.h())};
function ek(a){this.h=a}
w(ek,ak);ek.prototype.next=function(){return this.h.next()};
ek.prototype[Symbol.iterator]=function(){return new fk(this.h)};
ek.prototype.i=function(){return new fk(this.h)};
function fk(a){dk.call(this,function(){return a});
this.j=a}
w(fk,dk);fk.prototype.next=function(){return this.j.next()};function M(a){F.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
cb(M,F);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.ac(a)}return!1};
r.ac=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Tb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.qb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],gk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.ac(c)}}return f!=0}return!1};
function gk(a,b,c){ki(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ac,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){M.Aa.ba.call(this);this.clear();this.j.length=0};function hk(a){this.h=a}
hk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Mi).serialize(b))};
hk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
hk.prototype.remove=function(a){this.h.remove(a)};function ik(a){this.h=a}
cb(ik,hk);function jk(a){this.data=a}
function kk(a){return a===void 0||a instanceof jk?a:new jk(a)}
ik.prototype.set=function(a,b){ik.Aa.set.call(this,a,kk(b))};
ik.prototype.i=function(a){a=ik.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ik.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function lk(a){this.h=a}
cb(lk,ik);lk.prototype.set=function(a,b,c){if(b=kk(b)){if(c){if(c<ab()){lk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=ab()}lk.Aa.set.call(this,a,b)};
lk.prototype.i=function(a){var b=lk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<ab()||c&&c>ab())lk.prototype.remove.call(this,a);else return b}};function mk(){}
;function nk(){}
cb(nk,mk);nk.prototype[Symbol.iterator]=function(){return ck(this.sb(!0)).i()};
nk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ok(a){this.h=a;this.i=null}
cb(ok,nk);r=ok.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){pk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){pk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){pk(this);this.h.removeItem(a)};
r.sb=function(a){pk(this);var b=0,c=this.h,d=new ak;d.next=function(){if(b>=c.length)return bk;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){pk(this);this.h.clear()};
r.key=function(a){pk(this);return this.h.key(a)};
function pk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Rc(Error("Storage mechanism: Storage unavailable"))}
;function qk(){var a=null;try{a=C.localStorage||null}catch(b){}ok.call(this,a)}
cb(qk,ok);function rk(a,b){this.i=a;this.h=b+"::"}
cb(rk,nk);rk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
rk.prototype.get=function(a){return this.i.get(this.h+a)};
rk.prototype.remove=function(a){this.i.remove(this.h+a)};
rk.prototype.sb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new ak;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},sk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.bd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var tk={tb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},uk={tb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){return[].concat.apply([],a)}};
N.pf=function(){sk?(N.pb=Uint8Array,N.Ja=Uint16Array,N.Ud=Int32Array,N.assign(N,tk)):(N.pb=Array,N.Ja=Array,N.Ud=Array,N.assign(N,uk))};
N.pf();var vk=!0;try{new Uint8Array(1)}catch(a){vk=!1}
function wk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.pb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var xk={};xk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var yk={},zk,Ak=[],Bk=0;Bk<256;Bk++){zk=Bk;for(var Ck=0;Ck<8;Ck++)zk=zk&1?3988292384^zk>>>1:zk>>>1;Ak[Bk]=zk}yk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Ak[(a^b[d])&255];return a^-1};var Dk={};Dk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ek(a){for(var b=a.length;--b>=0;)a[b]=0}
var Fk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Gk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Hk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ik=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Jk=Array(576);Ek(Jk);var Kk=Array(60);Ek(Kk);var Lk=Array(512);Ek(Lk);var Mk=Array(256);Ek(Mk);var Nk=Array(29);Ek(Nk);var Ok=Array(30);Ek(Ok);function Pk(a,b,c,d,e){this.Kd=a;this.te=b;this.se=c;this.le=d;this.Le=e;this.vd=a&&a.length}
var Qk,Rk,Sk;function Tk(a,b){this.rd=a;this.Db=0;this.bb=b}
function Uk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Vk(a,b,c){a.ia>16-c?(a.na|=b<<a.ia&65535,Uk(a,a.na),a.na=b>>16-a.ia,a.ia+=c-16):(a.na|=b<<a.ia&65535,a.ia+=c)}
function Wk(a,b,c){Vk(a,c[b*2],c[b*2+1])}
function Xk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Yk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Xk(d[e]++,e))}
function Zk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.fb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Gb=0;a.ya=a.matches=0}
function $k(a){a.ia>8?Uk(a,a.na):a.ia>0&&(a.aa[a.pending++]=a.na);a.na=0;a.ia=0}
function al(a,b,c){$k(a);Uk(a,c);Uk(a,~c);N.tb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function bl(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function cl(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&bl(b,a.da[e+1],a.da[e],a.depth)&&e++;if(bl(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function dl(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Nb+d*2]<<8|a.aa[a.Nb+d*2+1];var f=a.aa[a.Nc+d];d++;if(e===0)Wk(a,f,b);else{var g=Mk[f];Wk(a,g+256+1,b);var h=Fk[g];h!==0&&(f-=Nk[g],Vk(a,f,h));e--;g=e<256?Lk[e]:Lk[256+(e>>>7)];Wk(a,g,c);h=Gk[g];h!==0&&(e-=Ok[g],Vk(a,e,h))}}while(d<a.ya)}Wk(a,256,b)}
function el(a,b){var c=b.rd,d=b.bb.Kd,e=b.bb.vd,f=b.bb.le,g,h=-1;a.Na=0;a.yb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Gb-=d[k*2+1])}b.Db=h;for(g=a.Na>>1;g>=1;g--)cl(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],cl(a,c,1),d=a.da[1],a.da[--a.yb]=g,a.da[--a.yb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,cl(a,c,1);while(a.Na>=
2);a.da[--a.yb]=a.da[1];g=b.rd;k=b.Db;d=b.bb.Kd;e=b.bb.vd;f=b.bb.te;var l=b.bb.se,m=b.bb.Le,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.yb]*2+1]=0;for(b=a.yb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Oa+=x*(n+v);e&&(a.Gb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Yk(c,h,a.Ka)}
function fl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function gl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Wk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Wk(a,l,a.ja),g--),Wk(a,16,a.ja),Vk(a,g-3,2)):g<=10?(Wk(a,17,a.ja),Vk(a,g-3,3)):(Wk(a,18,a.ja),Vk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function hl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var il=!1;function jl(a,b,c){a.aa[a.Nb+a.ya*2]=b>>>8&255;a.aa[a.Nb+a.ya*2+1]=b&255;a.aa[a.Nc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Mk[c]+256+1)*2]++,a.fb[(b<256?Lk[b]:Lk[256+(b>>>7)])*2]++);return a.ya===a.Rb-1}
;function kl(a,b){a.msg=Dk[b];return b}
function ll(a){for(var b=a.length;--b>=0;)a[b]=0}
function ml(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.tb(a.output,b.aa,b.Ub,c,a.Eb),a.Eb+=c,b.Ub+=c,a.gd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Ub=0))}
function nl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Hc===2&&(a.K.Hc=hl(a));el(a,a.qc);el(a,a.ic);fl(a,a.ra,a.qc.Db);fl(a,a.fb,a.ic.Db);el(a,a.nd);for(e=18;e>=3&&a.ja[Ik[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Vk(a,b?1:0,3),al(a,c,d);else if(a.strategy===4||g===f)Vk(a,2+(b?1:0),3),dl(a,Jk,Kk);else{Vk(a,4+(b?1:0),3);c=a.qc.Db+1;d=a.ic.Db+1;e+=1;Vk(a,c-257,5);Vk(a,d-1,5);Vk(a,e-4,4);for(f=0;f<e;f++)Vk(a,
a.ja[Ik[f]*2+1],3);gl(a,a.ra,c-1);gl(a,a.fb,d-1);dl(a,a.ra,a.fb)}Zk(a);b&&$k(a);a.va=a.v;ml(a.K)}
function O(a,b){a.aa[a.pending++]=b}
function ol(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function pl(a,b){var c=a.yd,d=a.v,e=a.wa,f=a.Ad,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.ud&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Cb=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function ql(a){var b=a.la,c;do{var d=a.Sd-a.B-a.v;if(a.v>=b+(b-262)){N.tb(a.window,a.window,b,b,0);a.Cb-=b;a.v-=b;a.va-=b;var e=c=a.pc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.ma===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,N.tb(c,e.input,e.lb,g,f),e.state.wrap===1?e.I=xk(e.I,c,g,f):e.state.wrap===2&&(e.I=yk(e.I,c,g,f)),e.lb+=g,e.nb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.ma!==0)}
function rl(a,b){for(var c;;){if(a.B<262){ql(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=pl(a,c));if(a.T>=3)if(c=jl(a,a.v-a.Cb,a.T-3),a.B-=a.T,a.T<=a.Pc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=jl(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(nl(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(nl(a,!0),a.K.S===0?3:4):a.ya&&(nl(a,!1),a.K.S===0)?1:2}
function sl(a,b){for(var c,d;;){if(a.B<262){ql(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Dd=a.Cb;a.T=2;c!==0&&a.wa<a.Pc&&a.v-c<=a.la-262&&(a.T=pl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Cb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=jl(a,a.v-1-a.Dd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.jb=0;a.T=2;a.v++;if(c&&(nl(a,!1),a.K.S===0))return 1}else if(a.jb){if((c=jl(a,0,a.window[a.v-1]))&&nl(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.jb=1,a.v++,a.B--}a.jb&&(jl(a,0,a.window[a.v-1]),a.jb=0);a.sa=a.v<2?a.v:2;return b===4?(nl(a,!0),a.K.S===0?3:4):a.ya&&(nl(a,!1),a.K.S===0)?1:2}
function tl(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){ql(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=jl(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=jl(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(nl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(nl(a,!0),a.K.S===0?3:4):
a.ya&&(nl(a,!1),a.K.S===0)?1:2}
function ul(a,b){for(var c;;){if(a.B===0&&(ql(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=jl(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(nl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(nl(a,!0),a.K.S===0?3:4):a.ya&&(nl(a,!1),a.K.S===0)?1:2}
function vl(a,b,c,d,e){this.ye=a;this.Ke=b;this.Me=c;this.Je=d;this.ue=e}
var wl;wl=[new vl(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){ql(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,nl(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(nl(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return nl(a,!0),a.K.S===0?3:4;a.v>a.va&&nl(a,!1);return 1}),
new vl(4,4,8,4,rl),new vl(4,5,16,8,rl),new vl(4,6,32,32,rl),new vl(4,4,16,16,sl),new vl(8,16,32,32,sl),new vl(8,16,128,128,sl),new vl(8,32,128,256,sl),new vl(32,128,258,1024,sl),new vl(32,258,258,4096,sl)];
function xl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Ub=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Ab=-1;this.cb=this.jd=this.la=0;this.window=null;this.Sd=0;this.head=this.Ia=null;this.Ad=this.ud=this.strategy=this.level=this.Pc=this.yd=this.wa=this.B=this.Cb=this.v=this.jb=this.Dd=this.T=this.va=this.Ma=this.La=this.Lc=this.pc=this.R=0;this.ra=new N.Ja(1146);this.fb=new N.Ja(122);this.ja=new N.Ja(78);ll(this.ra);ll(this.fb);ll(this.ja);this.nd=this.ic=this.qc=
null;this.Ka=new N.Ja(16);this.da=new N.Ja(573);ll(this.da);this.yb=this.Na=0;this.depth=new N.Ja(573);ll(this.depth);this.ia=this.na=this.sa=this.matches=this.Gb=this.Oa=this.Nb=this.ya=this.Rb=this.Nc=0}
function yl(a,b){if(!a||!a.state||b>5||b<0)return a?kl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return kl(a,a.S===0?-5:-2);c.K=a;var d=c.Ab;c.Ab=b;if(c.status===42)if(c.wrap===2)a.I=0,O(c,31),O(c,139),O(c,8),c.H?(O(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),O(c,c.H.time&255),O(c,c.H.time>>8&255),O(c,c.H.time>>16&255),O(c,c.H.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(O(c,c.H.extra.length&255),O(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=yk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.jd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;ol(c,e+(31-e%31));c.v!==0&&(ol(c,a.I>>>16),ol(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=yk(a.I,c.aa,c.pending-e,e)),ml(a),e=c.pending,c.pending!==c.za));)O(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=yk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=yk(a.I,c.aa,c.pending-e,e)),ml(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=yk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=yk(a.I,c.aa,c.pending-e,e)),ml(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=yk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&ml(a),c.pending+2<=c.za&&(O(c,
a.I&255),O(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(ml(a),a.S===0)return c.Ab=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return kl(a,-5);if(c.status===666&&a.ma!==0)return kl(a,-5);if(a.ma!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?ul(c,b):c.strategy===3?tl(c,b):wl[c.level].ue(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Ab=-1),0;if(d===2&&(b===1?(Vk(c,2,3),Wk(c,256,Jk),c.ia===16?(Uk(c,c.na),c.na=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.na&255,c.na>>=8,c.ia-=8)):b!==5&&(Vk(c,0,3),al(c,0,0),b===3&&(ll(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),ml(a),a.S===0))return c.Ab=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.I&255),O(c,a.I>>8&255),O(c,a.I>>16&255),O(c,a.I>>24&255),O(c,a.nb&255),O(c,a.nb>>8&255),O(c,a.nb>>16&255),O(c,a.nb>>24&255)):(ol(c,a.I>>>16),ol(c,a.I&65535));ml(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var zl={};zl=function(){this.input=null;this.nb=this.ma=this.lb=0;this.output=null;this.gd=this.S=this.Eb=0;this.msg="";this.state=null;this.Hc=2;this.I=0};var Al=Object.prototype.toString;
function Bl(a){if(!(this instanceof Bl))return new Bl(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new zl;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=kl(b,-2);else{e===8&&(e=9);var k=new xl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.jd=e;k.la=1<<k.jd;k.cb=k.la-1;k.Lc=f+7;k.pc=1<<k.Lc;k.La=k.pc-1;k.Ma=~~((k.Lc+3-1)/3);k.window=new N.pb(k.la*2);k.head=new N.Ja(k.pc);k.Ia=new N.Ja(k.la);k.Rb=1<<f+6;k.za=k.Rb*4;k.aa=new N.pb(k.za);k.Nb=1*k.Rb;k.Nc=3*k.Rb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.nb=b.gd=0;b.Hc=2;c=b.state;c.pending=0;c.Ub=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Ab=0;if(!il){d=Array(16);for(f=g=0;f<28;f++)for(Nk[f]=g,e=0;e<1<<Fk[f];e++)Mk[g++]=f;Mk[g-1]=f;for(f=g=0;f<16;f++)for(Ok[f]=g,e=0;e<1<<Gk[f];e++)Lk[g++]=f;for(g>>=7;f<30;f++)for(Ok[f]=g<<7,e=0;e<1<<Gk[f]-7;e++)Lk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Jk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Jk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Jk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Jk[e*2+1]=8,e++,d[8]++;Yk(Jk,287,d);for(e=0;e<30;e++)Kk[e*2+1]=5,Kk[e*2]=Xk(e,5);Qk=new Pk(Jk,Fk,257,286,15);Rk=new Pk(Kk,
Gk,0,30,15);Sk=new Pk([],Hk,0,19,7);il=!0}c.qc=new Tk(c.ra,Qk);c.ic=new Tk(c.fb,Rk);c.nd=new Tk(c.ja,Sk);c.na=0;c.ia=0;Zk(c);c=0}else c=kl(b,-2);c===0&&(b=b.state,b.Sd=2*b.la,ll(b.head),b.Pc=wl[b.level].Ke,b.ud=wl[b.level].ye,b.Ad=wl[b.level].Me,b.yd=wl[b.level].Je,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.jb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(Dk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=wk(a.dictionary):
Al.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=xk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(ll(l.head),l.v=0,l.va=0,l.sa=0),c=new N.pb(l.la),N.tb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.lb;e=a.input;a.ma=g;a.lb=0;a.input=f;for(ql(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;ql(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.jb=0;a.lb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Dk[b]);this.rh=!0}}
Bl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=wk(a):Al.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.lb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new N.pb(d),c.Eb=0,c.S=d);a=yl(c,e);if(a!==1&&a!==0)return Cl(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.bd(c.output,c.Eb);b=f;f=f.length;if(f<65537&&(b.subarray&&vk||!b.subarray))b=
String.fromCharCode.apply(null,N.bd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.bd(c.output,c.Eb),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=kl(c,-2):(c.state=null,a=d===113?kl(c,-3):0)):a=-2,Cl(this,a),this.ended=!0,a===0;e===2&&(Cl(this,0),c.S=0);return!0};
function Cl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function Dl(a,b){b=b||{};b.gzip=!0;b=new Bl(b);b.push(a,!0);if(b.err)throw b.msg||Dk[b.err];return b.result}
;function El(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Db(a):null:null}
function Fl(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?kb(a):null:null}
;function Gl(a){return kb(a===null?"null":a===void 0?"undefined":a)}
;function Hl(a){this.name=a}
;var Il=new Hl("rawColdConfigGroup");var Jl=new Hl("rawHotConfigGroup");function Kl(a){this.F=K(a)}
w(Kl,L);function Ll(a){this.F=K(a)}
w(Ll,L);Ll.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Bd(a,Ad):Dd||(Dd=new Bd(null,Ad));else if(a.constructor!==Bd)if(zd(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Bd(new Uint8Array(a),Ad):Dd||(Dd=new Bd(null,Ad));else throw Error();return vf(this,1,a)};var Ml=new Hl("continuationCommand");var Nl=new Hl("webCommandMetadata");var Ol=new Hl("signalServiceEndpoint");var Pl={Sf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Pf:"EMBEDDED_PLAYER_MODE_DEFAULT",Rf:"EMBEDDED_PLAYER_MODE_PFP",Qf:"EMBEDDED_PLAYER_MODE_PFL"};var Ql=new Hl("feedbackEndpoint");var ie={Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var Rl=new Hl("shareEndpoint"),Sl=new Hl("shareEntityEndpoint"),Tl=new Hl("shareEntityServiceEndpoint"),Ul=new Hl("webPlayerShareEntityServiceEndpoint");var Vl=new Hl("playlistEditEndpoint");var Wl=new Hl("modifyChannelNotificationPreferenceEndpoint");var Xl=new Hl("unsubscribeEndpoint");var Yl=new Hl("subscribeEndpoint");function Zl(){var a=$l;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function am(a){D("yt.ads.biscotti.lastId_",a)}
;function bm(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var cm=C.window,dm,em,fm=(cm==null?void 0:(dm=cm.yt)==null?void 0:dm.config_)||(cm==null?void 0:(em=cm.ytcfg)==null?void 0:em.data_)||{};D("yt.config_",fm);function gm(){bm(fm,arguments)}
function P(a,b){return a in fm?fm[a]:b}
function hm(a){var b=fm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var im=[];function jm(a){im.forEach(function(b){return b(a)})}
function km(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){lm(b)}}:a}
function lm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),gm("ERRORS",b));jm(a)}
function mm(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),gm("ERRORS",f))}
;var nm=/^[\w.]*$/,om={q:!0,search_query:!0};function pm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=qm(f[0]||""),h=qm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Ub(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(pm);l.args=[{key:m,value:f[1],query:a,method:rm===n?"unchanged":n}];om.hasOwnProperty(m)||mm(l)}}return c}
var rm=String(pm);function sm(a){var b=[];pg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Ob(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function tm(a){a.charAt(0)==="?"&&(a=a.substring(1));return pm(a,"&")}
function um(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),tm(a.length>1?a[1]:a[0])):{}}
function wm(a,b){return xm(a,b||{},!0)}
function xm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=tm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return jc(a,e)+d}
function ym(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)===d&&(Number(cc(4,b))||null)===(Number(cc(4,a))||null):!0;return a}
function qm(a){return a&&a.match(nm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function zm(a){var b=Am;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Lj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Oa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Dj:g;try{var h=g.history.length}catch(Oa){h=0}e.u_his=h;var k;e.u_h=(k=Dj.screen)==null?void 0:k.height;var l;e.u_w=(l=Dj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Dj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Dj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=Dj.screen)==null?void 0:p.colorDepth}catch(Oa){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Oa){}try{var x=h.outerWidth;var z=h.outerHeight}catch(Oa){}try{var G=h.innerWidth;var H=h.innerHeight}catch(Oa){}try{var ca=h.screenLeft;var da=h.screenTop}catch(Oa){}try{G=h.innerWidth,H=h.innerHeight}catch(Oa){}try{var Na=h.screen.availWidth;var Kb=h.screen.availTop}catch(Oa){}t=[ca,da,t,v,Na,Kb,x,z,G,H];try{var ja=(b.h.top||window).document,Ya=
ja.compatMode=="CSS1Compat"?ja.documentElement:ja.body;var Pa=(new og(Ya.clientWidth,Ya.clientHeight)).round()}catch(Oa){Pa=new og(-12245933,-12245933)}ja=Pa;Pa={};var Qa=Qa===void 0?C:Qa;Ya=new Rj;"SVGElement"in Qa&&"createElementNS"in Qa.document&&Ya.set(0);v=Ij();v["allow-top-navigation-by-user-activation"]&&Ya.set(1);v["allow-popups-to-escape-sandbox"]&&Ya.set(2);Qa.crypto&&Qa.crypto.subtle&&Ya.set(3);"TextDecoder"in Qa&&"TextEncoder"in Qa&&Ya.set(4);Qa=Sj(Ya);Pa.bc=Qa;Pa.bih=ja.height;Pa.biw=
ja.width;Pa.brdim=t.join();b=b.i;b=(Pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Pa.wgl=!!Dj.WebGLRenderingContext,Pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Am=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return sm(zm(a))});ab();navigator.userAgent.indexOf(" (CrKey ");var Bm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Cm(){if(!Bm)return null;var a=Bm();return"open"in a?a:null}
function Dm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Em(a,b){typeof a==="function"&&(a=km(a));return window.setTimeout(a,b)}
;var Fm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ra(Fm),["client_dev_set_cookie"]);function R(a){a=Gm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function S(a,b){a=Gm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Gm(a){return P("EXPERIMENT_FLAGS",{})[a]}
function Hm(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Im={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Jm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ra(Fm)),Km=!1;function Lm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&km(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Cm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Mm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Nm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){mm(n)}}l.send(d);return l}
function Nm(a,b){b=b===void 0?{}:b;var c=ym(a),d=P("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set"),f;for(f in Im){var g=P(Im[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=P("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(dc(a)?!1:!0))){k=a;var l;if(l=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=dc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=bc(cc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=sm(zm()));return b}
function Om(a,b){b.method="POST";b.postParams||(b.postParams={});return Pm(a,b)}
function Pm(a,b){var c=b.format||"JSON";a=Qm(a,b);var d=Rm(a,b),e=!1,f=Sm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Dm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Tm(a,c,k,b.convertToSafeHtml);l&&(l=Um(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Em(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Qm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=wm(a,b);return a}
function Rm(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=tm(e),zg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):ic(e));f=e||f&&!sg(f);!Km&&f&&b.method!=="POST"&&(Km=!0,lm(Error("AJAX request with postData should use POST")));return e}
function Tm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,mm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Vm(a):null)e={},Ob(a.getElementsByTagName("*"),function(g){e[g.tagName]=Wm(g)})}d&&Xm(e);
return e}
function Xm(a){if(Sa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=ib();d=new Ab(e?e.createHTML(d):d);a[c]=d}else Xm(a[b])}}
function Um(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Vm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Wm(a){var b="";Ob(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Mm(a){var b=window.location.search,c=dc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ym(a)&&(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=tm(b),f={};Ob(Jm,function(g){e[g]&&(f[g]=e[g])});
return xm(a,f||{},!1)}
var Sm=Lm;var Ym=[{Qc:function(a){return"Cannot read property '"+a.key+"'"},
vc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Qc:function(a){return"Cannot call '"+a.key+"'"},
vc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Qc:function(a){return a.key+" is not defined"},
vc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var $m={Ya:[],Ta:[{callback:Zm,weight:500}]};function Zm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function an(){this.Ta=[];this.Ya=[]}
var bn;function cn(){if(!bn){var a=bn=new an;a.Ya.length=0;a.Ta.length=0;$m.Ya&&a.Ya.push.apply(a.Ya,$m.Ya);$m.Ta&&a.Ta.push.apply(a.Ta,$m.Ta)}return bn}
;var dn=new M;function en(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=fn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=fn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function fn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function gn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=hn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=en(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?hn(f+".ve",g,h,k):0;d+=f;d+=hn(e,a[e],b,c);if(d>500)break}}else c[b]=jn(a),d+=c[b].length;else c[b]=jn(a),d+=c[b].length;return d}
function hn(a,b,c,d){c+="."+a;a=jn(b);d[c]=a;return c.length+a.length}
function jn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function kn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function ln(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function mn(){this.Ld=!0}
function nn(){mn.h||(mn.h=new mn);return mn.h}
function on(a,b){a={};var c=[];"USER_SESSION_ID"in fm&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=hg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in fm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in fm&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
;var pn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function qn(a,b,c,d,e){eg.set(""+a,b,{Tb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function rn(a){return eg.get(""+a,void 0)}
function sn(a,b,c){eg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function tn(){if(R("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!eg.isEnabled())return!1;if(eg.h.cookie)return!0;R("embeds_web_enable_cookie_detection_fix")?eg.set("TESTCOOKIESENABLED","1",{Tb:60,bf:"none",secure:!0}):eg.set("TESTCOOKIESENABLED","1",{Tb:60});if(eg.get("TESTCOOKIESENABLED")!=="1")return!1;eg.remove("TESTCOOKIESENABLED");return!0}
;var un=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",un);function vn(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=rn(this.h);a&&this.parse(a)}
var wn;function xn(){wn||(wn=new vn);return wn}
r=vn.prototype;r.get=function(a,b){yn(a);zn(a);a=un[a]!==void 0?un[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){yn(a);zn(a);if(b==null)throw Error("ExpectedNotNull");un[a]=b.toString()};
function An(a){return!!((Bn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){yn(a);zn(a);delete un[a]};
r.clear=function(){for(var a in un)delete un[a]};
function zn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function yn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Bn(a){a=un[a]!==void 0?un[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(un[d]=c.toString())}};var Cn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Dn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function En(){var a=C.navigator;return a?a.connection:void 0}
function Fn(){var a=En();if(a){var b=Cn[a.type||"unknown"]||"CONN_UNKNOWN";a=Cn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Gn(){var a=En();if(a!=null&&a.effectiveType)return Dn.hasOwnProperty(a.effectiveType)?Dn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ra(b))}
w(T,Error);function Hn(){try{return In(),!0}catch(a){return!1}}
function In(a){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function Jn(){}
function Kn(a,b){return Qj.Ra(a,0,b)}
Jn.prototype.pa=function(a,b){return this.Ra(a,1,b)};
Jn.prototype.Jb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Ln=S("web_emulated_idle_callback_delay",300),Mn=1E3/60-3,Nn=[8,5,4,3,2,1,0];
function On(a){a=a===void 0?{}:a;F.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(Nn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Fc=a.timeout||1;this.G=Mn;this.D=0;this.xa=this.Oe.bind(this);this.Ec=this.uf.bind(this);this.Pa=this.Yd.bind(this);this.Qa=this.ze.bind(this);this.rb=this.Ve.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.oa=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(On,F);r=On.prototype;r.Jb=function(a){var b=ab();Pn(this,a);a=ab()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Jb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Qn(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Rn(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Sn(a){return!a.isHidden()&&a.oa}
function Qn(a){if(a.i[8].length){if(a.U)return 4;if(Sn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Sn(a)?3:2:1;return 0}
r.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Pn(a,b){try{b()}catch(c){a.Ha(c)}}
function Tn(a){for(var b=y(Nn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.ze=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Un(this,b);this.ha=!1};
r.uf=function(){Un(this)};
r.Yd=function(){Vn(this)};
r.Ve=function(a){this.U=!0;var b=Qn(this);b===4&&b!==this.D&&(this.stop(),this.start());Un(this,void 0,a);this.U=!1};
r.Oe=function(){this.isHidden()||Vn(this);this.h&&(this.stop(),this.start())};
function Vn(a){a.stop();a.u=!0;for(var b=ab(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Pn(a,e)}Wn(a);a.u=!1;Tn(a)&&a.start();b=ab()-b;a.G-=b}
function Wn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Un(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=ab()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Pn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(ab()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Pn(a,c)}while(c&&ab()<b)}a.u=!1;Wn(a);a.G=Mn;Tn(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Qn(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Ln);break;case 2:this.h=window.setTimeout(this.Ec,this.Fc);break;case 3:this.h=window.requestAnimationFrame(this.rb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){Rn(this);this.stop();this.oa&&document.removeEventListener("visibilitychange",this.xa);F.prototype.ba.call(this)};var Xn=E("yt.scheduler.instance.timerIdMap_")||{},Yn=S("kevlar_tuner_scheduler_soft_state_timer_ms",800),Zn=0,$n=0;function ao(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new On(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function bo(){co();var a=E("ytglobal.schedulerInstanceInstance_");a&&(tc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function co(){Rn(ao());for(var a in Xn)Xn.hasOwnProperty(a)&&delete Xn[Number(a)]}
function eo(a,b,c){if(!c)return c=c===void 0,-ao().Ra(a,b,c);var d=window.setTimeout(function(){var e=ao().Ra(a,b);Xn[d]=e},c);
return d}
function fo(a){ao().Jb(a)}
function go(a){var b=ao();if(a<0)b.qa(-a);else{var c=Xn[a];c?(b.qa(c),delete Xn[a]):window.clearTimeout(a)}}
function ho(){io()}
function io(){window.clearTimeout(Zn);ao().start()}
function jo(){ao().pause();window.clearTimeout(Zn);Zn=window.setTimeout(ho,Yn)}
function ko(){window.clearTimeout($n);$n=window.setTimeout(function(){lo(0)},Yn)}
function lo(a){ko();var b=ao();b.o=a;b.start()}
function mo(a){ko();var b=ao();b.o>a&&(b.o=a,b.start())}
function no(){window.clearTimeout($n);var a=ao();a.o=0;a.start()}
;function oo(){Jn.apply(this,arguments)}
w(oo,Jn);function po(){oo.h||(oo.h=new oo);return oo.h}
oo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Em(a,c||0)};
oo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
oo.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
oo.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Qj=po();
R("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",bo),D("yt.scheduler.instance.addJob",eo),D("yt.scheduler.instance.addImmediateJob",fo),D("yt.scheduler.instance.cancelJob",go),D("yt.scheduler.instance.cancelAllJobs",co),D("yt.scheduler.instance.start",io),D("yt.scheduler.instance.pause",jo),D("yt.scheduler.instance.setPriorityThreshold",lo),D("yt.scheduler.instance.enablePriorityThreshold",mo),D("yt.scheduler.instance.clearPriorityThreshold",no),D("yt.scheduler.initialized",
!0));function qo(a){var b=new qk;this.h=(a=b.isAvailable()?a?new rk(b,a):b:null)?new lk(a):null;this.i=document.domain||window.location.hostname}
qo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Mi).serialize(b))}catch(f){return}else e=escape(b);qn(a,e,c,this.i)};
qo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=rn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qo.prototype.remove=function(a){this.h&&this.h.remove(a);sn(a,"/",this.i)};var ro=function(){var a;return function(){a||(a=new qo("ytidb"));return a}}();
function so(){var a;return(a=ro())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var to=[],uo,vo=!1;function wo(){var a={};for(uo=new xo(a.handleError===void 0?yo:a.handleError,a.logEvent===void 0?zo:a.logEvent);to.length>0;)switch(a=to.shift(),a.type){case "ERROR":uo.Ha(a.payload);break;case "EVENT":uo.logEvent(a.eventType,a.payload)}}
function Ao(a){vo||(uo?uo.Ha(a):(to.push({type:"ERROR",payload:a}),to.length>10&&to.shift()))}
function Bo(a,b){vo||(uo?uo.logEvent(a,b):(to.push({type:"EVENT",eventType:a,payload:b}),to.length>10&&to.shift()))}
;function Co(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Do(a){return a.substr(0,a.indexOf(":"))||a}
;var Eo=kd||ld;function Fo(a){var b=Vc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Go={},Ho=(Go.AUTH_INVALID="No user identifier specified.",Go.EXPLICIT_ABORT="Transaction was explicitly aborted.",Go.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Go.MISSING_INDEX="Index not created.",Go.MISSING_OBJECT_STORES="Object stores not created.",Go.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Go.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Go.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Go.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Go.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Go.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Go.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Go),Io={},Jo=(Io.AUTH_INVALID="ERROR",Io.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Io.EXPLICIT_ABORT="IGNORED",Io.IDB_NOT_SUPPORTED="ERROR",Io.MISSING_INDEX=
"WARNING",Io.MISSING_OBJECT_STORES="ERROR",Io.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Io.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Io.QUOTA_EXCEEDED="WARNING",Io.QUOTA_MAYBE_EXCEEDED="WARNING",Io.UNKNOWN_ABORT="WARNING",Io.INCOMPATIBLE_DB_VERSION="WARNING",Io),Ko={},Lo=(Ko.AUTH_INVALID=!1,Ko.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ko.EXPLICIT_ABORT=!1,Ko.IDB_NOT_SUPPORTED=!1,Ko.MISSING_INDEX=!1,Ko.MISSING_OBJECT_STORES=!1,Ko.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ko.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ko.QUOTA_EXCEEDED=!1,Ko.QUOTA_MAYBE_EXCEEDED=!0,Ko.UNKNOWN_ABORT=!0,Ko.INCOMPATIBLE_DB_VERSION=!1,Ko);function Mo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Ho[a]:c;d=d===void 0?Jo[a]:d;e=e===void 0?Lo[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Mo.prototype)}
w(Mo,T);function No(a,b){Mo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ho.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,No.prototype)}
w(No,Mo);function Oo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Oo.prototype)}
w(Oo,Error);var Po=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Qo(a,b,c,d){b=Do(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Mo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Mo("QUOTA_EXCEEDED",a);if(md&&e.name==="UnknownError")return new Mo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Oo)return new Mo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Po.some(function(f){return e.message.includes(f)}))return new Mo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Mo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cd:e.name})];e.level="WARNING";return e}
function Ro(a,b,c){var d=so();return new Mo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function So(a){if(!a)throw Error();throw a;}
function To(a){return a}
function Uo(a){this.h=a}
function Vo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Vo.all=function(a){return new Vo(new Uo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={zb:0};f.zb<a.length;f={zb:f.zb},++f.zb)Vo.resolve(a[f.zb]).then(function(g){return function(h){d[g.zb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Vo.resolve=function(a){return new Vo(new Uo(function(b,c){a instanceof Vo?a.then(b,c):b(a)}))};
Vo.reject=function(a){return new Vo(new Uo(function(b,c){c(a)}))};
Vo.prototype.then=function(a,b){var c=this,d=a!=null?a:To,e=b!=null?b:So;return new Vo(new Uo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Wo(c,c,d,f,g)}),c.i.push(function(){Xo(c,c,e,f,g)})):c.state.status==="FULFILLED"?Wo(c,c,d,f,g):c.state.status==="REJECTED"&&Xo(c,c,e,f,g)}))};
Vo.prototype.catch=function(a){return this.then(void 0,a)};
function Wo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Vo?Yo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Vo?Yo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Vo?Yo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Zo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function $o(a){return new Promise(function(b,c){Zo(a,b,c)})}
function ap(a){return new Vo(new Uo(function(b,c){Zo(a,b,c)}))}
;function bp(a,b){return new Vo(new Uo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var cp=window,U=cp.ytcsi&&cp.ytcsi.now?cp.ytcsi.now:cp.performance&&cp.performance.timing&&cp.performance.now&&cp.performance.timing.navigationStart?function(){return cp.performance.timing.navigationStart+cp.performance.now()}:function(){return(new Date).getTime()};function dp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
r=dp.prototype;r.add=function(a,b,c){return ep(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return ep(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return ep(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function fp(a,b,c){a=a.h.createObjectStore(b,c);return new gp(a)}
r.delete=function(a,b){return ep(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return ep(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function hp(a,b,c){return ep(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return ap(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ep(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return A(function(z){switch(z.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.A(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var H=new ip(l);H=jp(H,d);return G.call(z,H,7);case 7:return m=z.i,n=Math.round(U()),kp(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:p=Ba(z);t=Math.round(U());v=Qo(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Mo&&!v.h)||g>=f)kp(a,k,t,g,v,b.join(),e),h=v;z.A(2);break;case 4:return z.return(Promise.reject(h))}})}
function kp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Mo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Bo("QUOTA_EXCEEDED",{dbName:Do(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Mo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Bo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),lp(a,!1,d,f,b,g.tag),Ao(e)):lp(a,!0,d,f,b,g.tag)}
function lp(a,b,c,d,e,f){Bo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function gp(a){this.h=a}
r=gp.prototype;r.add=function(a,b){return ap(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return ap(this.h.clear()).then(function(){})};
function mp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return ap(this.h.count(a))};
function np(a,b){return op(a,{query:b},function(c){return c.delete().then(function(){return pp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?np(this,a):ap(this.h.delete(a))};
r.get=function(a){return ap(this.h.get(a))};
r.index=function(a){try{return new qp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Oo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function op(a,b,c){a=a.h.openCursor(b.query,b.direction);return rp(a).then(function(d){return bp(d,c)})}
function ip(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Mo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function jp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
ip.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Mo("EXPLICIT_ABORT");};
ip.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new gp(a),this.i.set(a,b));return b};
function qp(a){this.h=a}
r=qp.prototype;r.count=function(a){return ap(this.h.count(a))};
r.delete=function(a){return sp(this,{query:a},function(b){return b.delete().then(function(){return pp(b)})})};
r.get=function(a){return ap(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function sp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return rp(a).then(function(d){return bp(d,c)})}
function tp(a,b){this.request=a;this.cursor=b}
function rp(a){return ap(a).then(function(b){return b?new tp(a,b):null})}
function pp(a){a.cursor.continue(void 0);return rp(a.request)}
tp.prototype.delete=function(){return ap(this.cursor.delete()).then(function(){})};
tp.prototype.getValue=function(){return this.cursor.value};
tp.prototype.update=function(a){return ap(this.cursor.update(a))};function up(a,b,c){return new Promise(function(d,e){function f(){p||(p=new dp(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,k=c.blocking,l=c.sf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Bo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Do(a)});var v=f(),x=new ip(g.transaction);
m&&m(v,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Bo("IDB_UNEXPECTEDLY_CLOSED",{dbName:Do(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function vp(a,b,c){c=c===void 0?{}:c;return up(a,b,c)}
function wp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),g.yield($o(c),4);
if(g.h!=2)return Aa(g,0);f=Ba(g);throw Qo(f,a,"",-1);})}
;function xp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
xp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return vp(a,b,c)};
xp.prototype.delete=function(a){a=a===void 0?{}:a;return wp(this.name,a)};
function yp(a,b){return new Mo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function zp(a,b){if(!b)throw Ro("openWithToken",Do(a.name));return a.open()}
xp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,G=c.options,H=[],ca=y(Object.keys(G.Fb)),da=ca.next();!da.done;da=ca.next()){da=da.value;var Na=G.Fb[da],Kb=Na.We===void 0?Number.MAX_VALUE:Na.We;!(z.h.version>=Na.Lb)||z.h.version>=Kb||z.h.objectStoreNames.contains(da)||H.push(da)}k=H;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Fb);
m=h.objectStoreNames();if(c.u<S("ytidb_reopen_db_retries",0))return c.u++,h.close(),Ao(new Mo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<S("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return Ao(new Mo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new No(m,l);case 5:return x.return(h);case 2:n=Ba(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,yp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!R("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Qo(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw yp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,sf:b,upgrade:this.options.upgrade};return this.h=d=a()};var Ap=new xp("YtIdbMeta",{Fb:{databases:{Lb:1}},upgrade:function(a,b){b(1)&&fp(a,"databases",{keyPath:"actualName"})}});
function Bp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(zp(Ap,b),2);c=d.i;return d.return(ep(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ap(f.h.put(a,void 0)).then(function(){})})}))})}
function Cp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(zp(Ap,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Dp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(zp(Ap,b),2)):e.h!=3?(d=e.i,e.yield(ep(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return op(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return pp(g)})}),3)):e.return(c)})}
function Ep(a){return Dp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Fp(a,b,c){return Dp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Gp(a){var b,c;return A(function(d){if(d.h==1)return b=In("YtIdbMeta hasAnyMeta other"),d.yield(Dp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Hp,Ip=new function(){}(new function(){});
function Jp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=so();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Eo)f=/WebKit\/([0-9]+)/.exec(Vc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Vc()),f=!(f&&parseInt(f[1],10)>=602));if(f||gd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Bp(d,Ip),4);case 4:return e.yield(Cp("yt-idb-test-do-not-use",Ip),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Kp(){if(Hp!==void 0)return Hp;vo=!0;return Hp=Jp().then(function(a){vo=!1;var b;if((b=ro())!=null&&b.h){var c;b={hasSucceededOnce:((c=so())==null?void 0:c.hasSucceededOnce)||a};var d;(d=ro())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Lp(){return E("ytglobal.idbToken_")||void 0}
function Mp(){var a=Lp();return a?Promise.resolve(a):Kp().then(function(b){(b=b?Ip:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Np=0;function Op(a,b){Np||(Np=Qj.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Mp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Fp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(wp(f.actualName),7);case 7:return h.yield(Cp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Ao(g),d=!1;case 4:Qj.qa(Np),Np=0,d&&Op(a,b),h.h=0}})}))}
function Pp(){var a;return A(function(b){return b.h==1?b.yield(Mp(),2):(a=b.i)?b.return(Gp(a)):b.return(!1)})}
new sj;function Qp(a){if(!Hn())throw a=new Mo("AUTH_INVALID",{dbName:a}),Ao(a),a;var b=In();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Rp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Mp(),2);case 2:g=m.i;if(!g)throw h=Ro("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ao(h),h;Co(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Qp(a);za(m,3);return m.yield(Bp(k,g),5);case 5:return m.yield(vp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),za(m,7),m.yield(Cp(k.actualName,
g),9);case 9:Aa(m,8);break;case 7:Ba(m);case 8:throw l;}})}
function Sp(a,b,c){c=c===void 0?{}:c;return Rp(a,b,!1,c)}
function Tp(a,b,c){c=c===void 0?{}:c;return Rp(a,b,!0,c)}
function Up(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Mp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Co(a);d=Qp(a);return e.yield(wp(d.actualName,b),3)}return e.yield(Cp(d.actualName,c),0)})}
function Vp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(wp(d.actualName,b),2):e.yield(Cp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Wp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Mp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Co("LogsDatabaseV2");return d.yield(Ep(b),3)}c=d.i;return d.yield(Vp(c,a,b),0)})}
function Xp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Mp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Co(a);return d.yield(wp(a,b),3)}return d.yield(Cp(a,c),0)})}
;function Yp(a,b){xp.call(this,a,b);this.options=b;Co(a)}
w(Yp,xp);function Zp(a,b){var c;return function(){c||(c=new Yp(a,b));return c}}
Yp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Tp:Sp)(a,b,Object.assign({},c))};
Yp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Xp:Up)(this.name,a)};
function $p(a,b){return Zp(a,b)}
;var aq={},bq=$p("ytGcfConfig",{Fb:(aq.coldConfigStore={Lb:1},aq.hotConfigStore={Lb:1},aq),shared:!1,upgrade:function(a,b){b(1)&&(mp(fp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),mp(fp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function cq(a){return zp(bq(),a)}
function dq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(cq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(hp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function eq(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(cq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(hp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function fq(a){var b,c;return A(function(d){return d.h==1?d.yield(cq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ep(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return sp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function gq(a){var b,c;return A(function(d){return d.h==1?d.yield(cq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(ep(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return sp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function hq(){F.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ra(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(hq,F);hq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;F.prototype.ba.call(this)};function iq(){this.h=0;this.i=new hq}
function jq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:P("RAW_HOT_CONFIG_GROUP")}
function kq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Lp();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(gq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(dq(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function lq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!R("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Lp())?c?h.A(4):h.yield(fq(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(eq(c,b,g,d),0)})}
function mq(){if(!iq.h){var a=new iq;iq.h=a}a=iq.h;var b=U()-a.h;if(!(a.h!==0&&b<S("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
iq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function nq(){return"INNERTUBE_API_KEY"in fm&&"INNERTUBE_API_VERSION"in fm}
function oq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Ae:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ch:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ce:P("INNERTUBE_CONTEXT_HL"),Be:P("INNERTUBE_CONTEXT_GL"),De:P("INNERTUBE_HOST_OVERRIDE")||"",Ee:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Dh:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function pq(a){var b={client:{hl:a.Ce,gl:a.Be,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ae}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Hm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.wd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=ln()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Fn())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=Gn())&&b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=mq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=P("INNERTUBE_CONTEXT");var g;if(R("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(tm(P("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function qq(a,b,c){c=c===void 0?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().sh:(a=on(nn()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var rq=typeof TextEncoder!=="undefined"?new TextEncoder:null,sq=rq?function(a){return rq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var tq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},uq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function vq(a,b){this.version=a;this.args=b}
vq.prototype.serialize=function(){return{version:this.version,args:this.args}};function wq(a,b){this.topic=a;this.h=b}
wq.prototype.toString=function(){return this.topic};var xq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ac;M.prototype.publish=M.prototype.qb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",xq);var yq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",yq);var zq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",zq);var Aq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Aq);
D("ytPubsub2Pubsub2SkipSubKey",null);function Bq(a,b){var c=Cq();c&&c.publish.call(c,a.toString(),a,b)}
function Dq(a){var b=Eq,c=Cq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(yq[d])try{if(f&&b instanceof wq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Qd){var l=new h;h.Qd=l.version}var m=h.Qd}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){lm(z)}},Aq[b.toString()]?E("yt.scheduler.instance")?Qj.pa(g):Em(g,0):g())});
yq[d]=!0;zq[b.toString()]||(zq[b.toString()]=[]);zq[b.toString()].push(d);return d}
function Fq(){var a=Gq,b=Dq(function(c){a.apply(void 0,arguments);Hq(b)});
return b}
function Hq(a){var b=Cq();b&&(typeof a==="number"&&(a=[a]),Ob(a,function(c){b.unsubscribeByKey(c);delete yq[c]}))}
function Cq(){return E("ytPubsub2Pubsub2Instance")}
;function Iq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Bq("meta_logging_csi_event",{timerName:a,Vh:b})}
;var Jq=void 0,Kq=void 0;function Lq(){Kq||(Kq=Fl(P("WORKER_SERIALIZATION_URL")));return Kq||void 0}
function Mq(){var a=Lq();Jq||a===void 0||(Jq=new Worker(lb(a),void 0));return Jq}
;var Nq=S("max_body_size_to_compress",5E5),Oq=S("min_body_size_to_compress",500),Pq=!0,Qq=0,Rq=0,Sq=S("compression_performance_threshold_lr",250),Tq=S("slow_compressions_before_abandon_count",4),Uq=!1,Vq=new Map,Wq=1,Xq=!0;function Yq(){if(typeof Worker==="function"&&Lq()&&!Uq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Vq.get(c.key);d&&(Zq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Vq.delete(c.key))}},b=Mq();
b&&(b.addEventListener("message",a),b.onerror=function(){Vq.clear()},Uq=!0)}}
function $q(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Pq)try{var g=ar(b);if(g!=null&&(g>Nq||g<Oq))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Xq||!R("initial_gzip_use_main_thread"))){Uq||Yq();var h=Mq();if(h&&!e){Vq.set(Wq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Wq});Wq++;return}}var k=Dl(sq(b));Zq(k,f,a,c,d)}}catch(l){mm(l),d(a,c)}else d(a,c)}
function Zq(a,b,c,d,e){Xq=!1;var f=U();b.ticks.gelc=f;Rq++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Sq&&(Qq++,R("abandon_compression_after_N_slow_zips")?Rq===S("compression_disable_point")&&Qq>Tq&&(Pq=!1):Pq=!1);br(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function cr(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Pq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=ar(g);if(h!=null&&(h>Nq||h<Oq))return a;c=b?{level:1}:void 0;f=Dl(sq(g),c);var k=U();e.ticks.gelc=k;if(b){Rq++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Sq)if(Qq++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Qq/Rq;var l=Tq/S("compression_disable_point");Rq>0&&Rq%S("compression_disable_point")===0&&b>=l&&(Pq=!1)}else Pq=!1;br(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return mm(m),a}}else return a}
function ar(a){try{return(new Blob(a.split(""))).size}catch(b){return mm(b),null}}
function br(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Iq("gel_compression",a,{sampleRate:.1})}
;function dr(a){a=Object.assign({},a);delete a.Authorization;var b=hg();if(b){var c=new Uj;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=pd(c.digest(),3)}return a}
;var er;function fr(){er||(er=new qo("yt.innertube"));return er}
function gr(a,b,c,d){if(d)return null;d=fr().get("nextId",!0)||1;var e=fr().get("requests",!0)||{};e[d]={method:a,request:b,authState:dr(c),requestTime:Math.round(U())};fr().set("nextId",d+1,86400,!0);fr().set("requests",e,86400,!0);return d}
function hr(a){var b=fr().get("requests",!0)||{};delete b[a];fr().set("requests",b,86400,!0)}
function ir(a){var b=fr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=dr(qq(!1));vg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),jr(a,d.method,e,{}));delete b[c]}}fr().set("requests",b,86400,!0)}}
;function kr(a){this.dc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.xb=function(){};
this.now=Date.now;this.Pb=!1;var b;this.Md=(b=a.Md)!=null?b:100;var c;this.Hd=(c=a.Hd)!=null?c:1;var d;this.Fd=(d=a.Fd)!=null?d:2592E6;var e;this.Ed=(e=a.Ed)!=null?e:12E4;var f;this.Gd=(f=a.Gd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.jc=!!a.jc;var h;this.hc=(h=a.hc)!=null?h:.1;var k;this.xc=(k=a.xc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.xb&&(this.xb=a.xb);a.Pb&&(this.Pb=a.Pb);a.dc&&(this.dc=a.dc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Wc=a.Wc;this.Tc=a.Tc;lr(this)&&(!this.W||this.W("networkless_logging"))&&mr(this)}
function mr(a){lr(a)&&!a.Pb&&(a.h=!0,a.jc&&Math.random()<=a.hc&&a.ga.de(a.V),nr(a),a.fa.ta()&&a.Zb(),a.fa.listen(a.Wc,a.Zb.bind(a)),a.fa.listen(a.Tc,a.od.bind(a)))}
r=kr.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(lr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&or(c,d)}).catch(function(e){or(c,d);
pr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(lr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){pr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
pr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(lr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.wb(d.id,c.V):e=!0;c.fa.kb&&c.W&&c.W("vss_network_hint")&&c.fa.kb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.wb(d.id,c.V)}).catch(function(g){pr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Zb=function(){var a=this;if(!lr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ga.td("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(or(a,b),3):(a.od(),c.return());a.i&&(a.i=0,a.Zb());c.h=0})},this.Md))};
r.od=function(){this.Ca.qa(this.i);this.i=0};
function or(a,b){var c;return A(function(d){switch(d.h){case 1:if(!lr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Ie(b.id,a.V),3);case 3:(c=d.i)||a.xb(Error("The request cannot be found in the database."));case 2:if(qr(a,b,a.Fd)){d.A(4);break}a.xb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.wb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=rr(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.wb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function rr(a,b){if(!lr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=sr(f);(h=tr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.xc)){m.A(2);break}if(!a.fa.Cc){m.A(3);break}return m.yield(a.fa.Cc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Xc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.xc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Hd?m.yield(a.ga.Xc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.wb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.Zb()},a.Gd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.wb(b.id,a.V),2);a.fa.kb&&a.W&&a.W("vss_network_hint")&&a.fa.kb(!0);d(e,f);h.h=0})};
return b}
function qr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function nr(a){if(!lr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.td("QUEUED",a.V).then(function(b){b&&!qr(a,b,a.Ed)?a.Ca.pa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Xc(b.id,a.V),2);nr(a);c.h=0})}):a.fa.ta()&&a.Zb()})}
function pr(a,b){a.Td&&!a.fa.ta()?a.Td(b):a.handleError(b)}
function lr(a){return!!a.V||a.dc}
function sr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function tr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var ur;
function vr(){if(ur)return ur();var a={};ur=$p("LogsDatabaseV2",{Fb:(a.LogsRequestsStore={Lb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&fp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),mp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return ur()}
;function wr(a){return zp(vr(),a)}
function xr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(wr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(hp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();yr(c);return g.return(f)})}
function zr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(wr(b),2);if(m.h!=3)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",R("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(ep(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return sp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=U();yr(c);return m.return(l)})}
function Ar(a,b){var c;return A(function(d){if(d.h==1)return d.yield(wr(b),2);c=d.i;return d.return(ep(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ap(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Br(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(wr(b),2);e=f.i;return f.return(ep(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),ap(h.h.put(k,void 0)).then(function(){return k})):Vo.resolve(void 0)})}))})}
function Cr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(wr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Dr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(wr(a),2);b=d.i;c=U()-2592E6;return d.yield(ep(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return op(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return pp(f)})})}),0)})}
function Er(){A(function(a){return a.yield(Wp(),0)})}
function yr(a){R("nwl_csi_killswitch")||Iq("networkless_performance",a,{sampleRate:1})}
;var Fr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var Gr={},Hr=$p("ServiceWorkerLogsDatabase",{Fb:(Gr.SWHealthLog={Lb:1},Gr),shared:!0,upgrade:function(a,b){b(1)&&mp(fp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Ir(a){return zp(Hr(),a)}
function Jr(a){var b,c;A(function(d){if(d.h==1)return d.yield(Ir(a),2);b=d.i;c=U()-2592E6;return d.yield(ep(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return op(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return pp(f)})})}),0)})}
function Kr(a){var b;return A(function(c){if(c.h==1)return c.yield(Ir(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Lr={},Mr=0;function Nr(a){var b=b===void 0?{}:b;var c=new Image,d=""+Mr++;Lr[d]=c;c.onload=c.onerror=function(){delete Lr[d]};
b.Rh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Or;function Pr(){Or||(Or=new qo("yt.offline"));return Or}
function Qr(a){if(R("offline_error_handling")){var b=Pr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Pr().set("errors",b,2592E3,!0)}}
;function Rr(){this.h=new Map;this.i=!1}
function Sr(){if(!Rr.h){var a=E("yt.networkRequestMonitor.instance")||new Rr;D("yt.networkRequestMonitor.instance",a);Rr.h=a}return Rr.h}
Rr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Rr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Rr.prototype.removeParams=function(a){return a.split("?")[0]};
Rr.prototype.removeParams=Rr.prototype.removeParams;Rr.prototype.isEndpointCFR=Rr.prototype.isEndpointCFR;Rr.prototype.requestComplete=Rr.prototype.requestComplete;Rr.getInstance=Sr;function Tr(){Zh.call(this);var a=this;this.j=!1;this.h=Pj();this.h.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Pr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;lm(d)}Pr().set("errors",{},2592E3,!0)}}})}
w(Tr,Zh);function Ur(){if(!Tr.h){var a=E("yt.networkStatusManager.instance")||new Tr;D("yt.networkStatusManager.instance",a);Tr.h=a}return Tr.h}
r=Tr.prototype;r.ta=function(){return this.h.ta()};
r.kb=function(a){this.h.h=a};
r.xe=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.ne=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Cc=function(a){a=Nj(this.h,a);a.then(function(b){R("use_cfr_monitor")&&Sr().requestComplete("generate_204",b)});
return a};
Tr.prototype.sendNetworkCheckRequest=Tr.prototype.Cc;Tr.prototype.listen=Tr.prototype.listen;Tr.prototype.enableErrorFlushing=Tr.prototype.ne;Tr.prototype.getWindowStatus=Tr.prototype.xe;Tr.prototype.networkStatusHint=Tr.prototype.kb;Tr.prototype.isNetworkAvailable=Tr.prototype.ta;Tr.getInstance=Ur;function Vr(a){a=a===void 0?{}:a;Zh.call(this);var b=this;this.h=this.u=0;this.j=Ur();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Wr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Wr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){$h(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){$h(b,"publicytnetworkstatus-offline")})))}
w(Vr,Zh);Vr.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Vr.prototype.kb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Vr.prototype.Cc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Sr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.kb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Wr(a,b){a.rateLimit?a.h?(Qj.qa(a.u),a.u=Qj.pa(function(){a.o!==b&&($h(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):($h(a,b),a.o=b,a.h=U()):$h(a,b)}
;var Xr;function Yr(){var a=kr.call;Xr||(Xr=new Vr({Ih:!0,zh:!0}));a.call(kr,this,{ga:{de:Dr,wb:Cr,td:zr,Ie:Ar,Xc:Br,set:xr},fa:Xr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;mm(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else lm(b)},
xb:mm,sendFn:Zr,now:U,Td:Qr,Ca:po(),Wc:"publicytnetworkstatus-online",Tc:"publicytnetworkstatus-offline",jc:!0,hc:.1,xc:S("potential_esf_error_limit",10),W:R,Pb:!(Hn()&&$r())});this.j=new sj;R("networkless_immediately_drop_all_requests")&&Er();Xp("LogsDatabaseV2")}
w(Yr,kr);function as(){var a=E("yt.networklessRequestController.instance");a||(a=new Yr,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Mp().then(function(b){a.V=b;mr(a);a.j.resolve();a.jc&&Math.random()<=a.hc&&a.V&&Jr(a.V);R("networkless_immediately_drop_sw_health_store")&&bs(a)}));
return a}
Yr.prototype.writeThenSend=function(a,b){b||(b={});b=cs(a,b);Hn()||(this.h=!1);kr.prototype.writeThenSend.call(this,a,b)};
Yr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=cs(a,b);Hn()||(this.h=!1);kr.prototype.sendThenWrite.call(this,a,b,c)};
Yr.prototype.sendAndWrite=function(a,b){b||(b={});b=cs(a,b);Hn()||(this.h=!1);kr.prototype.sendAndWrite.call(this,a,b)};
Yr.prototype.awaitInitialization=function(){return this.j.promise};
function bs(a){var b;A(function(c){if(!a.V)throw b=Ro("clearSWHealthLogsDb"),b;return c.return(Kr(a.V).catch(function(d){a.handleError(d)}))})}
function Zr(a,b,c,d){d=d===void 0?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&ds(a,b);if(R("use_request_time_ms_header"))b.headers&&ym(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Lm(a,void 0,"POST",f,void 0);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Lm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new qc({url:a});if(k.u?typeof k.i!=="string"||k.i.length===0?0:{version:3,ke:k.i,ae:pc(k.j,"act=1","ri=1",rc(k))}:k.M&&{version:4,ke:pc(k.j,"dct=1","suid="+k.o,""),ae:pc(k.j,"act=1","ri=1","suid="+k.o)}){var l=bc(cc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(lc),p=kc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=
!m;break b}}catch(G){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(G){}z=!1}c=z?!0:!1}else c=!1;c||Nr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),$q(a,b.postBody,b,Pm,d)):$q(a,JSON.stringify(b.postParams),b,Om,d):Pm(a,b)}
function cs(a,b){R("use_event_time_ms_header")&&ym(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function ds(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Sr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Sr().requestComplete(a,!0);d(e,f)}}
function $r(){return dc(document.location.toString())!=="www.youtube-nocookie.com"}
;var es=!1,gs=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:es};D("ytNetworklessLoggingInitializationOptions",gs);function hs(){var a;A(function(b){if(b.h==1)return b.yield(Mp(),2);a=b.i;if(!a||!Hn()&&!R("nwl_init_require_datasync_id_killswitch")||!$r())return b.A(0);es=!0;gs.isNwlInitialized=es;return b.yield(as().awaitInitialization(),0)})}
;function is(a){var b=this;this.config_=null;a?this.config_=a:nq()&&(this.config_=oq());Kn(function(){ir(b)},5E3)}
is.prototype.isReady=function(){!this.config_&&nq()&&(this.config_=oq());return!!this.config_};
function jr(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=gr(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(G,H){hr(p);t(G,H)};
c.onFetchSuccess=function(G,H){hr(p);v(G,H)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?as().writeThenSend(m,g):as().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));$q(m,z,g,Pm,x)}else $q(m,JSON.stringify(g.postParams),g,Om,x)}else R("web_all_payloads_via_jspb")?Pm(m,g):Om(m,g)}catch(G){if(G.name==="InvalidAccessError")p&&(hr(p),p=0),mm(Error("An extension is blocking network request."));else throw G;}p&&Kn(function(){ir(a)},5E3)}
!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&mm(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);lm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.De)&&(h=f);var k=a.config_.Ee||!1,l=qq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=wm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?gs.isNwlInitialized:es)?Kp().then(function(n){e(n)}):e(!1)}
;var ns=0,ps=id?"webkit":hd?"moz":fd?"ms":ed?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++ns});var qs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ss(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
rs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",rg);var ts=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",ts);
function us(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return qg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&vg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function vs(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=us(a,b,c,d);if(e)return e;e=++ts.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new rs(h);if(!Fg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new rs(h);
h.currentTarget=a;return c.call(a,h)};
g=km(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ws()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rg[e]=[a,b,c,g,d];return e}
function xs(a){a&&(typeof a=="string"&&(a=[a]),Ob(a,function(b){if(b in rg){var c=rg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ws()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rg[b]}}))}
var ws=oi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ys(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=vs(window,"mousemove",Za(this.Y,this));a=Za(this.P,this);typeof a==="function"&&(a=km(a));this.Z=window.setInterval(a,25)}
cb(ys,F);ys.prototype.Y=function(a){a.h===void 0&&ss(a);var b=a.h;a.i===void 0&&ss(a);this.h=new ng(b,a.i)};
ys.prototype.P=function(){if(this.h){var a=U();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
ys.prototype.ba=function(){window.clearInterval(this.Z);xs(this.U)};var zs={};
function As(a){var b=a===void 0?{}:a;a=b.Te===void 0?!1:b.Te;b=b.oe===void 0?!0:b.oe;if(E("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Bs();vs(document,"keydown",Bs);vs(document,"keyup",Bs);vs(document,"mousedown",Bs);vs(document,"mouseup",Bs);a?vs(window,"touchmove",function(){Cs("touchmove",200)},{passive:!0}):(vs(window,"resize",function(){Cs("resize",200)}),b&&vs(window,"scroll",function(){Cs("scroll",200)}));
new ys(function(){Cs("mouse",100)});
vs(document,"touchstart",Bs,{passive:!0});vs(document,"touchend",Bs,{passive:!0})}}
function Cs(a,b){zs[a]||(zs[a]=!0,Qj.pa(function(){Bs();zs[a]=!1},b))}
function Bs(){E("_lact",window)==null&&As();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ds(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Es=C.ytPubsubPubsubInstance||new M,Fs=C.ytPubsubPubsubSubscribedKeys||{},Gs=C.ytPubsubPubsubTopicToKeys||{},Hs=C.ytPubsubPubsubIsSynchronous||{};function Is(a,b){var c=Js();if(c&&b){var d=c.subscribe(a,function(){function e(){Fs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Hs[a]?e():Em(e,0)}catch(g){lm(g)}},void 0);
Fs[d]=!0;Gs[a]||(Gs[a]=[]);Gs[a].push(d);return d}return 0}
function Ks(a){var b=Js();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Ob(a,function(c){b.unsubscribeByKey(c);delete Fs[c]}))}
function Ls(a,b){var c=Js();c&&c.publish.apply(c,arguments)}
function Ms(a){var b=Js();if(b)if(b.clear(a),a)Ns(a);else for(var c in Gs)Ns(c)}
function Js(){return C.ytPubsubPubsubInstance}
function Ns(a){Gs[a]&&(a=Gs[a],Ob(a,function(b){Fs[b]&&delete Fs[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.ac;M.prototype.publish=M.prototype.qb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",Es);D("ytPubsubPubsubTopicToKeys",Gs);D("ytPubsubPubsubIsSynchronous",Hs);D("ytPubsubPubsubSubscribedKeys",Fs);var Os=Symbol("injectionDeps");function Ps(a){this.name=a}
Ps.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Qs(a){this.key=a}
function Rs(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ss(a,b){a.i.set(b.zc,b);var c=a.j.get(b.zc);if(c)try{c.Qh(a.resolve(b.zc))}catch(d){c.Oh(d)}}
Rs.prototype.resolve=function(a){return a instanceof Qs?Ts(this,a.key,[],!0):Ts(this,a,[])};
function Ts(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Pd!==void 0)var e=d.Pd;else if(d.Af)e=d[Os]?Us(a,d[Os],c):[],e=d.Af.apply(d,ra(e));else if(d.Od){e=d.Od;var f=e[Os]?Us(a,e[Os],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ra(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Uh||a.h.set(b,e);return e}
function Us(a,b,c){return b?b.map(function(d){return d instanceof Qs?Ts(a,d.key,c,!0):Ts(a,d,c)}):[]}
;var Vs;function Ws(){Vs||(Vs=new Rs);return Vs}
;var Xs=window;function Ys(){var a,b;return"h5vcc"in Xs&&((a=Xs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Xs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Xs&&Xs.performance.mark&&Xs.performance.measure?2:0}
function Zs(a){var b=Ys();switch(b){case 1:Xs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Xs.performance.mark(a+"-start");break;case 0:break;default:zb(b,"unknown trace type")}}
function $s(a){var b=Ys();switch(b){case 1:Xs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Xs.performance.mark(c);Xs.performance.measure(a,b,c);break;case 0:break;default:zb(b,"unknown trace type")}}
;var at=R("web_enable_lifecycle_monitoring")&&Ys()!==0,bt=R("web_enable_lifecycle_monitoring");function ct(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function dt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?po():d;this.j=c;this.scheduler=d;this.i=new sj;this.h=a;for(a={ib:0};a.ib<this.h.length;a={wc:void 0,ib:a.ib},a.ib++)a.wc=this.h[a.ib],c=function(e){return function(){e.wc.Mc();b.h[e.ib].yc=!0;b.h.every(function(f){return f.yc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.wc),d=this.scheduler.Ra(c,d),this.h[a.ib]=Object.assign({},a.wc,{Mc:c,
jobId:d})}
function et(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.yc||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Mc,10))}
dt.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.yc||this.scheduler.qa(b.jobId),b.yc=!0;this.i.resolve()};
dt.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function ft(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};at&&Zs(this.state)}
r=ft.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;at&&$s(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(et(this.j),this.j=void 0);gt(this,a,b);this.state=a;at&&Zs(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ht(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ht(a,b){var c=b.filter(function(e){return jt(a,e)===10}),d=b.filter(function(e){return jt(a,e)!==10});
return a.D.Th?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Ze.apply(a,[c].concat(ra(e))),2);a.Jd.apply(a,[d].concat(ra(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.af.apply(a,[c].concat(ra(e)));a.Jd.apply(a,[d].concat(ra(e)))}}
r.af=function(a){for(var b=B.apply(1,arguments),c=po(),d=y(a),e=d.next(),f={};!e.done;f={Qb:void 0},e=d.next())f.Qb=e.value,c.Jb(function(g){return function(){kt(g.Qb.name);lt(function(){return g.Qb.callback.apply(g.Qb,ra(b))});
mt(g.Qb.name)}}(f))};
r.Ze=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=po(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.cc=void 0;g=function(k){return function(){kt(k.Xa.name);var l=lt(function(){return k.Xa.callback.apply(k.Xa,ra(b))});
je(l)?k.cc=R("web_lifecycle_error_handling_killswitch")?l.then(function(){mt(k.Xa.name)}):l.then(function(){mt(k.Xa.name)},function(m){ct(m);
mt(k.Xa.name)}):mt(k.Xa.name)}}(f);
c.Jb(g);return f.cc?h.yield(f.cc,3):h.A(3)}f={Xa:void 0,cc:void 0};e=d.next();return h.A(2)})};
r.Jd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Mc:function(){kt(e.name);lt(function(){return e.callback.apply(e,ra(b))});
mt(e.name)},
priority:jt(c,e)}});
d.length&&(this.j=new dt(d))};
function jt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function kt(a){at&&a&&Zs(a)}
function mt(a){at&&a&&$s(a)}
function gt(a,b,c){bt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(ft.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function lt(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){ct(b)}}
;function nt(a){ft.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var ot;w(nt,ft);nt.prototype.i=function(a,b){var c=this;this.h=Kn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
nt.prototype.u=function(a,b){this.h&&(Qj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function pt(){ot||(ot=new nt);return ot}
;var qt=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return qt});function rt(){this.store={};this.h={}}
rt.prototype.storePayload=function(a,b){a=st(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
rt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=tt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ra(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ra(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ra(this.smartExtractMatchingEntries(a))));return c};
rt.prototype.extractMatchingEntries=function(a){a=tt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ra(this.store[a[c]])),delete this.store[a[c]]);return b};
rt.prototype.getSequenceCount=function(a){a=tt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function tt(a,b){var c=st(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&st(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ut(b.auth,g[0])){var h=b.isJspb;ut(h===void 0?"undefined":h?"true":"false",g[1])&&ut(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),ut(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function ut(a,b){return a===void 0||a==="undefined"?!0:a===b}
rt.prototype.getSequenceCount=rt.prototype.getSequenceCount;rt.prototype.extractMatchingEntries=rt.prototype.extractMatchingEntries;rt.prototype.smartExtractMatchingEntries=rt.prototype.smartExtractMatchingEntries;rt.prototype.storePayload=rt.prototype.storePayload;function st(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function vt(a,b){if(a)return a[b.name]}
;var wt=S("initial_gel_batch_timeout",2E3),xt=S("gel_queue_timeout_max_ms",6E4),zt=S("gel_min_batch_size",5),At=void 0;function Bt(){this.o=this.h=this.i=0;this.j=!1}
var Ct=new Bt,Dt=new Bt,Et=new Bt,Ft=new Bt,Gt,Ht=!0,It=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",It);var Jt={};function Kt(){var a=E("yt.logging.ims");a||(a=new rt,D("yt.logging.ims",a));return a}
function Lt(a,b){if(a.endpoint==="log_event"){Mt();var c=Nt(a),d=Ot(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Fr[d||""];var f,g,h,k=Ws().resolve(new Qs(iq))==null?void 0:(f=jq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;k=Pt(e.tier);if(k===400){Qt(a,b);return}}Jt[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Kt().storePayload(c,a.payload);Rt(b,c,d==="gelDebuggingEvent")}}
function Rt(a,b,c){function d(){St({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(At=new a);a=S("tvhtml5_logging_max_batch_ads_fork")||S("tvhtml5_logging_max_batch")||S("web_logging_max_batch")||100;var f=U(),g=Tt(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Kt().getSequenceCount(b));c>=1E3?d():c>=a?Gt||(Gt=Ut(function(){d();Gt=void 0},0)):f-h>=10&&(Vt(e,b.tier),g.o=f)}
function Qt(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&Kt().storePayload({isJspb:!1},a.payload);Mt();var c=Nt(a),d=new Map;d.set(c,[a.payload]);var e=Ot(a.payload)||"";b&&(At=new b);return new pi(function(f,g){At&&At.isReady()?Wt(d,At,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Nt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);It[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function St(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new pi(function(e,f){var g=Tt(c,d),h=g.j;g.j=!1;Xt(g.i);Xt(g.h);g.h=0;At&&At.isReady()?d===void 0&&R("enable_web_tiered_gel")?Yt(e,f,a,b,c,300,h):Yt(e,f,a,b,c,d,h):(Vt(c,d),e())})}
function Yt(a,b,c,d,e,f,g){var h=At;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?Kt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Kt().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Jt)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?Kt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Kt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete Jt[l];Wt(k,h,a,b,c,!1,g)}
function Vt(a,b){function c(){St({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Tt(a,b),e=d===Ft||d===Et?5E3:xt;R("web_gel_timeout_cap")&&!d.h&&(e=Ut(function(){c()},e),d.h=e);
Xt(d.i);e=P("LOGGING_BATCH_TIMEOUT",S("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Ht&&(e=wt);e=Ut(function(){S("gel_min_batch_size")>0?Kt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=zt&&c():c()},e);
d.i=e}
function Wt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Sc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Vc:void 0,Uc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=xg({context:pq(b.config_||oq())});if(!Ra(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=It[m])&&
Zt(g.batchRequest,m,n);delete It[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";$t(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Vc=function(p){R("start_client_gcf")&&Qj.pa(function(){return A(function(t){return t.yield(au(p),0)})});
k--;k||c()};
g.Sc=0;g.Uc=function(p){return function(){p.Sc++;if(e.bypassNetworkless&&p.Sc===1)try{jr(b,l,p.batchRequest,bu({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Vc,p.Uc,f)),Ht=!1}catch(t){lm(t),d()}k--;k||c()}}(g);
try{jr(b,l,g.batchRequest,bu(e,g.dangerousLogToVisitorSession,g.Vc,g.Uc,f)),Ht=!1}catch(p){lm(p),d()}}}
function bu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,th:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};cu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function $t(a,b,c){cu()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),gm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Zt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Mt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Gm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(qt=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",qt),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function cu(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Ut(a,b){return R("transport_use_scheduler")===!1?Em(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Kn(function(){if(pt().currentState==="none")a();else{var c={};pt().install((c.none={callback:a},c))}},b):Kn(a,b)}
function Xt(a){R("transport_use_scheduler")?Qj.qa(a):window.clearTimeout(a)}
function au(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=vt(d,Jl),g=(f=d)==null?void 0:f.hotHashData,h=vt(d,Il),l=(k=d)==null?void 0:k.coldHashData,(m=Ws().resolve(new Qs(iq)))?g?e?n.yield(kq(m,g,e),2):n.yield(kq(m,g),2):n.A(2):n.return()):l?h?n.yield(lq(m,l,h),0):n.yield(lq(m,l),0):n.A(0)})}
function Tt(a,b){b=b===void 0?200:b;return a?b===300?Ft:Dt:b===300?Et:Ct}
function Ot(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Fr[b])return b}
function Pt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var du=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",du);
function eu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ds();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,du[b]=b in du?du[b]+1:0,a.sequence={index:du[b],groupKey:b},d.endOfSequence&&delete du[d.sequenceGroup]);(d.sendIsolatedPayload?Qt:Lt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function zo(a,b,c){c=c===void 0?{}:c;var d=is;P("ytLoggingEventsDefaultDisabled",!1)&&is===is&&(d=null);eu(a,b,d,c)}
;function fu(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var gu=new Set,hu=0,iu=0,ju=0,ku=[],lu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function yo(a){mu(a)}
function V(a){mu(a,"WARNING")}
function nu(a){a instanceof Error?mu(a):(a=Sa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",V(a))}
function mu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(hu>=5))){d=ku;var k=Wb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=gn(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=jn(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=jn(t)}if(d.length)for(p=0;p<d.length&&!(n=gn(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=cn();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Jh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(Ym);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.vc[p.name])for(e=y(c.vc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Qc(f);break}p.params||(p.params={});a=cn();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Ag(Bg,"sample")).constructor!==Ag&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!gu.has(p.message)){if(g&&R("web_enable_error_204"))ou(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(dn.qb("handleError",p),R("record_app_crashed_web")&&ju===0&&p.sampleWeight===1&&(ju++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),zo("appCrashed",g)),iu++):b==="WARNING"&&dn.qb("handleWarning",p);if(R("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=y(lu);for(c=a.next();!c.done;c=a.next())if(Fo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!hm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(zo("clientError",h),(g==="ERROR"||R("errors_flush_gel_always_killswitch"))&&St(void 0,void 0,!1))}R("suppress_error_204_logging")||ou(b,p)}try{gu.add(p.message)}catch(z){}hu++}}}
function ou(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=P("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Pm(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function pu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ra(b))}
;function qu(){this.register=new Map}
function ru(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Nh("ABORTED")}
qu.prototype.clear=function(){ru(this);this.register.clear()};
var su=new qu;var tu=Date.now().toString();
function uu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(tu)for(a=1,b=0;b<tu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^tu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var vu,wu=C.ytLoggingDocDocumentNonce_;wu||(wu=uu(),D("ytLoggingDocDocumentNonce_",wu));vu=wu;function xu(a){this.h=a}
r=xu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Ll;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&vf(a,2,Je(this.h.veType)),this.h.veCounter!==void 0&&vf(a,6,Je(this.h.veCounter)),this.h.elementIndex!==void 0&&vf(a,3,Je(this.h.elementIndex)),this.h.isCounterfactual&&vf(a,5,Fe(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Gf(a,Ll,7,b)}this.h.youtubeData!==void 0&&Gf(a,Kl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function yu(a){return P("client-screen-nonce-store",{})[a===void 0?0:a]}
function zu(a,b){b=b===void 0?0:b;var c=P("client-screen-nonce-store");c||(c={},gm("client-screen-nonce-store",c));c[b]=a}
function Au(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Bu(a){return P(Au(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Bu);function Cu(){var a=P("csn-to-ctt-auth-info");a||(a={},gm("csn-to-ctt-auth-info",a));return a}
function Du(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Eu(a){a=yu(a===void 0?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Eu);function Fu(a,b,c){var d=Cu();(c=Eu(c))&&delete d[c];b&&(d[a]=b)}
function Gu(a){return Cu()[a]}
D("yt_logging_screen.getCttAuthInfo",Gu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==yu(c)||b!==P(Au(c)))if(Fu(a,d,c),zu(a,c),gm(Au(c),b),b=function(){setTimeout(function(){a&&zo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:vu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Hu(){var a=wg(Iu),b;return(new pi(function(c,d){a.onSuccess=function(e){Dm(e)?c(new Ju(e)):d(new Ku("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ku("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ku("Request timed out","net.timeout",e))};
b=Pm("//googleads.g.doubleclick.net/pagead/id",a)})).Dc(function(c){if(c instanceof yi){var d;
(d=b)==null||d.abort()}return ui(c)})}
function Ku(a,b,c){db.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Ku,db);function Ju(a){this.xhr=a}
;function Lu(){this.X=0;this.h=null}
Lu.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Mu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Nu(a):this};
Lu.prototype.getValue=function(){return this.h};
Lu.prototype.isRejected=function(){return this.X==2};
Lu.prototype.$goog_Thenable=!0;function Nu(a){var b=new Lu;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Mu(a){var b=new Lu;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Ou(a){var b=P("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(ec(a)));return a}
function Pu(a){var b={};R("json_condensed_response")&&(b.prettyPrint="false");return a=xm(a,b||{},!1)}
function Qu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:ym(a)?"same-origin":"cors",credentials:ym(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Ru(){return fg()||(kd||ld)&&Fo("applewebkit")&&!Fo("version")&&(!Fo("safari")||Fo("gsa/"))||jd&&Fo("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Su(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Tu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Pl)if(Pl[d]==c.embeddedPlayerMode){b=Pl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Uu(a){db.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Vu;this.isTimeout=a instanceof Ku&&a.errorCode=="net.timeout";this.isCanceled=a instanceof yi}
w(Uu,db);Uu.prototype.name="BiscottiError";function Vu(){db.call(this,"Biscotti ID is missing from server")}
w(Vu,db);Vu.prototype.name="BiscottiMissingError";var Iu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Wu=null;function Xu(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ru())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if(ug(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Tu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function $l(){var a=Xu();if(a!==void 0)return ui(a);Wu||(Wu=Hu().then(Yu).Dc(function(b){return Zu(2,b)}));
return Wu}
function Yu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Vu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Vu;a=a.id;am(a);Wu=Mu(a);$u(18E5,2);return a}
function Zu(a,b){b=new Uu(b);am("");Wu=Nu(b);a>0&&$u(12E4,a-1);throw b;}
function $u(a,b){Em(function(){Hu().then(Yu,function(c){return Zu(b,c)}).Dc(ni)},a)}
function av(){try{var a=E("yt.ads.biscotti.getId_");return a?a():$l()}catch(b){return ui(b)}}
;var Ib=sa(["data-"]);function bv(a){a&&(a.dataset?a.dataset[cv()]="true":Jb(a))}
function dv(a){return a?a.dataset?a.dataset[cv()]:a.getAttribute("data-loaded"):null}
var ev={};function cv(){return ev.loaded||(ev.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function fv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||wg(b);this.assets=a.assets||{};this.attrs=a.attrs||wg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
fv.prototype.clone=function(){var a=new fv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ma(c)=="object"?a[b]=wg(c):a[b]=c}return a};var gv=["att/get"],hv=["share/get_share_panel"],iv=["share/get_web_player_share_panel"],jv=["feedback"],kv=["notification/modify_channel_preference"],lv=["browse/edit_playlist"],mv=["subscription/subscribe"],nv=["subscription/unsubscribe"];var ov=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",ov);function pv(a){bm(ov,arguments)}
;function qv(a,b,c){rv(a,b,c===void 0?null:c)}
function sv(a){a=tv(a);var b=document.getElementById(a);b&&(Ms(a),b.parentNode.removeChild(b))}
function uv(a,b){a&&b&&(a=""+Ta(b),(a=vv[a])&&Ks(a))}
function rv(a,b,c){c=c===void 0?null:c;var d=tv(a),e=document.getElementById(d),f=e&&dv(e),g=e&&!f;f?b&&b():(b&&(f=Is(d,b),b=""+Ta(b),vv[b]=f),g||(e=wv(a,d,function(){dv(e)||(bv(e),Ls(d),Em(function(){Ms(d)},0))},c)))}
function wv(a,b,c,d){d=d===void 0?null:d;var e=Dg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gb(e,Gl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function tv(a){var b=document.createElement("a");yb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var vv={};function xv(a){var b=yv(a),c=document.getElementById(b),d=c&&dv(c);d||c&&!d||(c=zv(a,b,function(){if(!dv(c)){bv(c);Ls(b);var e=$a(Ms,b);Em(e,0)}}))}
function zv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Gl(a);Mb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function yv(a){var b=Dg("A");yb(b,new rb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function Av(a){var b=B.apply(1,arguments);if(!Bv(a)||b.some(function(d){return!Bv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Cv(a,c.value)}
function Cv(a,b){for(var c in b)if(Bv(b[c])){if(c in a&&!Bv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Cv(a[c],b[c])}else if(Dv(b[c])){if(c in a&&!Dv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ev(a[c],b[c])}else a[c]=b[c];return a}
function Ev(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Bv(c)?a.push(Cv({},c)):Dv(c)?a.push(Ev([],c)):a.push(c);return a}
function Bv(a){return typeof a==="object"&&!Array.isArray(a)}
function Dv(a){return typeof a==="object"&&Array.isArray(a)}
;var Fv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Gv(a,b){var c=c===void 0?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=dc(window.location.href);e&&d.push(e);e=dc(a);if(Nb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),yb(d,a),a=d.href)if(a=ec(a),a=fc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Eu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Hv(a,b,f)}else Hv(a,b)}
function Hv(a,b,c){a=Iv(a);b=b?ic(b):"";c=c||5;Ru()&&qn(a,b,c)}
function Iv(a){for(var b=y(Fv),c=b.next();!c.done;c=b.next())a=nc(a,c.value);return"ST-"+$b(a).toString(36)}
;function Jv(a){vq.call(this,1,arguments);this.csn=a}
w(Jv,vq);var Eq=new wq("screen-created",Jv),Kv=[],Lv=0,Mv=new Map,Nv=new Map,Ov=new Map;
function Pv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Qv({cttAuthInfo:Gu(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(sg(k)||!k.trackingParams&&!k.veType)&&V(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=Rv(h,b);if(k.veType&&!Nv.has(l)&&!Ov.has(l)&&!e){if(!R("il_attach_cache_limit")||Mv.size<1E3){Mv.set(l,[a,b,c,h]);return}R("il_attach_cache_limit")&&Mv.size>1E3&&V(new T("IL Attach cache exceeded limit"))}h=Rv(c,b);Mv.has(h)?
Sv(c,b):Ov.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Qb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Tv("visualElementAttached",f,c):a?eu("visualElementAttached",c,a,f):zo("visualElementAttached",c,f)}
function Tv(a,b,c){Kv.push({Se:a,payload:c,Fh:void 0,options:b});Lv||(Lv=Fq())}
function Gq(a){if(Kv){for(var b=y(Kv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,zo(c.Se,c.payload,c.options));Kv.length=0}Lv=0}
function Rv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Sv(a,b){a=Rv(a,b);Mv.has(a)&&(b=Mv.get(a)||[],Pv(b[0],b[1],b[2],[b[3]],!0),Mv.delete(a))}
function Qv(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Uv(){try{return!!self.localStorage}catch(a){return!1}}
;function Vv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Wv(a){if(Uv()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Vv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Xv(){if(!Uv())return!1;var a=In(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Vv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Yv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Zv(a){if(P("LOGGED_IN",!0)&&Yv()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=dc(window.location.href);c&&b.push(c);c=dc(a);Nb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ec(a),(b=fc(b))?(b=Iv(b),b=(b=rn(b)||null)?tm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Yv()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Gv(a,b)}}
;function $v(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Gv(a,b);if(c)return!1;Zv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=jc(a,e);Zv(b);a=void 0;a=a===void 0?vb:a;a:if(f=b+f,a=a===void 0?vb:a,!(f instanceof rb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof tb&&c.Ge(f)){f=new rb(f);break a}f=void 0}g=g.location;f=xb(f||sb);f!==void 0&&(g.href=f);return!0}
;function aw(a){if(ug(P("PLAYER_VARS",{}))!="1"){a&&Zl();try{av().then(function(){},function(){}),Em(aw,18E5)}catch(b){lm(b)}}}
;var bw=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function cw(){var a=a===void 0?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;var b=bc(cc(5,a));if(R("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=um(a).theme;return bw.get(c)||null}catch(d){}return null}
;function dw(){this.h={};if(this.i=tn()){var a=rn("CONSISTENCY");a&&ew(this,{encryptedTokenJarContents:a})}}
dw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];ew(this,a)}};
function ew(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&qn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var fw=window.location.hostname.split(".").slice(-2).join(".");function gw(){this.j=-1;var a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=hw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var iw;function jw(){iw=E("yt.clientLocationService.instance");iw||(iw=new gw,D("yt.clientLocationService.instance",iw));return iw}
r=gw.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=hw(this))&&this.h.set("yt-location-playability-token",a,15552E3):qn("YT_CL",JSON.stringify({loctok:a}),15552E3,fw,!0))};
function hw(a){return a.h===void 0?new qo("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=hw(this))&&this.h.remove("yt-location-playability-token"):sn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function kw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=P("INNERTUBE_CONTEXT");if(!d)return mu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=xg(d);R("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;xn();var g="USER_INTERFACE_THEME_LIGHT";An(165)?g="USER_INTERFACE_THEME_DARK":An(174)?g="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:cw()||g;e.userInterfaceTheme=f;if(!b){if(f=Fn())e.connectionType=f;R("web_log_effective_connection_type")&&(f=Gn())&&(d.client.effectiveConnectionType=f)}var h;if(R("web_log_memory_total_kbytes")&&((h=C.navigator)==null?0:h.deviceMemory)){var k;h=(k=C.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}R("web_gcf_hashes_innertube")&&(f=mq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=um(C.location.href);!R("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&kn.h&&(k=kn.h,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=ln(),
e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(k=P("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!R("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Na){}l=
void 0}l&&(e.timeZone=l)}(l=P("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Hm();dw.h||(dw.h=new dw);e=dw.h.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!R("web_prequest_context_killswitch")&&(m=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=xn();m=An(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=m);l&&(d.user.lockedSafetyMode=
!0);R("warm_op_csn_cleanup")?c&&(b=Eu())&&(d.clientScreenNonce=b):!b&&(b=Eu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=E("yt.mdx.remote.remoteClient_"))d.remoteClient=a;jw().setLocationOnInnerTubeContext(d);try{var n=zm(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),v=t.next();!v.done;v=t.next()){var x=y(v.value),z=x.next().value,G=x.next().value;n=z;p=G;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:n,value:""+p})}var H,
ca;if(((H=d.client)==null?void 0:H.clientName)==="TVHTML5"||((ca=d.client)==null?void 0:ca.clientName)==="TVHTML5_UNPLUGGED"){var da=P("INNERTUBE_CONTEXT");da.adSignalsInfo&&(d.adSignalsInfo.advertisingId=da.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=da.adSignalsInfo.limitAdTracking)}}catch(Na){mu(Na)}return d}
;function lw(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),P("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=P("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function mw(){this.h={}}
mw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
mw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
mw.prototype.set=function(a,b){this.h[a]=b};
mw.prototype.remove=function(a){delete this.h[a]};function nw(){this.mappings=new mw}
nw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
nw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=zb(b)}}return a};
new nw;function ow(a){return function(){return new a}}
;var pw={},qw=(pw.WEB_UNPLUGGED="^unplugged/",pw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",pw.WEB_UNPLUGGED_OPS="^unplugged/",pw.WEB_UNPLUGGED_PUBLIC="^unplugged/",pw.WEB_CREATOR="^creator/",pw.WEB_KIDS="^kids/",pw.WEB_EXPERIMENTS="^experiments/",pw.WEB_MUSIC="^music/",pw.WEB_REMIX="^music/",pw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",pw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",pw);
function rw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=qw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(qw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function sw(){}
sw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?pn:c;var d={context:kw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+rw(this.j());(e=(f=vt(a.commandMetadata,Nl))==null?void 0:f.apiUrl)&&(b=e);f=Pu(Ou(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Qu(f),Ga:d,config:a};d.config.Mb?d.config.Mb.identity=c:d.config.Mb={identity:c};return d}mu(new T("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(sw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function tw(){}
w(tw,sw);function uw(){}
w(uw,tw);uw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Qu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
uw.prototype.j=function(){return[]};
uw.prototype.i=function(){};
uw.prototype.h=function(){};var vw={},ww=(vw.GET_DATASYNC_IDS=ow(uw),vw);function xw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function yw(){var a=xw();a.info||(a.info={});return a.info}
function zw(a){a=xw(a);a.metadata||(a.metadata={});return a.metadata}
function Aw(a){a=xw(a);a.tick||(a.tick={});return a.tick}
function Bw(a){a=xw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Cw(a){a=Bw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Dw(a){var b=xw(a).nonce;b||(b=uu(),xw(a).nonce=b);return b}
;function Ew(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Fw(a){a=a||"";var b=E("ytcsi.reference");b||(Ew(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Ew(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Gw=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",W.channels="LATENCY_ACTION_CHANNELS",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.editor=
"LATENCY_ACTION_EDITOR",W.embed="LATENCY_ACTION_EMBED",W.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.favorites="LATENCY_ACTION_FAVORITES",W.home="LATENCY_ACTION_HOME",W.inboarding="LATENCY_ACTION_INBOARDING",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
W.management="LATENCY_ACTION_MANAGEMENT",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",W.onboarding="LATENCY_ACTION_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",
W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.projects="LATENCY_ACTION_PROJECTS",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",W.review="LATENCY_ACTION_REVIEW",W.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",W.search_ui="LATENCY_ACTION_SEARCH_UI",
W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",W.tenx="LATENCY_ACTION_TENX",W.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",
W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",W);function Hw(a,b){vq.call(this,1,arguments);this.timer=b}
w(Hw,vq);var Iw=new wq("aft-recorded",Hw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Jw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Jw);function Kw(){this.h=0}
function Lw(){Kw.h||(Kw.h=new Kw);return Kw.h}
Kw.prototype.tick=function(a,b,c,d){Mw(this,"tick_"+a+"_"+b)||zo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Kw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Mw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,zo("latencyActionInfo",a,{cttAuthInfo:c}))};
Kw.prototype.jspbInfo=function(){};
Kw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Mw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,zo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Mw(a,b){Jw[b]=Jw[b]||{count:0};var c=Jw[b];c.count++;c.time=U();a.h||(a.h=Kn(function(){var d=U(),e;for(e in Jw)Jw[e]&&d-Jw[e].time>6E4&&delete Jw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||V(c)),!0):!1}
;var Nw=window;function Ow(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Pw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=X==null?void 0:(a=X.getEntriesByType)==null?void 0:(b=a.call(X,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Qw(e.requestStart),e.responseEnd=Qw(e.responseEnd),e.redirectStart=Qw(e.redirectStart),e.redirectEnd=Qw(e.redirectEnd),e.domainLookupEnd=Qw(e.domainLookupEnd),e.connectStart=Qw(e.connectStart),e.connectEnd=
Qw(e.connectEnd),e.responseStart=Qw(e.responseStart),e.secureConnectionStart=Qw(e.secureConnectionStart),e.domainLookupStart=Qw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function Qw(a){return Math.round(Rw()+a)}
function Rw(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=Nw.performance||Nw.mozPerformance||Nw.msPerformance||Nw.webkitPerformance||new Ow;var Sw=!1,Tw=!1,Uw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Za(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ni,X);function Vw(a,b){if(!R("web_csi_action_sampling_enabled")||!xw(b).actionDisabled){var c=Fw(b||"");Av(c.info,a);a.loadType&&(c=a.loadType,zw(b).loadType=c);Av(Cw(b),a);c=Dw(b);b=xw(b).cttAuthInfo;Lw().info(a,c,b)}}
function Ww(){var a,b,c,d;return((d=Ws().resolve(new Qs(iq))==null?void 0:(a=jq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Y(a,b,c){if(!R("web_csi_action_sampling_enabled")||!xw(c).actionDisabled){var d=Dw(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(Ws().resolve(new Qs(iq))==null?0:jq())&&!Tw&&(Tw=!0,Y("gcfl",U(),c));var f,g,h;e=(Ws().resolve(new Qs(iq))==null?void 0:(f=jq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Ww();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;xw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Vw(f,c));xw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||R("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,
{startTime:f})}catch(k){}}e=Fw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Bw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Aw(c);e=b||U();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=xw(c).cttAuthInfo;a==="_start"?(a=Lw(),Mw(a,"baseline_"+d)||zo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Lw().tick(a,d,b,f);Xw(c);return e}}}
function Yw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ps+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Zw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function $w(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Bb(document)&&a.setAttribute("nonce",Bb(document));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=Rw(),Y("rsf_"+b,c+Math.round(a.fetchStart)),Y("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function ax(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=Pb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Rb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Y("wffs",Qw(b.startTime)),Y("wffe",Qw(b.responseEnd)))}
function bx(a){var b=cx("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=cx(b[d],a);if(e)return e}return NaN}
function cx(a,b){if(a=Aw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Xw(a){var b=cx("_start",a),c=bx(a),d=R("enable_cow_info_csi")||!Sw;b&&c&&d&&(Bq(Iw,new Hw(Math.round(c-b),a)),Sw=!0)}
function dx(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=Sb(a,function(c){return c.name==="first-paint"}))return Qw(a.startTime)}var b;
R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.Lh;return b?Math.max(0,b):0}
;function ex(a,b){km(function(){Fw("").info.actionType=a;b&&gm("TIMING_AFT_KEYS",b);gm("TIMING_ACTION",a);var c=Zw();Object.keys(c).length>0&&Vw(c);c={isNavigation:!0,actionType:Gw[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Gw[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Eu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Yw();if(d===1||d===-1)c.isVisible=!0;zw();yw();
c.loadType="cold";d=yw();var e=Pw(),f=Rw(),g=P("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Y("srt",e.responseStart),d.prerender!==1&&Y("_start",f,void 0));d=dx();d>0&&Y("fpt",d);d=Pw();d.isPerformanceNavigationTiming&&Vw({performanceNavigationTiming:!0},void 0);Y("nreqs",d.requestStart,void 0);Y("nress",d.responseStart,void 0);Y("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Y("nrs",d.redirectStart,void 0),Y("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Y("ndnss",d.domainLookupStart,void 0),Y("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Y("ntcps",d.connectStart,void 0),Y("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Rw()&&d.connectEnd-d.secureConnectionStart>0&&(Y("nstcps",d.secureConnectionStart,void 0),Y("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&ax();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in Uw)Uw.hasOwnProperty(h)&&(e=Uw[h],
$w(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Vw(c);c=Bw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Cw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(zw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Aw();e=Bw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Y(k,cx(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Y(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,Av(c,d),Av(k,d),d=!0;d&&Vw(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&fx()&&bx()&&Xw()})()}
function fx(a){return km(function(){return gx("_start",a)})()}
function hx(a,b,c){km(Vw)(a,b,c===void 0?!1:c)}
function ix(a,b,c){return km(Y)(a,b,c)}
function gx(a,b){return km(function(){var c=Aw(b);return a in c})()}
function jx(a){if(!R("universal_csi_network_ticks"))return"";a=bc(cc(5,a))||"";for(var b=Object.keys(tq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function kx(a){if(!R("universal_csi_network_ticks"))return function(){};
var b=tq[a];return b?(lx(b),function(){var c=R("universal_csi_network_ticks")?(c=uq[a])?lx(c):!1:!1;return c}):function(){}}
function lx(a){return km(function(){if(gx(a))return!1;ix(a,void 0,void 0);return!0})()}
function mx(a){km(function(){if(!fx("attestation_challenge_fetch")||gx(a,"attestation_challenge_fetch"))return!1;ix(a,void 0,"attestation_challenge_fetch");return!0})()}
function nx(){km(function(){var a=Dw();requestAnimationFrame(function(){setTimeout(function(){a===Dw()&&ix("ol",void 0,void 0)},0)})})()}
var ox=window;ox.ytcsi&&(ox.ytcsi.infoGel=hx,ox.ytcsi.tick=ix);var px="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),qx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function rx(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Xb||(a.Xb={});a.Xb=Object.assign({},ww,a.Xb)}
function sx(a,b,c,d){if(rx.h!==void 0){if(d=rx.h,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else rx.h=new rx(a,b,c,d)}
function tx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?pn:c;var d=ux(a,b);return d?new pi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.A(0);break}Zv(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ld){m=vx(h.config,l);n.A(4);break}return n.yield(wx(h.config,l),5);case 5:m=n.i;case 4:e(xx(a,h,m)),n.h=
0}})}):ui(new T("Error: No request builder found for command.",b))}
function yx(a,b){function c(){}
var d="/youtubei/v1/"+rw(gv);var e=e===void 0?{Mb:{identity:pn}}:e;var f=f===void 0?!0:f;c=kx(jx(d));b.context||(b.context=kw(void 0,f));return new pi(function(g){var h,k,l,m,n;return A(function(p){if(p.h==1)return h=Ou(d),k=ym(h)?"same-origin":"cors",a.j.Ld?(l=vx(e,k),p.A(2)):p.yield(wx(e,k),3);p.h!=2&&(l=p.i);m=Pu(Ou(d));n={input:m,Za:Qu(m),Ga:b,config:e};g(xx(a,n,l,c));p.h=0})})}
function zx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(px);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function xx(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,z,G,H,ca,da,Na,Kb,ja,Ya,Pa,Qa,Oa,ch,dh,js,ks,ls,ms;return A(function(ia){switch(ia.h){case 1:ia.A(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ia.A(4);break}h=b.Ga.context;ia.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ia.A(4);break}m=l.value;return ia.yield(m.Mh(h),9);case 9:l=k.next();ia.A(8);break;case 4:if((n=a.i)==null||!n.Sh(b.input,b.Ga)){ia.A(12);break}return ia.yield(a.i.Hh(b.input,
b.Ga),13);case 13:return p=ia.i,zx(a,p,b),ia.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Ph)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),ca=(H=(G=b.Za)==null?void 0:G.headers)!=null?H:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},ca,c)}),da=Object.assign({},b.Za),b.Za.method==="POST"&&(da=Object.assign({},da,{body:z})),((Na=b.config)==null?0:Na.Xe)&&ix(b.config.Xe),Kb=function(){return a.fa.fetch(b.input,da,b.config)},t=Kb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ja=ia.i)&&"error"in ja&&((Ya=ja)==null?0:(Pa=Ya.error)==null?0:Pa.details))for(Qa=ja.error.details,Oa=y(Qa),ch=Oa.next();!ch.done;ch=Oa.next())dh=ch.value,(js=dh["@type"])&&qx.indexOf(js)>-1&&(delete dh["@type"],ja=dh);x&&a.h.has(x)&&a.h.delete(x);((ks=b.config)==null?0:ks.Ye)&&ix(b.config.Ye);if(ja||(ls=a.i)==null||!ls.vh(b.input,b.Ga)){ia.A(15);break}return ia.yield(a.i.Gh(b.input,b.Ga),16);case 16:ja=ia.i;case 15:return zx(a,ja,b),((ms=b.config)==null?0:ms.Ue)&&ix(b.config.Ue),d(),
ia.return(ja||void 0)}})}
function ux(a,b){a:{a=a.u;var c,d=(c=vt(b,Ol))==null?void 0:c.signal;if(d&&a.Xb&&(c=a.Xb[d])){var e=c();break a}var f;if((c=(f=vt(b,Ml))==null?void 0:f.request)&&a.he&&(f=a.he[c])){e=f();break a}for(e in b)if(a.pd[e]&&(b=a.pd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function wx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Mb)==null?void 0:d.sessionIndex;var h=g.yield;var k=on(0,{sessionIndex:e});if(!(k instanceof pi)){var l=new pi(ni);qi(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},lw(b),f)))})}
function vx(a,b){var c;a=a==null?void 0:(c=a.Mb)==null?void 0:c.sessionIndex;c=on(0,{sessionIndex:a});return Object.assign({},lw(b),c)}
;var Ax=new Ps("INNERTUBE_TRANSPORT_TOKEN");function Bx(){}
w(Bx,tw);Bx.prototype.j=function(){return mv};
Bx.prototype.i=function(a){return vt(a,Yl)||void 0};
Bx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Bx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Cx(){}
w(Cx,tw);Cx.prototype.j=function(){return nv};
Cx.prototype.i=function(a){return vt(a,Xl)||void 0};
Cx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Cx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Dx=new Ps("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Ex(a){this.M=a}
w(Ex,tw);Ex.prototype.j=function(){return hv};
Ex.prototype.i=function(a){return vt(a,Sl)||vt(a,Tl)||vt(a,Rl)};
Ex.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
Ex[Os]=[Dx];function Fx(){}
w(Fx,tw);Fx.prototype.j=function(){return jv};
Fx.prototype.i=function(a){return vt(a,Ql)||void 0};
Fx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Fx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Gx(){}
w(Gx,tw);Gx.prototype.j=function(){return kv};
Gx.prototype.i=function(a){return vt(a,Wl)||void 0};
Gx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Hx(){}
w(Hx,tw);Hx.prototype.j=function(){return lv};
Hx.prototype.i=function(a){return vt(a,Vl)||void 0};
Hx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ix(){}
w(Ix,tw);Ix.prototype.j=function(){return iv};
Ix.prototype.i=function(a){return vt(a,Ul)};
Ix.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Jx=new Ps("FETCH_FN_TOKEN"),Kx=new Ps("PARSE_FN_TOKEN");function Lx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Lx,T);var Mx=new Ps("NETWORK_SLI_TOKEN");function Nx(a,b,c){this.h=a;this.i=b;this.j=c}
Nx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=Ox(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){V(k);
if((c==null?0:c.re)&&k instanceof Lx&&k.errorType===1)return Promise.reject(k)}))})};
function Ox(a,b,c){if(a.h){var d=bc(cc(5,nc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=cr(c));return new window.Request(b,a)}
Nx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.He)&&a.ok)return Of(b.He,e);e=e.replace(")]}'","");if((b==null?0:b.re)&&e)try{var f=d(e)}catch(h){throw new Lx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Bh(),c=c.then(function(e){V(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Nx[Os]=[new Qs(Mx),new Qs(Jx),new Qs(Kx)];var Px=new Ps("NETWORK_MANAGER_TOKEN");var Qx;function Rx(){var a,b;if(!Qx){var c=Ws();Ss(c,{zc:Px,Od:Nx});var d={pd:{feedbackEndpoint:ow(Fx),modifyChannelNotificationPreferenceEndpoint:ow(Gx),playlistEditEndpoint:ow(Hx),shareEntityEndpoint:ow(Ex),subscribeEndpoint:ow(Bx),unsubscribeEndpoint:ow(Cx),webPlayerShareEntityServiceEndpoint:ow(Ix)}},e=jw(),f={};e&&(f.client_location=e);a===void 0&&(a=nn());b===void 0&&(b=c.resolve(Px));sx(d,b,a,f);Ss(c,{zc:Ax,Pd:rx.h});Qx=c.resolve(Ax)}return Qx}
;function Sx(a){var b=new oj;if(a.interpreterJavascript){var c=El(a.interpreterJavascript);c=Eb(c).toString();var d=new mj;Lf(d,6,c);Gf(b,mj,1,d)}else a.interpreterUrl&&(c=Fl(a.interpreterUrl),c=lb(c).toString(),d=new nj,Lf(d,4,c),Gf(b,nj,2,d));a.interpreterHash&&Mf(b,3,a.interpreterHash);a.program&&Mf(b,4,a.program);a.globalName&&Mf(b,5,a.globalName);a.clientExperimentsStateBlob&&Mf(b,7,a.clientExperimentsStateBlob);return b}
function Tx(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function xc(){if(R("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Ux(a){this.h=a}
Ux.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Ux.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Ux.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function Vx(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Ux(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Ux(c))}))})}
;var Wx=[],Xx=!1;function Yx(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ru()){var a=P("PLAYER_VARS",{});if(ug(a)!="1"&&!Tu(a)){var b=function(){Xx=!0;"google_ad_status"in window?gm("DCLKSTAT",1):gm("DCLKSTAT",2)};
try{qv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Wx.push(Qj.pa(function(){if(!(Xx||"google_ad_status"in window)){try{uv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Xx=!0;gm("DCLKSTAT",3)}},5E3))}}}
function Zx(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function Z(a){this.h=a}
[new Z("b.f_"),new Z("j.s_"),new Z("r.s_"),new Z("e.h_"),new Z("i.s_"),new Z("s.t_"),new Z("p.h_"),new Z("s.i_"),new Z("f.i_"),new Z("a.b_"),new Z("a.o_"),new Z("g.o_"),new Z("p.i_"),new Z("p.m_"),new Z("i.k_"),new Z("n.k_"),new Z("i.f_"),new Z("a.s_"),new Z("m.c_"),new Z("n.h_"),new Z("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function $x(a,b){var c={preload:!0},d=this;this.network=a;this.options=c;this.o=b;this.h=null;if(c.Xh){var e=new sj;this.h=e.promise;C.ytAtRC&&Qj.Ra(function(){var f,g;return A(function(h){if(h.h==1){if(!C.ytAtRC)return h.return();f=ay(null);return h.yield(d.gb(f),2)}g=h.i;C.ytAtRC&&C.ytAtRC(JSON.stringify(g));h.h=0})},2);
Vx().then(function(f){var g,h,k,l;return A(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.gb(ay(n))}),m.yield(wc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,eb:Tx(k),vm:g,bgChallenge:new oj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,eb:Tx(n),vm:g,bgChallenge:new oj};d.h=Promise.resolve(n)});
m.h=0})})}else c.preload&&by(this,new Promise(function(f){Kn(function(){f(cy(d))},0)}))}
$x.prototype.j=function(){var a=this;return A(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
$x.prototype.i=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h===null&&by(d,cy(d));e=!1;f={};g=function(){var k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.eb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);za(n,4);e=!0;if(R("attbs")&&!R("attmusi")){m=k.vm.ed({vb:l});n.A(6);break}return n.yield(k.vm.snapshot({vb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";Aa(n,3);break;case 4:Ba(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.eb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^Zx()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(P("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),dy(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function ay(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function cy(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return A(function(v){switch(v.h){case 1:c=ay(xj().h);if(R("att_fet_ks"))return za(v,7),v.yield(a.gb(c),9);za(v,4);return v.yield(ey(a,c),6);case 6:g=v.i;e=g.Pe;f=g.Qe;d=g;Aa(v,3);break;case 4:return Ba(v),V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),fy(a,864E5),v.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});case 9:d=v.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Tx(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");Aa(v,3);break;case 7:h=Ba(v);V(h);b++;if(b>=5)return V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),fy(a,864E5),v.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return v.return(new Promise(function(x){Kn(function(){x(cy(a,
b))},k)}));
case 3:l=Number(f.t)||7200;fy(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){v.A(10);break}n=Sx(d.bgChallenge);za(v,11);return v.yield(yj(xj(),n),13);case 13:Aa(v,12);break;case 11:return p=Ba(v),V(p),v.return({challenge:e,eb:f,vm:m,bgChallenge:n});case 12:return za(v,14),m=new uj({challenge:n,zd:{Da:"aGIf"}}),v.yield(m.Zc,16);case 16:Aa(v,10);break;case 14:t=Ba(v),V(t),m=void 0;case 10:return v.return({challenge:e,eb:f,vm:m,bgChallenge:n})}})}
$x.prototype.gb=function(a){var b=this,c;return A(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.gb(a));mx("att_pna");return d.return(new Promise(function(e){Vh(c,"publicytnetworkstatus-online",function(){b.network.gb(a).then(e)})}))})};
function gy(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Tx(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Pe:b,Qe:c})}
function ey(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.md=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Kn(function(){l(void 0)},k.md)}}(e)),5);
case 5:return za(h,7),h.yield(a.gb(b),9);case 9:return f=h.i,h.return(gy(f));case 7:c=g=Ba(h),g instanceof Error&&V(g);case 8:d++;e={md:void 0};h.A(2);break;case 4:throw c;}})}
function by(a,b){a.h=b}
function hy(a){var b,c,d;return A(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=cy(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function fy(a,b){function c(){var e;return A(function(f){e=d-Date.now();return e<1E3?f.yield(hy(a),0):(Kn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function dy(a,b){return new Promise(function(c){Kn(function(){c(b())},a)})}
;function iy(){this.h=Rx()}
iy.prototype.gb=function(a){mx("att_fsr");return yx(this.h,a).then(function(b){mx("att_frr");return b})};function jy(){var a,b,c;return A(function(d){if(d.h==1)return a=Ws().resolve(Ax),a?d.yield(tx(a),2):(V(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return V(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.yh;return d.return(c)}V(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function ky(){var a;return(a=P("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var ly=C.caches,my;function ny(a){var b=a.indexOf(":");return b===-1?{Cd:a}:{Cd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function oy(){return A(function(a){if(my!==void 0)return a.return(my);my=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(ly.open("test-only"),4);case 4:return d.yield(ly.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(my)})}
function py(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(oy(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(ly.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ny(f),h=g.datasyncId,!h||a.includes(h)||b.push(ly.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function qy(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(oy(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=In("cache contains other");return h.yield(ly.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ny(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function ry(){try{return!!self.sessionStorage}catch(a){return!1}}
;function sy(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function ty(a){if(ry()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=sy(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function uy(){if(!ry())return!1;var a=In(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=sy(c.value),c!==void 0&&c!==a)return!0;return!1}
;function vy(){jy().then(function(a){a&&(Op(a),py(a),Wv(a),ty(a))})}
function wy(){var a=new Vr;Qj.pa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=In("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Op(h);py(h);Wv(h);ty(h);return g.return()}c=Xv();d=uy();return g.yield(qy(),3);case 3:return e=g.i,g.yield(Pp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?vy():Vh(a,"publicytnetworkstatus-online",vy),g.h=0}})})}
;var xy=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function yy(){this.state=1;this.vm=null;this.h=void 0}
r=yy.prototype;r.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=El(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=Fl(a.interpreterSafeUrl).toString());zy(this,e,d,a.program,b,c)}else V(Error("Cannot initialize botguard without program"))};
function zy(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,qv(c,function(){window[g]?Ay(a,d,g,e):(a.state=3,sv(c),V(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Dg("SCRIPT"),b instanceof Cb?(f.textContent=Eb(b),Fb(f)):f.textContent=b,f.nonce=Bb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?Ay(a,d,g,e):(a.state=4,V(new T("Unable to load Botguard from JS")))):V(new T("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Ay(a,b,c,d){a.state=5;var e=!!a.h&&xy.includes(dc(a.h)||"");try{var f=new uj({program:b,globalName:c,zd:{disable:!R("att_web_record_metrics")||!R("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.Zc.then(function(){a.state=6;d&&d(b)});
a.Yc(f)}catch(g){a.state=7,g instanceof Error&&V(g)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.hd()?this.Rd({vb:a}):null};
r.dispose=function(){this.Yc(null);this.state=8};
r.hd=function(){return!!this.vm};
r.Rd=function(a){return this.vm.ed(a)};
r.Yc=function(a){tc(this.vm);this.vm=a};function By(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Cy(){yy.apply(this,arguments)}
w(Cy,yy);Cy.prototype.Yc=function(a){var b;(b=By())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Cy.prototype.hd=function(){return!!By()};
Cy.prototype.Rd=function(a){return By().bgvmc(a)};function Dy(a){ft.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Dy,ft);Dy.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Dy.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Dy.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Dy.prototype.i=function(){this.h=new Map};function Ey(a){ft.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Ey,ft);Ey.prototype.i=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ey.prototype.h=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ey.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Ey.prototype.M=function(a,b){a(b==null?void 0:b.event)};function Fy(){this.o=new Dy;this.u=new Ey}
Fy.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Gy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Gy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Eu(c===void 0?0:c)){a=this.client;d=new xu({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=Rv(d,c);Nv.set(f,!0);Sv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Qv({cttAuthInfo:Gu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Tv("visualElementGestured",f,d):a?eu("visualElementGestured",d,a,f):zo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Gy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new xu({trackingParams:a}),b,c===void 0?0:c)};
Gy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Eu(d);a||(a=(a=Bu(d===void 0?0:d))?new xu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Qv({cttAuthInfo:Gu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Tv("visualElementStateChanged",d,b):a?eu("visualElementStateChanged",b,a,d):zo("visualElementStateChanged",b,d))}};
function Hy(a,b){if(b===void 0)for(var c=Du(),d=0;d<c.length;d++)c[d]!==void 0&&Hy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Pv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Iy(){Fy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));R("web_log_cfg_cee_ks")||Kn(Jy)}
w(Iy,Fy);Iy.prototype.j=function(){zo("finalPayload",{csn:Eu()})};
Iy.prototype.h=function(){ru(su)};
Iy.prototype.i=function(){var a=Hy;Gy.h||(Gy.h=new Gy);a(Gy.h)};
function Jy(){var a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=he();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&zo("genericClientExperimentEvent",{eventType:c});delete fm.CLIENT_EXPERIMENT_EVENTS}}
;function Ky(){}
function Ly(){var a=E("ytglobal.storage_");a||(a=new Ky,D("ytglobal.storage_",a));return a}
Ky.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(My()):d.return()})};
function My(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Ky);function xo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
xo.prototype.Ha=function(a){this.handleError(a)};
xo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ny(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ny(a,b){Ly().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Oy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Oy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Oy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Py={},Qy=(Py["api.invalidparam"]=2,Py.auth=150,Py["drm.auth"]=150,Py["heartbeat.net"]=150,Py["heartbeat.servererror"]=150,Py["heartbeat.stop"]=150,Py["html5.unsupportedads"]=5,Py["fmt.noneavailable"]=5,Py["fmt.decode"]=5,Py["fmt.unplayable"]=5,Py["html5.missingapi"]=5,Py["html5.unsupportedlive"]=5,Py["drm.unavailable"]=5,Py["mrm.blocked"]=151,Py["embedder.identity.denied"]=152,Py);var Ry=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Sy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Ty(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Ry);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Uy(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Vy(a){F.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=R("web_player_split_event_bus_iframe");this.o=P("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Wy(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())Xy(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=Yy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Sy(e)){var f=d;if(Sa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Ty(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Ty(g);break;case "loadPlaylist":case "cuePlaylist":g=Uy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Sy(e)&&Zy(b,Wy(b))}}}};
$y.addEventListener("message",this.G);if(a=P("WIDGET_ID"))this.sessionId=a;az(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Qy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
az(this,"onVideoProgress",this.kf.bind(this));az(this,"onVolumeChange",this.lf.bind(this));az(this,"onApiChange",this.cf.bind(this));az(this,"onPlaybackQualityChange",this.gf.bind(this));az(this,"onPlaybackRateChange",this.hf.bind(this));az(this,"onStateChange",this.jf.bind(this));az(this,"onWebglSettingsChanged",this.mf.bind(this));az(this,"onCaptionsTrackListChanged",this.df.bind(this));az(this,"captionssettingschanged",this.ef.bind(this))}
w(Vy,F);function Zy(a,b){a.sendMessage("infoDelivery",b)}
r=Vy.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Xy(this,a):this.D.push(a)};
function Yy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function az(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Wy(a){if(!a.api)return null;var b=a.api.getApiInterface();Tb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.jf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Zy(this,a)};
r.gf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Zy(this,a)};
r.hf=function(a){Zy(this,{playbackRate:a})};
r.cf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.lf=function(){Zy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.kf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Zy(this,a)};
r.mf=function(){Zy(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.df=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Zy(this,a)}};
r.ef=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Zy(this,a)}};
function Xy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){V(d)}}}
r.ba=function(){F.prototype.ba.call(this);$y.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var $y=window;function bz(a,b,c){F.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=cz(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=dz(g,f))&&ez(d,g,f))}}}}}};
fz.addEventListener("message",this.i);ez(this,"RECEIVING")}
w(bz,F);r=bz.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.ff.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.ff=function(a,b){this.ea||ez(this,a,gz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function cz(a,b){switch(a){case "loadVideoById":return[Ty(b)];case "cueVideoById":return[Ty(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Uy(b)];case "cuePlaylist":return[Uy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function dz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function gz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function ez(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),hz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){fz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.ba.call(this)};
var fz=window,hz=window.parent;var iz=new Cy;function jz(){return iz.hd()}
function kz(a){a=a===void 0?{}:a;return iz.invoke(a)}
;function lz(a,b,c,d,e){F.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Ec=e;this.Pa=!1;this.api={};this.oa=this.u=null;this.U=new M;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Fc=["onReady"];this.lastError=null;this.rb=NaN;this.P={};this.ha=0;this.i=this.o=a;vc(this,this.U);mz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(nz(this),oz(this))}
w(lz,F);r=lz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof fv||(b=new fv(b));this.config=b;this.setConfig(a);oz(this);this.isReady()&&pz(this)}};
function nz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=qz(a);nz(this);if(!this.xa){var b;this.xa=rz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Kj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Kj(Number(a)||a))};
function pz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function sz(a){var b=!0,c=tz(a);c&&a.config&&(b=c.dataset.version===uz(a));return b&&!!E("yt.player.Application.create")}
function oz(a){if(!a.ea&&!a.Y){var b=sz(a);if(b&&(tz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||vz(a);else if(wz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),vz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=xz(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?qz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Ec);vz(a)};
a.Y=!0;b?a.G():(qv(uz(a),a.G),(b=yz(a))&&xv(b||""),zz(a)&&!c&&D("yt.player.Application.create",null))}}}
function tz(a){var b=Cg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function vz(a){if(!a.ea){var b=tz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!xz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Az(a)}else a.rb=setTimeout(function(){vz(a)},50)}}
function Az(a){mz(a);a.Pa=!0;var b=tz(a);if(b){a.u=Bz(a,b,"addEventListener");a.oa=Bz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Bz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);pz(a);a.xa&&a.xa(a.api);a.U.qb("onReady",a.api)}
function Bz(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function mz(a){a.Pa=!1;if(a.oa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.oa(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.oa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=rz(this,b);d&&(Nb(this.Fc,a)>=0||this.h[a]||(b=Cz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=rz(this,b))&&this.U.unsubscribe(a,b)};
function rz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function Cz(a,b){function c(d){function e(){if(!a.ea)try{a.U.qb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.ge});g.level="WARNING";throw g;}}
if(xz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
tg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(tz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function wz(a){a.cancel();mz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=tz(a);b&&(sz(a)||!zz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&uv(uz(this),this.G);clearTimeout(this.rb);this.Y=!1};
r.ba=function(){wz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;F.prototype.ba.call(this)};
function zz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function uz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function yz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function xz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function qz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?wg(e):e}return b}
;var Dz={},Ez="player_uid_"+(Math.random()*1E9>>>0);function Fz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Cg(c):c;var e=Ez+"_"+Ta(c),f=Dz[e];if(f&&d)return Gz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new lz(c,e,a,b,void 0);Dz[e]=f;f.addOnDisposeCallback(function(){delete Dz[f.getId()]});
return f.api}
function Gz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Hz=null,Iz=null;
function Jz(){nx();var a=xn(),b=An(119),c=window.devicePixelRatio>1;if(document.body&&Yj(document.body,"exp-invert-logo"))if(c&&!Yj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Yj(d,"inverted-hdpi")){var e=Wj(d);Xj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Yj(document.body,"inverted-hdpi")&&Zj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Bn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete un[b]:(c=d.toString(16),un[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in un)un.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(un[f])));var f=d.join("&");qn(b,f,63072E3,a.i,c)}}
function Kz(){Lz()}
function Mz(){ix("ep_init_pr");Lz()}
function Lz(){var a=Hz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Nz(){Hz&&Hz.sendAbandonmentPing&&Hz.sendAbandonmentPing();P("PL_ATT")&&iz.dispose();for(var a=Qj,b=0,c=Wx.length;b<c;b++)a.qa(Wx[b]);Wx.length=0;sv("//static.doubleclick.net/instream/ad_status.js");Xx=!1;gm("DCLKSTAT",0);uc(Iz);Hz&&(Hz.removeEventListener("onVideoDataChange",Kz),Hz.destroy())}
;ix("ep_init_eps");D("yt.setConfig",gm);D("yt.config.set",gm);D("yt.setMsg",pv);D("yt.msgs.set",pv);D("yt.logging.errors.log",mu);
D("writeEmbed",function(){ix("ep_init_wes");var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}aw(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);R("embeds_enable_new_csi")||ex("embed",["ol"]);c=ky();if(!c.serializedForcedExperimentIds){var d=um(window.location.href);d.forced_experiments&&
(c.serializedForcedExperimentIds=d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?ex("watch",["pbs","pbu","pbp"]):R("embeds_enable_new_csi")&&(a.args&&Su(a.args)?ex("video_preview",["ol"]):ex("embed_no_video",["ep_init_pr"]));Hz=Fz(a,c);Hz.addEventListener("onVideoDataChange",Kz);Hz.addEventListener("onReady",Mz);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Iz=new Vy(Hz):P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Iz=new bz(Hz,a,b));Yx();R("ytidb_create_logger_embed_killswitch")||
wo();a={};Iy.h||(Iy.h=new Iy);Iy.h.install((a.flush_logs={callback:function(){St()}},a));
hs();R("ytidb_clear_embedded_player")&&Qj.pa(function(){Rx();wy()});
R("enable_rta_manager")&&Kn(function(){var f=new iy;var g=new Vr;$x.h=new $x(f,g);f=$x.h;g=f.i.bind(f);D("yt.aba.att",g);f=f.j.bind(f);D("yt.aba.att2",f)});
ix("ep_init_wee")});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||jz);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||kz);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Zx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||$v);D("yt.util.activity.init",E("yt.util.activity.init")||As);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Ds);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Bs);window.addEventListener("load",km(function(){Jz()}));
window.addEventListener("pageshow",km(function(a){a.persisted||Jz()}));
window.addEventListener("pagehide",km(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Nz():a.persisted||Nz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=hm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!R("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.ge)f||(f={}),f.componentStack=fu(m)}f&&pu(e,f);g?mu(e):V(e)}};
Gi=nu;window.addEventListener("unhandledrejection",function(a){nu(a.reason)});
Ob(P("ERRORS")||[],function(a){mu.apply(null,a)});
gm("ERRORS",[]);ix("ep_init_epe");}).call(this);
