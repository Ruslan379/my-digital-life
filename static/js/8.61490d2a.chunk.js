/*! For license information please see 8.61490d2a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[8],{3917:function(e,n,a){a.d(n,{R:function(){return T}});var t=a(885),s=a(2791),o=a(9434),r=a(5822),c=a(8174),l=(a(5462),a(4289)),i=a(4164),u={Overlay:"ModalNullBalance_Overlay__MY3ZA",Modal:"ModalNullBalance_Modal__Ow1Wp"},d=a(3329),m=document.querySelector("#modal-root");function _(e){var n=e.children,a=e.onClose;(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,i.createPortal)((0,d.jsx)("div",{className:u.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,d.jsx)("div",{className:u.Modal,children:n})}),m)}var h="ModalNullBalanceWindow_FormEdit__kofm7",p=function(){return(0,d.jsx)("div",{className:h,children:"Hello! To get started, enter the current balance of your account!"})},x="BalanceForm_Form__sTjkN",f="BalanceForm_FormLabel__D+IkA",v="BalanceForm_FormBtn__7m8A3",j="BalanceForm_FormInput__bqPQk",g="BalanceForm_btnConfirmActive__b9hJv",N="BalanceForm_btnConfirmDisabled__+QPff",T=function(e){var n=e.balance;console.log("BalanceForm ==> BALANCE:",n);var a=(0,o.I0)(),i=(0,s.useState)(!1),u=(0,t.Z)(i,2),m=u[0],h=u[1];(0,s.useEffect)((function(){a((0,r.sb)())}));var T=(0,o.v9)(l.QM);console.log("BalanceForm ==> balanceNew:",T),console.log("BalanceForm ==> typeof balanceNew:",typeof Number(T));var b=(0,o.v9)(l.wU);console.log("BalanceForm ==> isRefreshing:",b);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t=n.elements.balance.value;a((0,r.Fg)({balance:t})),c.Am.success("Your balance has been successfully updated to ".concat(t," UAN")),n.reset()},children:[(0,d.jsxs)("label",{className:f,children:["Balance:\xa0\xa0\xa0",(0,d.jsx)("input",{className:j,type:"text",name:"balance",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)",placeholder:T})]}),(0,d.jsx)("button",{className:v,type:"submit",children:T?(0,d.jsx)("span",{className:N,children:"NO CONFIRM"}):(0,d.jsx)("span",{className:g,children:"CONFIRM"})})]}),!T&&(0,d.jsx)(_,{onClose:function(){h(!m)},children:(0,d.jsx)(p,{})}),(0,d.jsx)(c.Ix,{autoClose:1500,theme:"colored"})]})}},5700:function(e,n,a){a.d(n,{W:function(){return o}});a(2791);var t="Container_Container__dPyVg",s=a(3329),o=function(e){var n=e.children;return(0,s.jsx)("div",{className:t,children:n})}},854:function(e,n,a){a.d(n,{a:function(){return o}});a(2791);var t=a(5243),s=a(3329),o=function(){return(0,s.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,s.jsx)(t.Bb,{width:"100%"})]})}},2288:function(e,n,a){a.d(n,{$:function(){return i}});var t,s=a(168),o=a(6794),r=a(2554),c=a(5899),l=(0,r.F4)(t||(t=(0,s.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),i=(0,o.Z)(c.frZ,{target:"ehj7z040"})("animation:",l," 0.85s linear infinite;");i.defaultProps={size:40}},1258:function(e,n,a){a.d(n,{v:function(){return j}});var t=a(9434),s=a(8174),o=(a(5462),a(2426)),r=a.n(o),c=a(5822),l=a(7614),i=a(4289),u=a(3982),d="TransactionForm_Form__HDr-h",m="TransactionForm_FormLabel__33C-l",_="TransactionForm_FormBtn__kZSQ7",h="TransactionForm_FormInput__IXxud",p="TransactionForm_FormInputSum__RcDsc",x="TransactionForm_selectText__NeAXk",f="TransactionForm_selectPlaceholder__ilaY3",v=a(3329),j=function(e){var n=e.transactionsType,a=(0,t.I0)(),o=(0,u.a)(),j=o.isRefreshing,g=o.user,N=o.balance,T=g.balance;console.log("TransactionForm ==> balanceUser:",T),console.log("TransactionForm ==> balanceAuth:",N),console.log("TransactionForm ==> isRefreshingAuth:",j);var b=(0,t.v9)(i.QM);console.log("TransactionForm ==> balance1:",b);var y=(0,t.v9)(i.wU);console.log("TransactionForm ==> isRefreshing:",y);var F=r()().format("DD-MM-YYYY");console.log("currentDate:",F);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{className:d,id:"transactionForm",onSubmit:function(e){e.preventDefault();var t=e.currentTarget,o=t.elements.description.value,r=t.elements.category.value,i=t.elements.sum.value;if(o)if("true"!==r)if(i){var u={transactionsType:n,date:F,description:o,category:r,sum:i};console.log("Expenses Transaction:",u),a((0,l.dT)(u)),s.Am.success("Your Expenses transaction has been successfully added"),t.reset(),a((0,c.sb)())}else s.Am.warning("Please enter the transaction amount");else s.Am.warning("Please choose a product category");else s.Am.warning("Please enter a product description")},children:[(0,v.jsx)("label",{className:m,children:(0,v.jsx)("input",{className:h,type:"text",name:"currentDate",defaultValue:F})}),(0,v.jsx)("label",{className:m,children:(0,v.jsx)("input",{className:h,type:"text",name:"description",placeholder:"Product description"})}),(0,v.jsx)("label",{className:m}),(0,v.jsxs)("select",{className:x,id:"productCategory",name:"category",form:"transactionForm",children:[(0,v.jsx)("option",{className:f,value:!0,disabled:!0,selected:!0,children:"Product category"}),(0,v.jsx)("option",{value:"transport",children:"Transport"}),(0,v.jsx)("option",{value:"products",children:"Products"}),(0,v.jsx)("option",{value:"health",children:"Health"}),(0,v.jsx)("option",{value:"alcohol",children:"Alcohol"}),(0,v.jsx)("option",{value:"entertainment",children:"Entertainment"}),(0,v.jsx)("option",{value:"housing",children:"Housing"}),(0,v.jsx)("option",{value:"technique",children:"Technique"}),(0,v.jsx)("option",{value:"communal",children:"Communal, communication"}),(0,v.jsx)("option",{value:"sports",children:"Sports, hobbies"}),(0,v.jsx)("option",{value:"education",children:"Education"}),(0,v.jsx)("option",{value:"other",children:"Other"})]}),(0,v.jsx)("label",{className:m,children:(0,v.jsx)("input",{className:p,type:"text",name:"sum",placeholder:"0,00",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)"})}),(0,v.jsx)("button",{className:_,type:"submit",children:"INPUT"}),(0,v.jsx)("input",{className:_,type:"reset",value:"CLEAR",form:"transactionForm"})]}),(0,v.jsx)(s.Ix,{autoClose:1500,theme:"colored"})]})}},6590:function(e,n,a){a.d(n,{z:function(){return C}});var t=a(885),s=a(2791),o=a(9434),r=a(1941),c=a(4164),l={Overlay:"ModalTransactionLDelete_Overlay__2H6-n",Modal:"ModalTransactionLDelete_Modal__-XWSS"},i=a(3329),u=document.querySelector("#modal-root");function d(e){var n=e.children,a=e.onClose;(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,c.createPortal)((0,i.jsx)("div",{className:l.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,i.jsx)("div",{className:l.Modal,children:n})}),u)}var m=a(7614),_=a(2288),h="ModalTransactionLDeleteWindow_modalWindow__pZbt3",p="ModalTransactionLDeleteWindow_modalTitle__KTziP",x="ModalTransactionLDeleteWindow_modalBtnYes__seQMO",f="ModalTransactionLDeleteWindow_modalBtnNo__5+gwW",v=function(e){var n=e.id,a=e.toggleModal,t=(0,o.I0)(),s=(0,o.v9)(r.O);console.log("ModalTransactionLDeleteWindow ==> isLoading:",s);return(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsx)(_.$,{}),(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("p",{className:p,children:"Are you sure?"}),(0,i.jsx)("button",{className:x,type:"button",onClick:function(){t((0,m.Ks)(n)),a()},children:"YES"}),(0,i.jsx)("button",{className:f,type:"button",onClick:a,children:"NO"})]})]})},j="TransactionListItem_TransactionListItem__7P-i+",g="TransactionListItem_TransactionListItemText__pk84L",N="TransactionListItem_TransactionListItemTextSumExpenses__shLQA",T="TransactionListItem_TransactionListItemTextSumIncome__2F-2F",b="TransactionListItem_ContactListDeleteBtn__6pp5k",y=function(e){var n=e.id,a=e.date,c=e.transactionsType,l=e.description,u=e.category,m=e.sum,_=(0,s.useState)(!1),h=(0,t.Z)(_,2),p=h[0],x=h[1],f=function(){x(!p)},y=(0,o.v9)(r.O);console.log("ContactListItem==>isLoading:",y);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("li",{className:j,children:[(0,i.jsx)("p",{className:g,children:a}),(0,i.jsx)("p",{className:g,children:l}),(0,i.jsx)("p",{className:g,children:u}),(0,i.jsx)("p",{className:"expenses"===c?N:T,children:"expenses"===c?-m:m}),(0,i.jsx)("button",{type:"button",className:b,onClick:function(){f()},disabled:y,children:"Delete"})]}),p&&(0,i.jsx)(d,{onClose:f,children:(0,i.jsx)(v,{id:n,toggleModal:f})})]})},F="TransactionList_ContactList__6JVJP",L="TransactionList_TransactionListHeader__lXBuk",w="TransactionList_TransactionListText__PdA0x",C=function(e){var n=e.transactions;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:L,children:[(0,i.jsx)("p",{className:w,children:"Date"}),(0,i.jsx)("p",{className:w,children:"Description"}),(0,i.jsx)("p",{className:w,children:"Category"}),(0,i.jsx)("p",{className:w,children:"Sum"}),(0,i.jsx)("p",{className:w})]}),(0,i.jsx)("ul",{className:F,children:n.map((function(e){var n=e._id,a=e.transactionsType,t=e.date,s=e.description,o=e.category,r=e.sum;return(0,i.jsx)(y,{id:n,transactionsType:a,date:t,description:s,category:o,sum:r},n)}))})]})}},1941:function(e,n,a){a.d(n,{O:function(){return t},a:function(){return s}});var t=function(e){return e.transactions.isLoading},s=function(e){return e.transactions.allTransactions}}}]);
//# sourceMappingURL=8.61490d2a.chunk.js.map