(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),o=n(7),d=n(4),l=(n(12),n(0)),r=function(e){var t=e.task,n=e.completeTask;return Object(l.jsx)("div",{className:"task",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("span",{children:["Todo: ",t.taskName]}),Object(l.jsxs)("span",{children:["Deadline: ",t.deadline," days"]}),Object(l.jsx)("button",{onClick:function(){n(t.taskName)},children:"X"})]})})},u=function(){var e=a.useState(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=a.useState(0),i=Object(d.a)(s,2),u=i[0],j=i[1],b=a.useState([]),h=Object(d.a)(b,2),m=h[0],p=h[1],O=function(e){"task"===e.target.name?c(e.target.value):j(Number(e.target.value))},k=function(e){p(m.filter((function(t){return t.taskName!=e})))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("input",{type:"text",placeholder:"Task to do...",name:"task",value:n,onChange:O}),Object(l.jsx)("input",{type:"number",placeholder:"Deadline (in Days)..",name:"deadline",value:u,onChange:O})]}),Object(l.jsx)("button",{onClick:function(){var e={taskName:n,deadline:u};p([].concat(Object(o.a)(m),[e])),c(""),j(0)},children:"Add Task"})]}),Object(l.jsx)("div",{className:"todo-list",children:m.map((function(e,t){return Object(l.jsx)(r,{task:e,completeTask:k},t)}))})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.ef6502f3.chunk.js.map