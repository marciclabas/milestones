import{ap as P,aq as O,v as A,m as Y,ai as j,k as H,ar as T,F as q,as as C,al as $,at as E,a4 as y,J as I,I as B,H as h,ah as F,au as J,av as Q,ae as W,a1 as X,aw as z,E as G,a7 as K,Q as U,h as S,X as Z,c as x,an as N,b as ee,ax as re,D as ae,j as te,f as se}from"./runtime.C_MPNIXE.js";import{b as ne}from"./template.CWdr5b2X.js";const ie=new Set,k=new Set;function g(e){var D;var r=this,t=r.ownerDocument,s=e.type,u=((D=e.composedPath)==null?void 0:D.call(e))||[],a=u[0]||e.target,c=0,_=e.__root;if(_){var l=u.indexOf(_);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var b=u.indexOf(r);if(b===-1)return;l<=b&&(c=l)}if(a=u[c]||e.target,a!==r){P(e,"currentTarget",{configurable:!0,get(){return a||t}});var m=j,o=H;O(null),A(null);try{for(var n,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+s];if(d!==void 0&&!a.disabled)if(Y(d)){var[V,...M]=d;V.apply(a,[e,...M])}else d.call(a,e)}catch(p){n?i.push(p):n=p}if(e.cancelBubble||f===r||f===null)break;a=f}if(n){for(let p of i)queueMicrotask(()=>{throw p});throw n}}finally{e.__root=r,delete e.currentTarget,O(m),A(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function fe(e,r){return L(e,r)}function be(e,r){T(),r.intro=r.intro??!1;const t=r.target,s=S,u=h;try{for(var a=q(t);a&&(a.nodeType!==8||a.data!==C);)a=$(a);if(!a)throw E;y(!0),I(a),B();const c=L(e,{...r,anchor:a});if(h===null||h.nodeType!==8||h.data!==F)throw J(),E;return y(!1),c}catch(c){if(c===E)return r.recover===!1&&Q(),T(),W(t),y(!1),fe(e,r);throw c}finally{y(s),I(u)}}const v=new Map;function L(e,{target:r,anchor:t,props:s={},events:u,context:a,intro:c=!0}){T();var _=new Set,l=o=>{for(var n=0;n<o.length;n++){var i=o[n];if(!_.has(i)){_.add(i);var f=oe(i);r.addEventListener(i,g,{passive:f});var d=v.get(i);d===void 0?(document.addEventListener(i,g,{passive:f}),v.set(i,1)):v.set(i,d+1)}}};l(X(ie)),k.add(l);var b=void 0,m=z(()=>{var o=t??r.appendChild(G());return K(()=>{if(a){U({});var n=x;n.c=a}u&&(s.$$events=u),S&&ne(o,null),b=e(o,s)||{},S&&(H.nodes_end=h),a&&Z()}),()=>{var f;for(var n of _){r.removeEventListener(n,g);var i=v.get(n);--i===0?(document.removeEventListener(n,g),v.delete(n)):v.set(n,i)}k.delete(l),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(b,m),b}let R=new WeakMap;function ve(e,r){const t=R.get(e);return t?(R.delete(e),t(r)):Promise.resolve()}function ce(e,r,t){if(e==null)return r(void 0),N;const s=ee(()=>e.subscribe(r,t));return s.unsubscribe?()=>s.unsubscribe():s}let w=!1;function he(e,r,t){const s=t[r]??(t[r]={store:null,source:ae(void 0),unsubscribe:N});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=N;else{var u=!0;s.unsubscribe=ce(e,a=>{u?s.source.v=a:se(s.source,a)}),u=!1}return te(s.source)}function pe(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ye(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,he as b,ye as c,be as h,fe as m,pe as s,ve as u};
