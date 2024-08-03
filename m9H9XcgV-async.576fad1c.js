(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["m9H9XcgV"],{"5kvlOFCu":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var i=l("9lWhVE4R"),n=l("B-i5_7B2");let a=({num:e=3})=>(0,i.jsx)("li",{children:Array.from({length:e}).map((e,t)=>(0,i.jsx)(n.Skeleton.Avatar,{size:"small",active:!0,style:{marginInlineStart:0===t?0:-8}},t))});var r=e=>{let{item:{username:t,url:l}={},loading:r}=e;return r?(0,i.jsx)(a,{}):(null==t?void 0:t.includes("github-actions"))?null:(0,i.jsx)(n.Tooltip,{title:t,children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`https://github.com/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.Avatar,{size:"small",src:l,alt:t,children:t})})})});};},m9H9XcgV:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return h;}});var i=l("d3__vuQ2"),n=l("9lWhVE4R"),a=l("NIchKEYm"),r=i._(l("0CNMNXYe")),s=l("zvFlsDim"),o=i._(l("blQDwOwN")),u=l("fSTtFmFO"),d=i._(l("XT_r0qqK")),m=i._(l("5kvlOFCu"));let c=(0,s.createStyles)(({token:e,css:t})=>({contributorsList:t`
    margin-top: 120px !important;
  `,listMobile:t`
    margin: 1em 0 !important;
  `,title:t`
    font-size: ${e.fontSizeSM}px;
    opacity: 0.5;
    margin-bottom: ${e.marginXS}px;
  `,list:t`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${e.motionDurationSlow};
      margin-inline-end: -${e.marginXS}px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `}));var h=({filename:e})=>{let{formatMessage:t}=(0,u.useIntl)(),{styles:l}=c(),{isMobile:i}=(0,a.useContext)(d.default);return e?(0,n.jsxs)("div",{className:(0,o.default)(l.contributorsList,{[l.listMobile]:i}),children:[(0,n.jsx)("div",{className:l.title,children:t({id:"app.content.contributors"})}),(0,n.jsx)(r.default,{cache:!0,repo:"ant-design",owner:"ant-design",fileName:e,className:l.list,renderItem:(e,t)=>(0,n.jsx)(m.default,{item:e,loading:t},null==e?void 0:e.url)})]}):null;};}}]);
//# sourceMappingURL=m9H9XcgV-async.576fad1c.js.map