(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{26:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(2),i=s(13),r=s.n(i),c=s(4),o=s.n(c),m=s(14),l=s(15),d=s(16),j=s(19),u=s(18),v=(s(26),s(17)),h=s.n(v);s(45);var p=function(e){e.id;var t=e.title,s=e.year,a=e.summary,i=e.poster,r=e.genres;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:i,alt:t}),Object(n.jsxs)("div",{className:"movie__info",children:[Object(n.jsx)("h3",{className:"movie__title",children:t}),Object(n.jsx)("h5",{className:"movie__year",children:s}),Object(n.jsx)("ul",{className:"movie__genres",children:r&&r.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsx)("p",{className:"movie__summary",children:a})]})]})},b=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1}),console.log(n);case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.map((function(e){return Object(n.jsx)(p,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.Component);r.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.19a153b8.chunk.js.map