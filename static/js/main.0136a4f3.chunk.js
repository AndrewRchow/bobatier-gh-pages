(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports={inline:"home_inline__2N11S",reviewInput:"home_reviewInput__2GU5t",submitButton:"home_submitButton__1Q8wR",starRating:"home_starRating__2GnSX",updateButton:"home_updateButton__347Xb",well:"home_well__3JzcO",noReviewsWell:"home_noReviewsWell__XzNf5",left:"home_left__3iYri",right:"home_right__24rGw"}},22:function(e,t,a){e.exports={recentReviews:"review_recentReviews__1whre",reviewWell:"review_reviewWell__1XSYv",commentsWell:"review_commentsWell__3JJ5X",commentWell:"review_commentWell__1KIRi",review:"review_review__2tpGn",addCommentButton:"review_addCommentButton__1s_bB",recentComment:"review_recentComment__3dTkR"}},246:function(e,t,a){e.exports={main:"app_main__PJPih"}},254:function(e,t,a){e.exports=a(559)},259:function(e,t,a){},345:function(e,t,a){},363:function(e,t,a){},370:function(e,t,a){},55:function(e,t,a){e.exports={active:"navigation_active__1i1Bg",navbar:"navigation_navbar__3FGvI",icon:"navigation_icon__WxY_p",responsive:"navigation_responsive__53SLq",responsiveSignout:"navigation_responsiveSignout__25m3o"}},559:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),o=a.n(s);a(259),a(261),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(563),i=a(562),l=a(246),u=a.n(l),m=a(54),p=a(4),b=a(5),h=a(7),f=a(6),v=a(8),d=a(55),g=a.n(d),E=a(561),S=r.a.createContext(null),w=function(e){return function(t){return r.a.createElement(S.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},O=S,C=a(107),y=a.n(C),j=(a(336),a(338),{apiKey:"AIzaSyDNo2aFc8Sb9piAtQkBgHLDwjVEYWe-2Ao",authDomain:"bobatier.firebaseapp.com",databaseURL:"https://bobatier.firebaseio.com",projectId:"bobatier",storageBucket:"bobatier.appspot.com",messagingSenderId:"435363068882"}),R=function e(){var t=this;Object(p.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.bobaShopUserReview=function(e,a){return t.db.ref("bobaShopUserReviews/".concat(e,"/").concat(a))},this.bobaShopUserComment=function(e,a){return t.db.ref("bobaShopUserReviews/".concat(e,"/").concat(a,"/comments"))},this.userReview=function(e,a){return t.db.ref("users/".concat(e,"/reviews/").concat(a))},this.bobaShop=function(e){return t.db.ref("bobaShops/".concat(e))},this.bobaShopReviews=function(){return t.db.ref("bobaShopUserReviews")},this.bobaShopUserReviews=function(e){return t.db.ref("bobaShopUserReviews/".concat(e))},this.userReviews=function(e){return t.db.ref("users/".concat(e,"/reviews"))},this.users=function(){return t.db.ref("users")},this.bobaShops=function(){return t.db.ref("bobaShops")},y.a.initializeApp(j),this.auth=y.a.auth(),this.db=y.a.database()},k={color:"white",border:"1px solid white",marginTop:"2px",marginRight:"10px",float:"right"},_=w(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",style:k,className:"btn btn-default",onClick:t.doSignOut},"Sign Out")}),N="/home",x=r.a.createContext(null),I=function(e){var t=function(t){function a(e){var t;return Object(p.a)(this,a),(t=Object(h.a)(this,Object(f.a)(a).call(this,e))).state={authUser:null,role:null,username:null},t}return Object(v.a)(a,t),Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?(e.setState({authUser:t}),e.props.firebase.user(t.uid).on("value",function(t){e.setState({role:t.val().role,username:t.val().username})})):(e.setState({authUser:null}),e.setState({role:null}))})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(x.Provider,{value:this.state},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return w(t)},D=a(564),U=a(52),W=function(e){return function(t){var a=function(a){function n(){return Object(p.a)(this,n),Object(h.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(v.a)(n,a),Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/bobatier-gh-pages/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(x.Consumer,null,function(n){return e(n.authUser)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(U.a)(D.a,w)(a)}},A=a(71),F=a(53),M=[["Tier List","/bobatier-gh-pages/"],["Recent Reviews","/bobatier-gh-pages/reviews"],["My Reviews","/bobatier-gh-pages"+N],["Account","/bobatier-gh-pages/account"],["Admin","/bobatier-gh-pages/admin"]],T=[["Tier List","/bobatier-gh-pages/"],["Recent Reviews","/bobatier-gh-pages/reviews"],["My Reviews","/bobatier-gh-pages"+N],["Account","/bobatier-gh-pages/account"]],B=[["Tier List","/bobatier-gh-pages/"],["Recent Reviews","/bobatier-gh-pages/reviews"],["Sign In","/bobatier-gh-pages/signin"]],P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).barsClick=function(){a.setState({barsOpen:!a.state.barsOpen})},a.state={active:"",barsOpen:!1},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.state.barsOpen,a=null;return this.props.signedIn&&(a=r.a.createElement(_,null)),r.a.createElement("div",{className:"".concat(t?g.a.responsive:""," ").concat(g.a.navbar)},this.props.menuItems.map(function(t){var a=Object(m.a)(t,2),n=a[0],s=a[1];return r.a.createElement(E.a,{key:n,to:s,onClick:e.barsClick,className:window.location.pathname===s?g.a.active:""},n)}),r.a.createElement("div",{className:"".concat(t?g.a.responsiveSignout:""),onClick:this.barsClick},a),r.a.createElement("a",{className:"".concat(g.a.icon),onClick:this.barsClick},r.a.createElement(A.a,{icon:F.a,size:"lg"})))}}]),t}(r.a.Component),L=function(){return r.a.createElement("div",null,r.a.createElement(x.Consumer,null,function(e){return"admin"===e.role?r.a.createElement(P,{menuItems:M,signedIn:!0}):e.authUser?r.a.createElement(P,{menuItems:T,signedIn:!0}):r.a.createElement(P,{menuItems:B,signedIn:!1})}))},H=(a(345),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={reviews:{},grades:{},tierList:{S:[],A:[],B:[],C:[],D:[]}},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getAllReviewList()}},{key:"getAllReviewList",value:function(){var e=this;this.props.firebase.bobaShopReviews().on("value",function(t){var a=t.val();a&&e.setState({reviews:a},function(){e.gradeReviews()})})}},{key:"gradeReviews",value:function(){var e=0,t=0,a=0,n=0,r=0,s=0,o=0,c=0,i=0,l=0,u=0,m={};for(var p in this.state.reviews){for(var b in this.state.reviews[p]){var h=this.state.reviews[p][b];a+=h.score1,n+=h.score2,r+=h.score3,s+=h.score4,o+=h.score5,c+=h.score6,i+=h.score7,l+=h.score8,e++,u++}t=(parseFloat(a)+parseFloat(n)+parseFloat(r)+parseFloat(s)+parseFloat(o)+parseFloat(c)+parseFloat(i)+parseFloat(l))/(8*e),m[p]={shopName:p,finalScore:t,reviewCount:u},e=a=n=r=s=o=c=i=l=u=0}var f={};Object.keys(m).sort().forEach(function(e){f[e]=m[e]}),this.setState({grades:f}),console.log(m);var v={SS:[],S:[],A:[],B:[],C:[],D:[],E:[]};for(var d in m){var g=m[d].finalScore,E=m[d].shopName;g>=5?v.SS.push(E):4.75<=g&&g<5?v.S.push(E):4.25<=g&&g<4.75?v.A.push(E):3.5<=g&&g<4.25?v.B.push(E):2.75<=g&&g<3.5?v.C.push(E):2<=g&&g<2.75?v.D.push(E):g<2&&v.E.push(E)}this.setState({tierList:v}),console.log(v),console.log(m)}},{key:"componentWillUnmount",value:function(){this.props.firebase.bobaShopReviews().off()}},{key:"render",value:function(){var e=this.state.grades,t=this.state.tierList,a={display:"inline"},n={padding:"3px"},s={color:"black",border:"1px solid #ccc"};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h5",null,"Tier List"),r.a.createElement("ul",null,Object.entries(t).map(function(e){var t=Object(m.a)(e,2),o=t[0],c=t[1];return r.a.createElement("li",{key:o,style:n},r.a.createElement("button",{className:"btn btn-default",style:s},o)," \xa0 \xa0",c.map(function(e,t){return r.a.createElement("div",{key:t,style:a},e,", "," ")}))})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h5",null,"Scores"),r.a.createElement("ul",null,Object.keys(e).map(function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("span",null,e[t].shopName," - "," ",r.a.createElement(A.a,{icon:F.b,size:"sm"}),Math.round(100*e[t].finalScore)/100," - "," ",r.a.createElement(A.a,{icon:F.c,size:"sm"}),e[t].reviewCount))})))))}}]),t}(r.a.Component)),V=w(H),q=a(17),z=a(9),J=a(104),G=a.n(J),X=a(56),Y=a.n(X),K={margin:"10px"},Q={username:"",email:"",passwordOne:"",error:null},$=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,s=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(r,s).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r})}).then(function(){a.setState(Object(z.a)({},Q)),a.props.history.push("/bobatier-gh-pages"+N)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.state=Object(z.a)({},Q),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,s=e.error,o=""===n||""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Name",className:Y.a.inputStyle}),r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",className:Y.a.inputStyle}),r.a.createElement(G.a,{name:"passwordOne",placeholder:"Password",value:n,onChange:this.onChange,buttonClassName:Y.a.maskButton,inputClassName:Y.a.inputStyle}),r.a.createElement("button",{disabled:o,className:"btn btn-primary",type:"submit"},"Sign Up"),s&&r.a.createElement("p",{className:Y.a.error}," ",s.message," "))}}]),t}(n.Component),Z=function(){return r.a.createElement("p",null,"Don 't have an account? ",r.a.createElement(E.a,{to:"/bobatier-gh-pages/signup"},"Sign Up"))},ee=Object(D.a)(w($)),te=function(){return r.a.createElement("div",{style:K},r.a.createElement("h5",null," Sign Up "),r.a.createElement(ee,null))},ae=a(72),ne=a.n(ae),re={email:"",error:null},se=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(z.a)({},re))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.state=Object(z.a)({},re),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),oe=function(){return r.a.createElement("p",null,r.a.createElement(E.a,{to:"/bobatier-gh-pages/pw-forget"},"Forgot Password?"))},ce=function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"PasswordForget"),r.a.createElement(ie,null))},ie=w(se),le={margin:"20px"},ue={email:"",password:"",error:null},me=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(z.a)({},ue)),a.props.history.push("/bobatier-gh-pages"+N)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.state=Object(z.a)({},ue),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,s=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address",className:ne.a.inputStyle}),r.a.createElement(G.a,{name:"password",placeholder:"Password",value:a,onChange:this.onChange,buttonClassName:ne.a.maskButton,inputClassName:ne.a.inputStyle}),r.a.createElement("button",{className:"btn btn-primary",style:{marginTop:"8px"},disabled:s,type:"submit"},"Sign In"),n&&r.a.createElement("p",{className:ne.a.error},n.message))}}]),t}(n.Component),pe=Object(U.a)(D.a,w)(me),be=function(){return r.a.createElement("div",{style:le},r.a.createElement("h5",null,"Sign In"),r.a.createElement(pe,null),r.a.createElement(oe,null),r.a.createElement(Z,null))},he=a(20),fe=a(18),ve=a.n(fe),de=a(10),ge=a.n(de),Ee=a(251),Se=a.n(Ee),we=(a(363),[]),Oe=function(e){var t=e.trim().toLowerCase(),a=t.length;return 0===a?[]:we.filter(function(e){return e.name.toLowerCase().slice(0,a)===t})},Ce=function(e){return e.name},ye=function(e){return r.a.createElement("div",null,e.name)},je=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onChange=function(e,t){var n=t.newValue;a.setState({value:n}),console.log("New input value:",n),a.props.getInputData(n)},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:Oe(t)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.state={value:a.props.bobaShop,suggestions:[]},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.firebase.bobaShops().on("value",function(e){var t=e.val();if(t){var a=Object.keys(t).map(function(e){return{name:e}});we=a}})}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.bobaShop})}},{key:"componentWillUnmount",value:function(){this.props.firebase.bobaShops().off()}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:"Enter shop name",value:t,onChange:this.onChange};return r.a.createElement(Se.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:Ce,renderSuggestion:ye,inputProps:n})}}]),t}(r.a.Component),Re=w(je),ke=a(168),_e=(a(365),{bobaShop:"",score1:1,score2:1,score3:1,score4:1,score5:1,score6:1,score7:1,score8:1,error:null}),Ne=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={formValues:_e},a.editFormValues=a.editFormValues.bind(Object(he.a)(Object(he.a)(a))),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"editFormValues",value:function(e){e.score1=parseInt(e.score1),e.score2=parseInt(e.score2),e.score3=parseInt(e.score3),e.score4=parseInt(e.score4),e.score5=parseInt(e.score5),e.score6=parseInt(e.score6),e.score7=parseInt(e.score7),e.score8=parseInt(e.score8),this.setState({formValues:e}),window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:ve.a.Content},r.a.createElement("div",{className:'row" '.concat(ve.a.Wrapper)},r.a.createElement("div",{className:'col-sm-6" '.concat(ve.a.left," ").concat(ve.a.well)},r.a.createElement(Ue,{formValues:this.state.formValues})),r.a.createElement("div",{className:'col-sm-6" '.concat(ve.a.right)},r.a.createElement(We,{editReview:this.editFormValues}))))}}]),t}(r.a.Component),xe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=t.bobaShop,r=t.score1,s=t.score2,o=t.score3,c=t.score4,i=t.score5,l=t.score6,u=t.score7,m=t.score8,p=(new Date).toLocaleString(),b=a.context.authUser.uid,h=a.context.username;a.props.firebase.bobaShopUserReview(n,b).update({username:h,score1:r,score2:s,score3:o,score4:c,score5:i,score6:l,score7:u,score8:m,dateTime:p,comment:""}).catch(function(e){a.setState({error:e})}),a.props.firebase.userReview(b,n).update({username:h,score1:r,score2:s,score3:o,score4:c,score5:i,score6:l,score7:u,score8:m,dateTime:p}).catch(function(e){a.setState({error:e})}),a.props.firebase.bobaShop(n).update({bobaShop:n}).then(function(){a.setState(Object(z.a)({},_e)),a.notify()}).catch(function(e){a.setState({error:e})})},a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.onChangeScore=function(e,t){a.setState(Object(q.a)({},t,e))},a.notify=function(){return Object(ke.b)("Review added")},a.state=e.formValues,a.getAutosuggestInput=a.getAutosuggestInput.bind(Object(he.a)(Object(he.a)(a))),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(e.formValues)}},{key:"getAutosuggestInput",value:function(e){this.setState({bobaShop:e})}},{key:"render",value:function(){var e=this.state,t=e.bobaShop,a=e.score1,n=e.score2,s=e.score3,o=e.score4,c=e.score5,i=e.score6,l=e.score7,u=e.score8,p=e.error,b=[a,n,s,o,c,i,l,u],h=["Score 1","Score 2","Score 3","Score 4","Score 5","Score 6","Score 7","Score 8"],f=[],v=!0,d=!1,g=void 0;try{for(var E,S=b.entries()[Symbol.iterator]();!(v=(E=S.next()).done);v=!0){var w=E.value,O=Object(m.a)(w,2),C=O[0],y=O[1];f.push(r.a.createElement("div",{key:C},r.a.createElement("h5",null,h[C]),r.a.createElement("div",{className:ve.a.starRating},r.a.createElement(ge.a,{rating:y,starRatedColor:"#0099ff",starHoverColor:"#66ccff",changeRating:this.onChangeScore,numberOfStars:5,name:"score"+(C+1),starDimension:"20px"}))))}}catch(R){d=!0,g=R}finally{try{v||null==S.return||S.return()}finally{if(d)throw g}}var j=""===t||""===a||""===n||""===s||""===o||""===c||""===i||""===l||""===u;return r.a.createElement("div",null,r.a.createElement(ke.a,null),r.a.createElement("form",{onSubmit:this.onSubmit,className:ve.a.submitForm},r.a.createElement("h5",null,"Shop Name"),r.a.createElement(Re,{getInputData:this.getAutosuggestInput,bobaShop:t}),r.a.createElement("div",null,f),r.a.createElement("button",{className:"btn btn-primary ".concat(ve.a.submitButton),disabled:j,type:"submit"},"Submit"),p&&r.a.createElement("p",null,p.message)))}}]),t}(r.a.Component);xe.contextType=x;var Ie=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={myReviews:[]},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getReviewList()}},{key:"deleteReview",value:function(e){window.confirm("Are you sure you want to delete?")&&(this.props.firebase.userReviews(this.context.authUser.uid).child(e).remove(),this.props.firebase.bobaShopUserReviews(e).child(this.context.authUser.uid).remove(),this.props.firebase.bobaShops().child(e).remove())}},{key:"getReviewList",value:function(){var e=this,t=this.context.authUser.uid;this.props.firebase.userReviews(t).on("value",function(t){var a=t.val();if(a){var n=Object.keys(a).map(function(e){return Object(z.a)({bobaShop:e},a[e])});e.setState({myReviews:n})}else e.setState({myReviews:[]})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.userReviews().off()}},{key:"render",value:function(){var e=this,t=this.state.myReviews;return console.log(t),r.a.createElement("div",null,void 0===t||0==t.length?r.a.createElement("div",{className:"".concat(ve.a.noReviewsWell)},"No Reviews Added."):r.a.createElement("ul",null,t.map(function(t){return r.a.createElement("li",{key:t.bobaShop,className:"".concat(ve.a.well)},r.a.createElement("div",null,r.a.createElement("h5",null,t.bobaShop),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 1"),r.a.createElement(ge.a,{rating:t.score1,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 2"),r.a.createElement(ge.a,{rating:t.score2,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 3"),r.a.createElement(ge.a,{rating:t.score3,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 4"),r.a.createElement(ge.a,{rating:t.score4,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 5"),r.a.createElement(ge.a,{rating:t.score5,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 6"),r.a.createElement(ge.a,{rating:t.score6,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 7"),r.a.createElement(ge.a,{rating:t.score7,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 8"),r.a.createElement(ge.a,{rating:t.score8,starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-info ".concat(ve.a.updateButton),onClick:function(){return e.props.editReview(t)}},"Edit"),r.a.createElement("button",{className:"btn btn-danger ".concat(ve.a.updateButton),onClick:function(){return e.deleteReview(t.bobaShop)}},"Delete")))})))}}]),t}(r.a.Component);Ie.contextType=x;var De=function(e){return!!e},Ue=w(W(De)(xe)),We=w(W(De)(Ie)),Ae=Ne,Fe=a(22),Me=a.n(Fe),Te=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={comment:""},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.show)return null;var t=this.props.commentModal.shop,a=this.props.commentModal.uid;return r.a.createElement("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.1)",padding:50}},r.a.createElement("div",{style:{backgroundColor:"white",borderRadius:5,maxWidth:500,minHeight:300,margin:"10% auto",padding:30}},r.a.createElement("div",{style:{marginBottom:"10px"}},this.props.children),r.a.createElement("div",{className:"footer"},r.a.createElement("textarea",{autoFocus:!0,onChange:this.props.changeComment,name:"comment",className:"form-control",rows:"3"}),r.a.createElement("div",{style:{paddingTop:"10px",float:"right"}},r.a.createElement("button",{style:{display:"inline",marginRight:"6px"},className:"btn btn-info",onClick:this.props.onClose},"Cancel"),r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.props.submitComment(t,a)}},"Submit")))))}}]),t}(r.a.Component),Be={weekday:"long",hour:"numeric",minute:"numeric",year:"numeric",month:"short",day:"numeric"},Pe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).toggleModal=function(e,t){var n=Object(z.a)({},a.state.commentModal);n.shop=e,n.uid=t,a.setState({modalIsOpen:!a.state.modalIsOpen,commentModal:n})},a.changeComment=function(e){var t=Object(z.a)({},a.state.commentModal);t.comment=e.target.value,a.setState({commentModal:t})},a.state={reviews:{},sortedReviews:[],sortedReviewsCopy:[],commentModal:{comment:"",shop:"",uid:""},modalIsOpen:!1,currentTime:new Date},a.submitComment=a.submitComment.bind(Object(he.a)(Object(he.a)(a))),a.changeComment=a.changeComment.bind(Object(he.a)(Object(he.a)(a))),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getAllReviewList(),this.interval=setInterval(function(){return e.setState({currentTime:new Date})},1e3)}},{key:"getAllReviewList",value:function(){var e=this;this.props.firebase.bobaShopReviews().on("value",function(t){var a=t.val();a&&e.setState({reviews:a},function(){e.sortReviews()})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.bobaShopReviews().off(),clearInterval(this.interval)}},{key:"sortReviews",value:function(){var e=this,t=[];for(var a in this.state.reviews){var n=function(n){var r=Object(z.a)({},e.state.reviews[a][n],{shop:a,uid:n});r.comments&&(r.comments=Object.keys(r.comments).map(function(e){return Object(z.a)({},r.comments[e],{uid:e})}),r.comments.sort(function(e,t){return new Date(e.dateTime)-new Date(t.dateTime)})),t.push(r)};for(var r in this.state.reviews[a])n(r)}t.sort(function(e,t){return new Date(t.dateTime)-new Date(e.dateTime)}),console.log(t),t=t.splice(0,50),this.setState({sortedReviews:t})}},{key:"submitComment",value:function(e,t){var a=this,n=this.state.commentModal.comment,r=this.context.username,s=new Date;s.setSeconds(s.getSeconds()+1),s=s.toLocaleString(),this.props.firebase.bobaShopUserComment(e,t).push({comment:n,username:r,uid:t,dateTime:s}).then(function(){a.setState({modalIsOpen:!a.state.modalIsOpen,ommentModal:{comment:"",shop:"",uid:""}})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.sortedReviews,n=t.currentTime,s=this.context.username;return console.log(s),r.a.createElement("div",null,r.a.createElement("div",{className:"container ".concat(Me.a.recentReviews)},void 0===a||0==a.length?r.a.createElement("div",{className:"".concat(Me.a.reviewWell)},"No Recent Reviews."):r.a.createElement("ul",null,a.map(function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("div",{className:"".concat(Me.a.review," ").concat(Me.a.reviewWell)},r.a.createElement("h4",null,t.shop," - ",t.username),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 1"),r.a.createElement(ge.a,{rating:parseFloat(t.score1),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score1",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 2"),r.a.createElement(ge.a,{rating:parseFloat(t.score2),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score2",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 3"),r.a.createElement(ge.a,{rating:parseFloat(t.score3),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score3",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 4"),r.a.createElement(ge.a,{rating:parseFloat(t.score4),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score4",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 5"),r.a.createElement(ge.a,{rating:parseFloat(t.score5),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score5",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 6"),r.a.createElement(ge.a,{rating:parseFloat(t.score6),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score6",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 7"),r.a.createElement(ge.a,{rating:parseFloat(t.score7),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score7",starDimension:"12px",starSpacing:"2px",isSelectable:"false"})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("p",null,"Score 8"),r.a.createElement(ge.a,{rating:parseFloat(t.score8),starRatedColor:"#0099ff",starHoverColor:"#66ccff",numberOfStars:5,name:"score8",starDimension:"12px",starSpacing:"2px",isSelectable:"false"}))))),r.a.createElement("div",null,r.a.createElement("i",null," ",new Date(t.dateTime).toLocaleDateString("en-US",Be)))),t.comments?r.a.createElement("div",{className:"".concat(Me.a.commentsWell)},r.a.createElement("div",null,t.comments.map(function(e,t){return r.a.createElement("div",{key:t,className:"".concat(Me.a.commentWell)},r.a.createElement("div",{className:e.dateTime>n.toLocaleString()?Me.a.recentComment:""},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,r.a.createElement("i",null,e.username," - ",new Date(e.dateTime).toLocaleDateString("en-US",Be)))))})),r.a.createElement("div",null,s?r.a.createElement("button",{className:"btn btn-info ".concat(Me.a.addCommentButton),onClick:function(){return e.toggleModal(t.shop,t.uid)}},"Comment"):r.a.createElement("div",null))):s?r.a.createElement("div",{className:"".concat(Me.a.commentsWell)},r.a.createElement("button",{className:"btn btn-info ".concat(Me.a.addCommentButton),onClick:function(){return e.toggleModal(t.shop,t.uid)}},"Comment")):r.a.createElement("div",null))}))),r.a.createElement(Te,{show:this.state.modalIsOpen,onClose:this.toggleModal,commentModal:this.state.commentModal,changeComment:this.changeComment,submitComment:this.submitComment},"Add a comment"))}}]),t}(r.a.Component);Pe.contextType=x;var Le=w(Pe),He=(a(370),{passwordOne:"",passwordTwo:"",error:null}),Ve=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(z.a)({},He))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.state=Object(z.a)({},He),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,s=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),qe=(w(Ve),{margin:"15px"}),ze=W(function(e){return!!e})(function(){return r.a.createElement(x.Consumer,null,function(e){return r.a.createElement("div",{style:qe},r.a.createElement("h5",null,"Account: ",e.authUser.email),r.a.createElement(ie,null))})}),Je=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(z.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,a&&r.a.createElement("div",null,"Loading..."),r.a.createElement(Ge,{users:t}))}}]),t}(n.Component),Ge=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))}))},Xe=Object(U.a)(W(function(e){return!!e}),w)(Je),Ye=I(function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("hr",null)),r.a.createElement("div",{className:u.a.main},r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages/",component:V}),r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages/signup",component:te}),r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages/signin",component:be}),r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages"+N,component:Ae}),r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages/reviews",component:Le}),r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages/account",component:ze}),r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages/admin",component:Xe}),r.a.createElement(i.a,{exact:!0,path:"/bobatier-gh-pages/pw-forget",component:ce}))))});a(372);o.a.render(r.a.createElement(O.Provider,{value:new R},r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports={inputStyle:"signUp_inputStyle__3wluC",maskButton:"signUp_maskButton__1jskk",error:"signUp_error__1NhAn"}},72:function(e,t,a){e.exports={signInInput:"signIn_signInInput__W3S-E",inputStyle:"signIn_inputStyle__2cugx",maskButton:"signIn_maskButton__2men9",error:"signIn_error__3HeOs"}}},[[254,2,1]]]);
//# sourceMappingURL=main.0136a4f3.chunk.js.map