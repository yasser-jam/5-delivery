import{m as k,e as J,g as K,u as T,b as j,l as Q,c as X,d as q,M as b,f as Y,i as Z,q as p,a as ee,v as ae}from"./psFYo1SV.js";import{g as P,p as B,M as te,al as ne,l as re,k as le,m as se,q as ie}from"./Bbehs7N6.js";import{k as ue,al as oe,x as ce,o as t,f as z,t as de,b as _,c as ve,y as R,ag as ge,n as me,M as fe,ad as M,ae as ye,F as Se,q as _e,ah as he}from"./BD5YuzA9.js";import{I as Ve,c as be,m as ze,d as ke,u as Pe,V as Ce}from"./Bzn-_PMu.js";function Ne(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",i=arguments.length>2?arguments[2]:void 0;return P()({name:i??ue(oe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:o},...k()},setup(n,v){let{slots:c}=v;return()=>{var g;return ce(n.tag,{class:[e,n.class],style:n.style},(g=c.default)==null?void 0:g.call(c))}}})}function Ie(e){return{aspectStyles:z(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const O=B({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...k(),...J()},"VResponsive"),W=P()({name:"VResponsive",props:O(),setup(e,o){let{slots:i}=o;const{aspectStyles:n}=Ie(e),{dimensionStyles:v}=K(e);return T(()=>{var c;return t("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[t("div",{class:"v-responsive__sizer",style:n.value},null),(c=i.additional)==null?void 0:c.call(i),i.default&&t("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),Re=B({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...O(),...k(),...j(),...Q()},"VImg"),Te=P()({name:"VImg",directives:{intersect:Ve},props:Re(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:i,slots:n}=o;const{backgroundColorClasses:v,backgroundColorStyles:c}=X(de(e,"color")),{roundedClasses:g}=q(e),m=te("VImg"),h=_(""),l=ve(),r=_(e.eager?"loading":"idle"),f=_(),V=_(),u=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=z(()=>u.value.aspect||f.value/V.value||0);R(()=>e.src,()=>{C(r.value!=="idle")}),R(y,(a,s)=>{!a&&s&&l.value&&S(l.value)}),ge(()=>C());function C(a){if(!(e.eager&&a)&&!(ne&&!a&&!e.eager)){if(r.value="loading",u.value.lazySrc){const s=new Image;s.src=u.value.lazySrc,S(s,null)}u.value.src&&me(()=>{var s;i("loadstart",((s=l.value)==null?void 0:s.currentSrc)||u.value.src),setTimeout(()=>{var d;if(!m.isUnmounted)if((d=l.value)!=null&&d.complete){if(l.value.naturalWidth||A(),r.value==="error")return;y.value||S(l.value,null),r.value==="loading"&&w()}else y.value||S(l.value),D()})})}}function w(){var a;m.isUnmounted||(D(),S(l.value),r.value="loaded",i("load",((a=l.value)==null?void 0:a.currentSrc)||u.value.src))}function A(){var a;m.isUnmounted||(r.value="error",i("error",((a=l.value)==null?void 0:a.currentSrc)||u.value.src))}function D(){const a=l.value;a&&(h.value=a.currentSrc||a.src)}let I=-1;fe(()=>{clearTimeout(I)});function S(a){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{if(clearTimeout(I),m.isUnmounted)return;const{naturalHeight:U,naturalWidth:x}=a;U||x?(f.value=x,V.value=U):!a.complete&&r.value==="loading"&&s!=null?I=window.setTimeout(d,s):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,V.value=1)};d()}const F=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var d;if(!u.value.src||r.value==="idle")return null;const a=t("img",{class:["v-img__img",F.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:w,onError:A},null),s=(d=n.sources)==null?void 0:d.call(n);return t(b,{transition:e.transition,appear:!0},{default:()=>[M(s?t("picture",{class:"v-img__picture"},[s,a]):a,[[he,r.value==="loaded"]])]})},H=()=>t(b,{transition:e.transition},{default:()=>[u.value.lazySrc&&r.value!=="loaded"&&t("img",{class:["v-img__img","v-img__img--preload",F.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),L=()=>n.placeholder?t(b,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!n.error)&&t("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,$=()=>n.error?t(b,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&t("div",{class:"v-img__error"},[n.error()])]}):null,G=()=>e.gradient?t("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=_(!1);{const a=R(y,s=>{s&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),a())})}return T(()=>{const a=W.filterProps(e);return M(t(W,_e({class:["v-img",{"v-img--booting":!N.value},v.value,g.value,e.class],style:[{width:re(e.width==="auto"?f.value:e.width)},c.value,e.style]},a,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t(Se,null,[t(E,null,null),t(H,null,null),t(G,null,null),t(L,null,null),t($,null,null)]),default:n.default}),[[ye("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:l,state:r,naturalWidth:f,naturalHeight:V}}}),Be=B({start:Boolean,end:Boolean,icon:le,image:String,text:String,...k(),...be(),...j(),...ze(),...Y(),...se(),...Z({variant:"flat"})},"VAvatar"),Ue=P()({name:"VAvatar",props:Be(),setup(e,o){let{slots:i}=o;const{themeClasses:n}=ie(e),{colorClasses:v,colorStyles:c,variantClasses:g}=p(e),{densityClasses:m}=ke(e),{roundedClasses:h}=q(e),{sizeClasses:l,sizeStyles:r}=Pe(e);return T(()=>t(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,v.value,m.value,h.value,l.value,g.value,e.class],style:[c.value,r.value,e.style]},{default:()=>[i.default?t(ee,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[i.default()]}):e.image?t(Te,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t(Ce,{key:"icon",icon:e.icon},null):e.text,ae(!1,"v-avatar")]})),{}}});export{Ue as V,Te as a,Ne as c};
