/*! For license information please see 61.770224b0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[61],{5700:function(n,t,o){o.d(t,{W:function(){return r}});o(2791);var e="Container_Container__dPyVg",a=o(3329),r=function(n){var t=n.children;return(0,a.jsx)("div",{className:e,children:t})}},854:function(n,t,o){o.d(t,{a:function(){return r}});o(2791);var e=o(5243),a=o(3329),r=function(){return(0,a.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,a.jsx)(e.Bb,{width:"100%"})]})}},4203:function(n,t,o){o.d(t,{$:function(){return d}});o(2791);var e=o(9434),a=o(6052),r="UploadContactsList_ContactList__75BJC",c="UploadContactsList_ContactListItem__Qm6QW",i="UploadContactsList_ContactListText__szmed",s="UploadContactsList_ContactListNumber__Wjent",u="UploadContactsList_ContactListBtn__ZWhaA",l=o(3329),d=function(n){var t=n.uploadContacts,o=(0,e.I0)();return(0,l.jsx)("ul",{className:r,children:t.map((function(n){var t=n.id,e=n.name,r=n.number;return(0,l.jsxs)("li",{className:c,children:[(0,l.jsxs)("p",{className:i,children:[e,":",(0,l.jsxs)("span",{className:s,children:[" ",r]})]}),(0,l.jsx)("button",{type:"button",className:u,onClick:function(){return function(n){return o((0,a.kf)(n))}(t)},children:"Delete"})]},t)}))})}},61:function(n,t,o){o.r(t),o.d(t,{default:function(){return _}});var e=o(7762),a=o(9434),r=o(7689),c=o(6052),i=o(1438),s=o(5700),u=o(854),l=o(4203),d="IncomePage_UploadContactsBtn__CEKHU",f="IncomePage_AddUploadContactsBtn__jVPXK",m="IncomePage_hide__74CWN",h="IncomePage_TotalUploadContacts__Io9Vj",p=o(3329);function _(){var n=(0,a.I0)(),t=(0,r.s0)(),o=(0,a.v9)(i.NH),_=(0,a.v9)(i.O3);console.log("UploadContacts==>uploadContacts:",_);var C=(0,a.v9)(i.oy);console.log("Contacts==>contacts:",C);var v=_.length;return(0,p.jsxs)(s.W,{children:[(0,p.jsx)("button",{type:"button",className:0===_.length?d:m,onClick:function(){return n((0,c.RG)())},disabled:_.length>0,children:"Upload contacts from mockapi.io"}),(0,p.jsx)("br",{}),o&&(0,p.jsx)(u.a,{}),_.length>0&&!o&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{className:h,children:["Total upload contacts from mockapi.io: ",v]}),(0,p.jsx)(l.$,{uploadContacts:_})]}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{type:"button",className:_.length>0?f:m,onClick:function(){var o,a=(0,e.Z)(_);try{for(a.s();!(o=a.n()).done;){var r=o.value,i=r.name,s=r.number;n((0,c.uK)({name:i,phone:s}))}}catch(u){a.e(u)}finally{a.f()}t("/contacts",{replace:!0})},disabled:0===_.length,children:"Add upload contacts from mockapi.io in Contacts List"})]})}},1438:function(n,t,o){o.d(t,{NH:function(){return e},O3:function(){return r},oy:function(){return a}});var e=function(n){return n.contacts.isLoading},a=function(n){return n.contacts.items},r=function(n){return n.contacts.uploadContacts}},7762:function(n,t,o){o.d(t,{Z:function(){return a}});var e=o(181);function a(n,t){var o="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!o){if(Array.isArray(n)||(o=(0,e.Z)(n))||t&&n&&"number"===typeof n.length){o&&(n=o);var a=0,r=function(){};return{s:r,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,s=!1;return{s:function(){o=o.call(n)},n:function(){var n=o.next();return i=n.done,n},e:function(n){s=!0,c=n},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw c}}}}}}]);
//# sourceMappingURL=61.770224b0.chunk.js.map