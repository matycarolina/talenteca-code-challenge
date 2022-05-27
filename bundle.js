var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function c(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,c){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const c=e.subscribe(...n);return c.unsubscribe?()=>c.unsubscribe():c}(n,c))}function s(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function p(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function x(t){$=t}function v(){if(!$)throw new Error("Function called outside component initialization");return $}const k=[],w=[],y=[],_=[],E=Promise.resolve();let C=!1;function D(t){y.push(t)}let O=!1;const A=new Set;function S(){if(!O){O=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];x(e),N(e.$$)}for(x(null),k.length=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];A.has(e)||(A.add(e),e())}y.length=0}while(k.length);for(;_.length;)_.pop()();C=!1,O=!1,A.clear()}}function N(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const L=new Set;let j;function F(t,e){t&&t.i&&(L.delete(t),t.i(e))}function P(t,e,n,c){if(t&&t.o){if(L.has(t))return;L.add(t),j.c.push((()=>{L.delete(t),c&&(n&&t.d(1),c())})),t.o(e)}}function T(t,e){const n=e.token={};function o(t,o,r,l){if(e.token!==n)return;e.resolved=l;let s=e.ctx;void 0!==r&&(s=s.slice(),s[r]=l);const u=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(j={r:0,c:[],p:j},P(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),j.r||c(j.c),j=j.p)})):e.block.d(1),u.c(),F(u,1),u.m(e.mount(),e.anchor),i=!0),e.block=u,e.blocks&&(e.blocks[o]=u),i&&S()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=v();if(t.then((t=>{x(n),o(e.then,1,e.value,t),x(null)}),(t=>{if(x(n),o(e.catch,2,e.error,t),x(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function q(t,e,n){const c=e.slice(),{resolved:o}=t;t.current===t.then&&(c[t.value]=o),t.current===t.catch&&(c[t.error]=o),t.block.p(c,n)}function M(t){t&&t.c()}function z(t,n,r,l){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,r),l||D((()=>{const n=u.map(e).filter(o);i?i.push(...n):c(n),t.$$.on_mount=[]})),a.forEach(D)}function H(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(k.push(t),C||(C=!0,E.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,o,r,l,s,u,i,f=[-1]){const d=$;x(e);const h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};i&&i(h.root);let g=!1;if(h.ctx=r?r(e,o.props||{},((t,n,...c)=>{const o=c.length?c[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&X(e,t)),n})):[],h.update(),g=!0,c(h.before_update),h.fragment=!!l&&l(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();o.intro&&F(e.$$.fragment),z(e,o.target,o.anchor,o.customElement),S()}x(d)}class G{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(e){let n;return{c(){var t,e,c;n=d("div"),n.innerHTML='<a href="https://www.talenteca.com/"><img src="https://pbs.twimg.com/profile_images/570653640042360832/q0bxVHxv.png" alt="LOGO TALENTECA" class="svelte-m92uh"/></a>',m(n,"class","Logo"),t="text-align",e="left",n.style.setProperty(t,e,c?"important":"")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class U extends G{constructor(t){super(),B(this,t,null,I,r,{})}}const V=[];let J=function(e,n=t){let c;const o=new Set;function l(t){if(r(e,t)&&(e=t,c)){const t=!V.length;for(const t of o)t[1](),V.push(t,e);if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(r,s=t){const u=[r,s];return o.add(u),1===o.size&&(c=n(l)||t),r(e),()=>{o.delete(u),0===o.size&&(c(),c=null)}}}}(!1);function K(e){let n,c,o,r,l,f;return{c(){n=d("div"),c=d("div"),o=d("button"),m(o,"class","circle svelte-7tw513"),m(c,"class",r=s(e[0]?"switch-container on":"switch-container")+" svelte-7tw513"),m(n,"class","Switch")},m(t,r){i(t,n,r),u(n,c),u(c,o),l||(f=p(o,"click",e[1]),l=!0)},p(t,[e]){1&e&&r!==(r=s(t[0]?"switch-container on":"switch-container")+" svelte-7tw513")&&m(c,"class",r)},i:t,o:t,d(t){t&&a(n),l=!1,f()}}}function Q(t,e,n){let c;return l(t,J,(t=>n(0,c=t))),[c,function(){J.update((t=>!t))}]}class R extends G{constructor(t){super(),B(this,t,Q,K,r,{})}}function W(e){let n,c,o,r,l,s,f;return r=new U({}),s=new R({}),{c(){n=d("div"),c=d("h1"),c.textContent="Planes de Servicio Ofrecidos",o=g(),M(r.$$.fragment),l=g(),M(s.$$.fragment),m(c,"class","svelte-n8cc5t"),m(n,"class","Header svelte-n8cc5t")},m(t,e){i(t,n,e),u(n,c),u(n,o),z(r,n,null),u(n,l),z(s,n,null),f=!0},p:t,i(t){f||(F(r.$$.fragment,t),F(s.$$.fragment,t),f=!0)},o(t){P(r.$$.fragment,t),P(s.$$.fragment,t),f=!1},d(t){t&&a(n),H(r),H(s)}}}class Y extends G{constructor(t){super(),B(this,t,null,W,r,{})}}function Z(t,e,n){const c=t.slice();return c[6]=e[n],c}function tt(t,e,n){const c=t.slice();return c[9]=e[n],c}function et(t,e,n){const c=t.slice();return c[6]=e[n],c}function nt(t,e,n){const c=t.slice();return c[9]=e[n],c}function ct(e){let n;return{c(){n=h("Oops. Algo salió mal.")},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function ot(t){let e,n,c=t[0],o=[];for(let e=0;e<c.length;e+=1)o[e]=rt(nt(t,c,e));let r=t[5],l=[];for(let e=0;e<r.length;e+=1)l[e]=lt(et(t,r,e));return{c(){e=d("table");for(let t=0;t<o.length;t+=1)o[t].c();n=g();for(let t=0;t<l.length;t+=1)l[t].c();m(e,"class","svelte-1xg3kx5")},m(t,c){i(t,e,c);for(let t=0;t<o.length;t+=1)o[t].m(e,null);u(e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(t,s){if(1&s){let r;for(c=t[0],r=0;r<c.length;r+=1){const l=nt(t,c,r);o[r]?o[r].p(l,s):(o[r]=rt(l),o[r].c(),o[r].m(e,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=c.length}if(0&s){let n;for(r=t[5],n=0;n<r.length;n+=1){const c=et(t,r,n);l[n]?l[n].p(c,s):(l[n]=lt(c),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=r.length}},d(t){t&&a(e),f(o,t),f(l,t)}}}function rt(t){let e,n,c=t[9]+"";return{c(){e=d("th"),n=h(c),m(e,"scope","row"),m(e,"class","svelte-1xg3kx5")},m(t,c){i(t,e,c),u(e,n)},p(t,e){1&e&&c!==(c=t[9]+"")&&b(n,c)},d(t){t&&a(e)}}}function lt(e){let n,c,o,r,l,s,f,p,b,$,x,v=e[6].name+"",k=e[6].prices[0].currency_symbol+"",w=e[6].prices[0].total+"",y=e[6].billing_frequency+"";return{c(){n=d("tr"),c=d("th"),o=h(v),r=g(),l=d("td"),s=h(k),f=h(w),p=g(),b=d("td"),$=h(y),x=g(),m(c,"scope","row"),m(c,"class","svelte-1xg3kx5"),m(l,"class","svelte-1xg3kx5"),m(b,"class","svelte-1xg3kx5"),m(n,"class","svelte-1xg3kx5")},m(t,e){i(t,n,e),u(n,c),u(c,o),u(n,r),u(n,l),u(l,s),u(l,f),u(n,p),u(n,b),u(b,$),u(n,x)},p:t,d(t){t&&a(n)}}}function st(e){let n;return{c(){n=h("Cargando...")},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function ut(e){let n;return{c(){n=d("p")},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function it(t){let e,n={ctx:t,current:null,token:null,hasCatch:!0,pending:gt,then:ft,catch:at,value:5,error:12};return T(mt(),n),{c(){e=h(""),n.block.c()},m(t,c){i(t,e,c),n.block.m(t,n.anchor=c),n.mount=()=>e.parentNode,n.anchor=e},p(e,c){q(n,t=e,c)},d(t){t&&a(e),n.block.d(t),n.token=null,n=null}}}function at(e){let n;return{c(){n=h("Oops. Algo salió mal.")},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function ft(t){let e,n,c=t[1],o=[];for(let e=0;e<c.length;e+=1)o[e]=dt(tt(t,c,e));let r=t[5],l=[];for(let e=0;e<r.length;e+=1)l[e]=ht(Z(t,r,e));return{c(){e=d("table");for(let t=0;t<o.length;t+=1)o[t].c();n=g();for(let t=0;t<l.length;t+=1)l[t].c();m(e,"class","svelte-1xg3kx5")},m(t,c){i(t,e,c);for(let t=0;t<o.length;t+=1)o[t].m(e,null);u(e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(t,s){if(2&s){let r;for(c=t[1],r=0;r<c.length;r+=1){const l=tt(t,c,r);o[r]?o[r].p(l,s):(o[r]=dt(l),o[r].c(),o[r].m(e,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=c.length}if(0&s){let n;for(r=t[5],n=0;n<r.length;n+=1){const c=Z(t,r,n);l[n]?l[n].p(c,s):(l[n]=ht(c),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=r.length}},d(t){t&&a(e),f(o,t),f(l,t)}}}function dt(t){let e,n,c=t[9]+"";return{c(){e=d("th"),n=h(c),m(e,"scope","row"),m(e,"class","svelte-1xg3kx5")},m(t,c){i(t,e,c),u(e,n)},p(t,e){2&e&&c!==(c=t[9]+"")&&b(n,c)},d(t){t&&a(e)}}}function ht(e){let n,c,o,r,l,s,f,p,b,$,x,v=e[6].name+"",k=e[6].prices[1].currency_symbol+"",w=e[6].prices[1].total+"",y=e[6].billing_frequency+"";return{c(){n=d("tr"),c=d("th"),o=h(v),r=g(),l=d("td"),s=h(k),f=h(w),p=g(),b=d("td"),$=h(y),x=g(),m(c,"scope","row"),m(c,"class","svelte-1xg3kx5"),m(l,"class","svelte-1xg3kx5"),m(b,"class","svelte-1xg3kx5"),m(n,"class","svelte-1xg3kx5")},m(t,e){i(t,n,e),u(n,c),u(c,o),u(n,r),u(n,l),u(l,s),u(l,f),u(n,p),u(n,b),u(b,$),u(n,x)},p:t,d(t){t&&a(n)}}}function gt(e){let n;return{c(){n=h("Cargando...")},m(t,e){i(t,n,e)},p:t,d(t){t&&a(n)}}}function pt(e){let n,c,o,r,l,s,f,h={ctx:e,current:null,token:null,hasCatch:!0,pending:st,then:ot,catch:ct,value:5,error:12};function b(t,e){return t[2]?it:ut}T(mt(),h);let $=b(e),x=$(e);return{c(){n=d("div"),h.block.c(),c=g(),o=d("div"),r=d("button"),r.textContent="Obtener precios en MXN",l=g(),x.c(),m(r,"type","button"),m(r,"class","svelte-1xg3kx5"),m(o,"class","svelte-1xg3kx5"),m(n,"class","Info svelte-1xg3kx5")},m(t,a){i(t,n,a),h.block.m(n,h.anchor=null),h.mount=()=>n,h.anchor=c,u(n,c),u(n,o),u(o,r),u(n,l),x.m(n,null),s||(f=p(r,"click",e[4]),s=!0)},p(t,[c]){q(h,e=t,c),$===($=b(e))&&x?x.p(e,c):(x.d(1),x=$(e),x&&(x.c(),x.m(n,null)))},i:t,o:t,d(t){t&&a(n),h.block.d(),h.token=null,h=null,x.d(),s=!1,f()}}}async function mt(){const t=await fetch("https://mocki.io/v1/b63c95fe-b27a-4035-a3f3-77808a353978"),e=await t.json();return console.log(e),e}function bt(t,e,n){let{tableData1:c=["Servicio","Precio en USD","Frecuencia de Facturación"]}=e,{tableData2:o=["Servicio","Precio en MXN","Frecuencia de Facturación"]}=e,r=!1;function l(){n(2,r=!r)}return t.$$set=t=>{"tableData1"in t&&n(0,c=t.tableData1),"tableData2"in t&&n(1,o=t.tableData2)},[c,o,r,l,()=>{l()}]}class $t extends G{constructor(t){super(),B(this,t,bt,pt,r,{tableData1:0,tableData2:1})}}function xt(t){let e,n,c,o,r,l;return n=new Y({}),o=new $t({}),{c(){e=d("main"),M(n.$$.fragment),c=g(),M(o.$$.fragment),m(e,"class",r=s(t[0]?"darkmode":"")+" svelte-i1me8b")},m(t,r){i(t,e,r),z(n,e,null),u(e,c),z(o,e,null),l=!0},p(t,[n]){(!l||1&n&&r!==(r=s(t[0]?"darkmode":"")+" svelte-i1me8b"))&&m(e,"class",r)},i(t){l||(F(n.$$.fragment,t),F(o.$$.fragment,t),l=!0)},o(t){P(n.$$.fragment,t),P(o.$$.fragment,t),l=!1},d(t){t&&a(e),H(n),H(o)}}}function vt(t,e,n){let c;return l(t,J,(t=>n(0,c=t))),[c]}return new class extends G{constructor(t){super(),B(this,t,vt,xt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
