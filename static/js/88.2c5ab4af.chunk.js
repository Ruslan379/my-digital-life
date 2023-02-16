/*! For license information please see 88.2c5ab4af.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_digital_life=self.webpackChunkmy_digital_life||[]).push([[88],{5700:function(e,a,n){n.d(a,{W:function(){return r}});n(2791);var s="Container_Container__dPyVg",o=n(3329),r=function(e){var a=e.children;return(0,o.jsx)("div",{className:s,children:a})}},88:function(e,a,n){n.r(a),n.d(a,{default:function(){return A}});var s=n(2791),o=n(9434),r=n(5822),t=n(4289),l=n(5700),c=n(8174),i=(n(5462),n(3982)),u="BalanceForm_Form__sTjkN",m="BalanceForm_FormLabel__D+IkA",d="BalanceForm_FormBtn__7m8A3",h="BalanceForm_FormInput__bqPQk",p=n(3329),x=function(){var e=(0,o.I0)(),a=(0,i.a)(),n=a.isRefreshing,s=a.user,l=a.balance,x=s.balance;console.log("BalanceForm ==> balanceUser:",x),console.log("BalanceForm ==> balanceAuth:",l),console.log("BalanceForm ==> isRefreshingAuth:",n);var b=(0,o.v9)(t.QM);console.log("BalanceForm ==> balance1:",b);var j=(0,o.v9)(t.wU);console.log("BalanceForm ==> isRefreshing:",j);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:u,onSubmit:function(a){a.preventDefault();var n=a.currentTarget,s=n.elements.balance.value;e((0,r.Fg)({balance:s})),c.Am.success("Your balance has been successfully updated to ".concat(s," UAN")),n.reset()},children:[(0,p.jsxs)("label",{className:m,children:["Balance:\xa0\xa0",(0,p.jsx)("br",{}),(0,p.jsx)("input",{className:h,type:"text",name:"balance",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)",defaultValue:b})]}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{className:d,type:"submit",children:"CONFIRM"})]}),(0,p.jsx)(c.Ix,{autoClose:1500,theme:"colored"})]})},b=n(2426),j=n.n(b),v=n(7614),g="TransactionForm_Form__HDr-h",f="TransactionForm_FormLabel__33C-l",_="TransactionForm_FormBtn__kZSQ7",F="TransactionForm_FormInput__IXxud",T="TransactionForm_selectText__NeAXk",N="TransactionForm_selectPlaceholder__ilaY3",y=function(e){var a=e.transactionsType,n=(0,o.I0)(),s=(0,i.a)(),r=s.isRefreshing,l=s.user,u=s.balance,m=l.balance;console.log("TransactionForm ==> balanceUser:",m),console.log("TransactionForm ==> balanceAuth:",u),console.log("TransactionForm ==> isRefreshingAuth:",r);var d=(0,o.v9)(t.QM);console.log("TransactionForm ==> balance1:",d);var h=(0,o.v9)(t.wU);console.log("TransactionForm ==> isRefreshing:",h);var x=j()().format("DD-MM-YYYY");console.log("currentDate:",x);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:g,id:"transactionForm",onSubmit:function(e){e.preventDefault();var s=e.currentTarget,o=s.elements.description.value,r=s.elements.category.value,t=s.elements.sum.value;if("true"!==r)if(t){var l={transactionsType:a,date:x,description:o,category:r,sum:t};console.log("Expenses Transaction:",l),n((0,v.E$)(l)),c.Am.success("Your Expenses transaction has been successfully added"),s.reset()}else c.Am.warning("Please enter the transaction amount");else c.Am.warning("Please choose a product category")},children:[(0,p.jsx)("label",{className:f,children:(0,p.jsx)("input",{className:F,type:"text",name:"currentDate",defaultValue:x})}),(0,p.jsx)("label",{className:f,children:(0,p.jsx)("input",{className:F,type:"text",name:"description",placeholder:"Product description"})}),(0,p.jsx)("label",{className:f}),(0,p.jsxs)("select",{className:T,id:"productCategory",name:"category",form:"transactionForm",children:[(0,p.jsx)("option",{className:N,value:!0,disabled:!0,selected:!0,children:"Product category"}),(0,p.jsx)("option",{value:"transport",children:"Transport"}),(0,p.jsx)("option",{value:"products",children:"Products"}),(0,p.jsx)("option",{value:"health",children:"Health"}),(0,p.jsx)("option",{value:"alcohol",children:"Alcohol"}),(0,p.jsx)("option",{value:"entertainment",children:"Entertainment"}),(0,p.jsx)("option",{value:"housing",children:"Housing"}),(0,p.jsx)("option",{value:"technique",children:"Technique"}),(0,p.jsx)("option",{value:"communal",children:"Communal, communication"}),(0,p.jsx)("option",{value:"sports",children:"Sports, hobbies"}),(0,p.jsx)("option",{value:"education",children:"Education"}),(0,p.jsx)("option",{value:"other",children:"Other"})]}),(0,p.jsx)("label",{className:f,children:(0,p.jsx)("input",{className:F,type:"text",name:"sum",placeholder:"0,00",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)"})}),(0,p.jsx)("button",{className:_,type:"submit",children:"INPUT"}),(0,p.jsx)("input",{className:_,type:"reset",value:"CLEAR",form:"transactionForm"})]}),(0,p.jsx)(c.Ix,{autoClose:1500,theme:"colored"})]})};function A(){var e=(0,o.I0)();(0,s.useEffect)((function(){e((0,r.sb)())}),[e]);var a=(0,o.v9)(t.QM);console.log("ExpensesPage ==> balance:",a);var n=(0,o.v9)(t.wU);return console.log("ExpensesPage ==> isRefreshing:",n),(0,p.jsxs)(l.W,{children:[(0,p.jsxs)("h2",{children:["Balance: ",a]}),(0,p.jsx)(x,{}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("h2",{children:"Expenses Transactions"}),(0,p.jsx)(y,{transactionsType:"expenses"})]})}}}]);
//# sourceMappingURL=88.2c5ab4af.chunk.js.map