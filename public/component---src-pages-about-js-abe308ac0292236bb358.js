(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(0),r=a.n(n),i=(a(158),a(160)),o=a(161),s="3357478705";t.default=function(e){var t=e.data;document.body.classList.add("show-content");var a=t.allMarkdownRemark.edges.filter(function(e){return"About"===e.node.frontmatter.title}),n=Math.ceil(a[0].node.wordCount.words/200);return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"About",keywords:["gatsby","application","react","portfolio","personal website","blog"]}),r.a.createElement("div",{className:"about sml-wrapper"},r.a.createElement("div",{className:"about__sec"},r.a.createElement("div",{className:"about__head-sec"},r.a.createElement("h2",{className:"about__head"},"About Me"),r.a.createElement("p",{className:"about__time"}," ",n," ",n>1?"minutes":"minute","  read ")),r.a.createElement("img",{src:t.imageOne.childImageSharp.fluid.src,alt:"Praveen Kumar Saini",className:"about__author-img"})),r.a.createElement("p",{className:"about__content content",dangerouslySetInnerHTML:{__html:a[0].node.html}})))}},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(38),c=a.n(s);a.d(t,"a",function(){return c.a});a(157),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},159:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(4),c=a.n(s),l=a(57),m=a(2),u=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(158),c=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],l=function(){return r.a.createElement("header",{className:"header",id:"top"},r.a.createElement("a",{href:"#top",className:"header__topbar"}),r.a.createElement("div",{className:"header__content-block"},r.a.createElement("div",{className:"header__logo-sec"},r.a.createElement(s.a,{to:"/",className:"header__logo"},"JS")),r.a.createElement("div",{className:"header__social-pack"},c.map(function(e,t){return r.a.createElement("div",{className:"header__social-sec",key:e.linkType},r.a.createElement("span",null," ",e.linkType," "),r.a.createElement("a",{href:e.socialLink+e.username,target:"_blank"}," @",e.username))}))))},m=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text center"},"Made with ❤️ JavaScript and SASS with React and Gatsby 💻"))},u=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement("main",{className:"wrapper main"},t),r.a.createElement(m,null))};u.propTypes={children:o.a.node.isRequired};t.a=u},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(163),l=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-abe308ac0292236bb358.js.map