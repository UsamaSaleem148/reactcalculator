(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{16:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(8),i=a.n(c),r=(a(21),a(9)),o=a(10),d=a(14),s=a(13),u=(a(22),a(23),function(e){return l.a.createElement("div",{className:"button-wrapper ".concat((t=e.children,isNaN(t)&&"="!==t?"operator":null)),onClick:function(){return e.handleClick(e.children)}},e.children);var t}),h=(a(24),function(e){return l.a.createElement("div",{className:"input"},e.input)}),m=function(e){return l.a.createElement("div",{className:"clearBtn",onClick:e.handleClear},e.children)},p=a(28),E=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).addtoInput=function(e){isNaN(e)&&isNaN(n.state.input[n.state.input.length-1])?n.setState({input:n.state.input}):n.setState({input:n.state.input+e})},n.handleEqual=function(){isNaN(n.state.input[n.state.input.length-1])?n.setState({input:n.state.input}):n.setState({input:p.a(n.state.input)})},n.state={input:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"calc-wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement(m,{handleClear:function(){return e.setState({input:""})}},"C"),l.a.createElement(h,{input:this.state.input})),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:this.addtoInput},"7"),l.a.createElement(u,{handleClick:this.addtoInput},"8"),l.a.createElement(u,{handleClick:this.addtoInput},"9"),l.a.createElement(u,{handleClick:this.addtoInput},"/")),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:this.addtoInput},"4"),l.a.createElement(u,{handleClick:this.addtoInput},"5"),l.a.createElement(u,{handleClick:this.addtoInput},"6"),l.a.createElement(u,{handleClick:this.addtoInput},"*")),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:this.addtoInput},"1"),l.a.createElement(u,{handleClick:this.addtoInput},"2"),l.a.createElement(u,{handleClick:this.addtoInput},"3"),l.a.createElement(u,{handleClick:this.addtoInput},"+")),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:function(){return e.handleEqual()}},"="),l.a.createElement(u,{handleClick:this.addtoInput},"0"),l.a.createElement(u,{handleClick:this.addtoInput},"."),l.a.createElement(u,{handleClick:this.addtoInput},"-"))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.54bf89c0.chunk.js.map