(this.webpackJsonpakarsh_ch=this.webpackJsonpakarsh_ch||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(0),a=n(1),i=n(22),l=n(3),s=n(13),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},h=n(5),u=n(32),d=[{index:!0,label:"Akarsh Chagantipati",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(4).then(n.t.bind(null,165,7))})),x=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},m=n(24),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(h.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Akarsh Chagantipati"}),Object(c.jsx)("h4",{children:'"Expect The Unexpected"'})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Akarsh. I like solving problems and exploring new things. I am currently pursuing undergraduation at ",Object(c.jsx)("a",{href:"http://www.vnrvjiet.ac.in/",children:"VNR VJIET"}),". What I know is a drop, what I don't know is an ocean, so I would love to connect, explore and learn new things ."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(h.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(h.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(m.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Akarsh Chagantipati ",Object(c.jsx)(h.b,{to:"/about",children:"akarsh-ch.me"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Akarsh Chagantipati ",defaultTitle:"Akarsh Chagantipati",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Akarsh Chagantipati's personal website."};t.a=k},24:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(28)),i=n(19),l=n(29),s=n(30),r=n(31),j=[{link:"https://github.com/akarsh033",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/akarsh-chagantipati-819747181",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://www.kaggle.com/akarsh033/",label:"Kaggle",icon:i.b},{link:"https://www.instagram.com/akarsh_033/",label:"Instagram",icon:i.a},{link:"mailto:akaesh033@gmail.com",label:"Email",icon:r.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n(15),l=n(5),s=n(3),r=n(20),j=(n(45),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,161))}))),o=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,162))})),b=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,163))})),h=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,164))})),u=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,167))})),d=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,166))})),O=function(){return Object(c.jsx)(l.a,{basename:"",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(r.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(s.a,{path:"/about",component:j}),Object(c.jsx)(s.a,{path:"/projects",component:u}),Object(c.jsx)(s.a,{path:"/contact",component:o}),Object(c.jsx)(s.a,{path:"/resume",component:d}),Object(c.jsx)(s.a,{component:h,status:404})]})})})},x=document.getElementById("root");x.hasChildNodes()?Object(i.hydrate)(Object(c.jsx)(O,{}),x):Object(i.render)(Object(c.jsx)(O,{}),x)}},[[46,1,3]]]);
//# sourceMappingURL=main.0270d4ce.chunk.js.map