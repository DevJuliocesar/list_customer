(this.webpackJsonplist_customer=this.webpackJsonplist_customer||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(27),i=n.n(s),o=(n(210),n(75)),d=n(28),j=(n(211),n(61)),u=n.n(j),l=n(84),b=n(56),x=n(99),O=n(200),h=n(114),p=n(356),m=n(361),f=n(362),g=n(359),v=n(364),y=n(360),I=n(55),S=n(363),k=n(357),w=n(122),C=n(183),E=n(184),F=n(196),T=n(197),D=function(e){Object(E.a)(n,e);var t=Object(F.a)(n);function n(e){var c;return Object(C.a)(this,n),(c=t.call(this,e.statusText)).response=void 0,c.response=e,c}return n}(Object(T.a)(Error));function N(e){return 204===e.status||205===e.status?null:e.json()}function U(e){if(e.status>=200&&e.status<300)return e;var t=new D(e);throw t.response=e,t}function L(e,t){return _.apply(this,arguments)}function _(){return(_=Object(l.a)(u.a.mark((function e(t,n){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return c=e.sent,e.next=5,U(c);case 5:return a=e.sent,e.abrupt("return",N(a));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){e.LIST_USERS="/users"}(c||(c={}));var J,P,R="https://my-json-server.typicode.com/devjuliocesar/list_customer",z=n(13),A=p.a.Header,B=p.a.Content,H=p.a.Footer,K=w.a.div(J||(J=Object(h.a)(["\n    min-height: 280px;\n    padding: 24px;\n    background: #fff;"]))),q=function(e){var t=e.editing,n=e.dataIndex,c=e.title,a=e.inputType,r=(e.record,e.index,e.children),s=Object(O.a)(e,["editing","dataIndex","title","inputType","record","index","children"]),i="number"===a?Object(z.jsx)(m.a,{}):Object(z.jsx)(f.a,{});return Object(z.jsx)("td",Object(x.a)(Object(x.a)({},s),{},{children:t?Object(z.jsx)(g.a.Item,{name:n,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(c,"!")}],children:i}):r}))},M=function(){var e=g.a.useForm(),t=Object(b.a)(e,1)[0],n=Object(a.useState)([]),r=Object(b.a)(n,2),s=r[0],i=r[1],d=Object(a.useState)(!1),j=Object(b.a)(d,2),O=(j[0],j[1]),h=Object(a.useState)(!1),m=Object(b.a)(h,2),f=(m[0],m[1]),w=Object(a.useState)(0),C=Object(b.a)(w,2),E=C[0],F=C[1],T=function(e){return e.id===E};Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!1),f(!0),e.prev=2,e.next=5,L(R+c.LIST_USERS);case 5:t=e.sent,i(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),O(!0);case 12:f(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var D=function(){F(0)},N=[{title:"Nombre",dataIndex:"name",key:"name",editable:!0,render:function(e,t){return Object(z.jsx)(o.b,{to:{pathname:"/customer/".concat(t.id)},children:e})}},{title:"Identificacion",dataIndex:"id",key:"id"},{title:"Edad",dataIndex:"age",key:"age",editable:!0},{title:"Fecha de Nacimiento",dataIndex:"birthDate",key:"birthDate",editable:!0},{title:"operation",dataIndex:"operation",render:function(e,n){return T(n)?Object(z.jsx)("span",{children:Object(z.jsx)(v.a,{title:"Estas seguro de cancelar",onConfirm:D,children:"Cancelar"})}):Object(z.jsx)(y.a.Link,{disabled:0!==E,onClick:function(){return function(e){t.setFieldsValue(Object(x.a)({name:"",age:"",birthDate:""},e)),F(e.id)}(n)},children:"Editar"})}}].map((function(e){return e.editable?Object(x.a)(Object(x.a)({},e),{},{onCell:function(t){return{record:t,inputType:"age"===e.dataIndex?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:T(t)}}}):e}));return Object(z.jsxs)(p.a,{className:"layout",children:[Object(z.jsxs)(A,{children:[Object(z.jsx)("div",{className:"logo"}),Object(z.jsx)(I.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(z.jsx)(I.a.Item,{children:"Usuarios"},"2")})]}),Object(z.jsxs)(B,{style:{padding:"0 50px"},children:[Object(z.jsx)(S.a,{style:{margin:"16px 0"},children:Object(z.jsx)(S.a.Item,{children:"Usuarios"})}),Object(z.jsx)(K,{children:Object(z.jsx)(g.a,{form:t,component:!1,children:Object(z.jsx)(k.a,{components:{body:{cell:q}},rowClassName:"editable-row",columns:N,dataSource:s})})})]}),Object(z.jsx)(H,{style:{textAlign:"center"},children:"DeveloperJulioCesar\xae"})]})},V=n(358),G=n(138),Q=n(108),W=n(365),X=n(202),Y=n(136),Z=w.a.div(P||(P=Object(h.a)(["\n    min-height: 280px;\n    padding: 24px;\n    background: #fff;"]))),$=function(){var e=Object(d.g)().id,t=Object(a.useState)({id:0,name:"",birthDate:void 0,age:0}),n=Object(b.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(!1),j=Object(b.a)(i,2),x=(j[0],j[1]),O=Object(a.useState)(!1),h=Object(b.a)(O,2),m=(h[0],h[1]);return Object(a.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),x(!1),m(!0),t.prev=3,t.next=6,L("".concat(R+c.LIST_USERS,"/").concat(e));case 6:n=t.sent,s(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),x(!0);case 13:m(!1);case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(z.jsxs)(p.a,{className:"layout",children:[Object(z.jsxs)(G.Header,{children:[Object(z.jsx)("div",{className:"logo"}),Object(z.jsxs)(I.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(z.jsx)(I.a.Item,{children:Object(z.jsx)(o.b,{to:"/customer/list",children:Object(z.jsx)(Q.a,{})})},"1"),Object(z.jsx)(I.a.Item,{children:"Usuarios"},"2")]})]}),Object(z.jsxs)(G.Content,{style:{padding:"0 50px"},children:[Object(z.jsxs)(S.a,{style:{margin:"16px 0"},children:[Object(z.jsx)(S.a.Item,{children:Object(z.jsx)(o.b,{to:"/customer/list",children:"Usuarios"})}),Object(z.jsx)(S.a.Item,{children:r.name})]}),Object(z.jsx)(Z,{children:Object(z.jsxs)(V.a,{title:r.name,style:{width:300},actions:[Object(z.jsx)(W.a,{},"setting"),Object(z.jsx)(X.a,{},"edit"),Object(z.jsx)(Y.a,{},"ellipsis")],children:[Object(z.jsxs)("p",{children:["Identificaci\xf3n"," ",r.id]}),Object(z.jsxs)("p",{children:["Edad"," ",r.age]}),Object(z.jsxs)("p",{children:["Fecha de Nacimiento"," ",r.birthDate]})]})})]}),Object(z.jsx)(G.Footer,{style:{textAlign:"center"},children:"DeveloperJulioCesar\xae"})]})};var ee=function(){return Object(z.jsx)(o.a,{children:Object(z.jsxs)(d.d,{children:[Object(z.jsx)(d.b,{exact:!0,path:"/customer/list",component:M}),Object(z.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(z.jsx)(d.a,{to:"/customer/list"})}}),Object(z.jsx)(d.b,{exact:!0,path:"/customer",render:function(){return Object(z.jsx)(d.a,{to:"/customer/list"})}}),Object(z.jsx)(d.b,{exact:!0,path:"/customer/:id",component:$})]})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(ee,{})}),document.getElementById("root")),te()}},[[353,1,2]]]);
//# sourceMappingURL=main.246aab53.chunk.js.map