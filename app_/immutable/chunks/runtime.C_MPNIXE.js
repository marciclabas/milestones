import{l as st}from"./index.BFqC5wTN.js";const dt=!1;var kn=Array.isArray,Cn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Pn=Object.prototype,bn=Array.prototype,Zt=Object.getPrototypeOf;function Fn(t){return typeof t=="function"}const qn=()=>{};function Ln(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,H=8,lt=16,m=32,z=64,Q=128,O=256,G=512,h=1024,R=2048,j=4096,P=8192,b=16384,Wt=32768,yt=65536,Mn=1<<17,Xt=1<<19,wt=1<<20,ct=Symbol("$state"),Yn=Symbol("legacy props"),Hn=Symbol("");function Tt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Bn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Un(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ot(t){return{f:0,v:t,reactions:null,equals:Tt,version:0}}function Gn(t){return ln(ot(t))}function Kn(t,n=!1){var e;const r=ot(t);return n||(r.equals=mt),st&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ln(t){return u!==null&&u.f&y&&(T===null?mn([t]):T.push(t)),t}function $n(t,n){return u!==null&&it()&&u.f&(y|lt)&&(T===null||!T.includes(t))&&sn(),on(t,n)}function on(t,n){return t.equals(n)||(t.v=n,t.version=jt(),At(t,R),it()&&a!==null&&a.f&h&&!(a.f&m)&&(v!==null&&v.includes(t)?(A(a,R),J(a)):g===null?An([t]):g.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&R||!e&&o===a||(A(o,n),i&(h|O)&&(i&y?At(o,j):J(o)))}}function gt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const Zn=1,zn=2,Wn=4,Xn=8,Jn=16,Qn=1,tr=2,nr=4,rr=8,er=16,sr=1,lr=2,an="[",un="[!",fn="]",Rt={},or=Symbol();let x=!1;function ar(t){x=t}let w;function q(t){if(t===null)throw gt(),Rt;return w=t}function ur(){return q(D(w))}function ir(t){if(x){if(D(w)!==null)throw gt(),Rt;w=t}}function fr(t=1){if(x){for(var n=t,r=w;n--;)r=D(r);w=r}}function _r(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===an||r===un)&&(t+=1)}var e=D(n);n.remove(),n=e}}var vt,St,xt;function cr(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;St=_t(n,"firstChild").get,xt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function tt(t=""){return document.createTextNode(t)}function nt(t){return St.call(t)}function D(t){return xt.call(t)}function vr(t,n){if(!x)return nt(t);var r=nt(w);if(r===null)r=w.appendChild(tt());else if(n&&r.nodeType!==3){var e=tt();return r==null||r.before(e),q(e),e}return q(r),r}function pr(t,n){if(!x){var r=nt(t);return r instanceof Comment&&r.data===""?D(r):r}return w}function hr(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=D(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var o=tt();return e===null?s==null||s.after(o):e.before(o),q(o),o}return q(e),e}function dr(t){t.textContent=""}function _n(t){var n=y|R;a===null?n|=O:a.f|=wt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:Tt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(t){const n=_n(t);return n.equals=mt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?at(e):I(e)}}}function cn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=a;Z(cn(t));try{It(t),n=Bt(t)}finally{Z(r)}return n}function Dt(t){var n=Ot(t),r=(k||t.f&O)&&t.deps!==null?j:h;A(t,r),t.equals(n)||(t.v=n,t.version=jt())}function at(t){It(t),Y(t,0),A(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){a===null&&u===null&&nn(),u!==null&&u.f&O&&tn(),ut&&Qt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,l=a,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=C;try{pt(!0),X(o),o.f|=Wt}catch(_){throw I(o),_}finally{pt(i)}}else n!==null&&J(o);var p=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&wt)===0;if(!p&&!s&&e&&(l!==null&&vn(o,l),u!==null&&u.f&y)){var d=u;(d.children??(d.children=[])).push(o)}return o}function yr(t){const n=F(H,null,!1);return A(n,h),n.teardown=t,n}function wr(t){kt();var n=a!==null&&(a.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:u})}else{var e=Ct(t);return e}}function Tr(t){return kt(),pn(t)}function mr(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Ct(t){return F(Et,t,!1)}function pn(t){return F(H,t,!0)}function Ar(t){return hn(t)}function hn(t,n=0){return F(H|lt|n,t,!0)}function gr(t,n=!0){return F(H|m,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=ut,e=u;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:D(e);e.remove(),e=l}r=!0}bt(t,n&&!r),Pt(t),Y(t,0),A(t,b);var o=t.transitions;if(o!==null)for(const p of o)p.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];qt(t,r,!0),yn(r,()=>{I(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&yt)!==0||(e.f&m)!==0;qt(e,n,l?r:!1),e=s}}}function Rr(t){Lt(t,!0)}function Lt(t,n){if(t.f&P){B(t)&&X(t),t.f^=P;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&yt)!==0||(r.f&m)!==0;Lt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,rt=[];function Mt(){K=!1;const t=rt.slice();rt=[],zt(t)}function Sr(t){K||(K=!0,queueMicrotask(Mt)),rt.push(t)}function wn(){K&&Mt()}const Yt=0,Tn=1;let U=!1,V=Yt,L=!1,M=null,C=!1,ut=!1;function pt(t){C=t}function ht(t){ut=t}let S=[],N=0;let u=null;function $(t){u=t}let a=null;function Z(t){a=t}let T=null;function mn(t){T=t}let v=null,E=0,g=null;function An(t){g=t}let Ht=0,k=!1,f=null;function jt(){return++Ht}function it(){return!st||f!==null&&f.l===null}function B(t){var o,i;var n=t.f;if(n&R)return!0;if(n&j){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&Dt(l),e&&a!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||A(t,h)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&Q)try{r.fn(t);return}catch{r.f^=Q}r=r.parent}throw U=!1,t}function Rn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&Q)===0)}function W(t,n,r,e){if(U){if(r===null&&(U=!1),Rn(n))throw t;return}r!==null&&(U=!0);{gn(t,n);return}}function Bt(t){var ft;var n=v,r=E,e=g,s=u,l=k,o=T,i=f,p=t.f;v=null,E=0,g=null,u=p&(m|z)?null:t,k=!C&&(p&O)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!k)for(c=E;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,g=e,u=s,k=l,T=o,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(A(n,j),n.f&(O|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function X(t){var n=t.f;if(!(n&b)){A(t,h);var r=a,e=f;a=t;try{n&lt?dn(t):bt(t),Pt(t),Nt(t);var s=Bt(t);t.teardown=typeof s=="function"?s:null,t.version=Ht}catch(l){W(l,t,r,e||t.ctx)}finally{a=r}}}function Ut(){if(N>1e3){N=0;try{rn()}catch(t){if(M!==null)W(t,M,null);else throw t}}N++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Gt(s,l),xn(l)}}finally{C=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|P)))try{B(e)&&(X(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(s){W(s,e,null,e.ctx)}}}function In(){if(L=!1,N>1001)return;const t=S;S=[],Vt(t),L||(N=0,M=null)}function J(t){V===Yt&&(L||(L=!0,queueMicrotask(In))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|m)){if(!(r&h))return;n.f^=h}}S.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,o=l&&(s&h)!==0,i=r.next;if(!o&&!(s&P))if(s&H){if(l)r.f^=h;else try{B(r)&&X(r)}catch(c){W(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Et&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Gt(p,n)}function Kt(t){var n=V,r=S;try{Ut();const s=[];V=Tn,S=s,L=!1,Vt(r);var e=t==null?void 0:t();return wn(),(S.length>0||s.length>0)&&Kt(),N=0,M=null,e}finally{V=n,S=r}}async function xr(){await Promise.resolve(),Kt()}function Ir(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Ot(t);return at(t),e}if(u!==null){T!==null&&T.includes(t)&&en();var s=u.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&a!==null&&a.f&h&&!(a.f&m)&&g.includes(t)&&(A(a,R),J(a))}else if(r&&t.deps===null)for(var l=t,o=l.parent,i=l;o!==null;)if(o.f&y){var p=o;i=p,o=p.parent}else{var d=o;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&Dt(l)),t.v}function Or(t){const n=u;try{return u=null,t()}finally{u=n}}const On=~(R|j|h);function A(t,n){t.f=t.f&On|n}function Dr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},st&&!n&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function kr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=a,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];Z(l.effect),$(l.reaction),Ct(l.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)et(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&et(r)}}}function et(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{et(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{hn as $,Er as A,m as B,er as C,Kn as D,tt as E,nt as F,lr as G,w as H,ur as I,q as J,Tr as K,Hn as L,zt as M,Ln as N,Cr as O,nr as P,Dr as Q,z as R,ct as S,sr as T,or as U,pr as V,Ar as W,kr as X,vr as Y,ir as Z,hr as _,$t as a,Wn as a0,Cn as a1,un as a2,_r as a3,ar as a4,P as a5,Rr as a6,gr as a7,En as a8,Sr as a9,Kt as aA,xr as aB,Gn as aC,Jt as aD,Zn as aa,on as ab,zn as ac,qt as ad,dr as ae,yn as af,I as ag,fn as ah,u as ai,Xn as aj,Jn as ak,D as al,yt as am,qn as an,fr as ao,Nn as ap,$ as aq,cr as ar,an as as,Rt as at,gt as au,jn as av,mr as aw,yr as ax,Ct as ay,pn as az,Or as b,f as c,bn as d,Un as e,$n as f,Zt as g,x as h,_t as i,Ir as j,a as k,Vn as l,kn as m,Fn as n,Pn as o,Yn as p,Bn as q,Mn as r,ot as s,mt as t,wr as u,Z as v,Qn as w,tr as x,rr as y,_n as z};