import"../chunks/disclose-version.Bg9kRutz.js";import{b as S}from"../chunks/paths.B30ziZlg.js";import{M as j,e as O,i as T}from"../chunks/milestones.Ds1D6ffO.js";import{H}from"../chunks/control.CYgJF_JY.js";import{s as y}from"../chunks/props.INYp6AFX.js";import{V as F,W as _,Y as l,Z as o,_ as v,j as L}from"../chunks/runtime.C_MPNIXE.js";import{a as d}from"../chunks/store.Cr5HzctL.js";import{a as g,t as h}from"../chunks/template.CWdr5b2X.js";import{s as m}from"../chunks/attributes.ClxxC44_.js";function N(t,e){throw new H(t,e)}new TextEncoder;const P=({params:{category:t,milestone:e}})=>{var r,a;const s=(a=(r=j[t])==null?void 0:r.milestones)==null?void 0:a[e];return s||N(404,`Milestone not found: ${t}/${e}`),console.log("Found:",s),{category:t,milestoneId:e,milestone:s}},I=Object.freeze(Object.defineProperty({__proto__:null,load:P},Symbol.toStringTag,{value:"Module"}));var R=h('<a class="level-item svelte-105z18d"><p class="level-text svelte-105z18d"> </p></a>'),V=h('<div class="milestone-header svelte-105z18d"><div class="icon-wrapper svelte-105z18d"><img class="svelte-105z18d"></div> <h1 class="svelte-105z18d"> </h1> <p class="description svelte-105z18d"> </p></div> <ul class="levels-list svelte-105z18d"></ul>',1);function W(t,e){var s=V(),r=F(s),a=l(r),c=l(a);o(a);var n=v(a,2),z=l(n,!0);o(n);var p=v(n,2),x=l(p,!0);o(p),o(r);var f=v(r,2);O(f,21,()=>e.levels,T,(b,M,w)=>{var i=R(),u=l(i),E=l(u,!0);o(u),o(i),_(()=>{m(i,"href",`./${e.id}/${w}`),d(E,L(M))}),g(b,i)}),o(f),_(()=>{m(c,"src",S+e.icon),m(c,"alt",e.title),d(z,e.title),d(x,e.description)}),g(t,s)}function J(t,e){const{milestone:s,category:r,milestoneId:a}=e.data;console.log("Rendering:",s),W(t,y(s,{id:a}))}export{J as component,I as universal};