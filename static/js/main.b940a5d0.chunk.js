(this["webpackJsonpuser-list-app"]=this["webpackJsonpuser-list-app"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"validateUser",(function(){return Z})),t.d(n,"userRegistration",(function(){return ee})),t.d(n,"getUsers",(function(){return ae})),t.d(n,"takeEveryGetUsers",(function(){return te})),t.d(n,"getProfileDetails",(function(){return ne})),t.d(n,"takeEveryGetProfileDetails",(function(){return re})),t.d(n,"deleteUser",(function(){return se}));var r=t(0),s=t.n(r),c=t(22),i=t.n(c),l=(t(69),t(70),t(11)),o=(t(24),t(16)),u=(t(71),t(105)),p=t(106),m=t(19),d=t(12),E=function(e){return e.userData};function f(e,a){return{type:"ON_INPUT_FIELD_CHANGE",inputFieldName:e,inputValue:a}}var g=t(102),O=function(e){return!0===e.loadSpinner&&s.a.createElement(p.a,{variant:"primary",disabled:!0,style:{marginTop:"20px"}},s.a.createElement(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading...")},b=function(){var e=Object(d.b)(),a=Object(r.useState)(!1),t=Object(o.a)(a,2),n=t[0],c=t[1],i=Object(r.useState)(!1),E=Object(o.a)(i,2),g=E[0],b=E[1],S=Object(d.c)((function(e){return e.userData})),v=S.loginEmail,_=S.loginPassword,I=S.loginErrorMessage,A=S.loginToken,P=S.loadSpinner;Object(r.useEffect)((function(){e({type:"USER_LOGOUT"})}),[e]);var j=function(a,t){e(f(a,t))};return s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"container-wrapper"},s.a.createElement("h2",null," React Login"),I&&s.a.createElement("div",{className:"api-error-message"}," ",I),s.a.createElement("div",{className:"login-forms"},s.a.createElement(u.a,{noValidate:!0},s.a.createElement(u.a.Group,{controlId:"formBasicEmail"},s.a.createElement(u.a.Control,{className:"formInput",type:"email",placeholder:"USER NAME",value:v,onChange:function(e){return j("loginEmail",e.target.value)},isInvalid:n&&""===v}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter username"))),s.a.createElement(u.a,{noValidate:!0},s.a.createElement(u.a.Group,{controlId:"formBasicPassword"},s.a.createElement(u.a.Control,{className:"formInput",type:"password",placeholder:"PASSWORD",value:_,onChange:function(e){return j("loginPassword",e.target.value)},isInvalid:g&&""===_}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter password")))),s.a.createElement(p.a,{type:"submit",className:"btn btn-success",onClick:function(){v&&_?e({type:"VALIDATE_USER_LOGIN"}):""===v?c(!0):""===_&&b(!0)}},s.a.createElement("i",{className:"fas fa-sign-in-alt font-icons"}," "),"Sign in"),s.a.createElement("div",{className:"form-footer"},s.a.createElement(m.b,{to:"/signup"},s.a.createElement("i",{className:"fas fa-user-plus font-icons"}),"Signup New Account?")),A&&s.a.createElement(l.a,{to:"/userlist"}),s.a.createElement(O,{loadSpinner:P})))},S=function(){var e=Object(d.b)(),a=Object(r.useState)(!1),t=Object(o.a)(a,2),n=t[0],c=t[1],i=Object(r.useState)(!1),l=Object(o.a)(i,2),E=l[0],g=l[1],b=Object(d.c)((function(e){return e.userData})),S=b.signUpEmail,v=b.signUpPassword,_=b.signUpApiMessage,I=b.loadSpinner;Object(r.useEffect)((function(){e({type:"USER_LOGOUT"})}),[e]);var A=function(a,t){e(f(a,t))};return s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"container-wrapper"},s.a.createElement("h2",null," React Signup"),_&&s.a.createElement("div",{className:"api-error-message"},_.slice(6)),s.a.createElement("div",{className:"login-forms"},s.a.createElement(u.a,{noValidate:!0},s.a.createElement(u.a.Group,{controlId:"formBasicEmail"},s.a.createElement(u.a.Control,{className:"formInput",type:"email",placeholder:"USER NAME",value:S,onChange:function(e){return A("signUpEmail",e.target.value)},isInvalid:n&&""===S}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter username"))),s.a.createElement(u.a,null,s.a.createElement(u.a.Group,{controlId:"formBasicPassword"},s.a.createElement(u.a.Control,{className:"formInput",type:"password",placeholder:"PASSWORD",value:v,onChange:function(e){return A("signUpPassword",e.target.value)},isInvalid:E&&""===v}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter password")))),s.a.createElement(p.a,{variant:"primary",type:"submit",onClick:function(){S&&v?(c(!1),g(!1),e(function(e,a){return{type:"ON_SIGNUP_USER",signUpEmail:e,signUpPassword:a}}(S,v))):""===S?c(!0):""===v&&g(!0)}},s.a.createElement("i",{className:"fas fa-user-plus font-icons"}),"SIGN UP"),s.a.createElement("div",null,s.a.createElement(O,{loadSpinner:I}))),s.a.createElement("div",{className:"float-style"},s.a.createElement("i",{className:"far fa-arrow-alt-circle-left font-icons"}),s.a.createElement(m.b,{to:"/"},"Back to Login")))},v=t(103),_=t(104),I=function(e){return s.a.createElement(_.a,{show:e.show,onHide:e.onHide,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},s.a.createElement(_.a.Header,{closeButton:!0},s.a.createElement(_.a.Title,null,e.modalHeader)),s.a.createElement(_.a.Body,null,e.modalMessage),s.a.createElement(_.a.Footer,null,s.a.createElement(p.a,{variant:"secondary",onClick:function(){return e.onSelectedYes()}},"Yes"),s.a.createElement(p.a,{variant:"primary",onClick:function(){return e.onHide()}},"No")))},A=function(e){var a=Object(d.b)(),t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],u=Object(r.useState)(!1),p=Object(o.a)(u,2),m=p[0],E=p[1],f=Object(d.c)((function(e){return e.userData})).loginEmail;return s.a.createElement("div",{className:"user-header"},s.a.createElement("div",{style:{paddingTop:"20px"}},s.a.createElement("span",{style:{float:"left"},className:"circle"},"SG"),s.a.createElement("span",{style:{color:"white",float:"left",paddingTop:"2px",fontSize:"1.2rem",paddingLeft:"22px"}},"Welcome ",f),s.a.createElement("span",{style:{float:"right",paddingRight:"20px",fontWeight:"Bold",color:"white"}},s.a.createElement("div",{onClick:function(){return i(!0)},className:"header-logout",style:{float:"right",cursor:"pointer",fontWeight:"Bold"}},"Logout"))),c&&s.a.createElement(I,{show:c,onSelectedYes:function(){return a({type:"USER_LOGOUT"}),void E(!0)},onHide:function(){return i(!1)},modalMessage:"Are you Sure, you want to Logout!",modalHeader:"Logout Confirmation"}),m&&s.a.createElement(l.a,{to:"/"}))},P=t(60),j=t.n(P),L=t(61),h=t.n(L),U=function(e){return function(a){var t=Object(d.c)((function(e){return e.userData})).loginToken;return s.a.createElement(s.a.Fragment,null,""===t?s.a.createElement(l.a,{to:"/"}):s.a.createElement(e,null))}},x=U((function(){var e=Object(d.b)(),a=Object(r.useState)(1),t=Object(o.a)(a,2),n=t[0],c=t[1];Object(r.useEffect)((function(){e({type:"GET_USER_LISTS",pageId:n})}),[e,n]);var i=Object(d.c)((function(e){return e.userData})),l=i.userListData,u=i.userListApiFailedMessage,p="md";return window.innerWidth<1e3&&(p="sm"),s.a.createElement("div",{className:"user-container"},s.a.createElement(A,null),s.a.createElement("div",{style:{marginTop:"12px"}},s.a.createElement("h4",null," LIST OF USERS")),s.a.createElement("div",null,s.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"20px"},size:p},s.a.createElement("thead",null,s.a.createElement("tr",{className:"table-main-heading"},s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"First Name"),s.a.createElement("th",null,"Last Name"))),s.a.createElement("tbody",null,l.length>0&&l.map((function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",{className:"table-email"},s.a.createElement(m.b,{to:"/userdetails/".concat(e.id)},e.email)),s.a.createElement("td",null,e.first_name),s.a.createElement("td",null,e.last_name))}))))),s.a.createElement("div",{className:"list-arrows",style:{float:"right"}},s.a.createElement("span",null,s.a.createElement("img",{src:j.a,style:{width:"40px",marginRight:"20px",cursor:"pointer"},alt:"LeftArrow",onClick:function(){2===n&&c(n-1)}})),s.a.createElement("span",null,s.a.createElement("img",{src:h.a,style:{width:"40px",cursor:"pointer"},alt:"RightArrow",onClick:function(){1===n&&c(n+1)}}))),u&&s.a.createElement("div",{className:"api-error-message"},u))})),N=U((function(e){var a=window.location.hash.slice(14),t=Object(d.b)(),n=Object(d.c)((function(e){return e.userData})),c=n.userProfileDetails,i=n.profileDetailsFailedMessage,l=n.loadSpinner,u=Object(r.useState)(!1),m=Object(o.a)(u,2),E=m[0],f=m[1];Object(r.useEffect)((function(){t({type:"GET_USER_PROFILE_DETAILS",userId:a})}),[t,a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"user-container"},s.a.createElement(A,null),s.a.createElement("div",{className:"user-profile-container"},s.a.createElement("div",{className:"user-profile-wrapper"},i&&s.a.createElement("div",{className:"api-error-message"},i),s.a.createElement("img",{className:"user-profile-picture",src:c&&c.avatar,alt:"userProfilePicture"}),s.a.createElement("div",{className:"user-details-text"},s.a.createElement("div",null,c&&c.email),s.a.createElement("div",null,c&&c.first_name," ",c&&c.last_name)),s.a.createElement("div",{className:"user-delete-link"},s.a.createElement(p.a,{variant:"outline-danger",onClick:function(){return f(!0)}}," ","Delete")))),E&&s.a.createElement(I,{show:E,onSelectedYes:function(){f(!1),t({type:"ON_DELETE_USER",userId:a})},onHide:function(){return f(!1)},modalMessage:"Are you Sure, you want to Delete user!",modalHeader:"Delete Confirmation"}),s.a.createElement(O,{loadSpinner:l})))}));var w=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(l.d,null,s.a.createElement(l.b,{exact:!0,path:"/",component:b}),s.a.createElement(l.b,{exact:!0,path:"/login",component:b}),s.a.createElement(l.b,{exact:!0,path:"/signup",component:S}),s.a.createElement(l.b,{exact:!0,path:"/userlist",component:x}),s.a.createElement(l.b,{exact:!0,path:"/userdetails/:userid",component:N}),s.a.createElement(l.b,{exact:!0,path:"/userdetails/:userid",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=t(23),y=t(29),T=t(10),k={loginEmail:"",loginPassword:"",loginErrorMessage:"",loginToken:"",signUpEmail:"",signUpPassword:"",signUpToken:"",signUpApiMessage:"",userListData:[],userListApiFailedMessage:"",userProfileDetails:{},profileDetailsFailedMessage:"",loadSpinner:!1};var R=Object(D.c)({userData:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_API_SUCCESS":return Object(T.a)(Object(T.a)({},a),{},{loginToken:t.loginToken});case"LOGIN_API_FAILED":return Object(T.a)(Object(T.a)({},a),{},{loginErrorMessage:t.loginErrorMessage});case"ON_INPUT_FIELD_CHANGE":return Object(T.a)(Object(T.a)({},a),{},(e={},Object(y.a)(e,t.inputFieldName,t.inputValue),Object(y.a)(e,"loginErrorMessage",""),Object(y.a)(e,"signUpApiMessage",""),e));case"SIGN_UP_API_FAILED":return Object(T.a)(Object(T.a)({},a),{},{signUpApiMessage:t.signUpErrorMessage,signUpEmail:"",signUpPassword:""});case"SIGN_UP_API_SUCCESS":return Object(T.a)(Object(T.a)({},a),{},{signUpToken:t.signUpToken,signUpEmail:"",signUpPassword:""});case"USERLIST_API_SUCCESS":return Object(T.a)(Object(T.a)({},a),{},{userListData:t.userListData,userListApiFailedMessage:""});case"USERLIST_API_FAILED":return Object(T.a)(Object(T.a)({},a),{},{userListApiFailedMessage:t.userListApiFailedMessage});case"PROFILE_DETAILS_API_SUCCESS":return Object(T.a)(Object(T.a)({},a),{},{userProfileDetails:t.userProfileDetails,profileDetailsFailedMessage:""});case"PROFILE_DETAILS_API_FAILED":return Object(T.a)(Object(T.a)({},a),{},{profileDetailsFailedMessage:t.profileDetailsFailedMessage});case"USER_LOGOUT":return Object(T.a)(Object(T.a)({},a),{},{loginEmail:"",loginPassword:"",loginErrorMessage:"",loginToken:"",userListData:[],userProfileDetails:{},signUpEmail:"",signUpPassword:"",signUpToken:"",signUpApiMessage:""});case"START_API_LOADER":case"STOP_API_LOADER":return Object(T.a)(Object(T.a)({},a),{},{loadSpinner:t.loadSpinner});default:return a}}}),F=t(62),C=t.n(F),M=t(63),G=t(14),B=t.n(G),H=t(9),W=t(30),V=t.n(W),q=B.a.mark(Z),z=B.a.mark(ee),Y=B.a.mark(ae),J=B.a.mark(te),X=B.a.mark(ne),$=B.a.mark(re),K=B.a.mark(se),Q=(0,t(18).createBrowserHistory)();function Z(){var e,a,t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(H.c)("VALIDATE_USER_LOGIN");case 3:return n.next=5,Object(H.b)(E);case 5:return e=n.sent,a={email:e.loginEmail,password:e.loginPassword},t=void 0,n.prev=8,n.next=11,Object(H.a)({type:"START_API_LOADER",loadSpinner:!0});case 11:return n.next=13,V.a.post("https://reqres.in/api/login",a);case 13:if(!(t=n.sent)||200!==t.status){n.next=17;break}return n.next=17,Object(H.a)({type:"LOGIN_API_SUCCESS",loginToken:t.data});case 17:return n.next=19,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 19:n.next=28;break;case 21:return n.prev=21,n.t0=n.catch(8),console.log("ee",n.t0),n.next=26,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 26:return n.next=28,Object(H.a)({type:"LOGIN_API_FAILED",loginErrorMessage:"User not found, Please create an account"});case 28:n.next=0;break;case 30:case"end":return n.stop()}}),q,null,[[8,21]])}function ee(){var e,a,t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(H.c)("ON_SIGNUP_USER");case 3:return n.next=5,Object(H.b)(E);case 5:return e=n.sent,a={email:e.signUpEmail,password:e.signUpPassword},t=void 0,n.prev=8,n.next=11,Object(H.a)({type:"START_API_LOADER",loadSpinner:!0});case 11:return n.next=13,V.a.post("https://reqres.in/api/register",a);case 13:if(!(t=n.sent)||200!==t.status){n.next=20;break}return n.next=17,Object(H.a)({type:"SIGN_UP_API_SUCCESS",signUpToken:t.data});case 17:return n.next=19,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 19:Q.goBack();case 20:n.next=28;break;case 22:return n.prev=22,n.t0=n.catch(8),n.next=26,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 26:return n.next=28,Object(H.a)({type:"SIGN_UP_API_FAILED",signUpErrorMessage:n.t0&&JSON.parse(n.t0.request.response).error});case 28:n.next=0;break;case 30:case"end":return n.stop()}}),z,null,[[8,22]])}function ae(e){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=13;break}return t.prev=1,t.next=4,V.a.get("https://reqres.in/api/users?page= ".concat(e.pageId));case 4:return a=t.sent,t.next=7,Object(H.a)({type:"USERLIST_API_SUCCESS",userListData:a.data.data});case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(H.a)({type:"USERLIST_API_FAILED",userListApiFailedMessage:"We are unable to fetch data"});case 13:case"end":return t.stop()}}),Y,null,[[1,9]])}function te(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)("GET_USER_LISTS",ae);case 2:case"end":return e.stop()}}),J)}function ne(e){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=20;break}return t.prev=1,t.next=4,Object(H.a)({type:"START_API_LOADER",loadSpinner:!0});case 4:return t.next=6,V.a.get("https://reqres.in/api/users/ ".concat(e.userId));case 6:if(!(a=t.sent)||200!==a.status){t.next=12;break}return t.next=10,Object(H.a)({type:"PROFILE_DETAILS_API_SUCCESS",userProfileDetails:a.data.data});case 10:return t.next=12,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(1),t.next=18,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 18:return t.next=20,Object(H.a)({type:"PROFILE_DETAILS_API_FAILED",profileDetailsFailedMessage:"We are unable to fetch data"});case 20:case"end":return t.stop()}}),X,null,[[1,14]])}function re(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)("GET_USER_PROFILE_DETAILS",ne);case 2:case"end":return e.stop()}}),$)}function se(){var e,a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(H.c)("ON_DELETE_USER");case 3:return e=t.sent,a=e.userId,void 0,t.prev=6,t.next=9,Object(H.a)({type:"START_API_LOADER",loadSpinner:!0});case 9:return t.next=11,V.a.delete("https://reqres.in/api/users/ ".concat(a));case 11:if(204!==t.sent.status){t.next=16;break}return t.next=15,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 15:Q.goBack();case 16:t.next=24;break;case 18:return t.prev=18,t.t0=t.catch(6),t.next=22,Object(H.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 22:return t.next=24,Object(H.a)({type:"PROFILE_DETAILS_API_FAILED",profileDetailsFailedMessage:"We are unable delete user"});case 24:t.next=0;break;case 26:case"end":return t.stop()}}),K,null,[[6,18]])}var ce=Object(M.a)();var ie=function(e){var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,t=Object(D.e)(R,e,a(Object(D.a)(ce,C()())));for(var r in n)ce.run(n[r]);return t}();i.a.render(s.a.createElement(d.a,{store:ie},s.a.createElement(s.a.StrictMode,null,s.a.createElement(m.a,null,s.a.createElement(w,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,a,t){},60:function(e,a,t){e.exports=t.p+"static/media/left-arrow.46b3d88f.svg"},61:function(e,a,t){e.exports=t.p+"static/media/right-arrow.1dc1d55f.svg"},64:function(e,a,t){e.exports=t(100)},69:function(e,a,t){},71:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.b940a5d0.chunk.js.map