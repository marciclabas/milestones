import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{Y as v,_ as g,Z as n,W as h,V as p,j as i,z as O}from"../chunks/runtime.C_MPNIXE.js";import{a as f,t as u,c as E}from"../chunks/template.CWdr5b2X.js";import{e as _,i as b,M as I}from"../chunks/milestones.Ds1D6ffO.js";import{s as S}from"../chunks/props.INYp6AFX.js";import{a as x}from"../chunks/store.Cr5HzctL.js";import{s as l}from"../chunks/attributes.ClxxC44_.js";import{b as d}from"../chunks/paths.B30ziZlg.js";var z=u('<a class="milestone-icon svelte-788wg"><img class="svelte-788wg"> <span class="svelte-788wg"> </span></a>');function C(o,e){var a=z(),t=v(a),r=g(t,2),s=v(r,!0);n(r),n(a),h(()=>{l(a,"href",e.href),l(t,"src",d+e.icon),l(t,"alt",e.title),x(s,e.title)}),f(o,a)}var L=u('<a class="svelte-3hqomv"> </a> <div class="category svelte-3hqomv"><div class="grid svelte-3hqomv"></div></div>',1);function N(o,e){var a=L(),t=p(a),r=v(t,!0);n(t);var s=g(t,2),c=v(s);_(c,21,()=>Object.entries(e.milestones),b,(w,m)=>{let y=()=>i(m)[0],j=()=>i(m)[1].title,q=()=>i(m)[1].icon;var M=O(()=>`${d}/${e.id}/${y()}`);C(w,{get title(){return j()},get icon(){return q()},get href(){return i(M)}})}),n(c),n(s),h(()=>{l(t,"href",`${d}/${e.id}`),x(r,e.name)}),f(o,a)}function D(o){var e=E(),a=p(e);_(a,1,()=>Object.entries(I),b,(t,r)=>{let s=()=>i(r)[0];N(t,S(()=>i(r)[1],{get id(){return s()}}))}),f(o,e)}export{D as component};
