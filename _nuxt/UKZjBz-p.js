import{b as F,f as k,y as be,o as i,t as W,q as ue,ad as ee,ae as Se,ah as Ce,F as le}from"./BD5YuzA9.js";import{k as re,l as de,n as te,V as R,e as Ie,c as Ve,a as xe,o as ze,m as Pe,R as Ae,j as Re,d as _e,b as we,u as Ee,p as Te,i as Fe}from"./Bzn-_PMu.js";import{m as U,f as Q,j as ae,u as ve,i as fe,b as Be,p as Ge,q as Oe,d as De,t as Me,v as We,a as L}from"./psFYo1SV.js";import{p as X,k as B,T as Le,g as J,t as He,z as qe,a1 as $e,I as ne,j as je,C as Ke,m as pe,q as he,v as Ne,U as se,y as Ue,h as Qe}from"./Bbehs7N6.js";import{V as ie}from"./BnWRgCQ-.js";function Xe(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const m=G(o,a),c=me(o,u,a),y=G(o,n),v=ye(o,n),g=y*.4;return c>v?v-g:c+m<v+y?v-m+y+g:c}function Je(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=G(u,a),m=ye(u,n),c=G(u,n);return m-o/2+c/2}function oe(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Ye(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function me(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:m}=a;return e?n?m-o+u:u:a.scrollTop}function G(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ye(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ze=Symbol.for("vuetify:v-slide-group"),ke=X({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:B,default:"$next"},prevIcon:{type:B,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...U(),...Le({mobile:null}),...Q(),...re({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ce=J()({name:"VSlideGroup",props:ke(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=He(),{displayClasses:o,mobile:m}=qe(e),c=de(e,e.symbol),y=F(!1),v=F(0),g=F(0),I=F(0),d=k(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:_}=ae(),{resizeRef:p,contentRect:x}=ae(),s=$e(),b=k(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),H=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(ne){let l=-1;be(()=>[c.selected.value,_.value,x.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(_.value&&x.value){const t=d.value?"width":"height";g.value=_.value[t],I.value=x.value[t],y.value=g.value+1<I.value}if(H.value>=0&&p.el){const t=p.el.children[S.value];w(t,e.centerActive)}})})}const z=F(!1);function w(l,t){let r=0;t?r=Je({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Xe({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),O(r)}function O(l){if(!ne||!f.el)return;const t=G(d.value,f.el),r=me(d.value,u.value,f.el);if(!(oe(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:M,offsetWidth:N}=f.el;l=M-N-l}d.value?s.horizontal(l,b.value):s(l,b.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function V(l){if(z.value=!0,!(!y.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){w(r);return}}}function q(l){z.value=!1}let E=!1;function D(l){var t;!E&&!z.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),E=!1}function T(){E=!0}function $(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,A;if(!p.el)return;let t;if(!l)t=je(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(A=p.el.querySelector(":focus"))==null?void 0:A.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function P(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*g.value;let A=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:M,offsetWidth:N}=f.el;A+=M-N}O(A)}const j=k(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),K=k(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!m.value;case!0:return y.value||Math.abs(v.value)>0;case"mobile":return m.value||y.value||Math.abs(v.value)>0;default:return!m.value&&(y.value||Math.abs(v.value)>0)}}),Y=k(()=>Math.abs(v.value)>1),Z=k(()=>{if(!f.value)return!1;const l=oe(d.value,f.el),t=Ye(d.value,f.el);return l-t-Math.abs(v.value)>1});return ve(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":K.value,"v-slide-group--is-overflowing":y.value},o.value,e.class],style:e.style,tabindex:z.value||c.selected.value.length?-1:0,onFocus:D},{default:()=>{var l,t,r;return[K.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Y.value}],onMousedown:T,onClick:()=>Y.value&&P("prev")},[((l=a.prev)==null?void 0:l.call(a,j.value))??i(te,null,{default:()=>[i(R,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:V,onFocusout:q,onKeydown:$},[(t=a.default)==null?void 0:t.call(a,j.value)])]),K.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Z.value}],onMousedown:T,onClick:()=>Z.value&&P("next")},[((r=a.next)==null?void 0:r.call(a,j.value))??i(te,null,{default:()=>[i(R,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:P,scrollOffset:v,focus:C}}}),ge=Symbol.for("vuetify:v-chip-group"),el=X({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ke},...ke(),...U(),...re({selectedClass:"v-chip--selected"}),...Q(),...pe(),...fe({variant:"tonal"})},"VChipGroup");J()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=he(e),{isSelected:o,select:m,next:c,prev:y,selected:v}=de(e,ge);return Ne({VChip:{color:W(e,"color"),disabled:W(e,"disabled"),filter:W(e,"filter"),variant:W(e,"variant")}}),ve(()=>{const g=ce.filterProps(e);return i(ce,ue(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=a.default)==null?void 0:I.call(a,{isSelected:o,select:m,next:c,prev:y,selected:v.value})]}})}),{}}});const ll=X({activeClass:String,appendAvatar:String,appendIcon:B,closable:Boolean,closeIcon:{type:B,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:se(),onClickOnce:se(),...Ie(),...U(),...Ve(),...xe(),...ze(),...Be(),...Ge(),...Pe(),...Q({tag:"span"}),...pe(),...fe({variant:"tonal"})},"VChip"),ol=J()({name:"VChip",directives:{Ripple:Ae},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:m}=Ue(),{borderClasses:c}=Re(e),{colorClasses:y,colorStyles:v,variantClasses:g}=Oe(e),{densityClasses:I}=_e(e),{elevationClasses:d}=we(e),{roundedClasses:f}=De(e),{sizeClasses:_}=Ee(e),{themeClasses:p}=he(e),x=Qe(e,"modelValue"),s=Te(e,ge,!1),b=Me(e,a),H=k(()=>e.link!==!1&&b.isLink.value),S=k(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||b.isClickable.value)),z=k(()=>({"aria-label":m(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),x.value=!1,u("click:close",h)}}));function w(h){var V;u("click",h),S.value&&((V=b.navigate)==null||V.call(b,h),s==null||s.toggle())}function O(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),w(h))}return()=>{const h=b.isLink.value?"a":e.tag,V=!!(e.appendIcon||e.appendAvatar),q=!!(V||o.append),E=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&s,T=!!(e.prependIcon||e.prependAvatar),$=!!(T||o.prepend),C=!s||s.isSelected.value;return x.value&&ee(i(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":D,"v-chip--pill":e.pill},p.value,c.value,C?y.value:void 0,I.value,d.value,f.value,_.value,g.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,tabindex:S.value?0:void 0,onClick:w,onKeydown:S.value&&!H.value&&O},{default:()=>{var P;return[We(S.value,"v-chip"),D&&i(Fe,{key:"filter"},{default:()=>[ee(i("div",{class:"v-chip__filter"},[o.filter?i(L,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(R,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ce,s.isSelected.value]])]}),$&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(L,{key:"prepend-defaults",disabled:!T,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(le,null,[e.prependIcon&&i(R,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((P=o.default)==null?void 0:P.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),q&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(L,{key:"append-defaults",disabled:!V,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(le,null,[e.appendIcon&&i(R,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),E&&i("button",ue({key:"close",class:"v-chip__close",type:"button"},z.value),[o.close?i(L,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(R,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Se("ripple"),S.value&&e.ripple,null]])}}});export{ol as V};
