"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{854:function(e,t,r){var n=r(742),a=r(7),u=r.n(a);function c(e){e.isLoading?n.Loading.dots():n.Loading.remove()}c.propTypes={isLoading:u().bool.isRequired},t.Z=c},186:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),s=r(689),o=r(854),p=r(836),f=r(184);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=(0,i.useState)(!1),l=(0,a.Z)(h,2),v=l[0],d=l[1],w=(0,s.UO)().movieId;return(0,i.useEffect)((function(){d(!0),(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Jh)("https://api.themoviedb.org/3/movie/".concat(w,"/reviews?api_key=38126fe3d6cea635722ecf700f4bc3bf&language=en-US&page=1"));case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,d(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}),[w]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{isLoading:v}),v||0===r.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,f.jsx)("ul",{className:"py-5",children:r.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",t]}),(0,f.jsx)("p",{children:r})]},n)}))})]})}},836:function(e,t,r){r.d(t,{Hg:function(){return i},IQ:function(){return l},Jh:function(){return d},TP:function(){return f},z1:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(243);function i(e){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(t);case 3:return r=e.sent,n=r.data.results,a=n.map((function(e){return{id:e.id,title:e.title,name:e.name}})),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(t);case 3:return r=e.sent,n=r.data.results,a=n.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function e(t){var r,n,a,i,s,o,p,f,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(t);case 3:return r=e.sent,n=r.data,a=n.title,i=n.name,s=n.vote_average,o=n.overview,p=n.genres,f=n.poster_path,h={title:a,name:i,vote_average:s,overview:o,genres:p,poster_path:f},e.abrupt("return",h);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(t);case 3:return r=e.sent,n=r.data.cast,a=n.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(t);case 3:return r=e.sent,n=r.data.results,a=n.map((function(e){return{author:e.author,content:e.content,id:e.id}})),e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.9beb3968.chunk.js.map