(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),s=n(4),c=n(5),o=n(7),u=n(6),i=n(1),p=n.n(i),d=n(0),y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handleKeyUp=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){return e.handleKeyUp(t)}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keyup",(function(t){return e.handleKeyUp(t)}))}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(p.a.PureComponent);n(13);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.79d28d81.chunk.js.map