!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(7),u=r(i),c=n(4),a=r(c),f=n(5),s=r(f),l=n(6),d=n(3),m=n(2),p=r(m),h=(0,d.provideInjector)(p.default);u.default.entwine("ss",function(e){e(".TestReactFormBuilder").entwine({onmatch:function(){var e=this;setTimeout(function(){return e._renderForm()},100),this[0].style.setProperty("overflow-y","scroll","important")},onunmatch:function(){this._clearForm(),this.css("overflow-y",!1)},open:function(){this._renderForm()},close:function(){this._clearForm()},_renderForm:function(){var e=this,t=window.ss.store,n=t.getState().config.sections.find(function(e){return"TestReactFormBuilder"===e.name}),r=n.form.TestEditForm.schemaUrl;s.default.render(a.default.createElement(l.Provider,{store:t},a.default.createElement(h,o({identifier:"TestReactForm",schemaUrl:r,handleSubmit:function(){return e._handleSubmit.apply(e,arguments)}},"identifier","FrameworkTest.ReactSection"))),this[0])},_clearForm:function(){s.default.unmountComponentAtNode(this[0])},_handleSubmit:function(e,t,n){return e.preventDefault(),n()}}),e(".TestReactFormBuilder .nav-link").entwine({onclick:function(e){e.preventDefault()}})})},function(e,t,n){"use strict";n(0)},function(e,t){e.exports=FormBuilderLoader},function(e,t){e.exports=Injector},function(e,t){e.exports=React},function(e,t){e.exports=ReactDom},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=jQuery}]);