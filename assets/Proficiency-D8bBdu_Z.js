import{R as b,S as w,j as i}from"./index-CXkempHz.js";import{C as W}from"./Container-23jwMyDJ.js";import{P as n,t as I,j as S,m as T,c as _,R as K,C}from"./Col-DOYiRKPe.js";import{F as q}from"./index-CHA-Ovzf.js";import{G as z}from"./DisplayLottie-bSsIX7SV.js";var H=["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?A(Object(r),!0).forEach(function(a){J(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Q(e,t){if(e==null)return{};var r=U(e,t),a,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function U(e,t){if(e==null)return{};var r={},a=Object.keys(e),s,l;for(l=0;l<a.length;l++)s=a[l],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var X={animated:n.bool,bar:n.bool,barAriaLabelledBy:n.string,barAriaValueText:n.string,barClassName:n.string,barStyle:n.object,children:n.node,className:n.string,cssModule:n.object,color:n.string,max:n.oneOfType([n.string,n.number]),min:n.oneOfType([n.string,n.number]),multi:n.bool,striped:n.bool,style:n.object,tag:I,value:n.oneOfType([n.string,n.number])};function B(e){var t=e.children,r=e.className,a=e.barClassName,s=e.cssModule,l=e.value,u=l===void 0?0:l,d=e.min,E=d===void 0?0:d,g=e.max,p=g===void 0?100:g,f=e.animated,L=e.striped,y=e.color,c=e.bar,$=e.multi,v=e.tag,j=v===void 0?"div":v,O=e.style,h=O===void 0?{}:O,x=e.barStyle,M=x===void 0?{}:x,R=e.barAriaValueText,D=e.barAriaLabelledBy,P=Q(e,H),V=S(u)/S(p)*100,F=T(_(r,"progress"),s),G=T(_("progress-bar",c&&r||a,f?"progress-bar-animated":null,y?"bg-".concat(y):null,L||f?"progress-bar-striped":null),s),N={className:G,style:m(m(m({},c?h:{}),M),{},{width:"".concat(V,"%")}),role:"progressbar","aria-valuenow":u,"aria-valuemin":E,"aria-valuemax":p,"aria-valuetext":R,"aria-labelledby":D,children:t};return c?b.createElement(j,o({},P,N)):b.createElement(j,o({},P,{style:h,className:F}),$?t:b.createElement("div",N))}B.propTypes=X;const ae=()=>w&&i.jsx(W,{className:"section section-lg",children:i.jsx(q,{direction:"down",duration:2e3,children:i.jsxs(K,{children:[i.jsxs(C,{lg:"6",children:[i.jsx("h1",{className:"h1",children:"Proficiency"}),w.map(e=>i.jsxs("div",{className:"progress-info",children:[i.jsx("div",{className:"progress-label",children:i.jsx("span",{children:e.Stack})}),i.jsx("div",{className:"progress-percentage",children:i.jsxs("span",{children:[e.progressPercentage,"%"]})}),i.jsx(B,{max:"100",value:e.progressPercentage,color:"info",role:"progressbar","aria-label":e.Stack})]},e.Stack))]}),i.jsx(C,{lg:"6",children:i.jsx(z,{animationPath:"/lottie/build.json"})})]})})});export{ae as default};
