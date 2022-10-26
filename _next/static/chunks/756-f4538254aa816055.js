"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{3565:function(n,t,e){e.d(t,{z:function(){return h}});var r,i=e(6042),o=e(9396),u=e(9534),c=e(7297),a=e(5893),d=(e(7294),e(9521));function l(){var n=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  background: ",';\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n  min-height: 32px;\n  border-radius: 3px;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: "Catamaran", sans-serif;\n  width: ',";\n  height: 40px;\n  background-image: none;\n\n  :disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  div {\n    white-space: normal;\n    margin: 0 auto;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n\n  @media only screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n"]);return l=function(){return n},n}function s(){var n=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return s=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=d.ZP.button(l(),(function(n){return function(n,t){return t[r[n]]}(n.status,n.theme)}),(function(n){return n.block?"100%":"fit-content"})),p=d.ZP.div(s()),h=function(n){var t=n.children,e=n.status,r=n.block,c=void 0!==r&&r,d=n.link,l=void 0!==d&&d,s=(0,u.Z)(n,["children","status","block","link"]);return(0,a.jsx)(f,(0,o.Z)((0,i.Z)({as:l?"a":"button",type:"button",status:null!==e&&void 0!==e?e:"PRIMARY",block:c},s),{children:(0,a.jsx)(p,{children:t})}))}},1342:function(n,t,e){e.d(t,{u:function(){return A}});var r=e(5893),i=e(7294),o=e(3565),u=e(828),c=function(n){var t=(0,u.Z)(i.useState(!1),2),e=t[0],r=t[1];return i.useEffect((function(){var t=function(t){t.key===n&&r(!0)},e=function(t){t.key===n&&r(!1)};return window.addEventListener("keydown",t),window.addEventListener("keyup",e),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",e)}}),[n]),e},a=e(7297),d=e(9521);function l(){var n=(0,a.Z)(["\n  from { transform: scale(0.6); opacity: 0; }\n  to { transform: scale(1); opacity: 1; };\n"]);return l=function(){return n},n}function s(){var n=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 36;\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return s=function(){return n},n}function f(){var n=(0,a.Z)(["\n  min-width: 440px;\n  max-width: 490px;\n  width: fit-content;\n  animation: "," 220ms ease-in-out;\n  line-height: 20px;\n\n  @media only screen and (max-width: 768px) {\n    min-width: 90%;\n    max-width: 90%;\n  }\n"]);return f=function(){return n},n}function p(){var n=(0,a.Z)(["\n  color: ",";\n  font-size: 20px !important;\n  margin: 0;\n"]);return p=function(){return n},n}function h(){var n=(0,a.Z)(["\n  background: ",";\n  padding: 16px;\n  border-radius: 5px 5px 0 0;\n"]);return h=function(){return n},n}function g(){var n=(0,a.Z)(["\n  color: ",";\n  background: ",";\n  padding: 16px;\n  overflow: hidden auto;\n"]);return g=function(){return n},n}function v(){var n=(0,a.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  background: ",";\n  padding: 16px;\n  border-radius: 0 0 5px 5px;\n  gap: 10px;\n"]);return v=function(){return n},n}var m=(0,d.F4)(l()),x=d.ZP.div(s()),Z=d.ZP.div(f(),m),w=d.ZP.h2(p(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),E=d.ZP.div(h(),(function(n){return n.theme.MODAL_BACKGROUND})),b=d.ZP.div(g(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.MODAL_BACKGROUND})),y=d.ZP.div(v(),(function(n){return n.theme.BACKGROUND_SECONDARY})),A=function(n){var t=n.children,e=n.visible,i=n.setVisible;return e?(0,r.jsx)(x,{onClick:function(n){n.currentTarget===n.target&&i((function(n){return!n}))},children:(0,r.jsx)(Z,{children:t})}):null};A.Header=function(n){var t=n.children;return(0,r.jsx)(E,{children:(0,r.jsx)(w,{children:t})})},A.Content=function(n){var t=n.children;return(0,r.jsx)(b,{children:t})},A.Controls=function(n){var t=n.children,e=n.setVisible,u=c("Escape");return i.useEffect((function(){u&&e(!1)}),[u,e]),(0,r.jsxs)(y,{children:[(0,r.jsx)(o.z,{onClick:function(){return e(!1)},children:"Close"}),t]})}},3719:function(n,t,e){e.d(t,{Z:function(){return f}});var r=e(4924),i=e(6042),o=e(9396),u=e(828),c=function(n,t){var e=n.map((function(n){return n.id}));return t.filter((function(n){return e.includes(n.from)||e.includes(n.to)}))},a=e(9815),d=function(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=[],o=[],u=function(n){var c,d=e.filter((function(t){return t.from===n})).map((function(n){return n.to})),l=t.filter((function(n){return r.includes(n.id)&&!o.includes(n.id)&&o.push(n.id),d.includes(n.id)&&!r.includes(n.id)}));(c=i).push.apply(c,(0,a.Z)(l)),l.forEach((function(n){return u(n.id)}))};return u(n),[i,o]},l=e(6902),s={loading:!1,graphCollapsed:!1,nodes:[],edges:[],collapsedNodes:[],collapsedEdges:[],collapsedParents:[]},f=(0,l.ZP)((function(n,t){return(0,o.Z)((0,i.Z)({},s),{setGraphValue:function(t,e){return n((0,r.Z)({collapsedParents:[],collapsedNodes:[],collapsedEdges:[]},t,e))},setLoading:function(t){return n({loading:t})},expandNodes:function(e){var r=(0,u.Z)(d(e,t().nodes,t().edges,t().collapsedParents),2),i=r[0],o=r[1],a=c(i,t().edges),l=a.reduce((function(n,t){return t.from&&!n.includes(t.from)&&n.push(t.from),t.to&&!n.includes(t.to)&&n.push(t.to),n}),[]),s=o.filter((function(n){return l.includes(n)})),f=i.map((function(n){return n.id})).concat(s),p=a.map((function(n){return n.id})),h=t().collapsedParents.filter((function(n){return n!==e})),g=t().collapsedNodes.filter((function(n){return!f.includes(n)})),v=t().collapsedEdges.filter((function(n){return!p.includes(n)}));n({collapsedParents:h,collapsedNodes:g,collapsedEdges:v,graphCollapsed:!1})},collapseNodes:function(e){var r=(0,u.Z)(d(e,t().nodes,t().edges),1)[0],i=c(r,t().edges),o=r.map((function(n){return n.id})),a=i.map((function(n){return n.id}));n({collapsedParents:t().collapsedParents.concat(e),collapsedNodes:t().collapsedNodes.concat(o),collapsedEdges:t().collapsedEdges.concat(a)})},collapseGraph:function(){var e=t().edges,r=e.map((function(n){return n.to})),i=e.map((function(n){return n.from})).filter((function(n){return!r.includes(n)})),o=e.filter((function(n){return i.includes(n.from)})).map((function(n){return n.to}));n({collapsedParents:t().nodes.filter((function(n){return!i.includes(n.id)&&n.data.isParent})).map((function(n){return n.id})),collapsedNodes:t().nodes.filter((function(n){return!i.includes(n.id)&&!o.includes(n.id)})).map((function(n){return n.id})),collapsedEdges:t().edges.filter((function(n){return!i.includes(n.from)})).map((function(n){return n.id})),graphCollapsed:!0})},expandGraph:function(){n({collapsedNodes:[],collapsedEdges:[],collapsedParents:[],graphCollapsed:!1})}})}))},369:function(n,t,e){e.d(t,{E:function(){return v}});var r=e(2670),i=e(9534),o=e(828),u=e(9815),c=e(6065),a=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2?arguments[2]:void 0,r=("string"===typeof n?n:n.map((function(n){var t=(0,o.Z)(n,2),e=t[0],r=t[1];return"".concat(e,": ").concat(r)})).join("\n")).split("\n"),i=r.map((function(n){return n.length})),u=i.sort((function(n,t){return t-n}))[0],c=function(){return Array.isArray(n)&&!n.length?40:e?35+8*u+(t?60:0):t?170:200},a=function(){return 17.8*r.length<30?40:18*(r.length+1)};return{width:c(),height:a()}},d=function(n){var t=(0,o.Z)(n,2),e=(t[0],t[1]),i=null===e,u=Array.isArray(e)&&e.length,c=(0,r.Z)(e,Object);return!i&&(u||c)},l=function(n){var t=(0,o.Z)(n,2),e=(t[0],t[1]);return!Array.isArray(e)&&!(0,r.Z)(e,Object)};function s(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2?arguments[2]:void 0;return(0,r.Z)(n,Object)||(n=[n]),Object.entries(n).filter(d).flatMap((function(n){var r=(0,o.Z)(n,2),i=r[0],u=r[1],c=a(i,!0,t),d=c.width,l=c.height,s=p(u,t,e);return[{id:e(),text:i,children:s,width:d,height:l,data:{isParent:!0,childrenCount:s.length}}]}))}function f(n){return(0,r.Z)(n,Object)?Object.entries(n).filter(l):String(n)}var p=function(n){var t,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(t=0,function(){return String(++t)});return n?[n].flat().map((function(n){var t=f(n),i=a(t,!1,e),o=i.width,u=i.height;return{id:r(),text:t,width:o,height:u,children:s(n,e,r),data:{isParent:!1,childrenCount:0,isEmpty:!t.length}}})):[]},h=function(n){return n.flatMap((function(n){var t=n.children;return[(0,i.Z)(n,["children"])].concat((0,u.Z)(h(t)))}))},g=function(n){return n.flatMap((function(n){var t=n.id,e=n.children,r=void 0===e?[]:e;return(0,u.Z)(r.map((function(n){var e=n.id;return{id:"e".concat(t,"-").concat(e),from:t,to:e}}))).concat((0,u.Z)(g(r)))}))},v=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var e=(0,c.Qc)(n);Array.isArray(e)||(e=[e]);var r=[],i=[],o=p(e,t),a=(0,u.Z)(h(o)).concat((0,u.Z)(g(o)));return a.forEach((function(n){m(n)?r.push(n):i.push(n)})),{nodes:r,edges:i}}catch(d){return console.error(d),{nodes:[],edges:[]}}};function m(n){return"text"in n}}}]);