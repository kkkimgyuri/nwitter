(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),u=a.n(c),l=a(2),i=a(9),s=a(1),o=a(3),m=a.n(o),p=a(6),f=a(10),d=a.n(f);a(30),a(32),a(45);d.a.initializeApp({apiKey:"AIzaSyCbIiM1ekH8ZQBjNX8Qldd5qOuNExDmGzY",authDomain:"nwitter-86c68.firebaseapp.com",projectId:"nwitter-86c68",storageBucket:"nwitter-86c68.appspot.com",messagingSenderId:"833997626730",appId:"1:833997626730:web:d38095abde82ef8fbdd913"});var b=d.a,h=d.a.auth(),E=d.a.firestore(),v=d.a.storage(),g=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),s=i[0],o=i[1],f=Object(n.useState)(!0),d=Object(l.a)(f,2),b=d[0],E=d[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),O=g[0],j=g[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},w=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,s);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,s);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),j(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"name"},r.a.createElement("h1",null,"\uaddc\ub9ac\ub124 \uac8c\uc2dc\ud310")),r.a.createElement("form",{onSubmit:w,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c",required:!0,value:a,onChange:y,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:s,className:"authInput",onChange:y}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:b?"\uacc4\uc815\ub9cc\ub4e4\uae30":"\ub85c\uadf8\uc778"}),O&&r.a.createElement("span",{className:"authError"},O)),r.a.createElement("span",{onClick:function(){return E((function(e){return!e}))},className:"authSwitch"},b?"\ub85c\uadf8\uc778":"\uacc4\uc815\ub9cc\ub4e4\uae30"))},O=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new b.auth.GoogleAuthProvider:"github"===a&&(n=new b.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"\uad6c\uae00\ub85c \ub85c\uadf8\uc778"),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"\uae43\ud5c8\ube0c\ub85c \ub85c\uadf8\uc778")))},j=a(23),y=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),u=Object(l.a)(c,2),i=u[0],s=u[1],o=Object(n.useState)(t.text),f=Object(l.a)(o,2),d=f[0],b=f[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uac8c\uc2dc\uae00\uc744 \uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,E.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,v.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){return s((function(e){return!e}))},O=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.doc("nweets/".concat(t.id)).update({text:d});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"\uae00 \uc218\uc815",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:g,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("button",{onClick:h},"\uc0ad\uc81c"),r.a.createElement("button",{onClick:g},"\uc218\uc815"))))},w=a(47),x=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],i=c[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),f=o[0],d=o[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===f){e.next=12;break}return r=v.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return l={text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,E.collection("nweets").add(l);case 15:i(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:u,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"\ub9d0\ud558\uace0 \uc2f6\uc740 \ud55c\ub9c8\ub514 !! *300\uc790 \uc81c\ud55c",maxLength:300}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos")),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"))))},N=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(l.a)(a,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){E.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(x,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},u.map((function(e){return r.a.createElement(y,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},k=function(e){var t=e.refreshUser,a=e.userObj,c=Object(s.f)(),u=Object(n.useState)(a.displayName),i=Object(l.a)(u,2),o=i[0],f=i[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===o){e.next=5;break}return e.next=4,a.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"\ubcc4\uba85 \uc7ac\uc124\uc815",value:o,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),c.push("/")}},"\ub85c\uadf8\uc544\uc6c3"))},S=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/",style:{marginRight:10}})),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},t.displayName?"".concat(t.displayName,"\uc758 \ud504\ub85c\ud544"):"Profile"))))},I=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,a&&r.a.createElement(S,{userObj:n}),r.a.createElement(s.c,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(N,{userObj:n})),r.a.createElement(s.a,{exact:!0,path:"/profile"},r.a.createElement(k,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(O,null)))))};var C=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(null),i=Object(l.a)(u,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(I,{refreshUser:function(){var e=h.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(s),userObj:s}):"\uae30\ub2e4\ub824\uc8fc\uc138\uc694 \u314e\u314e ...")};a(43);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fd8f4821.chunk.js.map