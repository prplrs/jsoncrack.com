(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{4469:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/widget",function(){return t(5622)}])},5326:function(n,e,t){"use strict";t.d(e,{c:function(){return l}});var r=t(7297),i=t(5893),o=(t(7294),t(6501)),c=t(9647),u=t(3565),s=t(1342);function a(){var n=(0,r.Z)(["\n  resize: none;\n  width: 100%;\n  min-height: 200px;\n\n  padding: 10px;\n  background: ",";\n  color: ",";\n  outline: none;\n  border-radius: 4px;\n  line-height: 20px;\n  border: none;\n"]);return a=function(){return n},n}var d=t(9521).ZP.textarea(a(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),l=function(n){var e=n.selectedNode,t=n.visible,r=n.closeModal,a=Array.isArray(e)?Object.fromEntries(e):e;return(0,i.jsxs)(s.u,{visible:t,setVisible:r,children:[(0,i.jsx)(s.u.Header,{children:"Node Content"}),(0,i.jsx)(s.u.Content,{children:(0,i.jsx)(d,{defaultValue:JSON.stringify(a,(function(n,e){return"string"===typeof e?e.replaceAll('"',""):e}),2),readOnly:!0})}),(0,i.jsx)(s.u.Controls,{setVisible:r,children:(0,i.jsxs)(u.z,{status:"SECONDARY",onClick:function(){o.ZP.success("Content copied to clipboard!"),navigator.clipboard.writeText(JSON.stringify(a)),r()},children:[(0,i.jsx)(c.C3L,{size:18})," Clipboard"]})})]})}},5622:function(n,e,t){"use strict";t.r(e);var r=t(6042),i=t(828),o=t(7297),c=t(5893),u=t(7294),s=t(5152),a=t.n(s),d=t(1163),l=t(6501),f=t(9193),h=t(5087),p=t(5326),x=t(30),m=t(369),v=t(9521);function b(){var n=(0,o.Z)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  color: ",";\n  background: ",";\n  padding: 4px 8px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 3px 0 0 0;\n  opacity: 0.8;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n"]);return b=function(){return n},n}function g(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n\n  a {\n    text-decoration: underline;\n  }\n"]);return g=function(){return n},n}var j=a()((function(){return Promise.all([t.e(228),t.e(987),t.e(434),t.e(717),t.e(62),t.e(628)]).then(t.bind(t,4062)).then((function(n){return n.Graph}))}),{loadableGenerated:{webpack:function(){return[4062]}},ssr:!1}),E=v.ZP.a(b(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.SILVER_DARK}));var w=v.ZP.div(g());e.default=function(){var n=(0,d.useRouter)(),e=n.query,t=n.push,o=(0,i.Z)(u.useState(!1),2),s=o[0],a=o[1],b=(0,i.Z)(u.useState([]),2),g=b[0],N=b[1],_=(0,i.Z)(u.useState("dark"),2),k=_[0],y=_[1],Z=(0,x.Z)((function(n){return n.collapsedNodes})),A=(0,x.Z)((function(n){return n.collapsedEdges})),C=(0,x.Z)((function(n){return n.loading})),R=(0,x.Z)((function(n){return n.setGraphValue})),S=u.useCallback((function(){return a(!0)}),[]);return u.useEffect((function(){var n=Z.map((function(n){return'[id$="node-'.concat(n,'"]')})),e=A.map((function(n){return'[class$="edge-'.concat(n,'"]')}));if(document.querySelectorAll(".hide").forEach((function(n){return n.classList.remove("hide")})),n.length){var r=document.querySelectorAll(n.join(",")),i=document.querySelectorAll(e.join(","));r.forEach((function(n){return n.classList.add("hide")})),i.forEach((function(n){return n.classList.add("hide")}))}(function(){try{return window.self!==window.top}catch(n){return!0}})()||t("/")}),[Z,A,C,t]),u.useEffect((function(){var n=function(n){try{var e;if(!(null===(e=n.data)||void 0===e?void 0:e.json))return;var t=(0,m.E)(n.data.json),i=t.nodes,o=t.edges,c=(0,r.Z)({direction:"RIGHT",theme:k},n.data.options);R("direction",c.direction),"light"!==c.theme&&"dark"!==c.theme||y(c.theme),R("nodes",i),R("edges",o)}catch(u){console.error(u),l.ZP.error("Invalid JSON!")}};return window.addEventListener("message",n),function(){return window.removeEventListener("message",n)}}),[R,k]),e.json?(0,c.jsxs)(w,{children:[(0,c.jsx)("h1",{children:"\u26a0\ufe0f Deprecated \u26a0\ufe0f"}),(0,c.jsx)("br",{}),(0,c.jsx)("a",{href:"https://jsoncrack.com/embed",target:"_blank",rel:"noreferrer",children:"https://jsoncrack.com/embed"})]}):(0,c.jsxs)(v.f6,{theme:"dark"===k?h.$_:h.Wb,children:[(0,c.jsx)(j,{openModal:S,setSelectedNode:N,isWidget:!0}),(0,c.jsx)(p.c,{selectedNode:g,visible:s,closeModal:function(){return a(!1)}}),(0,c.jsx)(E,{href:"".concat(f.v,"/editor"),target:"_blank",rel:"noreferrer",children:"jsoncrack.com"})]})}}},function(n){n.O(0,[683,202,774,888,179],(function(){return e=4469,n(n.s=e);var e}));var e=n.O();_N_E=e}]);