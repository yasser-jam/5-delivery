import{c as V,y as L,z as H,f as C,n as ue,w as fe,e as Ce,i as Ae,q as z,b as j,L as De,r as pe,p as Ve,E as We,d as ze,t as qe,M as je,o as D,ap as $e,ad as Ye,ah as Ge,ae as Ke,F as Ue,T as Xe}from"./BD5YuzA9.js";import{x as Te,aF as Le,p as $,I as q,N as ve,an as Ze,l as _,K as ye,aG as Je,M as de,aH as ge,H as Qe,z as et,m as tt,g as nt,h as ot,q as at,t as rt}from"./Bbehs7N6.js";import{g as it,B as oe,c as he,n as lt,a as st,s as ct}from"./DWGaNmQL.js";import{z as we,A as ae,B as re,C as be,D as Ee,m as ut,e as ft,l as vt,c as dt,g as mt,w as yt,E as gt,u as ht,M as wt}from"./psFYo1SV.js";const Z=new WeakMap;function bt(e,t){Object.keys(t).forEach(n=>{if(Te(n)){const o=Le(n),a=Z.get(e);if(t[n]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===t[n])){e.addEventListener(o,t[n]);const r=a||new Set;r.add([o,t[n]]),Z.has(e)||Z.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Et(e,t){Object.keys(t).forEach(n=>{if(Te(n)){const o=Le(n),a=Z.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(n)})}function Be(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function St(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?xt(e):me(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(me(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function xt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Ot(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ie(e,t){return{x:e.x+t.x,y:e.y+t.y}}function kt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Se(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return ie({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ie({x:a,y:r},t)}return ie({x:t.width/2,y:t.height/2},t)}const Me={static:At,connected:Tt},Pt=$({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Me},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Ct(e,t){const n=V({}),o=V();q&&ve(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var l,i;L(()=>e.locationStrategy,r),H(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:o.value=(i=Me[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:n,updateLocation:o}}function At(){}function pt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=lt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Tt(e,t,n){(Array.isArray(e.target.value)||Ot(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Ze(()=>{const f=we(t.location,e.isRtl.value),c=t.origin==="overlap"?f:t.origin==="auto"?ae(f):we(t.origin,e.isRtl.value);return f.side===c.side&&f.align===re(c).align?{preferredAnchor:be(f),preferredOrigin:be(c)}:{preferredAnchor:f,preferredOrigin:c}}),[l,i,m,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(f=>C(()=>{const c=parseFloat(t[f]);return isNaN(c)?1/0:c})),y=C(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const f=t.offset.split(" ").map(parseFloat);return f.length<2&&f.push(0),f}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let h=!1;const k=new ResizeObserver(()=>{h&&S()});L([e.target,e.contentEl],(f,c)=>{let[x,B]=f,[b,E]=c;b&&!Array.isArray(b)&&k.unobserve(b),x&&!Array.isArray(x)&&k.observe(x),E&&k.unobserve(E),B&&k.observe(B)},{immediate:!0}),H(()=>{k.disconnect()});function S(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const f=it(e.target.value),c=pt(e.contentEl.value,e.isRtl.value),x=Q(e.contentEl.value),B=12;x.length||(x.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(c.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),c.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const b=x.reduce((O,w)=>{const v=w.getBoundingClientRect(),d=new oe({x:w===document.documentElement?0:v.x,y:w===document.documentElement?0:v.y,width:w.clientWidth,height:w.clientHeight});return O?new oe({x:Math.max(O.left,d.left),y:Math.max(O.top,d.top),width:Math.min(O.right,d.right)-Math.max(O.left,d.left),height:Math.min(O.bottom,d.bottom)-Math.max(O.top,d.top)}):d},void 0);b.x+=B,b.y+=B,b.width-=B*2,b.height-=B*2;let E={anchor:a.value,origin:r.value};function I(O){const w=new oe(c),v=Se(O.anchor,f),d=Se(O.origin,w);let{x:R,y:M}=kt(v,d);switch(O.anchor.side){case"top":M-=y.value[0];break;case"bottom":M+=y.value[0];break;case"left":R-=y.value[0];break;case"right":R+=y.value[0];break}switch(O.anchor.align){case"top":M-=y.value[1];break;case"bottom":M+=y.value[1];break;case"left":R-=y.value[1];break;case"right":R+=y.value[1];break}return w.x+=R,w.y+=M,w.width=Math.min(w.width,m.value),w.height=Math.min(w.height,u.value),{overflows:he(w,b),x:R,y:M}}let F=0,P=0;const s={x:0,y:0},A={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:O,y:w,overflows:v}=I(E);F+=O,P+=w,c.x+=O,c.y+=w;{const d=Ee(E.anchor),R=v.x.before||v.x.after,M=v.y.before||v.y.after;let Y=!1;if(["x","y"].forEach(p=>{if(p==="x"&&R&&!A.x||p==="y"&&M&&!A.y){const N={anchor:{...E.anchor},origin:{...E.origin}},U=p==="x"?d==="y"?re:ae:d==="y"?ae:re;N.anchor=U(N.anchor),N.origin=U(N.origin);const{overflows:W}=I(N);(W[p].before<=v[p].before&&W[p].after<=v[p].after||W[p].before+W[p].after<(v[p].before+v[p].after)/2)&&(E=N,Y=A[p]=!0)}}),Y)continue}v.x.before&&(F+=v.x.before,c.x+=v.x.before),v.x.after&&(F-=v.x.after,c.x-=v.x.after),v.y.before&&(P+=v.y.before,c.y+=v.y.before),v.y.after&&(P-=v.y.after,c.y-=v.y.after);{const d=he(c,b);s.x=b.width-d.x.before-d.x.after,s.y=b.height-d.y.before-d.y.after,F+=d.x.before,c.x+=d.x.before,P+=d.y.before,c.y+=d.y.before}break}const ne=Ee(E.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${E.anchor.side} ${E.anchor.align}`,transformOrigin:`${E.origin.side} ${E.origin.align}`,top:_(le(P)),left:e.isRtl.value?void 0:_(le(F)),right:e.isRtl.value?_(le(-F)):void 0,minWidth:_(ne==="y"?Math.min(l.value,f.width):l.value),maxWidth:_(xe(ye(s.x,l.value===1/0?0:l.value,m.value))),maxHeight:_(xe(ye(s.y,i.value===1/0?0:i.value,u.value)))}),{available:s,contentBox:c}}return L(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>S()),ue(()=>{const f=S();if(!f)return;const{available:c,contentBox:x}=f;x.height>c.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let se=!0;const ee=[];function Lt(e){!se||ee.length?(ee.push(e),ce()):(se=!1,e(),ce())}let Oe=-1;function ce(){cancelAnimationFrame(Oe),Oe=requestAnimationFrame(()=>{const e=ee.shift();e&&e(),ee.length?ce():se=!0})}const J={none:null,close:Ft,block:Rt,reposition:Nt},Bt=$({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function Mt(e,t){if(!q)return;let n;fe(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Ce(),await new Promise(o=>setTimeout(o)),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=J[e.scrollStrategy])==null||o.call(J,t,e,n)}))}),H(()=>{n==null||n.stop()})}function Ft(e){function t(n){e.isActive.value=!1}Fe(e.targetEl.value??e.contentEl.value,t)}function Rt(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...Q(e.targetEl.value,t.contained?n:void 0),...Q(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>me(i)&&i)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,m)=>{i.style.setProperty("--v-body-scroll-x",_(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",_(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",_(a)),i.classList.add("v-overlay-scroll-blocked")}),H(()=>{o.forEach((i,m)=>{const u=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),y=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),h=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-u,i.scrollTop=-y,i.style.scrollBehavior=h}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Nt(e,t,n){let o=!1,a=-1,r=-1;function l(i){Lt(()=>{var y,h;const m=performance.now();(h=(y=e.updateLocation).value)==null||h.call(y,i),o=(performance.now()-m)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{Fe(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Fe(e,t){const n=[document,...Q(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),H(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const _t=Symbol.for("vuetify:v-menu"),Ht=$({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function It(e,t){let n=()=>{};function o(l){n==null||n();const i=Number(l?e.openDelay:e.closeDelay);return new Promise(m=>{n=Je(i,()=>{t==null||t(l),m(l)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:n,runOpenDelay:a,runCloseDelay:r}}const Dt=$({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Ht()},"VOverlay-activator");function Vt(e,t){let{isActive:n,isTop:o}=t;const a=de("useActivator"),r=V();let l=!1,i=!1,m=!0;const u=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:h,runCloseDelay:k}=It(e,s=>{s===(e.openOnHover&&l||u.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==s&&(m=!0),n.value=s)}),S=V(),f={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,n.value||(S.value=[s.clientX,s.clientY]),n.value=!n.value},onMouseenter:s=>{var A;(A=s.sourceCapabilities)!=null&&A.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,h())},onMouseleave:s=>{l=!1,k()},onFocus:s=>{Qe(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,h())},onBlur:s=>{i=!1,s.stopPropagation(),k()}},c=C(()=>{const s={};return y.value&&(s.onClick=f.onClick),e.openOnHover&&(s.onMouseenter=f.onMouseenter,s.onMouseleave=f.onMouseleave),u.value&&(s.onFocus=f.onFocus,s.onBlur=f.onBlur),s}),x=C(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,h()},s.onMouseleave=()=>{l=!1,k()}),u.value&&(s.onFocusin=()=>{i=!0,h()},s.onFocusout=()=>{i=!1,k()}),e.closeOnContentClick){const A=Ae(_t,null);s.onClick=()=>{n.value=!1,A==null||A.closeParents()}}return s}),B=C(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{m&&(l=!0,m=!1,h())},s.onMouseleave=()=>{l=!1,k()}),s});L(o,s=>{s&&(e.openOnHover&&!l&&(!u.value||!i)||u.value&&!i&&(!e.openOnHover||!l))&&(n.value=!1)}),L(n,s=>{s||setTimeout(()=>{S.value=void 0})},{flush:"post"});const b=ge();fe(()=>{b.value&&ue(()=>{r.value=b.el})});const E=ge(),I=C(()=>e.target==="cursor"&&S.value?S.value:E.value?E.el:Re(e.target,a)||r.value),F=C(()=>Array.isArray(I.value)?void 0:I.value);let P;return L(()=>!!e.activator,s=>{s&&q?(P=Ce(),P.run(()=>{Wt(e,a,{activatorEl:r,activatorEvents:c})})):P&&P.stop()},{flush:"post",immediate:!0}),H(()=>{P==null||P.stop()}),{activatorEl:r,activatorRef:b,target:I,targetEl:F,targetRef:E,activatorEvents:c,contentEvents:x,scrimEvents:B}}function Wt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;L(()=>e.activator,(m,u)=>{if(u&&m!==u){const y=i(u);y&&l(y)}m&&ue(()=>r())},{immediate:!0}),L(()=>e.activatorProps,()=>{r()}),H(()=>{l()});function r(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&bt(m,z(a.value,u))}function l(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&Et(m,z(a.value,u))}function i(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const u=Re(m,t);return o.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,o.value}}function Re(e,t){var o,a;if(!e)return;let n;if(e==="parent"){let r=(a=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;n=r}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function zt(){if(!q)return j(!1);const{ssr:e}=et();if(e){const t=j(!1);return De(()=>{t.value=!0}),t}else return j(!0)}const qt=$({eager:Boolean},"lazy");function jt(e,t){const n=j(!1),o=C(()=>n.value||e.eager||t.value);L(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function $t(){const t=de("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const ke=Symbol.for("vuetify:stack"),K=pe([]);function Yt(e,t,n){const o=de("useStack"),a=!n,r=Ae(ke,void 0),l=pe({activeChildren:new Set});Ve(ke,l);const i=j(+t.value);ve(e,()=>{var h;const y=(h=K.at(-1))==null?void 0:h[1];i.value=y?y+10:+t.value,a&&K.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),H(()=>{if(a){const k=We(K).findIndex(S=>S[0]===o.uid);K.splice(k,1)}r==null||r.activeChildren.delete(o.uid)})});const m=j(!0);a&&fe(()=>{var h;const y=((h=K.at(-1))==null?void 0:h[0])===o.uid;setTimeout(()=>m.value=y)});const u=C(()=>!l.activeChildren.size);return{globalTop:ze(m),localTop:u,stackStyles:C(()=>({zIndex:i.value}))}}function Gt(e){return{teleportTarget:C(()=>{const n=e();if(n===!0||!q)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Kt(){return!0}function Ne(e,t,n){if(!e||_e(e,n)===!1)return!1;const o=Be(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function _e(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Kt)(e)}function Ut(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ne(e,t,n)&&setTimeout(()=>{_e(e,n)&&o&&o(e)},0)}function Pe(e,t){const n=Be(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Xt={mounted(e,t){const n=a=>Ut(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Ne(a,e,t)};Pe(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Pe(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Zt(e){const{modelValue:t,color:n,...o}=e;return D(Xe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&D("div",z({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Jt=$({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Dt(),...ut(),...ft(),...qt(),...Pt(),...Bt(),...tt(),...vt()},"VOverlay"),on=nt()({name:"VOverlay",directives:{ClickOutside:Xt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Jt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=ot(e,"modelValue"),l=C({get:()=>r.value,set:g=>{g&&e.disabled||(r.value=g)}}),{themeClasses:i}=at(e),{rtlClasses:m,isRtl:u}=rt(),{hasContent:y,onAfterLeave:h}=jt(e,l),k=dt(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:S,localTop:f,stackStyles:c}=Yt(l,qe(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:B,target:b,targetEl:E,targetRef:I,activatorEvents:F,contentEvents:P,scrimEvents:s}=Vt(e,{isActive:l,isTop:f}),{teleportTarget:A}=Gt(()=>{var G;const g=e.attach||e.contained;if(g)return g;const T=(G=x==null?void 0:x.value)==null?void 0:G.getRootNode();return T instanceof ShadowRoot?T:!1}),{dimensionStyles:te}=mt(e),ne=zt(),{scopeId:O}=$t();L(()=>e.disabled,g=>{g&&(l.value=!1)});const w=V(),v=V(),d=V(),{contentStyles:R,updateLocation:M}=Ct(e,{isRtl:u,contentEl:d,target:b,isActive:l});Mt(e,{root:w,contentEl:d,targetEl:E,isActive:l,updateLocation:M});function Y(g){a("click:outside",g),e.persistent?X():l.value=!1}function p(g){return l.value&&S.value&&(!e.scrim||g.target===v.value)}q&&L(l,g=>{g?window.addEventListener("keydown",N):window.removeEventListener("keydown",N)},{immediate:!0}),je(()=>{q&&window.removeEventListener("keydown",N)});function N(g){var T,G;g.key==="Escape"&&S.value&&(e.persistent?X():(l.value=!1,(T=d.value)!=null&&T.contains(document.activeElement)&&((G=x.value)==null||G.focus())))}const U=yt();ve(()=>e.closeOnBack,()=>{gt(U,g=>{S.value&&l.value?(g(!1),e.persistent?X():l.value=!1):g()})});const W=V();L(()=>l.value&&(e.absolute||e.contained)&&A.value==null,g=>{if(g){const T=St(w.value);T&&T!==document.scrollingElement&&(W.value=T.scrollTop)}});function X(){e.noClickAnimation||d.value&&st(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ct})}function He(){a("afterEnter")}function Ie(){h(),a("afterLeave")}return ht(()=>{var g;return D(Ue,null,[(g=n.activator)==null?void 0:g.call(n,{isActive:l.value,targetRef:I,props:z({ref:B},F.value,e.activatorProps)}),ne.value&&y.value&&D($e,{disabled:!A.value,to:A.value},{default:()=>[D("div",z({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},i.value,m.value,e.class],style:[c.value,{"--v-overlay-opacity":e.opacity,top:_(W.value)},e.style],ref:w},O,o),[D(Zt,z({color:k,modelValue:l.value&&!!e.scrim,ref:v},s.value),null),D(wt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterEnter:He,onAfterLeave:Ie},{default:()=>{var T;return[Ye(D("div",z({ref:d,class:["v-overlay__content",e.contentClass],style:[te.value,R.value]},P.value,e.contentProps),[(T=n.default)==null?void 0:T.call(n,{isActive:l})]),[[Ge,l.value],[Ke("click-outside"),{handler:Y,closeConditional:p,include:()=>[x.value]}]])]}})])]})])}),{activatorEl:x,scrimEl:v,target:b,animateClick:X,contentEl:d,globalTop:S,localTop:f,updateLocation:M}}});export{on as V,_t as a,Ht as b,It as c,St as g,Jt as m,$t as u};
