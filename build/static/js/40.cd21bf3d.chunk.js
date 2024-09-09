(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[40,42],{588:function(e,t,s){"use strict";var n=s(192),r=s.n(n),a=s(13),i=s(618).a(),c=s(36),o=s(315),l=r.a.create({baseURL:a.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(c.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(i.push(d),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(c.b),i.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var u=l,m={login:function(e){return u({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return u({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=m},622:function(e,t,s){"use strict";var n=s(0),r=s.n(n),a=s(42),i=s(617),c=s(115),o=s(923),l=s(917),d=s(522),u=s(883),m=s(317),h=s(670),j=s(1),g=r.a.forwardRef((function(e,t){return Object(j.jsx)(h.a,{component:e.svg,className:e.className})})),b=s(59),p=s(588),x=s(47),O=s(621),f=function(e){var t=Object(x.useHistory)(),s=e.otherSignIn,r=(e.showForgetPassword,e.hideAuthMessage),a=(e.onForgetPasswordClick,e.showLoading),h=e.extra,b=e.loading,f=e.showMessage,v=e.message,w=e.authenticated,y=e.showAuthMessage,N=e.token,S=e.redirect,k=e.allowRedirect;Object(n.useEffect)((function(){null!==N&&k&&t.push(S),f&&setTimeout((function(){r()}),3e3)}));var T=Object(j.jsxs)("div",{children:[Object(j.jsx)(i.a,{children:Object(j.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsx)(c.a,{onClick:function(){a()},className:"mr-2",disabled:b,icon:Object(j.jsx)(g,{svg:m.t}),children:"Google"}),Object(j.jsx)(c.a,{onClick:function(){a()},icon:Object(j.jsx)(g,{svg:m.r}),disabled:b,children:"Facebook"})]})]});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:f?1:0,marginBottom:f?20:0},children:Object(j.jsx)(o.a,{type:"error",showIcon:!0,message:v})}),Object(j.jsxs)(l.a,{layout:"vertical",name:"login-form",onFinish:function(e){a();p.a.login(e).then((function(e){w("fakeToken")})).then((function(e){y(e)}))},children:[Object(j.jsx)(l.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(j.jsx)(d.a,{prefix:Object(j.jsx)(u.a,{className:"text-primary"})})}),Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(c.a,{type:"primary",htmlType:"submit",block:!0,loading:b,children:"Sign In"})}),s?T:null,h]})]})};f.defaultProps={otherSignIn:!0,showForgetPassword:!1};var v={showAuthMessage:b.c,showLoading:b.d,hideAuthMessage:b.b,authenticated:b.a};t.a=Object(a.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),v)(f)},687:function(e,t,s){"use strict";s.r(t);var n=s(17),r=s(83),a=s(0),i=(s(622),s(169)),c=s(522),o=s(115),l=s(42),d=s.p+"static/media/Logo.395390b5.svg",u=s(317),m=s(677),h=s.n(m),j=(s(680),s(681),s(682)),g=s.n(j),b=s(1),p={backgroundImage:"url(/img/others/wave.svg)",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"top",backgroundColor:"white"},x={position:"absolute",top:"1rem",left:"1rem"},O=i.a.Option,f=Object(b.jsxs)(i.a,{defaultValue:"in",style:{width:80},children:[Object(b.jsx)(O,{value:"in",children:"IND"}),Object(b.jsx)(O,{value:"sg",children:"SG"})]});t.default=function(e){Object(l.c)((function(e){return e.theme.currentTheme}));var t=Object(a.useState)(1),s=Object(r.a)(t,2),i=s[0],m=s[1],j=Object(a.useState)(""),O=Object(r.a)(j,2),v=O[0],w=O[1],y=Object(a.useState)(""),N=Object(r.a)(y,2),S=N[0],k=N[1],T=function(){console.log("OTP submitted:",S)};return Object(b.jsxs)("div",{className:"h-100",style:p,children:[Object(b.jsxs)("div",{style:x,children:[" ",Object(b.jsx)("img",{src:d,alt:"..."})]}),Object(b.jsxs)("div",{className:"row d-flex h-100",style:{paddingTop:"110px"},children:[Object(b.jsx)("div",{style:{marginTop:"80px",width:"50%"},className:"d-flex flex-column justify-content-start align-items-center",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"d-flex justify-content-center mb-4",children:Object(b.jsx)(u.I,{})}),Object(b.jsx)("h2",{className:"text-center mt-2",children:1===i?"LOGIN":"Enter OTP"}),Object(b.jsxs)("p",{className:"text-center",children:[" ",1===i?"Please enter your phone number below to get started.":"Please enter 4 digit OTP sent to +65 ".concat(v," below.")]}),1===i&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{style:{marginTop:"2.7rem"},className:"font-bolder ",children:"Phone Number"}),Object(b.jsx)(c.a,{addonBefore:f,onChange:function(e){return w(e.target.value)},value:v}),Object(b.jsx)(o.a,{style:{backgroundColor:"#3CA6C1",color:"white",marginTop:"4rem",marginBottom:"1.9rem"},className:"w-100",onClick:function(){m(2)},children:"Continue"})]}),2===i&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{style:{marginTop:"2.7rem"},className:"font-bolder ",children:"OTP Verification"}),Object(b.jsx)(g.a,{className:"OtpInput",value:S,onChange:function(e){return k(e)},autoFocus:!0,OTPLength:4,isNumberInput:!0,shouldAutoFocus:!0,isInputNum:!0,inputStyle:{border:"1px solid #ccc",borderRadius:"4px",padding:"0.5rem",boxShadow:"0 0 5px rgba(0, 0, 0, 0.2)",outline:"none"},containerStyle:{justifyContent:"space-between"},inputContainerStyle:{margin:"0 0.5rem"},inputClassName:"custom-otp-input",disabled:!1,hasErrored:!1,errorStyle:{borderColor:"red"},focusStyle:{borderColor:"blue"},onComplete:function(e){return T()}}),Object(b.jsxs)("p",{className:"text-center mt-2",children:["Don't receive OTP?",Object(b.jsx)("a",{className:"text-center",href:"#",children:"Request Again"})]}),Object(b.jsx)(o.a,{style:{backgroundColor:"#3CA6C1",color:"white",marginTop:"4rem",marginBottom:"1.9rem"},className:"w-100",onClick:function(){return T()},children:"Submit"})]}),Object(b.jsx)("p",{className:"text-center",children:"By continuing, you agree to the JD Works Terms & Services"}),Object(b.jsx)("a",{className:"text-center d-block w-100",href:"#",children:"Terms & Services"})]})}),Object(b.jsx)("div",{style:{width:"50%"},className:"loginRightSlider",children:Object(b.jsx)("div",{children:Object(b.jsxs)(h.a,Object(n.a)(Object(n.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:!1}),{},{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{backgroundImage:"url(/img/others/Rectanglepurple.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:"5rem",backgroundPosition:"center"},children:[Object(b.jsx)("h2",{className:"text-white mt-2",style:{textTransform:"uppercase",fontSize:"1.6rem"},children:"Machine conditions monitoring get easy"}),Object(b.jsx)("p",{className:"text-white mb-5",style:{fontSize:"1rem",width:"80%",lineHeight:"18px",fontWeight:"100"},children:"Enhancing productivity and efficiency with smart mobile applications"}),Object(b.jsx)("img",{style:{width:"65%",margin:"auto"},src:"/img/others/machinefirst.svg",alt:"..."})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{backgroundImage:"url(/img/others/Rectanglegreen.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:"5rem",backgroundPosition:"center"},children:[Object(b.jsx)("h2",{className:"text-white mt-2",style:{textTransform:"uppercase",fontSize:"1.6rem",width:"80%"},children:"Get ON-SITE MAINTENANCE SERVICES"}),Object(b.jsx)("p",{className:"text-white mb-5",style:{fontSize:"1rem",width:"70%",lineHeight:"18px",fontWeight:"100"},children:"Our expert team deliver best on site maintenance services "}),Object(b.jsx)("img",{style:{width:"65%",margin:"auto"},src:"/img/others/machinetwo.svg",alt:"..."})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{backgroundImage:"url(/img/others/Rectangleorange.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",padding:"5rem",height:"100%"},children:[Object(b.jsx)("h2",{className:"text-white mt-2",style:{textTransform:"uppercase",fontSize:"1.6rem",width:"80%"},children:"Get INSTANT QUOTATION ON INQURIY"}),Object(b.jsx)("p",{className:"text-white mb-5",style:{fontSize:"1rem",width:"70%",lineHeight:"18px",fontWeight:"100"},children:"Generate quick quotation for your problems you inquire."}),Object(b.jsx)("img",{style:{width:"65%",margin:"auto"},src:"/img/others/machinethree.svg",alt:"..."})]})})]}))})})]})]})}},907:function(e,t,s){"use strict";s.r(t);s(0);var n=s(687),r=s(1);t.default=function(){return Object(r.jsx)(n.default,{allowRedirect:!0})}}}]);
//# sourceMappingURL=40.cd21bf3d.chunk.js.map