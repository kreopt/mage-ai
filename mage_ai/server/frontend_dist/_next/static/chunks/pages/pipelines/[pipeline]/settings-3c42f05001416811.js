(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8170],{34744:function(n,e,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(9518)),u=t(86673),c=t(23831),l=t(49125),a=t(28598),s=["short"];function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var p=o.default.div.withConfig({displayName:"Divider__DividerContainerStyle",componentId:"sc-1m7lqco-0"})([""," ",""],(function(n){return n.short&&"\n    width: ".concat(21*l.iI,"px;\n  ")}),(function(n){return!n.short&&"\n    width: 100%;\n  "})),g=o.default.div.withConfig({displayName:"Divider__DividerStyle",componentId:"sc-1m7lqco-1"})(["height:1px;"," "," "," "," "," ",""],(function(n){return!(n.light||n.medium)&&"\n    background-color: ".concat((n.theme.monotone||c.Z.monotone).grey200,";\n  ")}),(function(n){return n.muted&&"\n    background-color: ".concat((n.theme.monotone||c.Z.monotone).grey500,";\n  ")}),(function(n){return n.light&&"\n    background-color: ".concat((n.theme.borders||c.Z.borders).light,";\n  ")}),(function(n){return n.medium&&"\n    background-color: ".concat((n.theme.borders||c.Z.borders).medium,";\n  ")}),(function(n){return n.prominent&&"\n    background-color: ".concat((n.theme.monotone||c.Z.monotone).grey300,";\n  ")}),(function(n){return n.black&&"\n    background-color: ".concat((n.theme.monotone||c.Z.monotone).black,";\n  ")})),h=function(n){var e=n.short,t=(0,i.Z)(n,s);return(0,a.jsx)(p,{short:e,children:(0,a.jsx)(u.Z,d(d({},t),{},{children:(0,a.jsx)(g,d({},t))}))})};h.defaultProps={short:!1},e.Z=h},70814:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var r=t(77837),i=t(75582),o=t(82394),u=t(38860),c=t.n(u),l=t(82684),a=t(60547),s=t(41788),f=t(60328),d=t(38341),p=t(67971),g=t(86673),h=t(82944),v=t(11366),b=t(49125),m=t(91427),y=t(90211),w=t(28598);function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function j(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k=function(n){var e=n.isPipelineUpdating,t=n.pipeline,r=n.updatePipeline,i=null===t||void 0===t?void 0:t.uuid,u=(0,l.useMemo)((function(){return(null===t||void 0===t?void 0:t.blocks)||[]}),[t]),c=(0,l.useState)((null===t||void 0===t?void 0:t.name)||""),a=c[0],s=c[1],O="".concat(v.g6,"_").concat(i),k=(0,l.useState)({}),P=k[0],_=k[1],Z=(0,l.useCallback)((function(n){_((function(e){var t=n(e);return(0,m.t8)(O,JSON.stringify(t)),t}))}),[O,_]);(0,l.useEffect)((function(){var n=(0,m.U2)(O);n&&(0,y.Pb)(n)&&_(JSON.parse(n))}),[O,_]);var S=(0,l.useMemo)((function(){return(null===u||void 0===u?void 0:u.filter((function(n){var e=n.uuid;return!(null===P||void 0===P||!P[e])}))).length===u.length}),[u,P]),D=(0,l.useMemo)((function(){return!(null!==u&&void 0!==u&&u.length)}),[u]);return(0,w.jsxs)(g.Z,{p:b.cd,children:[(0,w.jsx)(h.Z,{label:"Pipeline name",onChange:function(n){return s(n.target.value)},primary:!0,required:!0,setContentOnMount:!0,value:a}),(0,w.jsx)(g.Z,{mt:5,children:(0,w.jsx)(p.Z,{children:(0,w.jsx)(f.Z,{disabled:a===(null===t||void 0===t?void 0:t.name),loading:e,onClick:function(){return r({name:a})},primary:!0,children:"Save pipeline settings"})})}),(0,w.jsx)(g.Z,{mt:5,children:(0,w.jsx)(d.Z,{checked:S&&!D,disabled:D,label:"Hide all blocks in notebook",onClick:function(){return Z((function(){return S?{}:null===u||void 0===u?void 0:u.reduce((function(n,e){var t=e.uuid;return j(j({},n),{},(0,o.Z)({},t,!0))}),{})}))}})})]})},P=t(82531),_=t(59920),Z=t(83455),S=t(96510);function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?D(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function C(n){var e=n.pipeline,t=(0,l.useState)(null),r=t[0],o=t[1],u=null===e||void 0===e?void 0:e.uuid,c=P.ZP.pipelines.detail(u).data,s=E(E({},null===c||void 0===c?void 0:c.pipeline),e),f=(0,Z.Db)(P.ZP.pipelines.useUpdate(u,{update_content:!0}),{onSuccess:function(n){return(0,S.wD)(n,{callback:function(n){if(null!==n&&void 0!==n&&n.pipeline){var e=n.pipeline.uuid;u!==e&&(window.location.href="/pipelines/".concat(e,"/settings"))}},onErrorCallback:function(n,e){return console.log({errors:e,response:n})}})}}),d=(0,i.Z)(f,2),p=d[0],g=d[1].isLoading;return(0,w.jsx)(a.Z,{breadcrumbs:[{label:function(){return"Settings"}}],errors:r,pageName:_.M.SETTINGS,pipeline:s,setErrors:o,title:function(n){var e=n.name;return"".concat(e," settings")},uuid:"".concat(_.M.SETTINGS,"_").concat(u),children:c&&(0,w.jsx)(k,{isPipelineUpdating:g,pipeline:s,updatePipeline:function(n){return p({pipeline:n})}})})}C.getInitialProps=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var N=(0,s.Z)(C)},11366:function(n,e,t){"use strict";t.d(e,{H8:function(){return i},g6:function(){return o},kY:function(){return r}});var r="automatically_name_blocks",i="pipeline_edit_before_tab_selected",o="pipeline_edit_hidden_blocks"},90211:function(n,e,t){"use strict";t.d(e,{RA:function(){return s},kC:function(){return f},vg:function(){return m},kE:function(){return P},T3:function(){return O},Mp:function(){return d},Pb:function(){return l},HW:function(){return w},wX:function(){return p},x6:function(){return g},_6:function(){return h},zf:function(){return y},Y6:function(){return k},wE:function(){return _},J3:function(){return v},We:function(){return a},QV:function(){return j},C5:function(){return b}});var r=t(75582),i=t(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],u=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),c=t(24224);function l(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function s(n){return n.split(" ").join("_")}function f(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function p(n){return n.charAt(0).toLowerCase()+n.slice(1)}function g(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1],u=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(u,".").concat(o):u}function h(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e,o=void 0!==i&&null!==i;if(o||(i=2),1===i)t=n;else{var u=n.length,c=n[u-1];t="y"===c&&"day"!==n?"".concat(n.slice(0,u-1),"ies"):"".concat(n,"s"===c?"es":"s")}if(o){var l=r?g(i):i;return"".concat(l," ").concat(t)}return t}function v(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function b(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f(v(n.toLowerCase()))}function y(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(i,o){if(!e){var u=(0,r.Z)(i,2),c=u[0],l=u[1],a=t.slice(0,o).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(l)*a&&(e=h(c,Math.round(n/a)))}})),e}function w(n){return!isNaN(n)}function O(n){return"".concat(g(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((n||0)*Math.pow(100,e))/100}(n)),"%")}function j(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function k(){return"".concat((0,c.mp)(o)," ").concat((0,c.mp)(u))}function P(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function _(n){var e,t=n.split(i.sep),r=t[t.length-1].split(".");return e=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(e).join(i.sep)}},59606:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/settings",function(){return t(70814)}])}},function(n){n.O(0,[844,7607,1424,1005,547,9774,2888,179],(function(){return e=59606,n(n.s=e);var e}));var e=n.O();_N_E=e}]);