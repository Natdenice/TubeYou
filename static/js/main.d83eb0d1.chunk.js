(window.webpackJsonptubeyou=window.webpackJsonptubeyou||[]).push([[0],{24:function(e,t,a){e.exports=a(55)},30:function(e,t,a){},35:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),c=a.n(r),l=a(10),o=a.n(l),s=a(20),m=a(4),u=a(5),d=a(7),p=a(6),v=a(8),h=(a(30),a(21)),b=a(22),f=(a(35),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a.handleOnChange=function(e){a.setState({term:e.target.value})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"search-term",className:"label-title"},i.a.createElement("div",{className:"ui icon input"},i.a.createElement("input",{className:"form-input",id:"search-term",value:this.state.term,onChange:this.handleOnChange,type:"text",placeholder:"Live relax music"}),i.a.createElement("i",{className:"circular search link icon",onClick:this.onFormSubmit}))))))}}]),t}(i.a.Component)),E=a(23),y=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:10,key:"AIzaSyA5LWOhgQ54MzEXhN3ZTPxS3eg_HOhNoYs"}}),S=(a(53),function(e){var t=e.video,a=e.onSelectedVideo;return i.a.createElement("div",{onClick:function(){return a(t)},role:"",className:"video-item item"},i.a.createElement("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),w=function(e){var t=e.videos,a=e.onSelectedVideo,n=t.map(function(e){return i.a.createElement(S,{key:e.id.videoId,video:e,onSelectedVideo:a})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)},N=(a(54),function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Please Type a Keyword to search a Video");var a="https://www.youtube.com/embed/".concat(t.id.videoId,"?autoplay=1&showinfo=0&enablejs=1&modestbranding=1");return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video-player",src:a,allow:"autoplay; encrypted-media",allowFullScreen:!0})),i.a.createElement("div",{className:"info-box ui segment"},i.a.createElement("h4",null,t.snippet.title),i.a.createElement("p",null,t.snippet.description)))}),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:""},a.onSearchSubmit=function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onSelectedVideo=function(e){a.setState({selectedVideo:e})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("Live relax music")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"app-title"},i.a.createElement(b.a,{icon:h.a,size:"lg",style:{marginRight:"7px"}}),"TubeYou"),i.a.createElement("div",{className:"ui container"},i.a.createElement(f,{onSubmit:this.onSearchSubmit}),i.a.createElement("div",{className:"ui stackable two column grid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(N,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(w,{videos:this.state.videos,onSelectedVideo:this.onSelectedVideo}))))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(g,null),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d83eb0d1.chunk.js.map