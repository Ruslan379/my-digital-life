/*! For license information please see 356.4d0bd19c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[356],{5700:function(e,t,n){n.d(t,{W:function(){return r}});n(2791);var a="Container_Container__dPyVg",s=n(3329),r=function(e){var t=e.children;return(0,s.jsx)("div",{className:a,children:t})}},6356:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a,s=n(2791),r=n(9434),o=n(6052),i=n(1438),c=function(e){return e.filter},l=n(5700),d=n(8174),u=(n(5462),n(168)),m=n(6794),h=n(2554),f=n(5899),_=(0,h.F4)(a||(a=(0,u.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),x=(0,m.Z)(f.frZ,{target:"ehj7z040"})("animation:",_," 0.85s linear infinite;");x.defaultProps={size:40};var p="ContactForm_Form__IBmOq",v="ContactForm_FormLabel__SwfwS",j="ContactForm_FormBtn__qtcqm",C="ContactForm_FormInput__s9Pni",b=n(3329),N=function(){var e=(0,r.I0)(),t=(0,r.v9)(i.oy),n=(0,r.v9)(i.NH);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("form",{className:p,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,s=a.elements.name.value,r=a.elements.phone.value;if(t.find((function(e){return e.name.toLowerCase()===s.toLowerCase()})))return d.Am.warning("".concat(s," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445.")),void a.reset();e((0,o.uK)({name:s,phone:r})),a.reset()},children:[(0,b.jsxs)("label",{className:v,children:[n?"Please wait...":"Name",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:C,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsx)("br",{}),(0,b.jsxs)("label",{className:v,children:[n?"...":"Phone",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:C,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("br",{}),(0,b.jsx)("button",{className:j,type:"submit",disabled:n,children:n?(0,b.jsx)(x,{size:"32",children:"Add contact"}):"Add contact"})]}),(0,b.jsx)(d.Ix,{autoClose:1500,theme:"colored"})]})},y=n(966),g=n(1634),F="Filter_FilterLabel__OSs84",L="Filter_FilterInput__-+rOd",w=function(){var e=(0,r.I0)(),t=(0,r.v9)(c);return(0,b.jsxs)("label",{className:F,children:["Find contacts by name",(0,b.jsx)("input",{className:L,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,g.B)({filterValue:n}))}})]})},A=n(885),E="ContactEditor_FormEdit__u3Qim",I="ContactEditor_FormLabelEdit__ul2rA",z="ContactEditor_FormBtnEdit__nK0vb",B="ContactEditor_FormInputEdit__EXW93",P=function(e){var t=e.id,n=e.name,a=e.phone,s=e.toggleModal,c=(0,r.I0)(),l=(0,r.v9)(i.NH);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("form",{className:E,onSubmit:function(e){e.preventDefault();var n=e.currentTarget;c((0,o.mP)({id:t,name:n.elements.name.value,phone:n.elements.phone.value})),n.reset(),s()},children:[(0,b.jsxs)("label",{className:I,children:[l?"Please wait...":"Name",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:B,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:n})]}),(0,b.jsx)("br",{}),(0,b.jsxs)("label",{className:I,children:[l?"...":"Phone",(0,b.jsx)("br",{}),(0,b.jsx)("input",{className:B,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:a})]}),(0,b.jsx)("br",{}),(0,b.jsx)("button",{className:z,type:"submit",disabled:l,children:l?(0,b.jsx)(x,{size:"32",children:"Add contact"}):"Edit contact"})]})})},Z=n(4164),k="Modal_Overlay__yoxbg",q="Modal_Modal__I1UYJ",S=document.querySelector("#modal-root");function D(e){var t=e.children,n=e.onClose;(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,Z.createPortal)((0,b.jsx)("div",{className:k,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,b.jsx)("div",{className:q,children:t})}),S)}var H="ContactListItem_ContactListItem__sSK4a",K="ContactListItem_ContactListText__A1dah",M="ContactListItem_ContactListNumber__2WeGK",T="ContactListItem_ContactListEditBtn__V1H9K",O="ContactListItem_ContactListDeleteBtn__TE5BB",V=function(e){var t=e.id,n=e.name,a=e.phone,c=(0,s.useState)(!1),l=(0,A.Z)(c,2),d=l[0],u=l[1],m=(0,r.I0)(),h=(0,r.v9)(i.NH),f=function(){u(!d)};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("li",{className:H,children:[(0,b.jsxs)("p",{className:K,children:[n,":",(0,b.jsxs)("span",{className:M,children:[" ",a]})]}),(0,b.jsx)("button",{type:"button",className:T,onClick:function(){f()},disabled:h,children:"Edit"}),(0,b.jsx)("button",{type:"button",className:O,onClick:function(){m((0,o.GK)(t))},disabled:h,children:"Delete"}),d&&(0,b.jsx)(D,{onClose:f,children:(0,b.jsx)(P,{id:t,name:n,phone:a,toggleModal:f})})]})})},W="ContactList_ContactList__2mXfy",G=function(e){var t=e.visibleContacts;return(0,b.jsx)("ul",{className:W,children:t.map((function(e){var t=e._id,n=e.name,a=e.phone;return(0,b.jsx)(V,{id:t,name:n,phone:a},t)}))})},J=n(7762),X="DeleteAllContacts_DeleteAllContactsBtn__4R-sx";function $(){var e=(0,r.I0)(),t=(0,r.v9)(i.NH),n=(0,r.v9)(i.oy);return(0,b.jsx)(l.W,{children:(0,b.jsx)("button",{type:"button",className:X,onClick:function(){var t,a=(0,J.Z)(n);try{for(a.s();!(t=a.n()).done;){var s=t.value._id;e((0,o.GK)(s))}}catch(r){a.e(r)}finally{a.f()}},disabled:t,children:"Delete all Contacts"})})}function Q(){var e=(0,r.I0)(),t=(0,r.v9)(i.NH),n=(0,r.v9)(c),a=(0,r.v9)(i.oy);console.log("Contacts==>contacts:",a),(0,s.useEffect)((function(){e((0,o.yF)())}),[e]);var d=function(){var e=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),u=a.length;return(0,b.jsxs)(l.W,{children:[(0,b.jsx)(N,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsxs)("p",{children:["Total: ",u]}),t&&(0,b.jsx)(y.a,{}),a.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{}),(0,b.jsx)(G,{visibleContacts:d})]}),a.length>0&&!t&&(0,b.jsx)($,{})]})}},1438:function(e,t,n){n.d(t,{NH:function(){return a},O3:function(){return r},oy:function(){return s}});var a=function(e){return e.contacts.isLoading},s=function(e){return e.contacts.items},r=function(e){return e.contacts.uploadContacts}}}]);
//# sourceMappingURL=356.4d0bd19c.chunk.js.map