(this["webpackJsonpflip-card"]=this["webpackJsonpflip-card"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(7),i=t.n(r),s=(t(12),t(2)),o=t(4),u=(t(13),["html5","css3","js","sass","nodejs","react","linkedin","heroku","github","aws"]);var d=function(e){var n=0,t=2*e,c=u.slice(0,t),a=[];return c.forEach((function(e){a.push({id:n++,name:e}),a.push({id:n++,name:e})})),function(e){for(var n=e.slice(0),t=0;t<e.length-1;t++){var c=Math.floor(Math.random()*(t+1)),a=n[t];n[t]=n[c],n[c]=a}return n}(a)},l=(t(14),t(0));var f=function(e){var n=e.id,t=e.name,c=e.handleClick,a=e.flipped;return Object(l.jsxs)("div",{className:"card ".concat(t," ").concat(a?"card--flipped":""),"data-tech":"css3",onClick:c,id:n,children:[Object(l.jsx)("div",{className:"card__face card__face--front"}),Object(l.jsx)("div",{className:"card__face card__face--back"})]})};t(16);var j=function(e){var n=e.cards,t=e.handleClick,c=e.flippedCards;return Object(l.jsx)("div",{className:"game-board",style:{gridTemplateColumns:"1fr 1fr"},children:n.map((function(e){return Object(l.jsx)(f,{id:e.id,name:e.name,handleClick:t,flipped:c.includes(e.id)},e.id)}))})};var b=function(){var e=Object(c.useState)(1),n=Object(o.a)(e,2),t=(n[0],n[1],Object(c.useState)([])),a=Object(o.a)(t,2),r=a[0],i=a[1],u=Object(c.useState)([]),f=Object(o.a)(u,2),b=f[0],h=f[1],v=Object(c.useState)([]),p=Object(o.a)(v,2),O=p[0],m=p[1];function g(e){return r.find((function(n){return n.id===e}))}return console.log(b),console.log(O),Object(c.useEffect)((function(){i(d(1))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(j,{cards:r,handleClick:function(e){var n=+e.currentTarget.id;if(console.log(n),!O.includes(n))if(b.includes(n)){var t=b.filter((function(e){return e!==n}));h(t)}else{var c=function(e){var n=g(e),t=b.find((function(t){var c=g(t);return t!==e&&c.name===n.name}));return t?[e,t]:[]}(n);if(0===c.length){var a=b.filter((function(e){return!O.includes(e)}));0===a.length?h([].concat(Object(s.a)(b),[n])):(h([].concat(Object(s.a)(b),[n])),setTimeout((function(){var e=b.filter((function(e){return e!==a[0]}));h(e)}),1500))}else h([].concat(Object(s.a)(b),[n])),m([].concat(Object(s.a)(O),Object(s.a)(c)))}},flippedCards:b})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}],[[17,1,2]]]);
//# sourceMappingURL=main.1b65a4e3.chunk.js.map