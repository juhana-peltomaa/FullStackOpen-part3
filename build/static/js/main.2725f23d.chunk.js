(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),u=t(3),a=t(1),i=t(0),o=function(e){return Object(i.jsxs)("form",{onSubmit:e.setToNewName,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNewName})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNewNumber})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:e.filtteri,onChange:e.handleFilter})]})},d=function(e){return Object(i.jsxs)("div",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{value:e.name,number:e.number,id:e.id,onClick:e.onClick,children:"delete"})]})},l=t(4),b=t.n(l),j="/api/persons/",m=function(){return b.a.get(j).then((function(e){return e.data}))},f=function(e){return b.a.post(j,e).then((function(e){return e.data}))},h=function(e){return b.a.delete(j+e.id,{data:{id:e.id,name:e.name,number:e.number}}).then((function(e){}))},O=function(e,n){return b.a.put(j+n,{name:e.name,number:e.number,id:n}).then((function(e){return e.status}))},g=function(e){var n=e.message;return null===n?null:n.includes("server")?Object(i.jsx)("div",{style:{color:"red",background:"lightgrey",borderStyle:"solid",fontSize:20,borderRadius:5,padding:10,marginBottom:10},children:n}):Object(i.jsx)("div",{style:{color:"green",background:"lightgrey",borderStyle:"solid",fontSize:20,borderRadius:5,padding:10,marginBottom:10},children:n})},v=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),b=l[0],j=l[1],v=Object(a.useState)(""),w=Object(u.a)(v,2),p=w[0],x=w[1],N=Object(a.useState)(!0),S=Object(u.a)(N,2),y=S[0],k=S[1],C=Object(a.useState)(""),T=Object(u.a)(C,2),B=T[0],z=T[1],D=Object(a.useState)(null),E=Object(u.a)(D,2),F=E[0],J=E[1],L=Object(a.useState)(null),R=Object(u.a)(L,2),A=R[0],I=R[1];Object(a.useEffect)((function(){m().then((function(e){r(e)}))}),[]);var P=y?t:t.filter((function(e){return e.name.toLowerCase().includes(B.toLowerCase())})),q=function(e){if(window.confirm("Delete ".concat(e.target.value," ?"))){var n={id:e.target.id,name:e.target.value,number:e.target.number};h(n).then((function(e){m().then((function(e){r(e)}))}))}};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(g,{message:F}),Object(i.jsx)(g,{message:A}),Object(i.jsx)(s,{filtteri:B,handleFilter:function(e){k(!1),z(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(o,{setToNewName:function(e){e.preventDefault();var n={name:b,number:p},c=t.map((function(e){return e.name})),u=t.filter((function(e){return e.name===b})).map((function(e){return e.id}));c.includes(b)?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&O(n,u.toString()).then((function(e){console.log(e),200===e&&(J("".concat(b,"'s number was successfully updated!")),setTimeout((function(){J(null)}),3e3))})).catch((function(e){I("Note '".concat(b,"' was already removed from server")),setTimeout((function(){I(null)}),5e3)})).then((function(e){m().then((function(e){r(e)}))})):f(n).then((function(e){r(t.concat(e)),j(""),x(""),J("".concat(b," was successfully added!")),setTimeout((function(){J(null)}),3e3)}))},newName:b,handleNewName:function(e){j(e.target.value)},newNumber:p,handleNewNumber:function(e){x(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("div",{children:P.map((function(e){return Object(i.jsx)(d,{name:e.name,number:e.number,id:e.id,onClick:q},e.name)}))})]})};c.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2725f23d.chunk.js.map