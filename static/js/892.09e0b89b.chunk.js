/*! For license information please see 892.09e0b89b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[892],{2892:function(a,t,e){e.r(t),e.d(t,{default:function(){return v}});var o=e(5861),n=e(4687),r=e.n(n),c=e(9434),s=e(7689),l=e(5822),p={UploadContactsBtn:"UploadAvatarPage_UploadContactsBtn__Jhsge",AddUploadContactsBtn:"UploadAvatarPage_AddUploadContactsBtn__lZsmu",hide:"UploadAvatarPage_hide__gj4eW",TotalUploadContacts:"UploadAvatarPage_TotalUploadContacts__i2bU3"},i=e(4702),d=e(276),u=e(3329),g=(0,i.ZF)({apiKey:"AIzaSyAJCkgGuoopUtogXXP5uwOnsJ29-UCECiY",authDomain:"contacts-book-backend.firebaseapp.com",projectId:"contacts-book-backend",storageBucket:"contacts-book-backend.appspot.com",messagingSenderId:"328355692785",appId:"1:328355692785:web:a473dcce1b45a071456950"});console.log("app:",g);var m=(0,d.cF)(g);function v(){var a=(0,c.I0)(),t=(0,s.s0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("event.target.image:",e.target.avatar);var n=e.target.avatar.files[0];console.log("avatar:",n),console.log("avatar.name:",n.name);var c=new FormData;c.append("avatar",n),console.log("formData:",c);var s=n.name;function p(){return(p=(0,o.Z)(r().mark((function a(){var t,e,o,c;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=(0,d.iH)(m,"avatars/".concat(s)),console.log("storageRef:",t),e=new Blob([n],{type:"image/png"}),console.log("blob:",e),a.next=6,(0,d.KV)(t,n);case 6:return o=a.sent,console.log("uploadBytesAvatar:",o),a.next=10,(0,d.Jt)((0,d.iH)(m,"avatars/".concat(s)));case 10:return c=a.sent,console.log("\u0410\u0421\u041e\u041b\u042e\u0422\u041d\u042b\u0419 (\u041f\u041e\u041b\u041d\u042b\u0419) \u043f\u0443\u0442\u044c \u043a \u043d\u043e\u0432\u043e\u043c\u0443 Jimp-\u0444\u0430\u0439\u043b\u0443 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u0432 \u043f\u0430\u043f\u043a\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f -> avatarURL2:",c),a.abrupt("return",c);case 13:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){p.apply(this,arguments)}(),a((0,l.mk)(c)),t("/contacts",{replace:!0})},children:[(0,u.jsx)("label",{className:p.FormLabel,children:(0,u.jsx)("input",{type:"file",name:"avatar"})}),(0,u.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b"})]})})}}}]);
//# sourceMappingURL=892.09e0b89b.chunk.js.map