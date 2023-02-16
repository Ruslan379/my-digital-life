/*! For license information please see 108.0353ca30.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[108],{5700:function(e,n,a){a.d(n,{W:function(){return r}});a(2791);var s="Container_Container__dPyVg",t=a(3329),r=function(e){var n=e.children;return(0,t.jsx)("div",{className:s,children:n})}},854:function(e,n,a){a.d(n,{a:function(){return r}});a(2791);var s=a(5243),t=a(3329),r=function(){return(0,t.jsxs)("h1",{style:{margin:"0 auto"},children:["Please wait...",(0,t.jsx)(s.Bb,{width:"100%"})]})}},6108:function(e,n,a){a.r(n),a.d(n,{default:function(){return U}});var s=a(2791),t=a(9434),r=a(5700),o=a(854),c=a(5822),l=a(4289),i=a(7614),u=function(e){return e.transactions.isLoading},m=function(e){return e.transactions.allTransactions},d=a(8174),h=(a(5462),a(3982)),x="BalanceForm_Form__sTjkN",p="BalanceForm_FormLabel__D+IkA",g="BalanceForm_FormBtn__7m8A3",j="BalanceForm_FormInput__bqPQk",f=a(3329),_=function(){var e=(0,t.I0)(),n=(0,h.a)(),a=n.isRefreshing,s=n.user,r=n.balance,o=s.balance;console.log("BalanceForm ==> balanceUser:",o),console.log("BalanceForm ==> balanceAuth:",r),console.log("BalanceForm ==> isRefreshingAuth:",a);var i=(0,t.v9)(l.QM);console.log("BalanceForm ==> balance1:",i);var u=(0,t.v9)(l.wU);console.log("BalanceForm ==> isRefreshing:",u);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{className:x,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,s=a.elements.balance.value;e((0,c.Fg)({balance:s})),d.Am.success("Your balance has been successfully updated to ".concat(s," UAN")),a.reset()},children:[(0,f.jsxs)("label",{className:p,children:["Balance:\xa0\xa0",(0,f.jsx)("br",{}),(0,f.jsx)("input",{className:j,type:"text",name:"balance",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)",defaultValue:i})]}),(0,f.jsx)("br",{}),(0,f.jsx)("button",{className:g,type:"submit",children:"CONFIRM"})]}),(0,f.jsx)(d.Ix,{autoClose:1500,theme:"colored"})]})},v=a(2426),b=a.n(v),F="TransactionForm_Form__HDr-h",T="TransactionForm_FormLabel__33C-l",y="TransactionForm_FormBtn__kZSQ7",N="TransactionForm_FormInput__IXxud",C="TransactionForm_selectText__NeAXk",I="TransactionForm_selectPlaceholder__ilaY3",L=function(e){var n=e.transactionsType,a=(0,t.I0)(),s=(0,h.a)(),r=s.isRefreshing,o=s.user,c=s.balance,u=o.balance;console.log("TransactionForm ==> balanceUser:",u),console.log("TransactionForm ==> balanceAuth:",c),console.log("TransactionForm ==> isRefreshingAuth:",r);var m=(0,t.v9)(l.QM);console.log("TransactionForm ==> balance1:",m);var x=(0,t.v9)(l.wU);console.log("TransactionForm ==> isRefreshing:",x);var p=b()().format("DD-MM-YYYY");console.log("currentDate:",p);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{className:F,id:"transactionForm",onSubmit:function(e){e.preventDefault();var s=e.currentTarget,t=s.elements.description.value,r=s.elements.category.value,o=s.elements.sum.value;if("true"!==r)if(o){var c={transactionsType:n,date:p,description:t,category:r,sum:o};console.log("Expenses Transaction:",c),a((0,i.E$)(c)),d.Am.success("Your Expenses transaction has been successfully added"),s.reset()}else d.Am.warning("Please enter the transaction amount");else d.Am.warning("Please choose a product category")},children:[(0,f.jsx)("label",{className:T,children:(0,f.jsx)("input",{className:N,type:"text",name:"currentDate",defaultValue:p})}),(0,f.jsx)("label",{className:T,children:(0,f.jsx)("input",{className:N,type:"text",name:"description",placeholder:"Product description"})}),(0,f.jsx)("label",{className:T}),(0,f.jsxs)("select",{className:C,id:"productCategory",name:"category",form:"transactionForm",children:[(0,f.jsx)("option",{className:I,value:!0,disabled:!0,selected:!0,children:"Product category"}),(0,f.jsx)("option",{value:"transport",children:"Transport"}),(0,f.jsx)("option",{value:"products",children:"Products"}),(0,f.jsx)("option",{value:"health",children:"Health"}),(0,f.jsx)("option",{value:"alcohol",children:"Alcohol"}),(0,f.jsx)("option",{value:"entertainment",children:"Entertainment"}),(0,f.jsx)("option",{value:"housing",children:"Housing"}),(0,f.jsx)("option",{value:"technique",children:"Technique"}),(0,f.jsx)("option",{value:"communal",children:"Communal, communication"}),(0,f.jsx)("option",{value:"sports",children:"Sports, hobbies"}),(0,f.jsx)("option",{value:"education",children:"Education"}),(0,f.jsx)("option",{value:"other",children:"Other"})]}),(0,f.jsx)("label",{className:T,children:(0,f.jsx)("input",{className:N,type:"text",name:"sum",placeholder:"0,00",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)"})}),(0,f.jsx)("button",{className:y,type:"submit",children:"INPUT"}),(0,f.jsx)("input",{className:y,type:"reset",value:"CLEAR",form:"transactionForm"})]}),(0,f.jsx)(d.Ix,{autoClose:1500,theme:"colored"})]})},B=a(6052),P=a(1438),A="TransactionListItem_ContactListItem__TIoYx",E="TransactionListItem_ContactListText__8axSd",k="TransactionListItem_ContactListNumber__N4lzJ",w="TransactionListItem_ContactListDeleteBtn__6pp5k",D=function(e){var n=e.id,a=(e.date,e.transactionsType),s=(e.description,e.category,e.sum,(0,t.I0)()),r=(0,t.v9)(P.NH);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("li",{className:A,children:[(0,f.jsxs)("p",{className:E,children:["Transactions type:",(0,f.jsxs)("span",{className:k,children:[" ",a]})]}),(0,f.jsx)("button",{type:"button",className:w,onClick:function(){s((0,B.GK)(n))},disabled:r,children:"Delete"})]})})},R="TransactionList_ContactList__6JVJP",Y=function(e){var n=e.transactions;return(0,f.jsx)("ul",{className:R,children:n.map((function(e){var n=e._id,a=e.date,s=e.transactionsType,t=e.description,r=e.category,o=e.sum;return(0,f.jsx)(D,{id:n,date:a,transactionsType:s,description:t,category:r,sum:o},n)}))})};function U(){var e=(0,t.I0)();(0,s.useEffect)((function(){e((0,c.sb)()),e((0,i._v)())}),[e]);var n=(0,t.v9)(l.QM);console.log("ExpensesPage ==> balance:",n);var a=(0,t.v9)(l.wU);console.log("ExpensesPage ==> isRefreshing:",a);var d=(0,t.v9)(u);console.log("ExpensesPage ==> isLoading:",d);var h=(0,t.v9)(m);return console.log("ExpensesPage ==> transactions:",h),(0,f.jsxs)(r.W,{children:[(0,f.jsxs)("h2",{children:["Balance: ",n]}),(0,f.jsx)(_,{}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("h2",{children:"Expenses transactions"}),(0,f.jsx)(L,{transactionsType:"expenses"}),d&&(0,f.jsx)(o.a,{}),h.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Expenses transactions list"}),(0,f.jsx)(Y,{transactions:h})]})]})}},1438:function(e,n,a){a.d(n,{NH:function(){return s},O3:function(){return r},oy:function(){return t}});var s=function(e){return e.contacts.isLoading},t=function(e){return e.contacts.items},r=function(e){return e.contacts.uploadContacts}}}]);
//# sourceMappingURL=108.0353ca30.chunk.js.map