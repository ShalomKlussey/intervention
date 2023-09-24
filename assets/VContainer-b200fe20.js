import{g as o,m as v,au as G,u as m,b as n,a$ as C,p as V,I as u,ar as P,b3 as A,a_ as f,a5 as H,a6 as K,a7 as N,b4 as z,C as J,a8 as Q,D as U,b1 as W,E as S,F as X,b5 as Y,b6 as Z,a1 as ee,a9 as ae,b7 as te,at as ne,aa as se,ab as de,b8 as ie,O as le,ac as ce,K as re,b2 as ue,q as h,R as oe,ax as ve,e as me,b9 as be,ba as ge,a2 as ke}from"./index-c8d845ea.js";const ye=o()({name:"VCardActions",props:v(),setup(e,s){let{slots:t}=s;return G({VBtn:{variant:"text"}}),m(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=C("v-card-subtitle"),Ce=C("v-card-title"),Ve=V({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...v(),...P()},"VCardItem"),Ie=o()({name:"VCardItem",props:Ve(),setup(e,s){let{slots:t}=s;return m(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),g=!!(i||t.append),k=!!(e.title||t.title),y=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(f,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(A,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[k&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),y&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(f,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&n(A,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),pe=C("v-card-text"),Ae=V({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...H(),...v(),...P(),...K(),...N(),...z(),...J(),...Q(),...U(),...W(),...S(),...X(),...Y({variant:"elevated"})},"VCard"),Se=o()({name:"VCard",directives:{Ripple:Z},props:Ae(),setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:b}=ee(e),{borderClasses:i}=ae(e),{colorClasses:g,colorStyles:k,variantClasses:y}=te(e),{densityClasses:l}=ne(e),{dimensionStyles:d}=se(e),{elevationClasses:x}=de(e),{loaderClasses:B}=ie(e),{locationStyles:D}=le(e),{positionClasses:T}=ce(e),{roundedClasses:_}=re(e),c=ue(e,t),L=h(()=>e.link!==!1&&c.isLink.value),r=h(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return m(()=>{const R=L.value?"a":e.tag,E=!!(a.title||e.title),F=!!(a.subtitle||e.subtitle),O=E||F,M=!!(a.append||e.appendAvatar||e.appendIcon),$=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),q=O||$||M,w=!!(a.text||e.text);return oe(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},b.value,i.value,g.value,l.value,x.value,B.value,T.value,_.value,y.value,e.class],style:[k.value,d.value,D.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[j&&n("div",{key:"image",class:"v-card__image"},[a.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(me,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&n(pe,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(ye,null,{default:a.actions}),ge(r.value,"v-card")]}}),[[ve("ripple"),r.value&&e.ripple]])}),{}}});const he=V({fluid:{type:Boolean,default:!1},...v(),...S()},"VContainer"),xe=o()({name:"VContainer",props:he(),setup(e,s){let{slots:t}=s;const{rtlClasses:a}=ke();return m(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}});export{Se as V,xe as a,Ce as b,pe as c,ye as d};