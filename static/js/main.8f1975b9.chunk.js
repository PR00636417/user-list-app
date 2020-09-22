(this["webpackJsonpuser-list-app"]=this["webpackJsonpuser-list-app"]||[]).push([[0],{24:function(e,a,t){},62:function(e,a,t){e.exports=t(98)},67:function(e,a,t){},69:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"validateUser",(function(){return X})),t.d(n,"userRegistration",(function(){return $})),t.d(n,"getUsers",(function(){return K})),t.d(n,"takeEveryGetUsers",(function(){return Q})),t.d(n,"getProfileDetails",(function(){return Z})),t.d(n,"takeEveryGetProfileDetails",(function(){return ee})),t.d(n,"deleteUser",(function(){return ae}));var r=t(0),s=t.n(r),c=t(22),i=t.n(c),l=(t(67),t(68),t(11)),o=(t(24),t(17)),u=(t(69),t(103)),m=t(104),p=t(15),E=t(12),d=function(e){return e.userData};function f(e,a){return{type:"ON_INPUT_FIELD_CHANGE",inputFieldName:e,inputValue:a}}var g=t(100),O=function(e){return!0===e.loadSpinner&&s.a.createElement(m.a,{variant:"primary",disabled:!0,style:{marginTop:"20px"}},s.a.createElement(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading...")},b=function(){var e=Object(E.b)(),a=Object(r.useState)(!1),t=Object(o.a)(a,2),n=t[0],c=t[1],i=Object(r.useState)(!1),d=Object(o.a)(i,2),g=d[0],b=d[1],S=Object(E.c)((function(e){return e.userData})),v=S.loginEmail,_=S.loginPassword,I=S.loginErrorMessage,A=S.loginToken,P=S.loadSpinner;Object(r.useEffect)((function(){e({type:"USER_LOGOUT"})}),[e]);var j=function(a,t){e(f(a,t))};return s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"container-wrapper"},s.a.createElement("h2",null," React Login"),I&&s.a.createElement("div",{className:"api-error-message"}," ",I),s.a.createElement("div",{className:"login-forms"},s.a.createElement(u.a,{noValidate:!0},s.a.createElement(u.a.Group,{controlId:"formBasicEmail"},s.a.createElement(u.a.Control,{className:"formInput",type:"email",placeholder:"USER NAME",value:v,onChange:function(e){return j("loginEmail",e.target.value)},isInvalid:n&&""===v}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter username"))),s.a.createElement(u.a,{noValidate:!0},s.a.createElement(u.a.Group,{controlId:"formBasicPassword"},s.a.createElement(u.a.Control,{className:"formInput",type:"password",placeholder:"PASSWORD",value:_,onChange:function(e){return j("loginPassword",e.target.value)},isInvalid:g&&""===_}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter password")))),s.a.createElement(m.a,{type:"submit",className:"btn btn-success",onClick:function(){v&&_?e({type:"VALIDATE_USER_LOGIN"}):""===v?c(!0):""===_&&b(!0)}},s.a.createElement("i",{className:"fas fa-sign-in-alt font-icons"}," "),"Sign in"),s.a.createElement("div",{className:"form-footer"},s.a.createElement(p.b,{to:"/signup"},s.a.createElement("i",{className:"fas fa-user-plus font-icons"}),"Signup New Account?")),A&&s.a.createElement(l.a,{to:"/userlist"}),s.a.createElement(O,{loadSpinner:P})))},S=function(){var e=Object(E.b)(),a=Object(r.useState)(!1),t=Object(o.a)(a,2),n=t[0],c=t[1],i=Object(r.useState)(!1),l=Object(o.a)(i,2),d=l[0],g=l[1],b=Object(E.c)((function(e){return e.userData})),S=b.signUpEmail,v=b.signUpPassword,_=b.signUpApiMessage,I=b.loadSpinner;Object(r.useEffect)((function(){e({type:"USER_LOGOUT"})}),[e]);var A=function(a,t){e(f(a,t))};return s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"container-wrapper"},s.a.createElement("h2",null," React Signup"),_&&s.a.createElement("div",{className:"api-error-message"},_.slice(6)),s.a.createElement("div",{className:"login-forms"},s.a.createElement(u.a,{noValidate:!0},s.a.createElement(u.a.Group,{controlId:"formBasicEmail"},s.a.createElement(u.a.Control,{className:"formInput",type:"email",placeholder:"USER NAME",value:S,onChange:function(e){return A("signUpEmail",e.target.value)},isInvalid:n&&""===S}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter username"))),s.a.createElement(u.a,null,s.a.createElement(u.a.Group,{controlId:"formBasicPassword"},s.a.createElement(u.a.Control,{className:"formInput",type:"password",placeholder:"PASSWORD",value:v,onChange:function(e){return A("signUpPassword",e.target.value)},isInvalid:d&&""===v}),s.a.createElement(u.a.Control.Feedback,{className:"form-validation-invalid",type:"invalid"},"Please enter password")))),s.a.createElement(m.a,{variant:"primary",type:"submit",onClick:function(){S&&v?(c(!1),g(!1),e(function(e,a){return{type:"ON_SIGNUP_USER",signUpEmail:e,signUpPassword:a}}(S,v))):""===S?c(!0):""===v&&g(!0)}},s.a.createElement("i",{className:"fas fa-user-plus font-icons"}),"SIGN UP"),s.a.createElement("div",null,s.a.createElement(O,{loadSpinner:I}))),s.a.createElement("div",{className:"float-style"},s.a.createElement("i",{className:"far fa-arrow-alt-circle-left font-icons"}),s.a.createElement(p.b,{to:"/"},"Back to Login")))},v=t(101),_=t(102),I=function(e){return s.a.createElement(_.a,{show:e.show,onHide:e.onHide,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},s.a.createElement(_.a.Header,{closeButton:!0},s.a.createElement(_.a.Title,null,e.modalHeader)),s.a.createElement(_.a.Body,null,e.modalMessage),s.a.createElement(_.a.Footer,null,s.a.createElement(m.a,{variant:"secondary",onClick:function(){return e.onSelectedYes()}},"Yes"),s.a.createElement(m.a,{variant:"primary",onClick:function(){return e.onHide()}},"No")))},A=function(e){var a=Object(E.b)(),t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],u=Object(r.useState)(!1),m=Object(o.a)(u,2),p=m[0],d=m[1],f=Object(E.c)((function(e){return e.userData})).loginEmail;return s.a.createElement("div",{className:"user-header"},s.a.createElement("div",{style:{paddingTop:"20px"}},s.a.createElement("span",{style:{float:"left"},className:"circle"},"SG"),s.a.createElement("span",{className:"header-text"},"Welcome ",f),s.a.createElement("span",{className:"header-logout-text"},s.a.createElement("div",{onClick:function(){return i(!0)},className:"header-logout",style:{float:"right",cursor:"pointer",fontWeight:"Bold"}},"Logout"))),c&&s.a.createElement(I,{show:c,onSelectedYes:function(){return a({type:"USER_LOGOUT"}),void d(!0)},onHide:function(){return i(!1)},modalMessage:"Are you Sure, you want to Logout!",modalHeader:"Logout Confirmation"}),p&&s.a.createElement(l.a,{to:"/"}))},P=function(e){return function(a){var t=Object(E.c)((function(e){return e.userData})).loginToken;return s.a.createElement(s.a.Fragment,null,""===t?s.a.createElement(l.a,{to:"/"}):s.a.createElement(e,null))}},j=P((function(){var e=Object(E.b)(),a=Object(r.useState)(1),t=Object(o.a)(a,2),n=t[0],c=t[1];Object(r.useEffect)((function(){e({type:"GET_USER_LISTS",pageId:n})}),[e,n]);var i=Object(E.c)((function(e){return e.userData})),l=i.userListData,u=i.userListApiFailedMessage,d="md";return window.innerWidth<1e3&&(d="sm"),s.a.createElement("div",{className:"user-container"},s.a.createElement(A,null),s.a.createElement("div",{style:{marginTop:"12px"}},s.a.createElement("h4",null," LIST OF USERS")),s.a.createElement("div",null,s.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"20px"},size:d},s.a.createElement("thead",null,s.a.createElement("tr",{className:"table-main-heading"},s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"First Name"),s.a.createElement("th",null,"Last Name"))),s.a.createElement("tbody",null,l.length>0&&l.map((function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",{className:"table-email"},s.a.createElement(p.b,{to:"/userdetails/".concat(e.id)},e.email)),s.a.createElement("td",null,e.first_name),s.a.createElement("td",null,e.last_name))}))))),s.a.createElement("div",{className:"list-arrows",style:{float:"right"}},s.a.createElement(m.a,{size:"sm",variant:"outline-info",disabled:1===n,onClick:function(){2===n&&c(n-1)}},s.a.createElement("i",{className:"fa fa-arrow-circle-left pagination-arrows"})),s.a.createElement("span",{className:"px-2"},n),s.a.createElement(m.a,{size:"sm",variant:"outline-info",disabled:2===n,onClick:function(){1===n&&c(n+1)}},s.a.createElement("i",{className:"fa fa-arrow-circle-right pagination-arrows"}))),u&&s.a.createElement("div",{className:"api-error-message"},u))})),L=P((function(e){var a=window.location.hash.slice(14),t=Object(E.b)(),n=Object(E.c)((function(e){return e.userData})),c=n.userProfileDetails,i=n.profileDetailsFailedMessage,l=n.loadSpinner,u=Object(r.useState)(!1),d=Object(o.a)(u,2),f=d[0],g=d[1];Object(r.useEffect)((function(){t({type:"GET_USER_PROFILE_DETAILS",userId:a})}),[t,a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"user-container"},s.a.createElement(A,null),s.a.createElement("div",{className:"user-profile-container"},s.a.createElement("div",{className:"user-profile-wrapper"},i&&s.a.createElement("div",{className:"api-error-message"},i),s.a.createElement("img",{className:"user-profile-picture",src:c&&c.avatar,alt:"userProfilePicture"}),s.a.createElement("div",{className:"user-details-text"},s.a.createElement("div",null,c&&c.email),s.a.createElement("div",null,c&&c.first_name," ",c&&c.last_name)),s.a.createElement("div",{className:"user-delete-link"},s.a.createElement(m.a,{variant:"outline-danger",onClick:function(){return g(!0)}}," ","Delete")),s.a.createElement("div",null,s.a.createElement("i",{className:"far fa-arrow-alt-circle-left font-icons"}),s.a.createElement(p.b,{to:"/userlist"},"Back to UserList")),s.a.createElement(O,{loadSpinner:l}))),f&&s.a.createElement(I,{show:f,onSelectedYes:function(){g(!1),t({type:"ON_DELETE_USER",userId:a})},onHide:function(){return g(!1)},modalMessage:"Are you Sure, you want to Delete user!",modalHeader:"Delete Confirmation"})))}));var N=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(l.d,null,s.a.createElement(l.b,{exact:!0,path:"/",component:b}),s.a.createElement(l.b,{exact:!0,path:"/login",component:b}),s.a.createElement(l.b,{exact:!0,path:"/signup",component:S}),s.a.createElement(l.b,{exact:!0,path:"/userlist",component:j}),s.a.createElement(l.b,{exact:!0,path:"/userdetails/:userid",component:L}),s.a.createElement(l.b,{exact:!0,path:"/userdetails/:userid",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=t(23),h=t(29),D=t(10),w={loginEmail:"",loginPassword:"",loginErrorMessage:"",loginToken:"",signUpEmail:"",signUpPassword:"",signUpToken:"",signUpApiMessage:"",userListData:[],userListApiFailedMessage:"",userProfileDetails:{},profileDetailsFailedMessage:"",loadSpinner:!1};var x=Object(U.c)({userData:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_API_SUCCESS":return Object(D.a)(Object(D.a)({},a),{},{loginToken:t.loginToken});case"LOGIN_API_FAILED":return Object(D.a)(Object(D.a)({},a),{},{loginErrorMessage:t.loginErrorMessage});case"ON_INPUT_FIELD_CHANGE":return Object(D.a)(Object(D.a)({},a),{},(e={},Object(h.a)(e,t.inputFieldName,t.inputValue),Object(h.a)(e,"loginErrorMessage",""),Object(h.a)(e,"signUpApiMessage",""),e));case"SIGN_UP_API_FAILED":return Object(D.a)(Object(D.a)({},a),{},{signUpApiMessage:t.signUpErrorMessage,signUpEmail:"",signUpPassword:""});case"SIGN_UP_API_SUCCESS":return Object(D.a)(Object(D.a)({},a),{},{signUpToken:t.signUpToken,signUpEmail:"",signUpPassword:""});case"USERLIST_API_SUCCESS":return Object(D.a)(Object(D.a)({},a),{},{userListData:t.userListData,userListApiFailedMessage:""});case"USERLIST_API_FAILED":return Object(D.a)(Object(D.a)({},a),{},{userListApiFailedMessage:t.userListApiFailedMessage});case"PROFILE_DETAILS_API_SUCCESS":return Object(D.a)(Object(D.a)({},a),{},{userProfileDetails:t.userProfileDetails,profileDetailsFailedMessage:""});case"PROFILE_DETAILS_API_FAILED":return Object(D.a)(Object(D.a)({},a),{},{profileDetailsFailedMessage:t.profileDetailsFailedMessage});case"USER_LOGOUT":return Object(D.a)(Object(D.a)({},a),{},{loginEmail:"",loginPassword:"",loginErrorMessage:"",loginToken:"",userListData:[],userProfileDetails:{},signUpEmail:"",signUpPassword:"",signUpToken:"",signUpApiMessage:""});case"START_API_LOADER":case"STOP_API_LOADER":return Object(D.a)(Object(D.a)({},a),{},{loadSpinner:t.loadSpinner});default:return a}}}),y=t(60),T=t.n(y),k=t(61),R=t(14),F=t.n(R),C=t(9),M=t(30),G=t.n(M),B=F.a.mark(X),H=F.a.mark($),W=F.a.mark(K),V=F.a.mark(Q),q=F.a.mark(Z),z=F.a.mark(ee),Y=F.a.mark(ae),J=(0,t(19).createBrowserHistory)();function X(){var e,a,t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(C.c)("VALIDATE_USER_LOGIN");case 3:return n.next=5,Object(C.b)(d);case 5:return e=n.sent,a={email:e.loginEmail,password:e.loginPassword},t=void 0,n.prev=8,n.next=11,Object(C.a)({type:"START_API_LOADER",loadSpinner:!0});case 11:return n.next=13,G.a.post("https://reqres.in/api/login",a);case 13:if(!(t=n.sent)||200!==t.status){n.next=17;break}return n.next=17,Object(C.a)({type:"LOGIN_API_SUCCESS",loginToken:t.data});case 17:return n.next=19,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 19:n.next=28;break;case 21:return n.prev=21,n.t0=n.catch(8),console.log("ee",n.t0),n.next=26,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 26:return n.next=28,Object(C.a)({type:"LOGIN_API_FAILED",loginErrorMessage:"User not found, Please create an account"});case 28:n.next=0;break;case 30:case"end":return n.stop()}}),B,null,[[8,21]])}function $(){var e,a,t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(C.c)("ON_SIGNUP_USER");case 3:return n.next=5,Object(C.b)(d);case 5:return e=n.sent,a={email:e.signUpEmail,password:e.signUpPassword},t=void 0,n.prev=8,n.next=11,Object(C.a)({type:"START_API_LOADER",loadSpinner:!0});case 11:return n.next=13,G.a.post("https://reqres.in/api/register",a);case 13:if(!(t=n.sent)||200!==t.status){n.next=20;break}return n.next=17,Object(C.a)({type:"SIGN_UP_API_SUCCESS",signUpToken:t.data});case 17:return n.next=19,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 19:J.goBack();case 20:n.next=28;break;case 22:return n.prev=22,n.t0=n.catch(8),n.next=26,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 26:return n.next=28,Object(C.a)({type:"SIGN_UP_API_FAILED",signUpErrorMessage:n.t0&&JSON.parse(n.t0.request.response).error});case 28:n.next=0;break;case 30:case"end":return n.stop()}}),H,null,[[8,22]])}function K(e){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=13;break}return t.prev=1,t.next=4,G.a.get("https://reqres.in/api/users?page= ".concat(e.pageId));case 4:return a=t.sent,t.next=7,Object(C.a)({type:"USERLIST_API_SUCCESS",userListData:a.data.data});case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(C.a)({type:"USERLIST_API_FAILED",userListApiFailedMessage:"We are unable to fetch data"});case 13:case"end":return t.stop()}}),W,null,[[1,9]])}function Q(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("GET_USER_LISTS",K);case 2:case"end":return e.stop()}}),V)}function Z(e){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=20;break}return t.prev=1,t.next=4,Object(C.a)({type:"START_API_LOADER",loadSpinner:!0});case 4:return t.next=6,G.a.get("https://reqres.in/api/users/ ".concat(e.userId));case 6:if(!(a=t.sent)||200!==a.status){t.next=12;break}return t.next=10,Object(C.a)({type:"PROFILE_DETAILS_API_SUCCESS",userProfileDetails:a.data.data});case 10:return t.next=12,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(1),t.next=18,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 18:return t.next=20,Object(C.a)({type:"PROFILE_DETAILS_API_FAILED",profileDetailsFailedMessage:"We are unable to fetch data"});case 20:case"end":return t.stop()}}),q,null,[[1,14]])}function ee(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("GET_USER_PROFILE_DETAILS",Z);case 2:case"end":return e.stop()}}),z)}function ae(){var e,a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(C.c)("ON_DELETE_USER");case 3:return e=t.sent,a=e.userId,void 0,t.prev=6,t.next=9,Object(C.a)({type:"START_API_LOADER",loadSpinner:!0});case 9:return t.next=11,G.a.delete("https://reqres.in/api/users/ ".concat(a));case 11:if(204!==t.sent.status){t.next=16;break}return t.next=15,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 15:J.goBack();case 16:t.next=24;break;case 18:return t.prev=18,t.t0=t.catch(6),t.next=22,Object(C.a)({type:"STOP_API_LOADER",loadSpinner:!1});case 22:return t.next=24,Object(C.a)({type:"PROFILE_DETAILS_API_FAILED",profileDetailsFailedMessage:"We are unable delete user"});case 24:t.next=0;break;case 26:case"end":return t.stop()}}),Y,null,[[6,18]])}var te=Object(k.a)();var ne=function(e){var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,t=Object(U.e)(x,e,a(Object(U.a)(te,T()())));for(var r in n)te.run(n[r]);return t}();i.a.render(s.a.createElement(E.a,{store:ne},s.a.createElement(s.a.StrictMode,null,s.a.createElement(p.a,null,s.a.createElement(N,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.8f1975b9.chunk.js.map