(this.webpackJsonpcurd_app=this.webpackJsonpcurd_app||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),s=a.n(c),i=(a(38),a(39),a(40),a(4)),o=a.n(i),l=a(10),m=a(12),u=a(11),j=a.n(u),d=a(5),b=a(0),p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://my-json-server.typicode.com/robygupta98/JsonServer/users");case 2:t=e.sent,r(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("https://my-json-server.typicode.com/robygupta98/JsonServer/users/".concat(t));case 2:c();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"py-4",children:[Object(b.jsx)("h1",{children:"Home Page"}),Object(b.jsxs)("table",{class:"table border shadow",children:[Object(b.jsx)("thead",{class:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"User Name"}),Object(b.jsx)("th",{scope:"col",children:"Email"}),Object(b.jsx)("th",{children:"Action"})]})}),Object(b.jsx)("tbody",{children:a.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:t+1}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.username}),Object(b.jsx)("td",{children:e.email}),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.b,{class:"btn btn-primary mr-2",style:{marginRight:"4px"},to:"/users/".concat(e.id),children:"View"}),Object(b.jsx)(d.b,{class:"btn btn-outline-primary me-2",style:{marginRight:"4px"},to:"/users/edit/".concat(e.id),children:"Edit"}),Object(b.jsx)(d.b,{class:"btn btn-danger",onClick:function(){return s(e.id)},children:"Delete"})]})]})}))})]})]})})})},h=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"py-4",children:[Object(b.jsx)("h1",{children:" Contect Page "}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(b.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(b.jsx)("label",{className:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})})},x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"py-4",children:[Object(b.jsx)("h1",{children:" About Page "}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in ad sequi maxime quia! Corrupti perferendis illum deleniti nisi itaque error quis aut illo, exercitationem velit dicta atque magni, expedita, qui reprehenderit enim a tempora sint commodi nemo possimus veritatis?"}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in ad sequi maxime quia! Corrupti perferendis illum deleniti nisi itaque error quis aut illo, exercitationem velit dicta atque magni, expedita, qui reprehenderit enim a tempora sint commodi nemo possimus veritatis?"}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in ad sequi maxime quia! Corrupti perferendis illum deleniti nisi itaque error quis aut illo, exercitationem velit dicta atque magni, expedita, qui reprehenderit enim a tempora sint commodi nemo possimus veritatis?"})]})})})},O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"navbar-brand",children:"React User"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(d.c,{className:"nav-link",exact:!0,to:"/reactJslivesite",children:"Home "})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.c,{className:"nav-link",exact:!0,to:"/About",children:"About"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.c,{className:"nav-link",exact:!0,to:"/Contect",children:"Contact"})})]})}),Object(b.jsx)(d.b,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})})},f=a(2),v=function(){return Object(b.jsx)("div",{className:"not-found",children:Object(b.jsx)("h1",{className:"display-1",children:" 404, Opps this page is not found."})})},g=a(14),N=a(15),y=function(){var e=Object(f.f)(),t=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(m.a)(t,2),r=a[0],c=a[1],s=r.name,i=r.username,u=r.email,d=r.phone,p=r.website,h=function(e){c(Object(N.a)(Object(N.a)({},r),{},Object(g.a)({},e.target.name,e.target.value)))},x=function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,j.a.post("http://localhost:3002/users",r);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(b.jsxs)("form",{onSubmit:function(e){return x(e)},children:[Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:s,onChange:function(e){return h(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:i,onChange:function(e){return h(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:u,onChange:function(e){return h(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:d,onChange:function(e){return h(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:p,onChange:function(e){return h(e)}})}),Object(b.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})},w=function(){var e=Object(f.f)(),t=Object(f.g)().id,a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),r=Object(m.a)(a,2),c=r[0],s=r[1],i=c.name,u=c.username,d=c.email,p=c.phone,h=c.website,x=function(e){s(Object(N.a)(Object(N.a)({},c),{},Object(g.a)({},e.target.name,e.target.value)))},O=function(){var a=Object(l.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,j.a.put("http://localhost:3002/users/".concat(t),c);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://localhost:3002/users/".concat(t));case 2:a=e.sent,s(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[]),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(b.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:i,onChange:function(e){return x(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:u,onChange:function(e){return x(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:d,onChange:function(e){return x(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:p,onChange:function(e){return x(e)}})}),Object(b.jsx)("div",{className:"form-group",style:{marginBottom:"4px"},children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:h,onChange:function(e){return x(e)}})}),Object(b.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},E=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",webiste:""}),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(f.g)().id,s=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://localhost:3002/users/".concat(c));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(b.jsxs)("div",{className:"container py-4",children:[Object(b.jsx)(d.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(b.jsxs)("h1",{className:"display-4",children:["User Id: ",c]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("ul",{className:"list-group w-50",children:[Object(b.jsxs)("li",{className:"list-group-item",children:["name: ",a.name]}),Object(b.jsxs)("li",{className:"list-group-item",children:["user name: ",a.username]}),Object(b.jsxs)("li",{className:"list-group-item",children:["email: ",a.email]}),Object(b.jsxs)("li",{className:"list-group-item",children:["phone: ",a.phone]}),Object(b.jsxs)("li",{className:"list-group-item",children:["website: ",a.website]})]})]})};var k=function(){return Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{exact:!0,path:"/reactJslivesite",component:p}),Object(b.jsx)(f.a,{exact:!0,path:"/About",component:x}),Object(b.jsx)(f.a,{exact:!0,path:"/Contect",component:h}),Object(b.jsx)(f.a,{exact:!0,path:"/users/add",component:y}),Object(b.jsx)(f.a,{exact:!0,path:"/users/edit/:id",component:w}),Object(b.jsx)(f.a,{exact:!0,path:"/users/:id",component:E}),Object(b.jsx)(f.a,{component:v}),Object(b.jsx)(p,{})]})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.f0457b5b.chunk.js.map