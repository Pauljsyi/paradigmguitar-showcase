(this.webpackJsonpparadigmguitars=this.webpackJsonpparadigmguitars||[]).push([[0],{18:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(12),a=c.n(r),i=(c(18),c(13)),j=c(8),l=c(3),d=c(5),o=c.n(d),u=c(7),b=c(6),m=c(0),O=function(e){var t=e.cartItems,c=e.onAdd,s=e.onRemove,n=e.show,r=t.reduce((function(e,t){return e+t.price*t.qty}),0),a=.095*r,i=r>2e3?0:50,j=r+a+i,l=t.reduce((function(e,t){return e+t.qty}),0),d=r.toLocaleString("en-US",{style:"currency",currency:"USD"}),o=j.toLocaleString("en-US",{style:"currency",currency:"USD"});return Object(m.jsx)("div",{className:n?"expand":"shrink",children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"cart-content",children:[Object(m.jsx)("h2",{className:"cart-title",children:"Cart Items"}),0===t.length&&Object(m.jsx)("div",{className:"cart-is-empty",children:"Cart Is Empty"}),t.map((function(e){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-2",children:[Object(m.jsx)("img",{src:e.img,className:"cart-item-img",alt:"guitar"}),Object(m.jsx)("div",{className:"col-2",children:Object(m.jsx)("div",{className:"col-2",children:e.name})},e.id),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("button",{onClick:function(){return s(e)},className:"remove",children:"-"})," ",Object(m.jsx)("button",{onClick:function(){return c(e)},className:"add",children:"+"})]}),Object(m.jsxs)("div",{className:"qty",children:["qty: ",e.qty]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{})]})})),0!==t.length&&Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsxs)("div",{className:"price",children:[Object(m.jsx)("div",{children:"Subtotal"}),Object(m.jsx)("div",{children:d})]}),Object(m.jsxs)("div",{className:"tax",children:[Object(m.jsx)("div",{children:"tax"}),Object(m.jsxs)("div",{children:["$",a.toFixed(2)]})]}),Object(m.jsxs)("div",{className:"shipping",children:[Object(m.jsx)("div",{children:"shipping"}),Object(m.jsxs)("div",{children:["$",i.toFixed(2)]})]}),Object(m.jsxs)("div",{className:"total-price",children:[Object(m.jsxs)("div",{children:["(",l," items) Total: "]}),Object(m.jsx)("div",{children:o})]}),Object(m.jsx)("div",{className:"summary-btn",children:Object(m.jsx)(b.b,{to:"/summary",children:Object(m.jsx)("button",{className:"summary-btn-btn",children:"Go To Summary"})})})]})]})})})},h=function(e,t){Object(s.useEffect)((function(){var c=function(c){!e.current||e.current.contains(c.target)?t():console.log("ref",c)};return document.addEventListener("mouseup",c),function(){document.removeEventListener("mouseup",c)}}),[e,t])},x=function(e){var t=e.item;return Object(m.jsx)("div",{className:"logo-container",children:"logo-paradigmguitar"===t.name?Object(m.jsx)("img",{className:"paradigm-logo",src:t.img,alt:"logo"}):null})},v=function(e){var t=e.onAdd,c=e.onRemove,n=e.cartItems,r=Object(s.useState)([]),a=Object(l.a)(r,2),i=a[0],j=a[1];Object(s.useEffect)((function(){d()}),[]);var d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/guitars");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,j(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(s.useState)(!1),f=Object(l.a)(v,2),g=f[0],p=f[1],N=n.reduce((function(e,t){return e+t.qty}),0),y=Object(s.useRef)();return h(y,(function(){return p(!1)})),Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)(b.b,{to:"/",className:"navLink",id:"logo",children:i.length>0?i.map((function(e,t){return Object(m.jsx)(x,{item:e},t)})):null}),Object(m.jsx)(b.b,{to:"/about",className:"navLink",id:"about",children:Object(m.jsx)("h6",{className:"hamburger-menu",children:"ABOUT"})}),Object(m.jsx)("div",{className:"hamburger-menu",id:"cart",onClick:function(){return p(!g)},children:Object(m.jsxs)("div",{className:"cart-icon",children:[Object(m.jsx)("i",{className:"fas fa-shopping-cart"}),Object(m.jsx)(O,{ref:y,onAdd:t,onRemove:c,cartItems:n,show:g,setShow:p}),Object(m.jsx)("div",{className:"items-count",children:N})]})})]})},f=c(2),g=function(e){var t=e.onAdd,c=Object(f.g)().id,n=Object(s.useState)({}),r=Object(l.a)(n,2),a=r[0],i=r[1],j="/guitars/".concat(c);Object(s.useEffect)((function(){d(),console.log(a)}));var d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"pd-container",children:[Object(m.jsx)("div",{className:"item-display",children:Object(m.jsx)("img",{className:"guitar-img",src:a.img,alt:a.id})}),Object(m.jsxs)("div",{className:"item-details",children:[Object(m.jsx)("h1",{className:"black",children:a.name}),Object(m.jsxs)("h1",{children:["$",a.price]}),Object(m.jsx)("button",{onClick:function(){return t(a)},children:"add to cart"})]})]})},p=function(){return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("div",{className:"atitle",children:Object(m.jsx)("h1",{children:"About Us"})}),Object(m.jsxs)("div",{className:"about-container",children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Welcome to Paradigm Guitars, your number one source for all things guitars. We're dedicated to providing you the very best of guitars, with an emphasis on quality, craftsmanship, and character. Founded in 2020 by Paul Yi, Paradigm Guitars has come a long way from its beginnings in Los Angeles, CA. When Paul first started out, his passion for \"quality guitars for quality musicians\" drove him to start his own business. We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us."}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{children:["Sincerely,",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Paradigm Guitar"]})]})]})},N=function(e){var t=e.src;return Object(m.jsx)("img",{className:"imgStyles",src:t,alt:"Carousel"})},y=c.p+"static/media/custom.f48b7fcf.jpg",S=c.p+"static/media/luthier.13c58de1.jpg",k=c.p+"static/media/vintage.f7fb88d9.jpg",q=c.p+"static/media/musician.b482296f.jpg",w=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=[Object(m.jsx)(N,{src:y}),Object(m.jsx)(N,{src:S}),Object(m.jsx)(N,{src:q}),Object(m.jsx)(N,{src:k})];return Object(m.jsxs)("div",{className:"carousel",children:[r.map((function(e,t){return Object(m.jsx)("div",{className:"carousel-item",style:{transform:"translateX(".concat(c,"%)")},children:e},t)})),";",Object(m.jsxs)("div",{className:"car-buttons",children:[Object(m.jsx)("button",{id:"goLeft",onClick:function(){n(0===c?-100*(r.length-1):c+100)},children:Object(m.jsx)("i",{id:"left-arrow",className:"fas fa-chevron-left"})}),Object(m.jsx)("button",{id:"goRight",onClick:function(){c===-100*(r.length-1)?n(0):n(c-100)},children:Object(m.jsx)("i",{id:"right-arrow",className:"fas fa-chevron-right"})})]})]})},A=function(e){var t=e.item,c=e.onAdd;return Object(m.jsx)("div",{className:"guitar-container",children:Object(m.jsx)("main",{children:t.id>8?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"container-cards",children:Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsxs)(b.b,{to:"/productdetail/".concat(t._id),children:[Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{className:"guitar-img",src:t&&t.id>8?t.img:null,alt:"guitar"})}),Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)("h3",{className:"c-title",children:t&&t.id>8?t.name:null})}),Object(m.jsxs)("div",{className:"card-price",children:["$",t&&t.id>8?t.price:null]})]})]}),Object(m.jsx)("div",{className:"btn",children:Object(m.jsx)("button",{onClick:function(){return c(t)},children:"add to cart"})})]})})}):null})})},U=function(e){var t=e.onAdd,c=e.guitarURL,n=Object(s.useState)([]),r=Object(l.a)(n,2),a=r[0],i=r[1];Object(s.useEffect)((function(){j()}),[]);var j=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/guitars");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(e){for(var t=[],c=0;c<e.length;c++)e[c].id>8&&t.push(e[c]);return t}(a);return Object(m.jsx)("div",{className:"product-container",children:a&&a.length>0?d.map((function(e,s){return Object(m.jsx)(A,{item:e,onAdd:t,guitarURL:c,guitars:a},s)})):null})},C=function(e){var t=e.item;return Object(m.jsx)("div",{className:"shop-logo-container",children:"logo-shopguitars"===t.name?Object(m.jsx)("img",{className:"shop-logo",src:t.img,alt:""}):null})},L=function(e){var t=e.onAdd,c=Object(s.useState)([]),n=Object(l.a)(c,2),r=n[0],a=n[1];Object(s.useEffect)((function(){i()}),[]);var i=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/guitars");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{}),Object(m.jsx)("div",{className:"shop-title",id:"shop",children:r.length>0?r.map((function(e,t){return Object(m.jsx)(C,{item:e},t)})):null}),Object(m.jsx)(U,{onAdd:t})]})},E=function(e){var t=e.cartItems,c=e.onAdd,s=e.onRemove,n=t.reduce((function(e,t){return e+t.price*t.qty}),0),r=.095*n,a=n>2e3?0:50,i=n+r+a,j=n.toLocaleString("en-US",{style:"currency",currency:"USD"}),l=r.toLocaleString("en-US",{style:"currency",currency:"USD"}),d=a.toLocaleString("en-US",{style:"currency",currency:"USD"}),o=i.toLocaleString("en-US",{style:"currency",currency:"USD"});return Object(m.jsxs)("div",{className:"checkout-container",children:[Object(m.jsxs)("div",{className:"summary-container",children:[Object(m.jsx)("h2",{children:"Cart Summary"}),Object(m.jsx)("div",{className:"summary-items",children:t.map((function(e){return Object(m.jsxs)("div",{className:"summary-item-container",children:[Object(m.jsx)("div",{className:"summary-img",children:Object(m.jsx)("img",{src:e.img,alt:"guitar"})}),Object(m.jsx)("div",{className:"item-name",children:e.name},e.id),Object(m.jsx)("div",{className:"item-q",children:Object(m.jsxs)("div",{className:"qty-buttons",children:[Object(m.jsx)("button",{onClick:function(){return s(e)},className:"remove1",children:Object(m.jsx)("div",{children:"-"})}),Object(m.jsx)("div",{className:"item-qty",children:e.qty}),Object(m.jsx)("button",{onClick:function(){return c(e)},className:"add1",children:Object(m.jsx)("div",{children:"+"})})]})}),Object(m.jsxs)("div",{className:"item-price",children:["$",e.qty*e.price]})]})}))})]}),Object(m.jsxs)("div",{className:"order-summary-container",children:[" ",Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"summary-title",children:Object(m.jsx)("h2",{children:"Order Summary"})}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"collective-price",children:[Object(m.jsx)("div",{children:"item(s) total:"})," ",Object(m.jsx)("div",{children:j})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"sum-shipping",children:[Object(m.jsx)("div",{children:"shipping:"})," ",Object(m.jsx)("div",{children:d})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"sum-tax",children:[Object(m.jsx)("div",{children:"tax:"})," ",Object(m.jsx)("div",{children:l})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"sum-total",children:[Object(m.jsx)("div",{children:"Total:"})," ",Object(m.jsx)("div",{children:o})]})," ",Object(m.jsx)("br",{}),"  ",Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"chkout-btn-container",children:Object(m.jsx)("button",{className:"check-out-btn",children:"CHECK OUT"})})]})]})};var I=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];n.a.useEffect((function(){var e=localStorage.getItem("guitars");e&&r(JSON.parse(e))}),[]),n.a.useEffect((function(){localStorage.setItem("guitars",JSON.stringify(c))}));var a=function(e){var t=c.find((function(t){return t.id===e.id}));r(t?c.map((function(c){return c.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(i.a)(c),[Object(j.a)(Object(j.a)({},e),{},{qty:1})]))},d=function(e){var t=c.find((function(t){return t.id===e.id}));1===t.qty?r(c.filter((function(t){return t.id!==e.id}))):r(c.map((function(c){return c.id===e.id?Object(j.a)(Object(j.a)({},t),{},{qty:t.qty-1}):c})))};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(v,{onAdd:a,onRemove:d,cartItems:c}),Object(m.jsxs)(f.c,{children:[Object(m.jsx)(f.a,{exact:!0,path:"/",element:Object(m.jsx)(L,{onAdd:a})}),Object(m.jsx)(f.a,{path:"/about",element:Object(m.jsx)(p,{})}),Object(m.jsx)(f.a,{path:"/productdetail/:id",element:Object(m.jsx)(g,{onAdd:a})}),Object(m.jsx)(f.a,{path:"/summary",element:Object(m.jsx)(E,{cartItems:c,onAdd:a,onRemove:d})})]})]})};a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(I,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9c576235.chunk.js.map