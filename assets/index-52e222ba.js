(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a(){}function N(e){return e()}function O(){return Object.create(null)}function _(e){e.forEach(N)}function L(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function C(e){return Object.keys(e).length===0}function B(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function I(e){return document.createElement(e)}function M(e){return Array.from(e.childNodes)}let $;function h(e){$=e}const l=[],k=[];let d=[];const v=[],q=Promise.resolve();let g=!1;function F(){g||(g=!0,q.then(j))}function y(e){d.push(e)}const m=new Set;let f=0;function j(){if(f!==0)return;const e=$;do{try{for(;f<l.length;){const t=l[f];f++,h(t),H(t.$$)}}catch(t){throw l.length=0,f=0,t}for(h(null),l.length=0,f=0;k.length;)k.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];m.has(n)||(m.add(n),n())}d.length=0}while(l.length);for(;v.length;)v.pop()();g=!1,m.clear(),h(e)}function H(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}function K(e){const t=[],n=[];d.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),d=t}const z=new Set;function D(e,t){e&&e.i&&(z.delete(e),e.i(t))}function G(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||y(()=>{const i=e.$$.on_mount.map(N).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...i):_(i),e.$$.on_mount=[]}),s.forEach(y)}function J(e,t){const n=e.$$;n.fragment!==null&&(K(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(l.push(e),F(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,o,r,s,i,S=[-1]){const p=$;h(e);const c=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:O(),dirty:S,skip_bound:!1,root:t.target||p.$$.root};i&&i(c.root);let b=!1;if(c.ctx=n?n(e,t.props||{},(u,x,...w)=>{const E=w.length?w[0]:x;return c.ctx&&r(c.ctx[u],c.ctx[u]=E)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](E),b&&Q(e,u)),x}):[],c.update(),b=!0,_(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const u=M(t.target);c.fragment&&c.fragment.l(u),u.forEach(P)}else c.fragment&&c.fragment.c();t.intro&&D(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),j()}h(p)}class T{$destroy(){J(this,1),this.$destroy=a}$on(t,n){if(!L(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=I("h1"),t.textContent=`Hello ${V}!`},m(n,o){B(n,t,o)},p:a,i:a,o:a,d(n){n&&P(t)}}}let V="한주형";class W extends T{constructor(t){super(),R(this,t,null,U,A,{})}}new W({target:document.getElementById("app")});
