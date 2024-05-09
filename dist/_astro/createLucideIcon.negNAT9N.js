import{r as f,a as me}from"./index.BbIZh3sz.js";var ie={exports:{}},G={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=f,ye=Symbol.for("react.element"),ve=Symbol.for("react.fragment"),xe=Object.prototype.hasOwnProperty,we=he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ce={key:!0,ref:!0,__self:!0,__source:!0};function le(e,r,t){var o,s={},n=null,i=null;t!==void 0&&(n=""+t),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(i=r.ref);for(o in r)xe.call(r,o)&&!Ce.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)s[o]===void 0&&(s[o]=r[o]);return{$$typeof:ye,type:e,key:n,ref:i,props:s,_owner:we.current}}G.Fragment=ve;G.jsx=le;G.jsxs=le;ie.exports=G;var ke=ie.exports;function P(){return P=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},P.apply(this,arguments)}function $e(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function ae(...e){return r=>e.forEach(t=>$e(t,r))}function mr(...e){return f.useCallback(ae(...e),e)}const q=f.forwardRef((e,r)=>{const{children:t,...o}=e,s=f.Children.toArray(t),n=s.find(ze);if(n){const i=n.props.children,l=s.map(d=>d===n?f.Children.count(i)>1?f.Children.only(null):f.isValidElement(i)?i.props.children:null:d);return f.createElement(U,P({},o,{ref:r}),f.isValidElement(i)?f.cloneElement(i,void 0,l):null)}return f.createElement(U,P({},o,{ref:r}),t)});q.displayName="Slot";const U=f.forwardRef((e,r)=>{const{children:t,...o}=e;return f.isValidElement(t)?f.cloneElement(t,{...Ae(o,t.props),ref:r?ae(r,t.ref):t.ref}):f.Children.count(t)>1?f.Children.only(null):null});U.displayName="SlotClone";const Se=({children:e})=>f.createElement(f.Fragment,null,e);function ze(e){return f.isValidElement(e)&&e.type===Se}function Ae(e,r){const t={...r};for(const o in r){const s=e[o],n=r[o];/^on[A-Z]/.test(o)?s&&n?t[o]=(...l)=>{n(...l),s(...l)}:s&&(t[o]=s):o==="style"?t[o]={...s,...n}:o==="className"&&(t[o]=[s,n].filter(Boolean).join(" "))}return{...e,...t}}function ce(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=ce(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Ee(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=ce(e))&&(o&&(o+=" "),o+=r);return o}const te=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,oe=Ee,je=(e,r)=>t=>{var o;if(r?.variants==null)return oe(e,t?.class,t?.className);const{variants:s,defaultVariants:n}=r,i=Object.keys(s).map(c=>{const u=t?.[c],g=n?.[c];if(u===null)return null;const h=te(u)||te(g);return s[c][h]}),l=t&&Object.entries(t).reduce((c,u)=>{let[g,h]=u;return h===void 0||(c[g]=h),c},{}),d=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,u)=>{let{class:g,className:h,...v}=u;return Object.entries(v).every(C=>{let[m,y]=C;return Array.isArray(y)?y.includes({...n,...l}[m]):{...n,...l}[m]===y})?[...c,g,h]:c},[]);return oe(e,i,d,t?.class,t?.className)};function de(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=de(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Re(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=de(e))&&(o&&(o+=" "),o+=r);return o}const Z="-";function Me(e){const r=Ne(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function s(i){const l=i.split(Z);return l[0]===""&&l.length!==1&&l.shift(),ue(l,r)||Pe(i)}function n(i,l){const d=t[i]||[];return l&&o[i]?[...d,...o[i]]:d}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function ue(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?ue(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(Z);return r.validators.find(({validator:i})=>i(n))?.classGroupId}const ne=/^\[(.+)\]$/;function Pe(e){if(ne.test(e)){const r=ne.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function Ne(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Ie(Object.entries(e.classGroups),t).forEach(([n,i])=>{F(i,o,n,r)}),o}function F(e,r,t,o){e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:se(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(_e(s)){F(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,i])=>{F(i,se(r,n),t,o)})})}function se(e,r){let t=e;return r.split(Z).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function _e(e){return e.isThemeGetter}function Ie(e,r){return r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,l])=>[r+i,l])):n);return[t,s]}):e}function Oe(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function s(n,i){t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set(n,i){t.has(n)?t.set(n,i):s(n,i)}}}const fe="!";function Ge(e){const r=e.separator,t=r.length===1,o=r[0],s=r.length;return function(i){const l=[];let d=0,c=0,u;for(let m=0;m<i.length;m++){let y=i[m];if(d===0){if(y===o&&(t||i.slice(m,m+s)===r)){l.push(i.slice(c,m)),c=m+s;continue}if(y==="/"){u=m;continue}}y==="["?d++:y==="]"&&d--}const g=l.length===0?i:i.substring(c),h=g.startsWith(fe),v=h?g.substring(1):g,C=u&&u>c?u-c:void 0;return{modifiers:l,hasImportantModifier:h,baseClassName:v,maybePostfixModifierPosition:C}}}function Te(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function Ve(e){return{cache:Oe(e.cacheSize),splitModifiers:Ge(e),...Me(e)}}const Le=/\s+/;function We(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=new Set;return e.trim().split(Le).map(i=>{const{modifiers:l,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=t(i);let g=o(u?c.substring(0,u):c),h=!!u;if(!g){if(!u)return{isTailwindClass:!1,originalClassName:i};if(g=o(c),!g)return{isTailwindClass:!1,originalClassName:i};h=!1}const v=Te(l).join(":");return{isTailwindClass:!0,modifierId:d?v+fe:v,classGroupId:g,originalClassName:i,hasPostfixModifier:h}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:l,classGroupId:d,hasPostfixModifier:c}=i,u=l+d;return n.has(u)?!1:(n.add(u),s(d,c).forEach(g=>n.add(l+g)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function Be(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=pe(r))&&(o&&(o+=" "),o+=t);return o}function pe(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=pe(e[o]))&&(t&&(t+=" "),t+=r);return t}function Ue(e,...r){let t,o,s,n=i;function i(d){const c=r.reduce((u,g)=>g(u),e());return t=Ve(c),o=t.cache.get,s=t.cache.set,n=l,l(d)}function l(d){const c=o(d);if(c)return c;const u=We(d,t);return s(d,u),u}return function(){return n(Be.apply(null,arguments))}}function p(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const be=/^\[(?:([a-z-]+):)?(.+)\]$/i,Fe=/^\d+\/\d+$/,qe=new Set(["px","full","screen"]),Ze=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,He=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Je=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ke=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function w(e){return z(e)||qe.has(e)||Fe.test(e)}function $(e){return A(e,"length",nr)}function z(e){return!!e&&!Number.isNaN(Number(e))}function O(e){return A(e,"number",z)}function R(e){return!!e&&Number.isInteger(Number(e))}function Ye(e){return e.endsWith("%")&&z(e.slice(0,-1))}function a(e){return be.test(e)}function S(e){return Ze.test(e)}const Qe=new Set(["length","size","percentage"]);function De(e){return A(e,Qe,ge)}function er(e){return A(e,"position",ge)}const rr=new Set(["image","url"]);function tr(e){return A(e,rr,ir)}function or(e){return A(e,"",sr)}function M(){return!0}function A(e,r,t){const o=be.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function nr(e){return He.test(e)&&!Je.test(e)}function ge(){return!1}function sr(e){return Ke.test(e)}function ir(e){return Xe.test(e)}function lr(){const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),s=p("borderColor"),n=p("borderRadius"),i=p("borderSpacing"),l=p("borderWidth"),d=p("contrast"),c=p("grayscale"),u=p("hueRotate"),g=p("invert"),h=p("gap"),v=p("gradientColorStops"),C=p("gradientColorStopPositions"),m=p("inset"),y=p("margin"),k=p("opacity"),x=p("padding"),H=p("saturate"),T=p("scale"),J=p("sepia"),K=p("skew"),X=p("space"),Y=p("translate"),V=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",a,r],b=()=>[a,r],Q=()=>["",w,$],N=()=>["auto",z,a],D=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],_=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],B=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",a],re=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[z,O],I=()=>[z,a];return{cacheSize:500,separator:":",theme:{colors:[M],spacing:[w,$],blur:["none","",S,a],brightness:j(),borderColor:[e],borderRadius:["none","","full",S,a],borderSpacing:b(),borderWidth:Q(),contrast:j(),grayscale:E(),hueRotate:I(),invert:E(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[Ye,$],inset:W(),margin:W(),opacity:j(),padding:b(),saturate:j(),scale:j(),sepia:E(),skew:I(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":re()}],"break-before":[{"break-before":re()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...D(),a]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R,a]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",R,a]}],"grid-cols":[{"grid-cols":[M]}],"col-start-end":[{col:["auto",{span:["full",R,a]},a]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[M]}],"row-start-end":[{row:["auto",{span:[R,a]},a]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[M]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",z,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",w,$]}],"underline-offset":[{"underline-offset":["auto",w,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...D(),er]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",De]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},tr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[..._(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:_()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",..._()]}],"outline-offset":[{"outline-offset":[w,a]}],"outline-w":[{outline:[w,$]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[w,$]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,or]}],"shadow-color":[{shadow:[M]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":ee()}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",S,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[g]}],saturate:[{saturate:[H]}],sepia:[{sepia:[J]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:I()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:I()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[R,a]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[K]}],"skew-y":[{"skew-y":[K]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[w,$,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const ar=Ue(lr);function cr(...e){return ar(Re(e))}const dr=je("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground ",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ur=f.forwardRef(({className:e,variant:r,size:t,asChild:o=!1,...s},n)=>{const i=o?q:"button";return ke.jsx(i,{className:cr(dr({variant:r,size:t,className:e})),ref:n,...s})});ur.displayName="Button";const fr=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],hr=fr.reduce((e,r)=>{const t=f.forwardRef((o,s)=>{const{asChild:n,...i}=o,l=n?q:r;return f.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.createElement(l,P({},i,{ref:s}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function yr(e,r){e&&me.flushSync(()=>e.dispatchEvent(r))}/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=(e,r)=>{const t=f.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:l="",children:d,...c},u)=>f.createElement("svg",{ref:u,...pr,width:s,height:s,stroke:o,strokeWidth:i?Number(n)*24/Number(s):n,className:["lucide",`lucide-${br(e)}`,l].join(" "),...c},[...r.map(([g,h])=>f.createElement(g,h)),...Array.isArray(d)?d:[d]]));return t.displayName=`${e}`,t};export{hr as $,ur as B,P as _,cr as a,je as b,vr as c,Re as d,q as e,mr as f,yr as g,ke as j};
