(this.webpackJsonpmaxblack=this.webpackJsonpmaxblack||[]).push([[0],{19:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/cov.3cd5f7c2.png"},24:function(e,t,a){e.exports=a.p+"static/media/sneezing_face.2caaf9b2.png"},25:function(e,t,a){e.exports=a.p+"static/media/winking_f.ee716bd4.png"},26:function(e,t,a){e.exports=a.p+"static/media/skull.310e6647.png"},27:function(e,t,a){e.exports=a.p+"static/media/phone.63d377e5.svg"},28:function(e,t,a){e.exports=a.p+"static/media/news.fa856f5e.svg"},29:function(e,t,a){e.exports=a.p+"static/media/recom.56d0ef52.svg"},30:function(e,t,a){e.exports=a.p+"static/media/sites.6c6cd437.svg"},33:function(e,t,a){e.exports=a.p+"static/media/1.f4e2b25f.png"},34:function(e,t,a){e.exports=a.p+"static/media/2.0fa44947.png"},35:function(e,t,a){e.exports=a.p+"static/media/3.38e41880.png"},36:function(e,t,a){e.exports=a(49)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=a(2),i=a(3),m=a(4),s=a(5),u=a(12),d=a(9),p=(a(19),a(22)),b=a.n(p),E=a(15),h=a.n(E),f=a(23),v=a(24),g=a.n(v),j=a(25),k=a.n(j),y=a(26),w=a.n(y),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"covid-monitoring"},r.a.createElement("div",{className:"covid-card"},r.a.createElement("img",{className:"covid-img",src:g.a}),r.a.createElement("h3",null,"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u043e"),r.a.createElement("p",{id:"covid-infected"},"-")),r.a.createElement("div",{className:"covid-card"},r.a.createElement("img",{className:"covid-img",src:k.a}),r.a.createElement("h3",null,"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e"),r.a.createElement("p",{id:"covid-recovered"},"-")),r.a.createElement("div",{className:"covid-card"},r.a.createElement("img",{className:"covid-img",src:w.a}),r.a.createElement("h3",null,"\u0423\u043c\u0435\u0440\u043b\u043e"),r.a.createElement("p",{id:"covid-deaths"},"-"))))}},{key:"componentDidMount",value:function(){function e(){return(e=Object(f.a)(h.a.mark((function e(){var t,a,n=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(e,t,a,n){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var r=isFinite(+e)?+e:0,l=isFinite(+t)?Math.abs(t):0,c="undefined"===typeof n?" ":n,o="undefined"===typeof a?".":a,i="";return(i=(l?function(e,t){var a=Math.pow(10,t);return""+(Math.round(e*a)/a).toFixed(t)}(r,l):""+Math.round(r)).split("."))[0].length>3&&(i[0]=i[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,c)),(i[1]||"").length<l&&(i[1]=i[1]||"",i[1]+=new Array(l-i[1].length+1).join("0")),i.join(o)}(function(){return e.apply(this,arguments)})("https://coronavirus-19-api.herokuapp.com/all").then((function(e){e?document.getElementById("covid-infected")&&document.getElementById("covid-recovered")&&document.getElementById("covid-deaths")?(document.getElementById("covid-infected").innerText=t(e.cases),document.getElementById("covid-recovered").innerText=t(e.recovered),document.getElementById("covid-deaths").innerText=t(e.deaths)):console.log("Elements not found!"):console.log("Unable to get data!")}))}}]),a}(r.a.Component),O=a(13),x=a.n(O),C=a(27),B=a.n(C),I=a(28),_=a.n(I),M=a(29),T=a.n(M),A=a(30),D=a.n(A),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"color-cards_wrapper"},r.a.createElement("div",{className:"color-cards"},r.a.createElement("div",{className:"color-card",id:"phone"},r.a.createElement("img",{src:B.a}),r.a.createElement("h3",null,"\u0415\u0434\u0438\u043d\u0430\u044f \u0433\u043e\u0440\u044f\u0447\u0430\u044f \u043b\u0438\u043d\u0438\u044f")),r.a.createElement("div",{className:"color-card",id:"news"},r.a.createElement("img",{src:_.a}),r.a.createElement("h3",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u043e COVID-19")),r.a.createElement("div",{className:"color-card",id:"recom"},r.a.createElement("img",{src:T.a}),r.a.createElement("h3",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b")),r.a.createElement("div",{className:"color-card",id:"sites"},r.a.createElement("img",{src:D.a}),r.a.createElement("h3",null,"\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b")))))}},{key:"componentDidMount",value:function(){document.getElementById("phone").addEventListener("click",(function(){x.a.fire({title:"\u0415\u0434\u0438\u043d\u0430\u044f \u0433\u043e\u0440\u044f\u0447\u0430\u044f \u043b\u0438\u043d\u0438\u044f",html:'\u0422\u0435\u043b\u0435\u0444\u043e\u043d: <b><a href="tel:88002000112">8\u2011800\u20112000\u2011112</a></b>',showCloseButton:!0,showConfirmButton:!1})})),document.getElementById("news").addEventListener("click",(function(){window.open("https://yandex.ru/news/rubric/koronavirus","_blank")})),document.getElementById("recom").addEventListener("click",(function(){x.a.fire({title:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",html:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u0438\u0441\u043b\u0443\u0448\u0430\u0439\u0442\u0435\u0441\u044c \u043a \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c\u0438 \u2014 \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e!<br><br><b>\u2022 \u0427\u0438\u0445\u0430\u0439\u0442\u0435 \u0438 \u043a\u0430\u0448\u043b\u044f\u0439\u0442\u0435 \u0432 \u0441\u0433\u0438\u0431 \u043b\u043e\u043a\u0442\u044f \u0438\u043b\u0438 \u0441\u0430\u043b\u0444\u0435\u0442\u043a\u0443</b><br><b>\u2022 \u041c\u043e\u0439\u0442\u0435 \u0440\u0443\u043a\u0438 \u0447\u0430\u0449\u0435</b><br><b>\u2022 \u041d\u0435 \u043f\u0440\u0438\u043a\u0430\u0441\u0430\u0439\u0442\u0435\u0441\u044c \u0440\u0443\u043a\u0430\u043c\u0438 \u043a \u043b\u0438\u0446\u0443</b><br><b>\u2022 \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c, \u0438\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0441\u0442\u0430</b><br><b>\u2022 \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u044c\u0442\u0435 \u043f\u043e\u0435\u0437\u0434\u043a\u0438</b><br><b>\u2022 \u041f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u043e\u0432 \u0441\u0440\u043e\u0447\u043d\u043e \u043e\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e</b>",showCloseButton:!0,showConfirmButton:!1})})),document.getElementById("sites").addEventListener("click",(function(){x.a.fire({title:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",html:'<a href="https://who.int" target="_blank" rel="noopener">\u0421\u0430\u0439\u0442 \u0412\u0441\u0435\u043c\u0438\u0440\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0434\u0440\u0430\u0432\u043e\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f</a><br><a href="https://www.rosminzdrav.ru/" target="_blank" rel="noopener">\u0421\u0430\u0439\u0442 \u041c\u0438\u043d\u0437\u0434\u0440\u0430\u0432 \u0420\u043e\u0441\u0441\u0438\u0438</a><br><a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank" rel="noopener">\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 COVID-19</a>',showCloseButton:!0,showConfirmButton:!1})}))}}]),a}(r.a.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("article",{className:"markdown-body"},r.a.createElement("section",{className:"profile"},r.a.createElement("img",{className:"avatar",src:b.a}),r.a.createElement("h1",{className:"title"},"COVID-19"),r.a.createElement("p",{className:"description"},"\u0421\u0430\u043c\u0430\u044f \u0432\u0430\u0436\u043d\u0430\u044f \u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430\u044f ","\n","\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),r.a.createElement("section",{className:"covid-wrapper"},r.a.createElement(N,null)),r.a.createElement("section",null,r.a.createElement("h2",null,r.a.createElement("label",{className:"emoji exclam"}),"\u0412\u0430\u0436\u043d\u043e\u0435"),r.a.createElement(S,null))))}}]),a}(r.a.Component),V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"covid-alert"},r.a.createElement("p",{className:"covid-title"},this.props.title),r.a.createElement("p",{className:"covid-description"},r.a.createElement("b",null,this.props.boldTitle,"\n"),r.a.createElement(u.b,{to:"/covid19"},"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u044c \u0432\u0438\u0440\u0443\u0441")," \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u044b\u043c\u0438 \u0443\u0441\u0438\u043b\u0438\u044f\u043c\u0438")))}}]),a}(r.a.Component),F=a(33),J=a.n(F),L=a(34),W=a.n(L),z=a(35),U=a.n(z),Z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"avatar",id:"ava",alt:"\u042d\u0442\u043e \u042f."}),r.a.createElement("h1",{className:"title"},this.props.name),r.a.createElement("p",{className:"description"},this.props.description))}},{key:"componentDidMount",value:function(){var e=document.getElementById("ava"),t=Math.floor(3*Math.random());if(e)switch(t){case 0:e.src=J.a,console.log("\u0420\u0430\u043d\u0434\u043e\u043c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430: ",t);break;case 1:e.src=W.a,console.log("\u0420\u0430\u043d\u0434\u043e\u043c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430: ",t);break;case 2:e.src=U.a,console.log("\u0420\u0430\u043d\u0434\u043e\u043c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430: ",t)}else console.log("\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0443 \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(")}}]),a}(r.a.Component),H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"\u041e\u0431\u0449\u0438\u0442\u0435\u043b\u0435\u043d \u0438 \u0441\u043e\u0446\u0438\u0430\u043b\u0435\u043d.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{className:"emoji vk"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://vk.com/maksbadcosmos"},"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),","," ",r.a.createElement("label",{className:"emoji tg"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://t.me/theverloren"},"Telegram"),","," ",r.a.createElement("label",{className:"emoji insta"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://instagram.com/maksbadcosmos"},"Instagram"),","," ",r.a.createElement("label",{className:"emoji twitter"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://twitter.com/maksblackcosmos"},"Twitter"),","," ",r.a.createElement("label",{className:"emoji yt"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://youtube.com/TrollZor"},"YouTube"),","," ",r.a.createElement("label",{className:"emoji sc"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://soundcloud.com/verlorenmusic"},"SoundCloud"),","," ",r.a.createElement("label",{className:"emoji tumblr"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://maksbadcosmos.tumblr.com/"},"Tumblr"),","," ",r.a.createElement("label",{className:"emoji steam"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://steamcommunity.com/id/ethermax/"},"Steam"),","," ",r.a.createElement("label",{className:"emoji ng"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://flymax.newgrounds.com/"},"Newgrounds"),r.a.createElement("br",null),r.a.createElement("br",null),"\u041d\u0435 \u043e\u0442\u043a\u0430\u0436\u0443\u0441\u044c \u043e\u0442 \u0447\u0435\u043a\u0430\u043d\u043d\u043e\u0439 \u043c\u043e\u043d\u0435\u0442\u044b:"," ",r.a.createElement("label",{className:"emoji patreon"}),r.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://www.patreon.com/maksblackcosmos"},"Patreon"))}}]),a}(r.a.Component),K=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("b",null,this.props.year),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener",href:this.props.url},this.props.title)," ",r.a.createElement("label",{title:this.props.emoji,className:"emoji"}))))}}]),a}(r.a.Component),X=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("article",{className:"markdown-body"},r.a.createElement("section",{className:"covid-section"},r.a.createElement(V,{title:"COVID-19 Alert",boldTitle:"\u0411\u0435\u0437 \u043f\u0430\u043d\u0438\u043a\u0438!"})),r.a.createElement("section",{className:"profile"},r.a.createElement(Z,{name:"\u041c\u0430\u043a\u0441 \u0427\u0451\u0440\u043d\u044b\u0439",description:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u043e\u0451 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0435\n                                \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e!\n                            "})),r.a.createElement("section",null,r.a.createElement("h2",null,r.a.createElement("label",{className:"emoji coder"}),"\u0427\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c?"),r.a.createElement("p",null,"\u041f\u0438\u0448\u0443 \u043a\u043e\u0434, \u0434\u0435\u043b\u0430\u044e \u0434\u0438\u0437\u0430\u0439\u043d,","\n",r.a.createElement("a",{href:"https://soundcloud.com/verlorenmusic",target:"_blank",rel:"noopener"},"\u0442\u0432\u043e\u0440\u044e \u043c\u0443\u0437\u044b\u043a\u0443"),"\n","\u0438 \u043c\u043d\u043e\u0433\u043e \u043e\u0440\u0430\u0442\u043e\u0440\u0441\u0442\u0432\u0443\u044e.")),r.a.createElement("section",null,r.a.createElement("h2",null,r.a.createElement("label",{className:"emoji map"}),"\u0413\u0434\u0435 \u0442\u0443\u0441\u0443\u044e\u0441\u044c?"),r.a.createElement(H,null)),r.a.createElement("section",null,r.a.createElement("h2",null,r.a.createElement("label",{className:"emoji tools"}),"\u041e\u0440\u0443\u0434\u0438\u044f \u0442\u0440\u0443\u0434\u0430"),r.a.createElement("p",null,"\u041c\u043e\u0437\u0433, \u0434\u0435\u0441\u043d\u0438\u0446\u044b \u0438 iPhone 11, JS, NodeJS, C#, jPHP, Windows 10, Kali/Ubuntu, WebStorm, Adobe Photoshop, Adobe Illustrator, Adobe Xd, Adobe InDesign, Figma, Affinity Designer, Adobe Audition, Ableton.")),r.a.createElement("section",null,r.a.createElement("h2",null,r.a.createElement("label",{className:"emoji history"}),"\u041b\u0435\u0442\u043e\u043f\u0438\u0441\u044c"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(K,{year:"2019",title:"\u0414\u0438\u0437\u0430\u0439\u043d: \u0430\u0439\u0434\u0435\u043d\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u0444\u0443\u0442\u0431\u043e\u043b\u043e\u043a \u0434\u0435\u0432\u044f\u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430",url:"https://vk.com/@9beforever-merch",emoji:"#\u0414\u0438\u0437\u0430\u0439\u043d"})),r.a.createElement("li",null,r.a.createElement(K,{year:"2018",title:"\u0411\u043e\u0442 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0438\u0442\u0435\u043b\u044c-\u0437\u0430\u0445\u0432\u0430\u0442\u0447\u0438\u043a \u0431\u0435\u0441\u0435\u0434 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 (\u0417\u0430\u043c\u043e\u0440\u043e\u0436\u0435\u043d\u043e)",url:"https://vk.com/cliffford",emoji:"#\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"}),r.a.createElement(K,{title:"\u041c\u0443\u0437\u044b\u043a\u0430: \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Verloren Music",url:"https://vk.com/verlorenmusic",emoji:"#\u041c\u0443\u0437\u044b\u043a\u0430"})),r.a.createElement("li",null,r.a.createElement(K,{year:"2014",title:"\u041d\u0430\u0447\u0430\u043b\u043e: \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a-\u0431\u043b\u043e\u0433\u0433\u0435\u0440",url:"https://youtube.com/TrollZor"}))))))}}]),a}(r.a.Component),Y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:X}),r.a.createElement(d.a,{path:"/covid19",exact:!0,component:P}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47),a(48);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.bb54596d.chunk.js.map