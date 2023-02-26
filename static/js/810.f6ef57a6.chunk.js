/*! For license information please see 810.f6ef57a6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[810],{3917:function(e,n,a){a.d(n,{R:function(){return g}});var s=a(885),t=a(2791),o=a(9434),r=a(8174),c=(a(5462),a(5822)),l=a(4289),i=a(4164),d={Overlay:"ModalNullBalance_Overlay__MY3ZA",Modal:"ModalNullBalance_Modal__Ow1Wp"},m=a(3329),u=document.querySelector("#modal-root");function p(e){var n=e.children,a=e.onClose;(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,i.createPortal)((0,m.jsx)("div",{className:d.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,m.jsx)("div",{className:d.Modal,children:n})}),u)}var _="ModalNullBalanceWindow_FormEdit__kofm7",h=function(){return(0,m.jsx)("div",{className:_,children:"Hello! To get started, enter the current balance of your account!"})},x="BalanceForm_Form__sTjkN",v="BalanceForm_FormLabel__D+IkA",f="BalanceForm_FormBtn__7m8A3",b="BalanceForm_FormInput__bqPQk",T="BalanceForm_btnConfirmActive__b9hJv",j="BalanceForm_btnConfirmDisabled__+QPff",g=function(e){var n=e.balance;console.log("BalanceForm ==> ({BALANCE}):",n);var a=(0,o.I0)(),i=(0,t.useState)(!1),d=(0,s.Z)(i,2),u=d[0],_=d[1];(0,t.useEffect)((function(){a((0,c.mH)())}));var g=(0,o.v9)(l.QM);console.log("BalanceForm ==> balanceNew:",g),console.log("BalanceForm ==> typeof balanceNew:",typeof Number(g));var N=(0,o.v9)(l.wU);console.log("BalanceForm ==> isRefreshing:",N);var y=(0,o.v9)(l.NF);console.log("BalanceForm ==> isNotNewUser:",y);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,s=n.elements.balance.value;g||y||a((0,c.he)({isNotNewUser:!0})),a((0,c.Fg)({balance:s})),r.Am.success("Your balance has been successfully updated to ".concat(s," UAN")),n.reset()},children:[(0,m.jsxs)("label",{className:v,children:["Balance:\xa0\xa0\xa0",(0,m.jsx)("input",{className:b,type:"text",name:"balance",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)",disabled:y,placeholder:g})]}),(0,m.jsx)("button",{className:f,type:"submit",disabled:y,children:y?(0,m.jsx)("span",{className:j,children:"NO CONFIRM"}):(0,m.jsx)("span",{className:T,children:"CONFIRM"})})]}),!g&&!y&&(0,m.jsx)(p,{onClose:function(){_(!u)},children:(0,m.jsx)(h,{})}),(0,m.jsx)(r.Ix,{autoClose:1500,theme:"colored"})]})}},5700:function(e,n,a){a.d(n,{W:function(){return o}});a(2791);var s="Container_Container__dPyVg",t=a(3329),o=function(e){var n=e.children;return(0,t.jsx)("div",{className:s,children:n})}},1258:function(e,n,a){a.d(n,{v:function(){return T}});var s=a(885),t=a(9434),o=a(8174),r=(a(5462),a(2426)),c=a.n(r),l=a(5822),i=a(7614),d=a(4289),m=a(3982),u="TransactionForm_Form__HDr-h",p="TransactionForm_FormLabel__33C-l",_="TransactionForm_FormBtn__kZSQ7",h="TransactionForm_FormInput__IXxud",x="TransactionForm_FormInputSum__RcDsc",v="TransactionForm_selectText__NeAXk",f="TransactionForm_selectPlaceholder__ilaY3",b=a(3329),T=function(e){var n=e.balance,a=e.transactionsType,r=(0,t.I0)(),T=(0,m.a)(),j=T.isRefreshing,g=T.user,N=T.balance,y=g.balance;console.log("TransactionForm ==> balanceUser:",y),console.log("TransactionForm ==> balanceAuth:",N),console.log("TransactionForm ==> isRefreshingAuth:",j);var F=(0,t.v9)(d.QM);console.log("TransactionForm ==> balance1:",F);var L=(0,t.v9)(d.wU);console.log("TransactionForm ==> isRefreshing:",L);var w=c()().format("DD.MM.YYYY hh:mm:ss");console.log("currentFullDate:",w);var I=w.split(" "),C=(0,s.Z)(I,2),A=C[0],M=C[1];console.log("currentDate:",A),console.log("currentTime:",M);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("form",{className:u,id:"transactionForm",onSubmit:function(e){e.preventDefault();var s=e.currentTarget,t=w;s.elements.date.value!==A&&(t=s.elements.date.value);var c=s.elements.description.value,d=s.elements.category.value,m=s.elements.sum.value;if(c)if("true"!==d)if(m)if(n-m<0)o.Am.error("Transaction NOT ALLOWED!!!\n Your expenses exceed your balance");else{var u={transactionsType:a,date:t,description:c,category:d,sum:m};console.log("transaction:",u),r((0,i.dT)(u)),"expenses"===a&&o.Am.info("Your Expenses transaction has been successfully added"),"income"===a&&o.Am.success("Your Income transaction has been successfully added"),s.reset(),r((0,l.mH)())}else o.Am.warning("Please enter the transaction amount");else o.Am.warning("Please choose a product category");else o.Am.warning("Please enter a product description")},children:[(0,b.jsx)("label",{className:p,children:(0,b.jsx)("input",{className:h,type:"text",name:"date",defaultValue:A})}),(0,b.jsx)("label",{className:p,children:(0,b.jsx)("input",{className:h,type:"text",name:"description",placeholder:"Product description"})}),(0,b.jsx)("label",{className:p}),(0,b.jsxs)("select",{className:v,id:"productCategory",name:"category",form:"transactionForm",children:[(0,b.jsx)("option",{className:f,value:!0,disabled:!0,selected:!0,children:"Product category"}),(0,b.jsx)("option",{value:"Transport",disabled:"income"===a,children:"Transport"}),(0,b.jsx)("option",{value:"Products",disabled:"income"===a,children:"Products"}),(0,b.jsx)("option",{value:"Health",disabled:"income"===a,children:"Health"}),(0,b.jsx)("option",{value:"Alcohol",disabled:"income"===a,children:"Alcohol"}),(0,b.jsx)("option",{value:"Entertainment",disabled:"income"===a,children:"Entertainment"}),(0,b.jsx)("option",{value:"Housing",disabled:"income"===a,children:"Housing"}),(0,b.jsx)("option",{value:"Technique",disabled:"income"===a,children:"Technique"}),(0,b.jsx)("option",{value:"Communal, communication",disabled:"income"===a,children:"Communal, communication"}),(0,b.jsx)("option",{value:"Sports, hobbies",disabled:"income"===a,children:"Sports, hobbies"}),(0,b.jsx)("option",{value:"Education",disabled:"income"===a,children:"Education"}),(0,b.jsx)("option",{value:"Other",disabled:"income"===a,children:"Other"}),(0,b.jsx)("option",{value:"Salary",disabled:"expenses"===a,children:"Salary"}),(0,b.jsx)("option",{value:"Add.Income",disabled:"expenses"===a,children:"Add.Income"})]}),(0,b.jsx)("label",{className:p,children:(0,b.jsx)("input",{className:x,type:"text",name:"sum",placeholder:"0,00",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)"})}),(0,b.jsx)("button",{className:_,type:"submit",children:"INPUT"}),(0,b.jsx)("input",{className:_,type:"reset",value:"CLEAR",form:"transactionForm"})]}),(0,b.jsx)(o.Ix,{autoClose:1500,theme:"colored"})]})}},6590:function(e,n,a){a.d(n,{z:function(){return I}});var s=a(885),t=a(2791),o=a(9434),r=a(1941),c=a(4164),l={Overlay:"ModalTransactionLDelete_Overlay__2H6-n",Modal:"ModalTransactionLDelete_Modal__-XWSS"},i=a(3329),d=document.querySelector("#modal-root");function m(e){var n=e.children,a=e.onClose;(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,c.createPortal)((0,i.jsx)("div",{className:l.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,i.jsx)("div",{className:l.Modal,children:n})}),d)}var u=a(7614),p=a(966),_="ModalTransactionLDeleteWindow_modalWindow__pZbt3",h="ModalTransactionLDeleteWindow_modalTitle__KTziP",x="ModalTransactionLDeleteWindow_modalBtnYes__seQMO",v="ModalTransactionLDeleteWindow_modalBtnNo__5+gwW",f=function(e){var n=e.id,a=e.toggleModal,s=(0,o.I0)(),t=(0,o.v9)(r.O);console.log("ModalTransactionLDeleteWindow ==> isLoading:",t);return(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)(p.a,{}),(0,i.jsxs)("div",{className:_,children:[(0,i.jsx)("p",{className:h,children:"Are you sure?"}),(0,i.jsx)("button",{className:x,type:"button",onClick:function(){s((0,u.Ks)(n)),a()},children:"YES"}),(0,i.jsx)("button",{className:v,type:"button",onClick:a,children:"NO"})]})]})},b="TransactionListItem_TransactionListItem__7P-i+",T="TransactionListItem_TransactionListItemText__pk84L",j="TransactionListItem_TransactionListItemTextSumExpenses__shLQA",g="TransactionListItem_TransactionListItemTextSumIncome__2F-2F",N="TransactionListItem_ContactListDeleteBtn__6pp5k",y=function(e){var n=e.id,a=e.date,c=e.transactionsType,l=e.description,d=e.category,u=e.sum,p=a.split(" "),_=(0,s.Z)(p,1)[0];console.log("TransactionListItem ==> date:",_);var h=(0,t.useState)(!1),x=(0,s.Z)(h,2),v=x[0],y=x[1],F=function(){y(!v)},L=(0,o.v9)(r.O);return console.log("TransactionListItem ==> isLoading:",L),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("li",{className:b,children:[(0,i.jsx)("p",{className:T,children:_}),(0,i.jsx)("p",{className:T,children:l}),(0,i.jsx)("p",{className:T,children:d}),(0,i.jsx)("p",{className:"expenses"===c?j:g,children:"expenses"===c?-u:u}),(0,i.jsx)("button",{type:"button",className:N,onClick:F,disabled:L,children:"Delete"})]}),v&&(0,i.jsx)(m,{onClose:F,children:(0,i.jsx)(f,{id:n,toggleModal:F})})]})},F="TransactionList_ContactList__6JVJP",L="TransactionList_TransactionListHeader__lXBuk",w="TransactionList_TransactionListText__PdA0x",I=function(e){var n=e.transactions,a=e.transactionsType;console.log("TransactionList ==> transactions:",n);var s=n.filter((function(e){return"expenses"===e.transactionsType}));console.log("TransactionList ==> transactionsExpenses:",s);var t=n.filter((function(e){return"income"===e.transactionsType}));console.log("TransactionList ==> transactionsIncome:",t);var o=[];return"expenses"===a&&(o=s),"income"===a&&(o=t),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:L,children:[(0,i.jsx)("p",{className:w,children:"Date"}),(0,i.jsx)("p",{className:w,children:"Description"}),(0,i.jsx)("p",{className:w,children:"Category"}),(0,i.jsx)("p",{className:w,children:"Sum"}),(0,i.jsx)("p",{className:w})]}),(0,i.jsx)("ul",{className:F,children:o.map((function(e){var n=e._id,a=e.transactionsType,s=e.date,t=e.description,o=e.category,r=e.sum;return(0,i.jsx)(y,{id:n,transactionsType:a,date:s,description:t,category:o,sum:r},n)}))})]})}},1941:function(e,n,a){a.d(n,{O:function(){return s},a:function(){return t}});var s=function(e){return e.transactions.isLoading},t=function(e){return e.transactions.allTransactions}}}]);
//# sourceMappingURL=810.f6ef57a6.chunk.js.map