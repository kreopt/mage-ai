(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2484],{17717:function(n){!function(){"use strict";var e={114:function(n){function e(n){if("string"!==typeof n)throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function t(n,e){for(var t,r="",i=0,o=-1,u=0,c=0;c<=n.length;++c){if(c<n.length)t=n.charCodeAt(c);else{if(47===t)break;t=47}if(47===t){if(o===c-1||1===u);else if(o!==c-1&&2===u){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){-1===a?(r="",i=0):i=(r=r.slice(0,a)).length-1-r.lastIndexOf("/"),o=c,u=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=c,u=0;continue}e&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+n.slice(o+1,c):r=n.slice(o+1,c),i=c-o-1;o=c,u=0}else 46===t&&-1!==u?++u:u=-1}return r}var r={resolve:function(){for(var n,r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var u;o>=0?u=arguments[o]:(void 0===n&&(n=""),u=n),e(u),0!==u.length&&(r=u+"/"+r,i=47===u.charCodeAt(0))}return r=t(r,!i),i?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(n){if(e(n),0===n.length)return".";var r=47===n.charCodeAt(0),i=47===n.charCodeAt(n.length-1);return 0!==(n=t(n,!r)).length||r||(n="."),n.length>0&&i&&(n+="/"),r?"/"+n:n},isAbsolute:function(n){return e(n),n.length>0&&47===n.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var n,t=0;t<arguments.length;++t){var i=arguments[t];e(i),i.length>0&&(void 0===n?n=i:n+="/"+i)}return void 0===n?".":r.normalize(n)},relative:function(n,t){if(e(n),e(t),n===t)return"";if((n=r.resolve(n))===(t=r.resolve(t)))return"";for(var i=1;i<n.length&&47===n.charCodeAt(i);++i);for(var o=n.length,u=o-i,c=1;c<t.length&&47===t.charCodeAt(c);++c);for(var a=t.length-c,l=u<a?u:a,f=-1,s=0;s<=l;++s){if(s===l){if(a>l){if(47===t.charCodeAt(c+s))return t.slice(c+s+1);if(0===s)return t.slice(c+s)}else u>l&&(47===n.charCodeAt(i+s)?f=s:0===s&&(f=0));break}var d=n.charCodeAt(i+s);if(d!==t.charCodeAt(c+s))break;47===d&&(f=s)}var h="";for(s=i+f+1;s<=o;++s)s!==o&&47!==n.charCodeAt(s)||(0===h.length?h+="..":h+="/..");return h.length>0?h+t.slice(c+f):(c+=f,47===t.charCodeAt(c)&&++c,t.slice(c))},_makeLong:function(n){return n},dirname:function(n){if(e(n),0===n.length)return".";for(var t=n.charCodeAt(0),r=47===t,i=-1,o=!0,u=n.length-1;u>=1;--u)if(47===(t=n.charCodeAt(u))){if(!o){i=u;break}}else o=!1;return-1===i?r?"/":".":r&&1===i?"//":n.slice(0,i)},basename:function(n,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');e(n);var r,i=0,o=-1,u=!0;if(void 0!==t&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";var c=t.length-1,a=-1;for(r=n.length-1;r>=0;--r){var l=n.charCodeAt(r);if(47===l){if(!u){i=r+1;break}}else-1===a&&(u=!1,a=r+1),c>=0&&(l===t.charCodeAt(c)?-1===--c&&(o=r):(c=-1,o=a))}return i===o?o=a:-1===o&&(o=n.length),n.slice(i,o)}for(r=n.length-1;r>=0;--r)if(47===n.charCodeAt(r)){if(!u){i=r+1;break}}else-1===o&&(u=!1,o=r+1);return-1===o?"":n.slice(i,o)},extname:function(n){e(n);for(var t=-1,r=0,i=-1,o=!0,u=0,c=n.length-1;c>=0;--c){var a=n.charCodeAt(c);if(47!==a)-1===i&&(o=!1,i=c+1),46===a?-1===t?t=c:1!==u&&(u=1):-1!==t&&(u=-1);else if(!o){r=c+1;break}}return-1===t||-1===i||0===u||1===u&&t===i-1&&t===r+1?"":n.slice(t,i)},format:function(n){if(null===n||"object"!==typeof n)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return function(n,e){var t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+r:t+n+r:r}("/",n)},parse:function(n){e(n);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===n.length)return t;var r,i=n.charCodeAt(0),o=47===i;o?(t.root="/",r=1):r=0;for(var u=-1,c=0,a=-1,l=!0,f=n.length-1,s=0;f>=r;--f)if(47!==(i=n.charCodeAt(f)))-1===a&&(l=!1,a=f+1),46===i?-1===u?u=f:1!==s&&(s=1):-1!==u&&(s=-1);else if(!l){c=f+1;break}return-1===u||-1===a||0===s||1===s&&u===a-1&&u===c+1?-1!==a&&(t.base=t.name=0===c&&o?n.slice(1,a):n.slice(c,a)):(0===c&&o?(t.name=n.slice(1,u),t.base=n.slice(1,a)):(t.name=n.slice(c,u),t.base=n.slice(c,a)),t.ext=n.slice(u,a)),c>0?t.dir=n.slice(0,c-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,n.exports=r}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}},u=!0;try{e[n](o,o.exports,r),u=!1}finally{u&&delete t[n]}return o.exports}r.ab="//";var i=r(114);n.exports=i}()},44425:function(n,e,t){"use strict";t.d(e,{$W:function(){return p},DA:function(){return g},HX:function(){return y},J8:function(){return T},L8:function(){return c},LE:function(){return d},Lk:function(){return D},Lq:function(){return h},M5:function(){return A},Q3:function(){return O},Qj:function(){return R},Ut:function(){return N},V4:function(){return C},VZ:function(){return v},dO:function(){return s},f2:function(){return S},iZ:function(){return E},t6:function(){return a},tf:function(){return f}});var r,i,o,u,c,a,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(a||(a={}));var f,s=(r={},(0,l.Z)(r,a.MARKDOWN,"MD"),(0,l.Z)(r,a.PYTHON,"PY"),(0,l.Z)(r,a.R,"R"),(0,l.Z)(r,a.SQL,"SQL"),(0,l.Z)(r,a.YAML,"YAML"),r),d=(i={},(0,l.Z)(i,a.MARKDOWN,"Markdown"),(0,l.Z)(i,a.PYTHON,"Python"),(0,l.Z)(i,a.R,"R"),(0,l.Z)(i,a.SQL,"SQL"),(0,l.Z)(i,a.YAML,"YAML"),i);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(f||(f={}));var h,A=[f.CALLBACK,f.CONDITIONAL,f.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(h||(h={}));var g,m,p=[f.CHART,f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.SCRATCHPAD,f.SENSOR,f.MARKDOWN,f.TRANSFORMER],O=[f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.SCRATCHPAD,f.SENSOR,f.MARKDOWN,f.TRANSFORMER],v=[f.DATA_EXPORTER,f.DATA_LOADER],T=[f.DATA_EXPORTER,f.DATA_LOADER,f.TRANSFORMER],y=[f.DATA_EXPORTER,f.DATA_LOADER,f.DBT,f.TRANSFORMER],R=[f.CHART,f.SCRATCHPAD,f.SENSOR,f.MARKDOWN],E=[f.CALLBACK,f.CHART,f.EXTENSION,f.SCRATCHPAD,f.MARKDOWN],D=[f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.SENSOR,f.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(g||(g={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(m||(m={}));var S=[f.CUSTOM,f.DATA_EXPORTER,f.DATA_LOADER,f.TRANSFORMER],C=(o={},(0,l.Z)(o,f.CALLBACK,"Callback"),(0,l.Z)(o,f.CHART,"Chart"),(0,l.Z)(o,f.CONDITIONAL,"Conditional"),(0,l.Z)(o,f.CUSTOM,"Custom"),(0,l.Z)(o,f.DATA_EXPORTER,"Data exporter"),(0,l.Z)(o,f.DATA_LOADER,"Data loader"),(0,l.Z)(o,f.DBT,"DBT"),(0,l.Z)(o,f.EXTENSION,"Extension"),(0,l.Z)(o,f.GLOBAL_DATA_PRODUCT,"Global data product"),(0,l.Z)(o,f.MARKDOWN,"Markdown"),(0,l.Z)(o,f.SCRATCHPAD,"Scratchpad"),(0,l.Z)(o,f.SENSOR,"Sensor"),(0,l.Z)(o,f.TRANSFORMER,"Transformer"),o),N=[f.DATA_LOADER,f.TRANSFORMER,f.DATA_EXPORTER,f.SENSOR];u={},(0,l.Z)(u,f.DATA_EXPORTER,"DE"),(0,l.Z)(u,f.DATA_LOADER,"DL"),(0,l.Z)(u,f.SCRATCHPAD,"SP"),(0,l.Z)(u,f.SENSOR,"SR"),(0,l.Z)(u,f.MARKDOWN,"MD"),(0,l.Z)(u,f.TRANSFORMER,"TF")},85854:function(n,e,t){"use strict";var r,i,o,u,c,a,l,f,s=t(82394),d=t(26304),h=t(26653),A=t(38626),g=t(33591),m=t(44897),p=t(95363),O=t(61896),v=t(30160),T=t(70515),y=t(38276),R=t(28598),E=["children","condensed","inline","level","marketing","spacingBelow"];function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?D(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var C=(0,A.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],v.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.yellow&&"\n    color: ".concat((n.theme.accent||m.Z.accent).yellow,";\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(p.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(p.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(p.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(p.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(p.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(p.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(p.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(p.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(p.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),N=A.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||m.Z.content).active,";\n  ")})),w=A.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],C,g.media.md(r||(r=(0,h.Z)(["\n    ","\n  "])),O.aQ),g.media.lg(i||(i=(0,h.Z)(["\n    ","\n  "])),O.aQ),g.media.xl(o||(o=(0,h.Z)(["\n    ","\n  "])),O.aQ)),b=A.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],C,O.MJ),_=A.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],C,g.media.xs(u||(u=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),g.media.sm(c||(c=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),g.media.md(a||(a=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),g.media.lg(l||(l=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),g.media.xl(f||(f=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI)),M=A.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],C,O.BL),L=A.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],C),Z=A.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],C),x=A.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],C),P=A.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],C,(function(n){return 1===n.level&&"\n    ".concat(O.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(O.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),H=function(n){var e,t=n.children,r=n.condensed,i=n.inline,o=n.level,u=n.marketing,c=n.spacingBelow,a=(0,d.Z)(n,E);i?e=P:0===Number(o)?e=w:1===Number(o)?e=u?_:b:2===Number(o)?e=M:3===Number(o)?e=L:4===Number(o)?e=Z:5===Number(o)&&(e=x);var l=(0,R.jsxs)(e,S(S({},a),{},{level:o,children:[c&&(0,R.jsx)(y.Z,{mb:r?2:3,children:t}),!c&&t]}));return i?l:(0,R.jsx)(N,{children:l})};H.defaultProps={level:3,weightStyle:6},e.Z=H},6943:function(n,e,t){"use strict";t.r(e);var r=t(77837),i=t(38860),o=t.n(i),u=t(39440),c=t(93808),a=t(28598);function l(){return(0,a.jsx)(u.Z,{uuid:"dashboard"})}l.getInitialProps=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)}))),e.default=(0,c.Z)(l)},3917:function(n,e,t){"use strict";t.d(e,{A5:function(){return E},AY:function(){return D},BP:function(){return R},JX:function(){return y},OC:function(){return s},Pc:function(){return S},Ro:function(){return C},Tz:function(){return T},XG:function(){return O},Y_:function(){return w},d$:function(){return p},jV:function(){return N},lE:function(){return h},lJ:function(){return b},n$:function(){return v},n1:function(){return A},s8:function(){return l},vk:function(){return o},yD:function(){return f},yd:function(){return m}});var r,i,o,u=t(82394),c=t(92083),a=t.n(c);!function(n){n.TODAY="today",n.WEEK="week",n.MONTH="month"}(o||(o={}));var l=(r={},(0,u.Z)(r,o.TODAY,"today"),(0,u.Z)(r,o.WEEK,"last 7 days"),(0,u.Z)(r,o.MONTH,"last 30 days"),r),f=(i={},(0,u.Z)(i,o.TODAY,0),(0,u.Z)(i,o.WEEK,6),(0,u.Z)(i,o.MONTH,29),i),s="YYYY-MM-DD HH:mm:ss",d="YYYY-MM-DD HH:mm",h="YYYY-MM-DD HH:mmZ",A="YYYY-MM-DD",g="MMMM D, YYYY",m=Intl.DateTimeFormat().resolvedOptions().timeZone;function p(n,e){var t=e||{},r=t.dayAgo,i=t.includeSeconds,o=t.utcFormat,u=a()(n),c=d;return o&&(u=u.utc()),r&&(u=u.subtract(1,"days")),i&&(c=s),u.format(c)}function O(n,e){return e?a().utc(n).local().format():n}function v(n){return a().utc(n).local().toDate()}function T(n){var e=p((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==n&&void 0!==n&&n.dateObj?new Date(e):e}function y(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a().unix(n).format(null!==e&&void 0!==e&&e.withSeconds?s:d)}function R(n,e,t){return a()(n).utc().hours(+e).minutes(+t).format()}function E(n){return a()(n).unix()}function D(n,e,t,r){var i="".concat(n.toISOString().split("T")[0]," ").concat(e,":").concat(t);return r?"".concat(i,":").concat(r):i}function S(n){var e=a().unix(+n).utc();return{date:e.toDate(),hour:String(e.hour()),minute:String(e.minute())}}function C(n,e){var t=a().utc(),r=a().utc();null!==e&&void 0!==e&&e.localTime&&(t=a()().local(),r=a()().local());var i=(t=t.subtract(n,"days")).format(g),o=r.format(g);return null!==e&&void 0!==e&&e.endDateOnly?o:"".concat(i," - ").concat(o)}function N(n,e){var t=null!==e&&void 0!==e&&e.localTime?a()().local():a().utc();if(n===o.WEEK){var r=f[o.WEEK];t=t.subtract(r,"days")}else if(n===o.MONTH){var i=f[o.MONTH];t=t.subtract(i,"days")}return null!==e&&void 0!==e&&e.isoString?t.startOf("day").toISOString():t.startOf("day").format(s)}function w(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90,e=new Date,t=[],r=0;r<n;r++)t.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return t}function b(n){return n.padStart(2,"0")}},81728:function(n,e,t){"use strict";t.d(e,{RA:function(){return d},kC:function(){return h},vg:function(){return T},kE:function(){return C},Mp:function(){return A},Pb:function(){return f},HW:function(){return R},wX:function(){return g},x6:function(){return m},_6:function(){return p},zf:function(){return y},Y6:function(){return D},Lo:function(){return S},wE:function(){return N},J3:function(){return O},We:function(){return s},QV:function(){return E},C5:function(){return v}});var r=t(75582),i=t(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],u=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],c=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),a=["0","1","2","3","4","5","6","7","8","9"],l=t(86735);function f(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function d(n){return n.split(" ").join("_")}function h(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function A(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function g(n){return n.charAt(0).toLowerCase()+n.slice(1)}function m(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1],u=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(u,".").concat(o):u}function p(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e,o=void 0!==i&&null!==i;if(o||(i=2),1===i)t=n;else{var u=n.length,c=n[u-1];t="y"===c&&"day"!==n?"".concat(n.slice(0,u-1),"ies"):"".concat(n,"s"===c?"es":"s")}if(o){var a=r?m(i):i;return"".concat(a," ").concat(t)}return t}function O(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function v(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function T(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return h(O(n.toLowerCase()))}function y(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(i,o){if(!e){var u=(0,r.Z)(i,2),c=u[0],a=u[1],l=t.slice(0,o).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(a)*l&&(e=p(c,Math.round(n/l)))}})),e}function R(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function E(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function D(){return"".concat((0,l.mp)(o)," ").concat((0,l.mp)(c))}function S(){return"".concat((0,l.mp)(u)).concat((0,l.mp)(a))}function C(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function N(n){var e,t=n.split(i.sep),r=t[t.length-1].split(".");return e=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(e).join(i.sep)}},91162:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/block-layout",function(){return t(6943)}])}},function(n){n.O(0,[3662,9902,8789,4259,5896,341,2714,2631,4783,6358,8264,5810,3859,2407,976,9440,9774,2888,179],(function(){return e=91162,n(n.s=e);var e}));var e=n.O();_N_E=e}]);