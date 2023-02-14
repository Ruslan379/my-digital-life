/*! For license information please see 498.da638c99.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[498],{6999:function(t,e,n){n.d(e,{C:function(){return L}});var a=n(885),r=n(2791),s=n(9434),o=n(6052),i=n(1438),c=n(2288),l="ContactEditor_FormEdit__u3Qim",u="ContactEditor_FormLabelEdit__ul2rA",d="ContactEditor_FormBtnEdit__nK0vb",m="ContactEditor_FormInputEdit__EXW93",f=n(3329),h=function(t){var e=t.id,n=t.name,a=t.phone,r=t.toggleModal,h=(0,s.I0)(),_=(0,s.v9)(i.NH);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{className:l,onSubmit:function(t){t.preventDefault();var n=t.currentTarget;h((0,o.mP)({id:e,name:n.elements.name.value,phone:n.elements.phone.value})),n.reset(),r()},children:[(0,f.jsxs)("label",{className:u,children:[_?"Please wait...":"Name",(0,f.jsx)("br",{}),(0,f.jsx)("input",{className:m,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:n})]}),(0,f.jsx)("br",{}),(0,f.jsxs)("label",{className:u,children:[_?"...":"Phone",(0,f.jsx)("br",{}),(0,f.jsx)("input",{className:m,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:a})]}),(0,f.jsx)("br",{}),(0,f.jsx)("button",{className:d,type:"submit",disabled:_,children:_?(0,f.jsx)(c.$,{size:"32",children:"Add contact"}):"Edit contact"})]})})},_=n(4164),x="Modal_Overlay__yoxbg",p="Modal_Modal__I1UYJ",v=document.querySelector("#modal-root");function j(t){var e=t.children,n=t.onClose;(0,r.useEffect)((function(){var t=function(t){"Escape"===t.code&&n()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[n]);return(0,_.createPortal)((0,f.jsx)("div",{className:x,onClick:function(t){t.currentTarget===t.target&&n()},children:(0,f.jsx)("div",{className:p,children:e})}),v)}var C="ContactListItem_ContactListItem__sSK4a",b="ContactListItem_ContactListText__A1dah",N="ContactListItem_ContactListNumber__2WeGK",y="ContactListItem_ContactListEditBtn__V1H9K",g="ContactListItem_ContactListDeleteBtn__TE5BB",F=function(t){var e=t.id,n=t.name,c=t.phone,l=(0,r.useState)(!1),u=(0,a.Z)(l,2),d=u[0],m=u[1],_=(0,s.I0)(),x=(0,s.v9)(i.NH),p=function(){m(!d)};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("li",{className:C,children:[(0,f.jsxs)("p",{className:b,children:[n,":",(0,f.jsxs)("span",{className:N,children:[" ",c]})]}),(0,f.jsx)("button",{type:"button",className:y,onClick:function(){p()},disabled:x,children:"Edit"}),(0,f.jsx)("button",{type:"button",className:g,onClick:function(){_((0,o.GK)(e))},disabled:x,children:"Delete"}),d&&(0,f.jsx)(j,{onClose:p,children:(0,f.jsx)(h,{id:e,name:n,phone:c,toggleModal:p})})]})})},w="ContactList_ContactList__2mXfy",L=function(t){var e=t.visibleContacts;return(0,f.jsx)("ul",{className:w,children:e.map((function(t){var e=t._id,n=t.name,a=t.phone;return(0,f.jsx)(F,{id:e,name:n,phone:a},e)}))})}},5700:function(t,e,n){n.d(e,{W:function(){return s}});n(2791);var a="Container_Container__dPyVg",r=n(3329),s=function(t){var e=t.children;return(0,r.jsx)("div",{className:a,children:e})}},8483:function(t,e,n){n.d(e,{J:function(){return u}});var a=n(7762),r=n(9434),s=n(6052),o=n(1438),i=n(5700),c="DeleteAllContacts_DeleteAllContactsBtn__4R-sx",l=n(3329);function u(){var t=(0,r.I0)(),e=(0,r.v9)(o.NH),n=(0,r.v9)(o.oy);return(0,l.jsx)(i.W,{children:(0,l.jsx)("button",{type:"button",className:c,onClick:function(){var e,r=(0,a.Z)(n);try{for(r.s();!(e=r.n()).done;){var o=e.value._id;t((0,s.GK)(o))}}catch(i){r.e(i)}finally{r.f()}},disabled:e,children:"Delete all Contacts"})})}},1916:function(t,e,n){n.d(e,{w:function(){return l}});n(2791);var a=n(9434),r=n(8805),s=n(1634),o="Filter_FilterLabel__OSs84",i="Filter_FilterInput__-+rOd",c=n(3329),l=function(){var t=(0,a.I0)(),e=(0,a.v9)(r.z);return(0,c.jsxs)("label",{className:o,children:["Find contacts by name",(0,c.jsx)("input",{className:i,type:"text",value:e,onChange:function(e){var n=e.currentTarget.value;t((0,s.B)({filterValue:n}))}})]})}},854:function(t,e,n){n.d(e,{a:function(){return s}});n(2791);var a=n(5243),r=n(3329),s=function(){return(0,r.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,r.jsx)(a.Bb,{width:"100%"})]})}},2288:function(t,e,n){n.d(e,{$:function(){return l}});var a,r=n(168),s=n(6794),o=n(2554),i=n(5899),c=(0,o.F4)(a||(a=(0,r.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),l=(0,s.Z)(i.frZ,{target:"ehj7z040"})("animation:",c," 0.85s linear infinite;");l.defaultProps={size:40}},7498:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=n(2791),r=n(9434),s=n(6052),o=n(1438),i=n(8805),c=n(5700),l=n(8174),u=(n(5462),n(2288)),d="ContactForm_Form__IBmOq",m="ContactForm_FormLabel__SwfwS",f="ContactForm_FormBtn__qtcqm",h="ContactForm_FormInput__s9Pni",_=n(3329),x=function(){var t=(0,r.I0)(),e=(0,r.v9)(o.oy),n=(0,r.v9)(o.NH);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("form",{className:d,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r=a.elements.name.value,o=a.elements.phone.value;if(e.find((function(t){return t.name.toLowerCase()===r.toLowerCase()})))return l.Am.warning("".concat(r," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445.")),void a.reset();t((0,s.uK)({name:r,phone:o})),a.reset()},children:[(0,_.jsxs)("label",{className:m,children:[n?"Please wait...":"Name",(0,_.jsx)("br",{}),(0,_.jsx)("input",{className:h,id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsx)("br",{}),(0,_.jsxs)("label",{className:m,children:[n?"...":"Phone",(0,_.jsx)("br",{}),(0,_.jsx)("input",{className:h,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("br",{}),(0,_.jsx)("button",{className:f,type:"submit",disabled:n,children:n?(0,_.jsx)(u.$,{size:"32",children:"Add contact"}):"Add contact"})]}),(0,_.jsx)(l.Ix,{autoClose:1500,theme:"colored"})]})},p=n(854),v=n(1916),j=n(6999),C=n(8483);function b(){var t=(0,r.I0)(),e=(0,r.v9)(o.NH),n=(0,r.v9)(i.z),l=(0,r.v9)(o.oy);console.log("Contacts==>contacts:",l),(0,a.useEffect)((function(){t((0,s.yF)())}),[t]);var u=function(){var t=n.toLowerCase();return l.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),d=l.length;return(0,_.jsxs)(c.W,{children:[(0,_.jsx)(x,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsxs)("p",{children:["Total: ",d]}),e&&(0,_.jsx)(p.a,{}),l.length>0&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(v.w,{}),(0,_.jsx)(j.C,{visibleContacts:u})]}),l.length>0&&!e&&(0,_.jsx)(C.J,{})]})}},1438:function(t,e,n){n.d(e,{NH:function(){return a},O3:function(){return s},oy:function(){return r}});var a=function(t){return t.contacts.isLoading},r=function(t){return t.contacts.items},s=function(t){return t.contacts.uploadContacts}},8805:function(t,e,n){n.d(e,{z:function(){return a}});var a=function(t){return t.filter}}}]);
//# sourceMappingURL=498.da638c99.chunk.js.map