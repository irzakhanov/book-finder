(this["webpackJsonpsearch-books"]=this["webpackJsonpsearch-books"]||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(20),s=c.n(o),r=c(9),i=(c(52),c(53),c(16)),l=c(4),j=c(12),b=c(22),d=c(1);var u=function(e){var t=e.searchBooks,c=a.a.useState(""),n=Object(j.a)(c,2),o=n[0],s=n[1],r=a.a.useState("all"),i=Object(j.a)(r,2),l=i[0],b=i[1],u=a.a.useState("relevance"),h=Object(j.a)(u,2),O=h[0],p=h[1],m=function(e){switch(e.target.name){case"categories":b(e.target.value);break;case"sort-by":p(e.target.value);break;case"text":s(e.target.value);break;default:console.log("----")}};return Object(d.jsxs)("div",{className:"search-block",children:[Object(d.jsxs)("div",{className:"search-input",children:[Object(d.jsx)("input",{type:"text",name:"text",onChange:m,value:o}),Object(d.jsx)("button",{onClick:function(){o.length>0?t({inputText:o,category:l,sortBy:O}):alert("Enter text...")},children:"Search"})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Categories"}),Object(d.jsxs)("select",{name:"categories",onChange:m,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"art",children:"Art"}),Object(d.jsx)("option",{value:"biography",children:"Biography"}),Object(d.jsx)("option",{value:"computers",children:"Computers"}),Object(d.jsx)("option",{value:"history",children:"History"}),Object(d.jsx)("option",{value:"medical",children:"Medical"}),Object(d.jsx)("option",{value:"poetry",children:"Poetry"})]})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Sorting by"}),Object(d.jsxs)("select",{name:"sort-by",onChange:m,children:[Object(d.jsx)("option",{value:"relevance",children:"Relevance"}),Object(d.jsx)("option",{value:"newest",children:"newest"})]})]})]})};var h=function(e){var t=e.searchBooks;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(b.a,{children:Object(d.jsx)("title",{children:"\u0412\u0441\u0435 \u043a\u043d\u0438\u0433\u0438"})}),Object(d.jsxs)("div",{className:"header__inner",children:[Object(d.jsx)("h1",{className:"header__title",children:"Book finder"}),Object(d.jsx)(u,{searchBooks:t})]})]})},O=c(13),p=c.n(O),m=c(23),f=c(28),x=c(5),v=c(24),g=c.n(v),k={items:[],totalItems:0,loading:!0,isLoadedMore:!1,startLoading:!1,error:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"books/fetch/pending":return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case"books/fetch/fulfilled":var c=e.items?[].concat(Object(f.a)(e.items),Object(f.a)(t.payload.items)):t.payload.items;return Object(x.a)(Object(x.a)({},e),{},{items:c,totalItems:t.payload.totalItems,loading:!1});case"books/fetch/reject":return Object(x.a)(Object(x.a)({},e),{},{error:t.error});case"books/fetch-single/pending":return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case"books/fetch-single/fulfilled":return Object(x.a)(Object(x.a)({},e),{},{items:t.payload,loading:!1});case"books/fetch-single/rejected":return Object(x.a)(Object(x.a)({},e),{},{error:t.error});case"books/set-load-more":return Object(x.a)(Object(x.a)({},e),{},{isLoadedMore:t.payload});case"books/start-loading":return Object(x.a)(Object(x.a)({},e),{},{startLoading:t.payload});default:return e}},N=function(e){return{type:"books/fetch/fulfilled",payload:e}},_=function(e){return{type:"books/set-load-more",payload:e}},w=function(e){return{type:"books/start-loading",payload:e}},I=function(e,t){return function(){var c=Object(m.a)(p.a.mark((function c(n){var a,o,s,r;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=e.inputText,o=e.category,s=e.sortBy,n({type:"books/fetch/pending"}),c.prev=2,c.next=5,g.a.get("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(a,"+subject:").concat("all"!==o?o:"","&orderBy=").concat(s,"&maxResults=30&startIndex=").concat(t));case 5:r=c.sent,n(N(r.data)),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),n({type:"books/fetch/reject",error:c.t0.toString()});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()},B=function(e){return e.books.items},F=function(e){return e.books.loading},L=function(e){return e.books.isLoadedMore},S=function(e){return e.books.startLoading},T=function(e){return e.books.totalItems},C=c(19),A=c.n(C);c(38),c(92);function q(e){var t=e.title,c=e.imageUrl,n=e.category,a=e.authors;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"book-card__img",children:Object(d.jsx)("img",{src:c,alt:""})}),Object(d.jsx)("h2",{className:"book-card__title",children:t}),Object(d.jsx)("p",{className:"book-card__category",children:n[0]}),a.map((function(e,t){return Object(d.jsx)("span",{className:"book-card__authors",children:"".concat(e,", ")},t)}))]})}q.defaultProps={title:"-------",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Mz3sqDvFMNTgft394pfjhZlsx7OWD47o3A&usqp=CAU",category:["----"],authors:["Unknow"]};var M=q;var D=function(){var e,t=Object(r.b)(),c=Object(l.g)().id,n=Object(r.c)(F),o=Object(r.c)((e=c,function(t){return t.books.items.find((function(t){return t.id===e}))}));return a.a.useEffect((function(){t(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(c,n){var a,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n().books.items.find((function(t){return t.id===e}))){t.next=3;break}return t.abrupt("return");case 3:return c({type:"books/fetch-single/pending"}),t.prev=4,t.next=7,g()('https://www.googleapis.com/books/v1/volumes?q="'.concat(e,'"'));case 7:return a=t.sent,t.next=10,a.data;case 10:o=t.sent,c({type:"books/fetch-single/fulfilled",payload:o.items}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),c({type:"books/fetch-single/rejected",error:t.t0.toString()});case 17:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e,c){return t.apply(this,arguments)}}()}(c))}),[t,c]),Object(d.jsx)("div",{className:"container",children:n?Object(d.jsx)("div",{className:"loader",style:{paddingTop:"40vh"},children:Object(d.jsx)(A.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})}):Object(d.jsxs)("div",{className:"book-page",children:[Object(d.jsx)(b.a,{children:Object(d.jsx)("title",{children:o.volumeInfo.title})}),Object(d.jsx)("div",{className:"book-image",children:Object(d.jsx)("img",{src:o.volumeInfo.imageLinks?o.volumeInfo.imageLinks.thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Mz3sqDvFMNTgft394pfjhZlsx7OWD47o3A&usqp=CAU",alt:""})}),Object(d.jsxs)("div",{className:"book-info",children:[Object(d.jsx)("h2",{className:"book-info__title",children:o.volumeInfo.title}),Object(d.jsxs)("ul",{className:"book-info__categories",children:[Object(d.jsx)("li",{className:"li-title",children:"Categories: "}),o.volumeInfo.categories?o.volumeInfo.categories.map((function(e){return Object(d.jsx)("li",{children:e},e)})):"-----"]}),Object(d.jsx)("p",{className:"book-info__description",children:o.volumeInfo.description}),Object(d.jsxs)("ul",{className:"book-info__authors",children:[Object(d.jsx)("li",{className:"li-title",children:"Authors: "}),o.volumeInfo.authors?o.volumeInfo.authors.map((function(e,t){return Object(d.jsx)("li",{children:e},t)})):"Unknow"]}),Object(d.jsxs)("div",{className:"book-info__original-link",children:[Object(d.jsx)("span",{children:"Original links: "}),Object(d.jsx)("a",{href:o.volumeInfo.previewLink,children:"Preview link"}),Object(d.jsx)("a",{href:o.volumeInfo.infoLink,children:"Info link"})]})]})]})})};var E=function(){var e=Object(r.b)(),t=Object(r.c)(B),c=Object(r.c)(F),n=Object(r.c)(L),o=Object(r.c)(S),s=Object(r.c)(T),l=a.a.useState(""),b=Object(j.a)(l,2),u=b[0],O=b[1],f=a.a.useState(1),x=Object(j.a)(f,2),v=x[0],k=x[1],y=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;O(t),e(w(!0)),e(I(t,c))};return o?o&&c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{searchBooks:y}),Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)(A.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{searchBooks:y}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h3",{className:"found-books",children:["Found",s,"books"]}),Object(d.jsx)("div",{className:"books",children:t&&t.map((function(e,t){return Object(d.jsx)(i.b,{className:"book-card",to:"books/".concat(e.id),children:Object(d.jsx)(M,{title:e.volumeInfo.title,category:e.volumeInfo.categories,authors:e.volumeInfo.authors,imageUrl:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail})},e.id+t)}))}),Object(d.jsx)("div",{className:"load-more",children:n?Object(d.jsx)(A.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}):Object(d.jsx)("button",{onClick:function(){var t,c;e(_(!0)),e((t=u,c=30*v,function(){var e=Object(m.a)(p.a.mark((function e(n){var a,o,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.inputText,o=t.category,s=t.sortBy,e.prev=1,e.next=4,g.a.get("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(a,"+subject:").concat("all"!==o?o:"","&orderBy=").concat(s,"&maxResults=30&startIndex=").concat(c));case 4:r=e.sent,n(N(r.data)),n(_(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({type:"books/fetch-single/rejected",error:e.t0.toString()});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),k(v+1)},children:"Load more"})})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{searchBooks:y}),Object(d.jsx)("div",{className:"empthy",children:Object(d.jsx)("h2",{children:"empthy"})})]})};var U=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsx)(E,{})}),Object(d.jsx)(l.b,{path:"/books/:id",children:Object(d.jsx)(D,{})}),Object(d.jsx)(l.a,{to:"/"})]})})};var P=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(U,{})})},R=c(14),z=c(42),G=Object(R.b)({books:y}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.c,Q=Object(R.d)(G,J(Object(R.a)(z.a)));s.a.render(Object(d.jsx)(r.a,{store:Q,children:Object(d.jsx)(P,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.09a04853.chunk.js.map