(this["webpackJsonptest-project"]=this["webpackJsonptest-project"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(4),s=n.n(o),r=(n(9),n(3)),l=i.a.createContext(),d=n(0),j={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",width:"780px",border:"1px solid gray",borderRadius:"5px",marginBottom:".5rem"},input:{marginRight:"1rem"}};var u=function(e){var t=e.todo,n=e.index,i=e.onChange,o=Object(c.useContext)(l).removeTodo,s=[];return t.completed&&s.push("done"),Object(d.jsxs)("li",{style:j.li,children:[Object(d.jsxs)("span",{className:s.join(" "),children:[Object(d.jsx)("input",{type:"checkbox",checked:t.completed,style:j.input,onChange:function(){return i(t.id)}}),Object(d.jsxs)("strong",{children:[n+1,". "]}),t.title]}),Object(d.jsx)("button",{className:"remove__button",onClick:o.bind(null,t.id),children:" \xd7"})]})},a={ul:{padding:0,margin:0,listStyle:"none",marginLeft:"1rem"}};var b=function(e){return Object(d.jsx)("ul",{style:a.ul,children:e.items.map((function(t,n){return Object(d.jsx)(u,{todo:t,index:n,onChange:e.onToggle},t.id)}))})},p=function(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"0.5rem"},children:Object(d.jsxs)("div",{className:"lds-ellipsis",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})},h=Object(c.lazy)((function(){return new Promise((function(e){setTimeout((function(){e(n.e(3).then(n.bind(null,13)))}),3e3)}))}));var m=function(){var e=i.a.useState([]),t=Object(r.a)(e,2),n=t[0],o=t[1],s=i.a.useState(!0),j=Object(r.a)(s,2),u=j[0],a=j[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){setTimeout((function(){o(e),a(!1)}),2e3)}))}),[]),Object(d.jsx)(l.Provider,{value:{removeTodo:function(e){o(n.filter((function(t){return t.id!==e})))}},children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Test React project"}),Object(d.jsx)(i.a.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:Object(d.jsx)(h,{onCreate:function(e){o(n.concat([{title:e,id:Date.now(),completed:!1}]))}})}),u&&Object(d.jsx)(p,{}),n.length?Object(d.jsx)(b,{items:n,onToggle:function(e){o(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):u?null:Object(d.jsx)("p",{children:" No things to do"})]})})},x=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b794f9c2.chunk.js.map