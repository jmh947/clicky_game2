(this["webpackJsonpclicky-game2"]=this["webpackJsonpclicky-game2"]||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),s=t.n(r),c=t(3),o=t(4),m=t(7),l=t(6);var g=function(e){return i.a.createElement("nav",{className:"navbar"},"Score: ",e.score," | Top Score: ",e.topScore)};var u=function(e){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4"},"Clicky Game"),i.a.createElement("p",{className:"lead"},"Click on a photo, but only click it once. Is your super power memory?  We will see.  Good luck!")))};var p=function(e){return console.log(e.superhero),i.a.createElement("div",{className:"container "},i.a.createElement("div",{className:"row"},e.superhero.map((function(a,t){return i.a.createElement("div",{className:"col-sm-3 mt-5",key:t},i.a.createElement("img",{src:a.image,onClick:function(){return e.handleSubmit(a.id)}}))}))))},d=t(5),h=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={images:d,score:0,topscore:0},e.handleSubmit=function(a){var t=e.state.images.map((function(t){return t.id.toString().includes(a)&&(t.clicked?e.setState({score:0}):(e.setState({score:e.state.score+1}),e.state.score>=e.state.topscore&&e.setState({topscore:e.state.topscore+1}),t.clicked=!0)),t}));0===e.state.score&&(t=t.map((function(e){return e.clicked=void 0,e}))),t=t.sort((function(){return Math.random()-.5})),e.setState({images:t})},e}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,{score:this.state.score,topScore:this.state.topscore}),i.a.createElement(u,null),console.log(this.state.images),i.a.createElement(p,{superhero:this.state.images,handleSubmit:this.handleSubmit}))}}]),t}(n.Component);s.a.render(i.a.createElement(h,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":1,"image":"/images/antman.jpg"},{"id":2,"image":"/images/batman.jpg"},{"id":3,"image":"/images/captain_america.jpg"},{"id":4,"image":"/images/catwoman.jpg"},{"id":5,"image":"/images/falcon.jpg"},{"id":6,"image":"/images/flash.png"},{"id":7,"image":"/images/green_lantern.jpg"},{"id":8,"image":"/images/hulk.jpg"},{"id":9,"image":"/images/iron_man.jpg"},{"id":10,"image":"/images/spiderman.jpg"},{"id":11,"image":"/images/superman.jpg"},{"id":12,"image":"/images/wonder_woman.jpg"}]')},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.9c8f1463.chunk.js.map