import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{K as d,u as f,c as v,b as h,M as u,j as _,N as $,O as x,z as k,Q as y,V as j,W as z,X as E,Y as l,Z as g,_ as K}from"../chunks/runtime.C_MPNIXE.js";import{s as M,a as b,b as N}from"../chunks/store.Cr5HzctL.js";import{a as O,t as Q}from"../chunks/template.CWdr5b2X.js";import{s as S}from"../chunks/entry.C1DIZfQ4.js";function V(s=!1){const t=v,e=t.l.u;if(!e)return;let n=()=>x(t.s);if(s){let a=0,r={};const p=k(()=>{let i=!1;const c=t.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(p)}e.b.length&&d(()=>{m(t,n),u(e.b)}),f(()=>{const a=h(()=>e.m.map($));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&f(()=>{m(t,n),u(e.a)})}function m(s,t){if(s.l.s)for(const e of s.l.s)_(e);t()}const W=()=>{const s=S;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},X={subscribe(s){return W().page.subscribe(s)}};var Y=Q("<h1> </h1> <p> </p>",1);function D(s,t){y(t,!1);const e=M(),n=()=>N(X,"$page",e);V();var a=Y(),r=j(a),p=l(r,!0);g(r);var i=K(r,2),c=l(i,!0);g(i),z(()=>{var o;b(p,n().status),b(c,(o=n().error)==null?void 0:o.message)}),O(s,a),E()}export{D as component};