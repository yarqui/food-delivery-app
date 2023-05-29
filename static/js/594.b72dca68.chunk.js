"use strict";(self.webpackChunkfood_delivery_app=self.webpackChunkfood_delivery_app||[]).push([[594],{323:function(n,e,t){t.d(e,{c:function(){return i}});var r,s=t(168),i=t(444).ZP.li(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 270px;\n  padding: 8px;\n  gap: 8px;\n\n  list-style: none;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"])))},594:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,s,i,a,c,o,p=t(433),d=t(413),x=t(861),u=t(439),l=t(757),f=t.n(l),h=t(791),Z=t(174),m=t(168),g=t(444),v=g.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),j=g.ZP.ul(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),y=g.ZP.ul(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding-left: 32px;\n  gap: 12px;\n"]))),b=g.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n"]))),w=t(405),k=g.ZP.p(c||(c=(0,m.Z)(["\n  margin-top: 8px;\n\n  font-size: 12px;\n  font-style: italic;\n\n  color: grey;\n"]))),I=g.ZP.li(o||(o=(0,m.Z)(["\n  list-style: none;\n  padding: 8px;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: all 250ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),C=t(184),P=function(n){var e=n.shop,t=n.setDishes,r=(0,h.useState)(0),s=(0,u.Z)(r,2),i=s[0],a=s[1],c=(0,h.useState)(!1),o=(0,u.Z)(c,2),p=o[0],d=o[1],l=e.shopId,Z=e.name,m=e.photo;(0,h.useEffect)((function(){(0,x.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,(0,w.Hb)(l);case 3:e=n.sent,a(e),d(!1);case 6:case"end":return n.stop()}}),n)})))()}),[l]);var g=function(){var n=(0,x.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,w.nZ)(l);case 2:e=n.sent,t(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,C.jsx)(I,{children:!p&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("img",{src:m,alt:Z,width:"150",onClick:g}),(0,C.jsx)("h3",{children:Z}),(0,C.jsxs)(k,{children:["(",i," ",1!==i?"Dishes":"Dish",")"]})]})})},A=t(323),D=function(n){var e=n.handleAddToCart,t=n.dish,r=t.name,s=t.price,i=t.photo;return(0,C.jsxs)(A.c,{children:[(0,C.jsx)("img",{src:i,alt:r,width:"200"}),(0,C.jsx)("h4",{children:r}),(0,C.jsxs)("p",{children:["Price: $",s]}),(0,C.jsx)("button",{type:"button",onClick:function(){return e(t)},children:"Add to cart"})]})},F=[],S=function(n){var e=n.cartItems,t=n.setCartItems,r=(0,h.useState)(F),s=(0,u.Z)(r,2),i=s[0],a=s[1],c=(0,h.useState)([]),o=(0,u.Z)(c,2),l=o[0],m=o[1];(0,h.useEffect)((function(){(0,x.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,w.Az)();case 2:e=n.sent,a(e);case 4:case"end":return n.stop()}}),n)})))()}),[]);var g=function(n){if(e.find((function(e){return e.dishId===n.dishId}))){var r=e.map((function(e){return e.dishId===n.dishId?(0,d.Z)((0,d.Z)({},e),{},{quantity:e.quantity+1}):e}));t(r)}else{var s=(0,d.Z)((0,d.Z)({},n),{},{quantity:1});t((function(n){return[].concat((0,p.Z)(n),[s])})),Z.Am.success("Added to cart")}};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(b,{children:[(0,C.jsx)("h2",{children:"Welcome to FetchFood Delivery \ud83c\udf5f"}),(0,C.jsx)("p",{children:"Choose a restaurant to deliver food from"})]}),(0,C.jsxs)(v,{children:[(0,C.jsx)(j,{children:i&&i.map((function(n){return(0,C.jsx)(P,{shop:n,setDishes:m},n.shopId)}))}),(0,C.jsx)(y,{children:l&&l.map((function(n){return(0,C.jsx)(D,{dish:n,handleAddToCart:g},n.dishId)}))})]})]})}}}]);
//# sourceMappingURL=594.b72dca68.chunk.js.map