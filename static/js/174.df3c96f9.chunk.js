"use strict";(self.webpackChunkfood_delivery_app=self.webpackChunkfood_delivery_app||[]).push([[174],{174:function(e,t,n){n.d(t,{Ix:function(){return x},Am:function(){return q}});var o=n(942),a=n(439),r=n(413);function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=n(433),c=n(791);function u(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var l=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"],p=function(e){return"number"==typeof e&&!isNaN(e)},m=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},g=function(e){return m(e)||v(e)?e:null},y=function(e){return(0,c.isValidElement)(e)||m(e)||v(e)||p(e)};function h(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,r=e.collapse,i=void 0===r||r,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,r=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(r):t,v=a?"".concat(n,"--").concat(r):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var a;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,s.Z)(n)))};(e=t.classList).add.apply(e,(0,s.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(u?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function E(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var T={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},b=function(e){var t=e.theme,n=e.type,o=i(e,d);return c.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(b,(0,r.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function I(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,c.useState)([]),u=(0,a.Z)(o,2),l=u[0],d=u[1],h=(0,c.useRef)(null),b=(0,c.useRef)(new Map).current,I=function(e){return-1!==l.indexOf(e)},_=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:I,getToast:function(e){return b.get(e)}}).current;function Z(e){var t=e.containerId;!_.props.limit||t&&_.containerId!==t||(_.count-=_.queue.length,_.queue=[])}function O(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function L(){var e=_.queue.shift();R(e.toastContent,e.toastProps,e.staleId)}function N(e,t){var o=t.delay,s=t.staleId,u=i(t,f);if(y(e)&&!function(e){return!h.current||_.props.enableMultiContainer&&e.containerId!==_.props.containerId||b.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,d=u.updateId,I=u.data,Z=_.props,N=function(){return O(l)},w=null==d;w&&_.count++;var k,x,M=(0,r.Z)((0,r.Z)((0,r.Z)({},Z),{},{style:Z.toastStyle,key:_.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var t=(0,a.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:d,data:I,closeToast:N,isIn:!1,className:g(u.className||Z.toastClassName),bodyClassName:g(u.bodyClassName||Z.bodyClassName),progressClassName:g(u.progressClassName||Z.progressClassName),autoClose:!u.isLoading&&(k=u.autoClose,x=Z.autoClose,!1===k||p(k)&&k>0?k:x),deleteToast:function(){var e=E(b.get(l),"removed");b.delete(l),T.emit(4,e);var t=_.queue.length;if(_.count=null==l?_.count-_.displayedToast:_.count-1,_.count<0&&(_.count=0),t>0){var o=null==l?_.props.limit:1;if(1===t||1===o)_.displayedToast++,L();else{var a=o>t?t:o;_.displayedToast=a;for(var r=0;r<a;r++)L()}}else n()}});M.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,r=null,i={theme:t,type:n};return!1===a||(v(a)?r=a(i):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,i):m(a)||p(a)?r=a:o?r=C.spinner():function(e){return e in C}(n)&&(r=C[n](i))),r}(M),v(u.onOpen)&&(M.onOpen=u.onOpen),v(u.onClose)&&(M.onClose=u.onClose),M.closeButton=Z.closeButton,!1===u.closeButton||y(u.closeButton)?M.closeButton=u.closeButton:!0===u.closeButton&&(M.closeButton=!y(Z.closeButton)||Z.closeButton);var P=e;(0,c.isValidElement)(e)&&!m(e.type)?P=(0,c.cloneElement)(e,{closeToast:N,toastProps:M,data:I}):v(e)&&(P=e({closeToast:N,toastProps:M,data:I})),Z.limit&&Z.limit>0&&_.count>Z.limit&&w?_.queue.push({toastContent:P,toastProps:M,staleId:s}):p(o)?setTimeout((function(){R(P,M,s)}),o):R(P,M,s)}}function R(e,t,n){var o=t.toastId;n&&b.delete(n);var a={content:e,props:t};b.set(o,a),d((function(e){return[].concat((0,s.Z)(e),[o]).filter((function(e){return e!==n}))})),T.emit(4,E(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return _.containerId=e.containerId,T.cancelEmit(3).on(0,N).on(1,(function(e){return h.current&&O(e)})).on(5,Z).emit(2,_),function(){b.clear(),T.emit(3,_)}}),[]),(0,c.useEffect)((function(){_.props=e,_.isToastActive=I,_.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(b.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:h,isToastActive:I}}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),o=n[0],r=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,g=e.pauseOnHover,y=e.closeToast,h=e.onClick,E=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",L),document.addEventListener("touchmove",O),document.addEventListener("touchend",L);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=_(t.nativeEvent),f.y=Z(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=i&&f.y>=o&&f.y<=a?I():C()}}function C(){r(!0)}function I(){r(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&I(),f.x=_(t),f.y=Z(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function L(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",L);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),v(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;v(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",C),window.addEventListener("blur",I)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",I))}}),[e.pauseOnFocusLoss]);var N={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&g&&(N.onMouseEnter=I,N.onMouseLeave=C),E&&(N.onClick=function(e){h&&h(e),f.canCloseOnClick&&y()}),{playToast:C,pauseToast:I,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:N}}function L(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(e){var t=e.delay,n=e.isRunning,a=e.closeToast,i=e.type,s=void 0===i?"default":i,u=e.hide,d=e.className,f=e.style,p=e.controlledProgress,m=e.progress,g=e.rtl,y=e.isIn,h=e.theme,E=u||p&&0===m,T=(0,r.Z)((0,r.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});p&&(T.transform="scaleX(".concat(m,")"));var b=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":g}),C=v(d)?d({rtl:g,type:s,defaultClassName:b}):l(b,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:C,style:T},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){y&&a()}))}var R=function(e){var t=O(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,u=e.children,d=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,g=e.closeToast,y=e.transition,h=e.position,E=e.className,T=e.style,b=e.bodyClassName,C=e.bodyStyle,I=e.progressClassName,_=e.progressStyle,Z=e.updateId,R=e.role,w=e.progress,k=e.rtl,x=e.toastId,M=e.deleteToast,P=e.isIn,A=e.isLoading,B=e.iconOut,D=e.closeOnClick,z=e.theme,S=l("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":D}),F=v(E)?E({rtl:k,position:h,type:p,defaultClassName:S}):l(S,E),H=!!w||!d,q={closeToast:g,type:p,theme:z},j=null;return!1===s||(j=v(s)?s(q):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,q):L(q)),c.createElement(y,{isIn:P,done:M,position:h,preventExitTransition:o,nodeRef:a},c.createElement("div",(0,r.Z)((0,r.Z)({id:x,onClick:f,className:F},i),{},{style:T,ref:a}),c.createElement("div",(0,r.Z)((0,r.Z)({},P&&{role:R}),{},{className:v(b)?b({type:p}):l("Toastify__toast-body",b),style:C}),null!=B&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},B),c.createElement("div",null,u)),j,c.createElement(N,(0,r.Z)((0,r.Z)({},Z&&!H?{key:"pb-".concat(Z)}:{}),{},{rtl:k,theme:z,delay:d,isRunning:n,isIn:P,closeToast:g,hide:m,type:p,style:_,className:I,controlledProgress:H,progress:w||0}))))},w=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},k=h(w("bounce",!0)),x=(h(w("slide",!0)),h(w("zoom")),h(w("flip")),(0,c.forwardRef)((function(e,t){var n=I(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,u=e.style,d=e.rtl,f=e.containerId;function p(e){var t=l("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return v(s)?s({position:e,rtl:d,defaultClassName:t}):l(t,g(s))}return(0,c.useEffect)((function(){t&&(t.current=a.current)}),[]),c.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,r.Z)({},u):(0,r.Z)((0,r.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return c.createElement(R,(0,r.Z)((0,r.Z)({},a),{},{isIn:i(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:k,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,P=new Map,A=[],B=1;function D(){return""+B++}function z(e){return e&&(m(e.toastId)||p(e.toastId))?e.toastId:D()}function S(e,t){return P.size>0?T.emit(0,e,t):A.push({content:e,options:t}),t.toastId}function F(e,t){return(0,r.Z)((0,r.Z)({},t),{},{type:t&&t.type||e,toastId:z(t)})}function H(e){return function(t,n){return S(t,F(e,n))}}function q(e,t){return S(e,F("default",t))}q.loading=function(e,t){return S(e,F("default",(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},q.promise=function(e,t,n){var o,a=t.pending,i=t.error,s=t.success;a&&(o=m(a)?q.loading(a,n):q.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,a){if(null!=t){var i=(0,r.Z)((0,r.Z)((0,r.Z)({type:e},c),n),{},{data:a}),s=m(t)?{render:t}:t;return o?q.update(o,(0,r.Z)((0,r.Z)({},i),s)):q(s.render,(0,r.Z)((0,r.Z)({},i),s)),a}q.dismiss(o)},l=v(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},q.success=H("success"),q.info=H("info"),q.error=H("error"),q.warning=H("warning"),q.warn=q.warning,q.dark=function(e,t){return S(e,F("default",(0,r.Z)({theme:"dark"},t)))},q.dismiss=function(e){P.size>0?T.emit(1,e):A=A.filter((function(t){return null!=e&&t.options.toastId!==e}))},q.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},q.isActive=function(e){var t=!1;return P.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=P.get(n||M);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,i=(0,r.Z)((0,r.Z)((0,r.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:D()});i.toastId!==e&&(i.staleId=e);var s=i.render||a;delete i.render,S(s,i)}}),0)},q.done=function(e){q.update(e,{progress:1})},q.onChange=function(e){return T.on(4,e),function(){T.off(4,e)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(e){M=e.containerId||e,P.set(M,e),A.forEach((function(e){T.emit(0,e.content,e.options)})),A=[]})).on(3,(function(e){P.delete(e.containerId||e),0===P.size&&T.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=174.df3c96f9.chunk.js.map