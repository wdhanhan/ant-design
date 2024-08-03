(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["J1pTEVeu"],{J1pTEVeu:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return v;}});var i=t("d3__vuQ2"),l=t("hSu6qSb4"),a=t("9lWhVE4R"),o=l._(t("NIchKEYm")),r=t("dXftLIYJ"),s=t("zvFlsDim"),d=i._(t("blQDwOwN")),f=i._(t("K1GGSLl6")),c=i._(t("XT_r0qqK"));let u=(0,s.createStyles)(({token:e,css:n})=>{let{colorSplit:t,iconCls:i,fontSizeIcon:l}=e;return{prevNextNav:n`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: ${e.fontSize}px;
      border-top: 1px solid ${t};
      display: flex;
    `,pageNav:n`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      ${i} {
        color: #999;
        font-size: ${l}px;
        transition: all ${e.motionDurationSlow};
      }

      .chinese {
        margin-inline-start: ${e.marginXXS}px;
      }
    `,prevNav:n`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end ${e.motionDurationSlow};
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `,nextNav:n`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start ${e.motionDurationSlow};
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `};}),m=e=>Array.isArray(e)?e.reduce((e,n)=>n?"children"in n&&n.children?e.concat(m(n.children)??[]):e.concat(n):e,[]):null;var v=({rtl:e})=>{let{styles:n}=u(),t={className:"footer-nav-icon-before"},i={className:"footer-nav-icon-after"},l=e?(0,a.jsx)(r.RightOutlined,{...t}):(0,a.jsx)(r.LeftOutlined,{...t}),s=e?(0,a.jsx)(r.LeftOutlined,{...i}):(0,a.jsx)(r.RightOutlined,{...i}),[v,h]=(0,f.default)({before:l,after:s}),{isMobile:p}=(0,o.useContext)(c.default),[x,g]=(0,o.useMemo)(()=>{let e=m(v);if(!e)return[null,null];let n=-1;return e.forEach((e,t)=>{e&&e.key===h&&(n=t);}),[e[n-1],e[n+1]];},[v,h]);return p?null:(0,a.jsxs)("section",{className:n.prevNextNav,children:[x&&o.default.cloneElement(x.label,{className:(0,d.default)(n.pageNav,n.prevNav,x.className)}),g&&o.default.cloneElement(g.label,{className:(0,d.default)(n.pageNav,n.nextNav,g.className)})]});};}}]);
//# sourceMappingURL=J1pTEVeu-async.c59ed2c6.js.map