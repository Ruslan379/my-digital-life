/*! For license information please see 312.73737c4f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[312],{5700:function(e,n,a){a.d(n,{W:function(){return o}});a(2791);var s="Container_Container__dPyVg",t=a(3329),o=function(e){var n=e.children;return(0,t.jsx)("div",{className:s,children:n})}},854:function(e,n,a){a.d(n,{a:function(){return o}});a(2791);var s=a(5243),t=a(3329),o=function(){return(0,t.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,t.jsx)(s.Bb,{width:"100%"})]})}},2288:function(e,n,a){a.d(n,{$:function(){return i}});var s,t=a(168),o=a(6794),r=a(2554),l=a(5899),c=(0,r.F4)(s||(s=(0,t.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),i=(0,o.Z)(l.frZ,{target:"ehj7z040"})("animation:",c," 0.85s linear infinite;");i.defaultProps={size:40}},2312:function(e,n,a){a.r(n),a.d(n,{default:function(){return se}});var s=a(2791),t=a(9434),o=a(5700),r=a(854),l=a(5822),c=a(4289),i=a(7614),d=function(e){return e.transactions.isLoading},u=function(e){return e.transactions.allTransactions},m=a(885),h=a(8174),x=(a(5462),a(4164)),_={Overlay:"ModalNullBalance_Overlay__MY3ZA",Modal:"ModalNullBalance_Modal__Ow1Wp"},p=a(3329),v=document.querySelector("#modal-root");function f(e){var n=e.children,a=e.onClose;(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,x.createPortal)((0,p.jsx)("div",{className:_.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,p.jsx)("div",{className:_.Modal,children:n})}),v)}var j="ModalNullBalanceWindow_FormEdit__kofm7",g=function(){return(0,p.jsx)("div",{className:j,children:"Hello! To get started, enter the current balance of your account!"})},b="BalanceForm_Form__sTjkN",N="BalanceForm_FormLabel__D+IkA",T="BalanceForm_FormBtn__7m8A3",F="BalanceForm_FormInput__bqPQk",y="BalanceForm_btnConfirmActive__b9hJv",w="BalanceForm_btnConfirmDisabled__+QPff",L=function(e){var n=e.balance;console.log("BalanceForm ==> BALANCE:",n);var a=(0,t.I0)(),o=(0,s.useState)(!1),r=(0,m.Z)(o,2),i=r[0],d=r[1];(0,s.useEffect)((function(){a((0,l.sb)())}));var u=(0,t.v9)(c.QM);console.log("BalanceForm ==> balanceNew:",u),console.log("BalanceForm ==> typeof balanceNew:",typeof Number(u));var x=(0,t.v9)(c.wU);console.log("BalanceForm ==> isRefreshing:",x);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:b,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,s=n.elements.balance.value;a((0,l.Fg)({balance:s})),h.Am.success("Your balance has been successfully updated to ".concat(s," UAN")),n.reset()},children:[(0,p.jsxs)("label",{className:N,children:["Balance:\xa0\xa0\xa0",(0,p.jsx)("input",{className:F,type:"text",name:"balance",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)",placeholder:u})]}),(0,p.jsx)("button",{className:T,type:"submit",children:u?(0,p.jsx)("span",{className:w,children:"NO CONFIRM"}):(0,p.jsx)("span",{className:y,children:"CONFIRM"})})]}),!u&&(0,p.jsx)(f,{onClose:function(){d(!i)},children:(0,p.jsx)(g,{})}),(0,p.jsx)(h.Ix,{autoClose:1500,theme:"colored"})]})},C=a(2426),M=a.n(C),E=a(3982),B="TransactionForm_Form__HDr-h",P="TransactionForm_FormLabel__33C-l",k="TransactionForm_FormBtn__kZSQ7",I="TransactionForm_FormInput__IXxud",D="TransactionForm_FormInputSum__RcDsc",A="TransactionForm_selectText__NeAXk",O="TransactionForm_selectPlaceholder__ilaY3",S=function(e){var n=e.transactionsType,a=(0,t.I0)(),s=(0,E.a)(),o=s.isRefreshing,r=s.user,d=s.balance,u=r.balance;console.log("TransactionForm ==> balanceUser:",u),console.log("TransactionForm ==> balanceAuth:",d),console.log("TransactionForm ==> isRefreshingAuth:",o);var m=(0,t.v9)(c.QM);console.log("TransactionForm ==> balance1:",m);var x=(0,t.v9)(c.wU);console.log("TransactionForm ==> isRefreshing:",x);var _=M()().format("DD-MM-YYYY");console.log("currentDate:",_);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:B,id:"transactionForm",onSubmit:function(e){e.preventDefault();var s=e.currentTarget,t=s.elements.description.value,o=s.elements.category.value,r=s.elements.sum.value;if(t)if("true"!==o)if(r){var c={transactionsType:n,date:_,description:t,category:o,sum:r};console.log("Expenses Transaction:",c),a((0,i.dT)(c)),h.Am.success("Your Expenses transaction has been successfully added"),s.reset(),a((0,l.sb)())}else h.Am.warning("Please enter the transaction amount");else h.Am.warning("Please choose a product category");else h.Am.warning("Please enter a product description")},children:[(0,p.jsx)("label",{className:P,children:(0,p.jsx)("input",{className:I,type:"text",name:"currentDate",defaultValue:_})}),(0,p.jsx)("label",{className:P,children:(0,p.jsx)("input",{className:I,type:"text",name:"description",placeholder:"Product description"})}),(0,p.jsx)("label",{className:P}),(0,p.jsxs)("select",{className:A,id:"productCategory",name:"category",form:"transactionForm",children:[(0,p.jsx)("option",{className:O,value:!0,disabled:!0,selected:!0,children:"Product category"}),(0,p.jsx)("option",{value:"transport",children:"Transport"}),(0,p.jsx)("option",{value:"products",children:"Products"}),(0,p.jsx)("option",{value:"health",children:"Health"}),(0,p.jsx)("option",{value:"alcohol",children:"Alcohol"}),(0,p.jsx)("option",{value:"entertainment",children:"Entertainment"}),(0,p.jsx)("option",{value:"housing",children:"Housing"}),(0,p.jsx)("option",{value:"technique",children:"Technique"}),(0,p.jsx)("option",{value:"communal",children:"Communal, communication"}),(0,p.jsx)("option",{value:"sports",children:"Sports, hobbies"}),(0,p.jsx)("option",{value:"education",children:"Education"}),(0,p.jsx)("option",{value:"other",children:"Other"})]}),(0,p.jsx)("label",{className:P,children:(0,p.jsx)("input",{className:D,type:"text",name:"sum",placeholder:"0,00",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)"})}),(0,p.jsx)("button",{className:k,type:"submit",children:"INPUT"}),(0,p.jsx)("input",{className:k,type:"reset",value:"CLEAR",form:"transactionForm"})]}),(0,p.jsx)(h.Ix,{autoClose:1500,theme:"colored"})]})},W={Overlay:"ModalTransactionLDelete_Overlay__2H6-n",Modal:"ModalTransactionLDelete_Modal__-XWSS"},Y=document.querySelector("#modal-root");function R(e){var n=e.children,a=e.onClose;(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,x.createPortal)((0,p.jsx)("div",{className:W.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,p.jsx)("div",{className:W.Modal,children:n})}),Y)}var Z=a(2288),Q="ModalTransactionLDeleteWindow_modalWindow__pZbt3",H="ModalTransactionLDeleteWindow_modalTitle__KTziP",U="ModalTransactionLDeleteWindow_modalBtnYes__seQMO",q="ModalTransactionLDeleteWindow_modalBtnNo__5+gwW",V=function(e){var n=e.id,a=e.toggleModal,s=(0,t.I0)(),o=(0,t.v9)(d);console.log("ModalTransactionLDeleteWindow ==> isLoading:",o);return(0,p.jsxs)(p.Fragment,{children:[o&&(0,p.jsx)(Z.$,{}),(0,p.jsxs)("div",{className:Q,children:[(0,p.jsx)("p",{className:H,children:"Are you sure?"}),(0,p.jsx)("button",{className:U,type:"button",onClick:function(){s((0,i.Ks)(n)),a()},children:"YES"}),(0,p.jsx)("button",{className:q,type:"button",onClick:a,children:"NO"})]})]})},X="TransactionListItem_TransactionListItem__7P-i+",$="TransactionListItem_TransactionListItemText__pk84L",z="TransactionListItem_TransactionListItemTextSum__FV2O0",J="TransactionListItem_ContactListDeleteBtn__6pp5k",K=function(e){var n=e.id,a=e.date,o=e.description,r=e.category,l=e.sum,c=(0,s.useState)(!1),i=(0,m.Z)(c,2),u=i[0],h=i[1],x=function(){h(!u)},_=(0,t.v9)(d);console.log("ContactListItem==>isLoading:",_);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("li",{className:X,children:[(0,p.jsx)("p",{className:$,children:a}),(0,p.jsx)("p",{className:$,children:o}),(0,p.jsx)("p",{className:$,children:r}),(0,p.jsx)("p",{className:z,children:-l}),(0,p.jsx)("button",{type:"button",className:J,onClick:function(){x()},disabled:_,children:"Delete"})]}),u&&(0,p.jsx)(R,{onClose:x,children:(0,p.jsx)(V,{id:n,toggleModal:x})})]})},G="TransactionList_ContactList__6JVJP",ee="TransactionList_TransactionListHeader__lXBuk",ne="TransactionList_TransactionListText__PdA0x",ae=function(e){var n=e.transactions;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:ee,children:[(0,p.jsx)("p",{className:ne,children:"Date"}),(0,p.jsx)("p",{className:ne,children:"Description"}),(0,p.jsx)("p",{className:ne,children:"Category"}),(0,p.jsx)("p",{className:ne,children:"Sum"}),(0,p.jsx)("p",{className:ne})]}),(0,p.jsx)("ul",{className:G,children:n.map((function(e){var n=e._id,a=e.date,s=e.description,t=e.category,o=e.sum;return(0,p.jsx)(K,{id:n,date:a,description:s,category:t,sum:o},n)}))})]})};function se(){var e=(0,t.I0)();(0,s.useEffect)((function(){e((0,i._v)()),e((0,l.sb)())}),[e]);var n=(0,t.v9)(c.QM);console.log("ExpensesPage ==> balance:",n);var a=(0,t.v9)(c.wU);console.log("ExpensesPage ==> isRefreshing:",a);var m=(0,t.v9)(d);console.log("ExpensesPage ==> isLoading:",m);var h=(0,t.v9)(u);return console.log("ExpensesPage ==> transactions:",h),(0,p.jsxs)(o.W,{children:[(0,p.jsxs)("h2",{children:["Balance: ",n]}),(0,p.jsx)(L,{balance:n}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("h2",{children:"Expenses transactions"}),(0,p.jsx)(S,{transactionsType:"expenses"}),m&&(0,p.jsx)(r.a,{}),h.length>0&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Expenses transactions list"}),(0,p.jsx)(ae,{transactions:h})]})]})}}}]);
//# sourceMappingURL=312.73737c4f.chunk.js.map