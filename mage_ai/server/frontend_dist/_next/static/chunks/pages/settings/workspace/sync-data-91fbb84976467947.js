(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2403],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(82394),i=t(21831),o=t(82684),c=t(47999),l=t(49894),a=t(93461),u=t(57384),s=t(12344),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),m=t(32063),b=t(15270),y=t(82531),g=t(66166),v=t(3055),j=t(49125),O=t(91427),x=t(24141);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=function(e){var n,t=e.after,r=e.afterHidden,p=e.afterWidth,w=e.afterWidthOverride,k=e.before,P=e.beforeWidth,_=e.breadcrumbs,I=e.children,S=e.errors,C=e.headerMenuItems,N=e.navigationItems,H=e.setErrors,D=e.subheaderChildren,E=e.title,z=e.uuid,M=(0,x.i)().width,T="dashboard_after_width_".concat(z),A="dashboard_before_width_".concat(z),W=(0,o.useRef)(null),q=(0,o.useState)(w?p:(0,O.U2)(T,p)),B=q[0],R=q[1],L=(0,o.useState)(!1),F=L[0],Y=L[1],G=(0,o.useState)(k?Math.max((0,O.U2)(A,P),13*j.iI):null),U=G[0],J=G[1],X=(0,o.useState)(!1),Q=X[0],V=X[1],K=(0,o.useState)(null)[1],$=y.ZP.projects.list({},{revalidateOnFocus:!1}).data,ee=null===$||void 0===$?void 0:$.projects,ne=[];_?ne.push.apply(ne,(0,i.Z)(_)):(null===ee||void 0===ee?void 0:ee.length)>=1&&ne.push.apply(ne,[{label:function(){var e;return null===(e=ee[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return E}}]),(0,o.useEffect)((function(){null===W||void 0===W||!W.current||F||Q||null===K||void 0===K||K(W.current.getBoundingClientRect().width)}),[F,B,Q,U,W,K,M]),(0,o.useEffect)((function(){F||(0,O.t8)(T,B)}),[r,F,B,T]),(0,o.useEffect)((function(){Q||(0,O.t8)(A,U)}),[Q,U,A]);var te=(0,g.Z)(p);return(0,o.useEffect)((function(){w&&te!==p&&R(p)}),[w,p,te]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{title:E}),(0,f.jsx)(s.Z,{breadcrumbs:ne,menuItems:C,project:null===ee||void 0===ee?void 0:ee[0],version:null===ee||void 0===ee||null===(n=ee[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===N||void 0===N?void 0:N.length)&&(0,f.jsx)(d.lm,{children:(0,f.jsx)(b.Z,{navigationItems:N})}),(0,f.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:t,afterHeightOffset:v.Mz,afterHidden:r,afterMousedownActive:F,afterWidth:B,before:k,beforeHeightOffset:v.Mz,beforeMousedownActive:Q,beforeWidth:d.k1+(k?U:0),hideAfterCompletely:!0,leftOffset:k?d.k1:null,mainContainerRef:W,setAfterMousedownActive:Y,setAfterWidth:R,setBeforeMousedownActive:V,setBeforeWidth:J,children:[D&&(0,f.jsx)(h,{children:D}),I]})})]}),S&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===H||void 0===H?void 0:H(null)},children:(0,f.jsx)(l.Z,Z(Z({},S),{},{onClose:function(){return null===H||void 0===H?void 0:H(null)}}))})]})}},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return l},W:function(){return c}});var r=t(9518),i=t(23831),o=t(3055),c=34*t(49125).iI,l=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],o.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")}))},79585:function(e,n,t){"use strict";t.d(n,{DQ:function(){return s},HY:function(){return c},SA:function(){return d},WH:function(){return o},eC:function(){return a},fF:function(){return l},tC:function(){return u}});var r=t(81132),i=t(9736),o="Workspace",c="Preferences",l="Git settings",a="Users",u="Account",s="Profile",d=function(e){var n=e.owner,t=e.roles,d=[{linkProps:{href:"/settings/workspace/preferences"},uuid:c}];n&&d.push({linkProps:{href:"/settings/workspace/users"},uuid:a}),(!(0,i.YB)()||t<=r.No.EDITOR)&&d.push({linkProps:{href:"/settings/workspace/sync-data"},uuid:l});var f=[{items:d,uuid:o}];return(0,i.YB)()?f.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:s}],uuid:u}]):f}},30775:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(1210),i=t(82394),o=t(12691),c=t.n(o),l=t(10919),a=t(86673),u=t(19711),s=t(9518),d=t(23831),f=t(49125),p=t(90880),h=(f.iI,s.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),m=s.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,p.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||d.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||d.Z.background).codeTextarea,";\n  ")})),b=t(28598),y=t(82684);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n=e.isItemSelected,t=e.sections;return(0,b.jsx)(a.Z,{py:f.Gg,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.items,r=e.title,i=e.uuid;return(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(h,{children:(0,b.jsx)(u.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():i})}),null===t||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.linkProps,o=e.onClick,a=e.uuid,u=t?t():a,s=(0,b.jsx)(m,{selected:null===n||void 0===n?void 0:n(v(v({},e),{},{uuidWorkspace:i})),children:u});return r?(0,y.createElement)(c(),v(v({},r),{},{key:a,passHref:!0}),(0,b.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:s})):(0,b.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:o,preventDefault:!0,sameColorAsText:!0,children:s},a)}))]},i)}))})},O=t(2850),x=t(79585),w=t(9736);var Z=function(e){var n=e.after,t=e.afterHidden,i=e.children,o=e.uuidItemSelected,c=e.uuidWorkspaceSelected,l=(0,w.PR)()||{};return(0,b.jsx)(r.Z,{after:n,afterHidden:!n||t,afterWidth:n?50*f.iI:0,afterWidthOverride:!0,before:(0,b.jsx)(O.M,{children:(0,b.jsx)(j,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return c===t&&o===n},sections:(0,x.SA)(l)})}),beforeWidth:O.W,title:"Settings",uuid:"settings/index",children:i})}},76096:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(33591)),c=t(28598),l=["children","fullHeight","gutter","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,a=e.style,s=void 0===a?{}:a,d=(0,i.Z)(e,l),f=u({},s);return r&&(f.paddingLeft=r,f.paddingRight=f.paddingLeft),t&&(f.height="100%"),(0,c.jsx)(o.Col,u(u({},d),{},{style:f,children:n}))}},97361:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(33591),l=t(28598),a=["children","fullHeight","gutter","style"];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,u=e.style,d=void 0===u?{}:u,f=(0,i.Z)(e,a),p=s({},d);return r&&(p.marginLeft=-1*r,p.marginRight=p.marginLeft),t&&(p.height="100%"),(0,l.jsx)(c.Row,s(s({},f),{},{style:p,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:r,key:n})}))}))}},42008:function(e,n,t){"use strict";t.d(n,{J:function(){return o},X:function(){return c}});var r=t(76096),i=t(97361),o=r.Z,c=i.Z},38341:function(e,n,t){"use strict";var r=t(21831),i=t(82394),o=t(26304),c=(t(82684),t(9518)),l=t(67971),a=t(86673),u=t(19711),s=t(23831),d=t(10503),f=t(73942),p=t(49125),h=t(28598),m=["beforeIcon","checked","disabled","errorMessage","label","labelDescription","large","meta","monospace","onClick","required","small","warning","xsmall"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=c.default.div.withConfig({displayName:"Checkbox__CheckboxContainer",componentId:"sc-ujqx42-0"})(["display:inline-block;vertical-align:middle;cursor:pointer;"]),v=c.default.div.withConfig({displayName:"Checkbox__ErrorContainer",componentId:"sc-ujqx42-1"})(["margin-top:4px;"]),j=c.default.input.withConfig({displayName:"Checkbox__HiddenCheckbox",componentId:"sc-ujqx42-2"})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;",""],(function(e){return e.notClickable&&"\n    background-color: ".concat((e.theme.content||s.Z.content).disabled,"\n    border-color: ").concat((e.theme.content||s.Z.content).disabled,"\n\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")})),O=c.default.div.withConfig({displayName:"Checkbox__StyledCheckbox",componentId:"sc-ujqx42-3"})(["border-radius:","px;height:","px;transition:all 150ms;width:","px;svg{position:relative;visibility:",";}"," "," "," "," input[disabled]{cursor:default;}"," ",""],.5*p.iI,2*p.iI,2*p.iI,(function(e){return e.checked||e.required?"visible":"hidden"}),(function(e){return e.large&&"\n    svg {\n      left: -4px;\n      top: -8px;\n    }\n  "}),(function(e){return!e.checked&&"\n    background-color: ".concat((e.theme.background||s.Z.background).popup,";\n    border: ").concat(f.PV,"px ").concat(f.M8," ").concat((e.theme.content||s.Z.content).muted,";\n  ")}),(function(e){return e.checked&&"\n    background-color: ".concat((e.theme.interactive||s.Z.interactive).checked,";\n    border: ").concat(f.YF,"px ").concat(f.M8," transparent;\n  ")}),(function(e){return e.required&&"\n    background-color: ".concat((e.theme.content||s.Z.content).disabled,";\n    border: ").concat(f.YF,"px ").concat(f.M8," transparent;\n  ")}),(function(e){return e.disabled&&"\n    background-color: ".concat((e.theme.content||s.Z.content).disabled,";\n    border-color: ").concat((e.theme.content||s.Z.content).disabled,";\n\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")}),(function(e){return e.warning&&"\n    background-color: ".concat((e.theme.accent||s.Z.accent).warning,";\n    border-color: ").concat((e.theme.interactive||s.Z.interactive).defaultBorder,"\n  ")})),x=c.default.label.withConfig({displayName:"Checkbox__LabelStyle",componentId:"sc-ujqx42-4"})(["-ms-flex-direction:column;align-items:center;display:flex;flex-direction:column;flex-direction:row;&:hover{cursor:pointer;}"]);n.Z=function(e){var n=e.beforeIcon,t=e.checked,i=e.disabled,c=e.errorMessage,s=e.label,f=e.labelDescription,b=e.large,w=e.meta,Z=e.monospace,k=void 0!==Z&&Z,P=e.onClick,_=e.required,I=e.small,S=void 0!==I&&I,C=e.warning,N=e.xsmall,H=void 0!==N&&N,D=(0,o.Z)(e,m),E=C||!!(c||w&&w.touched&&w.error);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(x,{onClick:function(e){e.preventDefault(),P&&P(e)},children:[(0,h.jsxs)(g,{children:[(0,h.jsx)(j,y(y({},D),{},{disabled:i?"disabled":void 0,notClickable:i})),(0,h.jsx)(O,{checked:t,disabled:i,large:b,required:_,warning:E,children:(0,h.jsx)(d.Jr,{size:p.iI*(b?3:2)})})]}),n&&(0,h.jsx)(a.Z,{ml:1,children:(0,h.jsx)(l.Z,{children:n})}),s&&(0,h.jsxs)(a.Z,{pl:1,children:["string"===typeof s&&(0,h.jsx)(u.ZP,{disabled:i,lineThrough:i,monospace:k,small:S,xsmall:H,children:s}),"string"!==typeof s&&s,f&&(0,h.jsx)(u.ZP,{muted:!0,small:!0,children:f})]})]}),(c||w&&w.touched&&w.error)&&(0,h.jsx)(v,{children:(0,h.jsx)(u.ZP,{small:!0,warning:!0,children:c?(0,r.Z)(c):w.error})})]})}},87372:function(e,n,t){"use strict";var r,i,o,c,l,a,u,s,d=t(82394),f=t(26304),p=t(26653),h=t(9518),m=t(33591),b=t(23831),y=t(2005),g=t(31012),v=t(19711),j=t(49125),O=t(86673),x=t(28598),w=["children","condensed","inline","level","marketing","spacingBelow"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],v.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||b.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(y.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(y.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(y.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(y.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(y.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),_=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||b.Z.content).active,";\n  ")})),I=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),g.aQ),m.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),g.aQ),m.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),g.aQ)),S=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,g.MJ),C=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,m.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.sm(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.md(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.lg(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.xl(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI)),N=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,g.BL),H=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),D=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),E=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),z=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(g.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(g.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),M=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,c=e.marketing,l=e.spacingBelow,a=(0,f.Z)(e,w);i?n=z:0===Number(o)?n=I:1===Number(o)?n=c?C:S:2===Number(o)?n=N:3===Number(o)?n=H:4===Number(o)?n=D:5===Number(o)&&(n=E);var u=(0,x.jsxs)(n,k(k({},a),{},{level:o,children:[l&&(0,x.jsx)(O.Z,{mb:r?2:3,children:t}),!l&&t]}));return i?u:(0,x.jsx)(_,{children:u})};M.defaultProps={level:3,weightStyle:6},n.Z=M},10831:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return H}});var r=t(77837),i=t(82394),o=t(75582),c=t(38860),l=t.n(c),a=t(82684),u=t(21764),s=t(60328),d=t(38341),f=t(67971),p=t(87372),h=t(10919),m=t(41788),b=t(30775),y=t(42008),g=t(86673),v=[{autoComplete:"remote_repo_link",label:"Remote repo url",required:!0,uuid:"remote_repo_link"},{autoComplete:"repo_path",label:"Local directory path",uuid:"repo_path"}],j=[{autoComplete:"branch",label:"Branch name",uuid:"branch"}],O=t(19711),x=t(82944),w=t(82531),Z=t(49125),k=t(79585),P=t(96510),_=t(83455),I=t(28598);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(){var e=w.ZP.syncs.list().data,n=(0,a.useState)(null),t=n[0],r=n[1];(0,a.useEffect)((function(){var n;e&&r(null===e||void 0===e||null===(n=e.syncs)||void 0===n?void 0:n[0])}),[e]);var c=(0,_.Db)(w.ZP.syncs.useCreate(),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(e){var n=e.sync;n&&(r(n),window.location.reload(),u.Am.success("Sync saved",{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"}))},onErrorCallback:function(e){var n=e.error,t=n.message,r=n.type;u.Am.error(t,{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:r})}})}}),l=(0,o.Z)(c,2),m=l[0],S=l[1].isLoading,N=(0,_.Db)(w.ZP.syncs.useUpdate("git"),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(e){e.sync&&u.Am.success("Data synced!",{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"})},onErrorCallback:function(e){var n=e.error,t=n.message,r=n.type;u.Am.error(t,{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:r})}})}}),H=(0,o.Z)(N,2),D=H[0],E=H[1].isLoading;return(0,I.jsx)(b.Z,{uuidItemSelected:k.fF,uuidWorkspaceSelected:k.WH,children:(0,I.jsxs)(g.Z,{p:Z.cd,children:[(0,I.jsx)(p.Z,{children:"Git repository settings"}),(0,I.jsx)(g.Z,{mt:1,children:(0,I.jsxs)(O.ZP,{children:["You can enable the Git integration by supplying the url for your remote repository. ",(0,I.jsxs)(O.ZP,{inline:!0,children:["You will need to ",(0,I.jsx)(h.Z,{href:"https://docs.mage.ai/developing-in-the-cloud/setting-up-git",openNewWindow:!0,children:"set up your SSH key"})," if you have not done so already."]})]})}),(0,I.jsx)(f.Z,{alignItems:"center",children:(0,I.jsx)("form",{children:v.map((function(e){var n=e.autoComplete,o=e.disabled,c=e.label,l=e.required,a=e.type,u=e.uuid;return(0,I.jsx)(g.Z,{mt:2,children:(0,I.jsx)(x.Z,{autoComplete:n,disabled:o,label:c,onChange:function(e){r((function(n){return C(C({},n),{},(0,i.Z)({},u,e.target.value))}))},primary:!0,required:l,setContentOnMount:!0,type:a,value:(null===t||void 0===t?void 0:t[u])||""})},u)}))})}),(0,I.jsx)(g.Z,{mt:Z.Mq,children:(0,I.jsx)(O.ZP,{children:"You can also set up your project to only sync with a specified branch."})}),(0,I.jsx)(f.Z,{children:(0,I.jsx)("form",{children:j.map((function(e){var n=e.autoComplete,o=e.disabled,c=e.label,l=e.required,a=e.type,u=e.uuid;return(0,I.jsx)(g.Z,{mt:2,children:(0,I.jsx)(x.Z,{autoComplete:n,disabled:o,label:c,onChange:function(e){r((function(n){return C(C({},n),{},(0,i.Z)({},u,e.target.value))}))},primary:!0,required:l,setContentOnMount:!0,type:a,value:(null===t||void 0===t?void 0:t[u])||""})},u)}))})}),(0,I.jsx)(f.Z,{alignItems:"center",children:(0,I.jsx)(g.Z,{mt:2,children:(0,I.jsx)(d.Z,{checked:null===t||void 0===t?void 0:t.sync_on_pipeline_run,label:"Sync before each trigger run",onClick:function(){r((function(e){return C(C({},e),{},{sync_on_pipeline_run:!(null!==t&&void 0!==t&&t.sync_on_pipeline_run)})}))}})})}),(0,I.jsx)(g.Z,{mt:2,children:(0,I.jsx)(s.Z,{loading:S,onClick:function(){return m({sync:t})},primary:!0,children:"Save repository settings"})}),(0,I.jsx)(g.Z,{mt:Z.HN,children:(0,I.jsxs)(y.J,{lg:6,children:[(0,I.jsx)(p.Z,{children:"Synchronize code from remote repository"}),(0,I.jsx)(g.Z,{mt:1,children:(0,I.jsxs)(O.ZP,{children:["Running the sync from this page will run a one time sync with the remote repository.",(0,I.jsx)("br",{}),"This may ",(0,I.jsx)(O.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," your existing data, so make sure you\u2019ve committed or backed up your current changes."]})}),(0,I.jsx)(g.Z,{mt:2,children:(0,I.jsx)(s.Z,{loading:E,onClick:function(){return confirm("Are you sure you want to sync code from a remote repository and overwrite the current code base?",(function(){return D({sync:{action_type:"sync_data"}})}))},children:"Synchronize code"})})]})})]})})}N.getInitialProps=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var H=(0,m.Z)(N)},37056:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/sync-data",function(){return t(10831)}])}},function(e){e.O(0,[3850,2344,9386,9774,2888,179],(function(){return n=37056,e(e.s=n);var n}));var n=e.O();_N_E=n}]);