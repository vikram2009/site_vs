"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8812],{9900:function(e,t,n){n.d(t,{p:function(){return d}});var o=n(5893),a=n(7294),i=n(9008),r=n.n(i);let l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},p=e=>{let t=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);let n="";e.title&&(n=e.title,l.templateTitle&&(n=l.templateTitle.replace(/%s/g,()=>n)),t.push((0,o.jsx)("title",{children:n},"title")));let a=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,i=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow;if(a||i?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),t.push((0,o.jsx)("meta",{name:"robots",content:"".concat(a?"noindex":"index",",").concat(i?"nofollow":"follow")},"robots")),t.push((0,o.jsx)("meta",{name:"googlebot",content:"".concat(a?"noindex":"index",",").concat(i?"nofollow":"follow")},"googlebot"))):(t.push((0,o.jsx)("meta",{name:"robots",content:"index,follow"},"robots")),t.push((0,o.jsx)("meta",{name:"googlebot",content:"index,follow"},"googlebot"))),e.description&&t.push((0,o.jsx)("meta",{name:"description",content:e.description},"description")),e.twitter&&(e.twitter.cardType&&t.push((0,o.jsx)("meta",{name:"twitter:card",content:e.twitter.cardType},"twitter:card")),e.twitter.site&&t.push((0,o.jsx)("meta",{name:"twitter:site",content:e.twitter.site},"twitter:site")),e.twitter.handle&&t.push((0,o.jsx)("meta",{name:"twitter:creator",content:e.twitter.handle},"twitter:creator"))),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push((0,o.jsx)("meta",{property:"og:url",content:e.openGraph.url||e.canonical},"og:url")),e.openGraph.type){let r=e.openGraph.type.toLowerCase();t.push((0,o.jsx)("meta",{property:"og:type",content:r},"og:type"))}(e.openGraph.title||e.title)&&t.push((0,o.jsx)("meta",{property:"og:title",content:e.openGraph.title||n},"og:title")),(e.openGraph.description||e.description)&&t.push((0,o.jsx)("meta",{property:"og:description",content:e.openGraph.description||e.description},"og:description")),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((e,n)=>{t.push((0,o.jsx)("meta",{property:"og:image",content:e.url},"og:image:0".concat(n))),e.alt&&t.push((0,o.jsx)("meta",{property:"og:image:alt",content:e.alt},"og:image:alt0".concat(n))),e.width?t.push((0,o.jsx)("meta",{property:"og:image:width",content:e.width.toString()},"og:image:width0".concat(n))):l.defaultOpenGraphImageWidth&&t.push((0,o.jsx)("meta",{property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()},"og:image:width0".concat(n))),e.height?t.push((0,o.jsx)("meta",{property:"og:image:height",content:e.height.toString()},"og:image:height".concat(n))):l.defaultOpenGraphImageHeight&&t.push((0,o.jsx)("meta",{property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()},"og:image:height".concat(n)))}),e.openGraph.locale&&t.push((0,o.jsx)("meta",{property:"og:locale",content:e.openGraph.locale},"og:locale")),e.openGraph.site_name&&t.push((0,o.jsx)("meta",{property:"og:site_name",content:e.openGraph.site_name},"og:site_name"))}return e.canonical&&t.push((0,o.jsx)("link",{rel:"canonical",href:e.canonical},"canonical")),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(e=>{t.push((0,o.jsx)("meta",{...e},e.name?e.name:e.property))}),t};class s extends a.Component{render(){let{title:e,noindex:t=!1,nofollow:n,description:a,canonical:i,openGraph:l,facebook:s,twitter:c,additionalMetaTags:d,titleTemplate:u,mobileAlternate:h,languageAlternates:g}=this.props;return(0,o.jsx)(r(),{children:p({title:e,noindex:t,nofollow:n,description:a,canonical:i,facebook:s,openGraph:l,additionalMetaTags:d,twitter:c,titleTemplate:u,mobileAlternate:h,languageAlternates:g})})}}var c=n(5955);let d=e=>{var t,n,a,i;let{title:r,description:l,url:p,image:d}=(null==e?void 0:e.head)||{},u=(null==e?void 0:null===(t=e.settings)||void 0===t?void 0:t.name)||"",h=d||(null==e?void 0:null===(n=e.page)||void 0===n?void 0:n.cover)||"",g=r||(0,c.S$)(null==e?void 0:null===(a=e.page)||void 0===a?void 0:a.title)||"",m=null==e?void 0:null===(i=e.settings)||void 0===i?void 0:i.noIndex,f={title:g,description:l,openGraph:{type:"website",locale:"en_US",url:p,site_name:r||u,description:l,images:[{url:h,alt:g}]},twitter:{cardType:"summary_large_image"}};return m&&(f.noindex=!0,f.nofollow=!0),(0,o.jsx)(s,{...f})}},9843:function(e,t,n){n.d(t,{cn:function(){return o}});let o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(e=>!!e).join(" ")}},5955:function(e,t,n){var o;n.d(t,{Fk:function(){return a},HU:function(){return r},OP:function(){return c},S$:function(){return p},mg:function(){return s},q6:function(){return l},wj:function(){return i}});let a=e=>/^data:image/.test(e),i=e=>e?"block-"+e.split("/").join("-"):"",r=(e,t)=>null==e?void 0:e.startsWith(t.assetEndpoint),l=e=>null==e?void 0:e.startsWith("https://images.unsplash.com"),p=e=>null!==(o=null==e?void 0:e.reduce((e,t)=>e+t[0],""))&&void 0!==o?o:"";function s(e){var t;return(null==e?void 0:null===(t=e.view)||void 0===t?void 0:t.superProperties)||(null==e?void 0:e.superProperties)||{}}function c(e){var t;return!!(null===n.g||void 0===n.g?void 0:null===(t=n.g.document)||void 0===t?void 0:t.querySelector('script[src="'+e+'"]'))}}}]);