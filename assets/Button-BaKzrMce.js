import{R as s,r as N}from"./index-CXkempHz.js";import{P as a,m as y,c as m,t as R}from"./Col-DOYiRKPe.js";var T=["className","cssModule","variant","innerRef"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}function d(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function x(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?d(Object(n),!0).forEach(function(t){E(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function E(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function M(e,r){if(e==null)return{};var n=$(e,r),t,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function $(e,r){if(e==null)return{};var n={},t=Object.keys(e),i,o;for(o=0;o<t.length;o++)i=t[o],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}var D={active:a.bool,"aria-label":a.string,onClick:a.func,variant:a.oneOf(["white"]),className:a.string,cssModule:a.object,innerRef:a.oneOfType([a.object,a.string,a.func])};function p(e){var r=e.className;e.cssModule;var n=e.variant,t=e.innerRef,i=M(e,T),o=y(m(r,"btn-close",n&&"btn-close-".concat(n)));return s.createElement("button",f({ref:t,type:"button",className:o},x({"aria-label":"close"},i)))}p.propTypes=D;var S=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function z(e,r){if(e==null)return{};var n=W(e,r),t,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function W(e,r){if(e==null)return{};var n={},t=Object.keys(e),i,o;for(o=0;o<t.length;o++)i=t[o],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}var B={active:a.bool,"aria-label":a.string,block:a.bool,children:a.node,className:a.string,cssModule:a.object,close:a.bool,color:a.string,disabled:a.bool,innerRef:a.oneOfType([a.object,a.func,a.string]),onClick:a.func,outline:a.bool,size:a.string,tag:R};function L(e){var r=N.useCallback(function(g){if(e.disabled){g.preventDefault();return}if(e.onClick)return e.onClick(g)},[e.onClick,e.disabled]),n=e.active,t=e["aria-label"],i=e.block,o=e.className,j=e.close,P=e.cssModule,b=e.color,h=b===void 0?"secondary":b,w=e.outline,v=e.size,O=e.tag,l=O===void 0?"button":O,k=e.innerRef,c=z(e,S);if(j)return s.createElement(p,c);var C="btn".concat(w?"-outline":"","-").concat(h),_=y(m(o,"btn",C,v?"btn-".concat(v):!1,i?"d-block w-100":!1,{active:n,disabled:e.disabled}),P);return c.href&&l==="button"&&(l="a"),s.createElement(l,u({type:l==="button"&&c.onClick?"button":void 0},c,{className:_,ref:k,onClick:r,"aria-label":t}))}L.propTypes=B;export{L as B};
