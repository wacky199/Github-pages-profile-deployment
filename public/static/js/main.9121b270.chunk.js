(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{100:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(26),c=n.n(a),i=(n(100),n.p+"static/media/aboutMeIntro.c9ce156b.svg"),r=n(0),l=function(){return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h1",{children:"About Me"}),Object(r.jsxs)("div",{className:"aboutPage",children:[Object(r.jsxs)("div",{className:"aboutMeIntro",children:[Object(r.jsx)("div",{className:"aboutMeImg",children:Object(r.jsx)("img",{src:i,alt:"IntroLogo"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h3",{className:"idea",children:"\u201cDo whatever you like, just don\u2019t be lazy.\u201d"})})]}),Object(r.jsx)("h2",{children:"Programmer and self learner"}),Object(r.jsx)("p",{children:"Hello, my name is Shivam, an undergraduate student at IIT Indore. As everyone says, college life is all about learning and exploring; I did the same. I explored many things being it technical or non-technical. I always kept probing what I'm exactly into. I recently bumped into programming and developing software during the lockdown, and since then, my journey to a new domain started. My exploration led me to something which eventually became my passion. I find myself fortunate enough to follow this route as my career path."})]})]})},o=function(){return Object(r.jsxs)("div",{className:"getInTouch",children:[Object(r.jsx)("h2",{children:"Get in Touch"}),Object(r.jsx)("p",{className:"subtitle",children:"Due to covid-19, I'm working from home."}),Object(r.jsx)("h4",{children:"Indore, India"}),Object(r.jsxs)("h4",{children:["Email:",Object(r.jsx)("span",{className:"info",children:Object(r.jsx)("a",{href:"mailto:cvam199@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"cvam199@gmail.com"})})]})]})},j=n(80),d=n(51),h=n.n(d),m=n(81),b=n(29),u=n(84),g=n.n(u),x=n(25),p=n.n(x),O=n(45),f=n.n(O),v=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(b.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(m.a)(h.a.mark((function e(){var t,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).toLocaleString(),e.prev=1,e.next=4,g.a.post("/contact/messages",{name:n.name,email:n.email,message:n.message,time:t});case 4:s=e.sent,console.log(s),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(),p()({title:"Error",text:"There is some error in sending this message. Please try some other listed method to connect.",icon:"error",dangerMode:!1});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(e){var t=Object(j.a)({},n);t[e.target.id]=e.target.value,a(t)};return Object(r.jsxs)("div",{className:"getInTouchContactForm",children:[Object(r.jsx)("h2",{children:"Contact form"}),Object(r.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=f.a.isEmail(n.email),s=f.a.isEmpty(n.name,{ignore_whitespace:!0}),a=f.a.isEmpty(n.message,{ignore_whitespace:!0});s||!t||a?a||s?p()({title:"Error!",text:"Please fill all the fields of the form.",dangerMode:!1,icon:"warning"}):t?p()({title:"Error!",text:"Please fill all the fields of form.",dangerMode:!1}):p()({title:"Invalid Email!",text:"Please enter a valid email address.",dangerMode:!1}):(console.log("Message details: ".concat(JSON.stringify(n))),p()({title:"Confirmation",text:"Please click OK if you want to send this message.",icon:"info",dangerMode:!1}).then((function(e){e&&(p()("Thankyou!","Your message has been sent successfully!"),c())})))}(e)},children:[Object(r.jsx)("input",{onChange:function(e){return i(e)},type:"text",defaultValue:n.name,id:"name",placeholder:"Full Name"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{onChange:function(e){return i(e)},type:"email",id:"email",defaultValue:n.email,placeholder:"Email Address"}),Object(r.jsx)("br",{}),Object(r.jsx)("textarea",{onChange:function(e){return i(e)},id:"message",defaultValue:n.message,rows:"5",cols:"auto",placeholder:"Message"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",className:"btn",value:"Send Message"})]})]})},N=n(44),k=n.n(N),y=n(42),w=n.n(y),I=n(43),S=n.n(I),M=n(86),T=n.n(M),C=n(231),P=n(94),D=n(230),A=Object(P.a)({props:{MuiSvgIcon:{fontSize:"large",htmlColor:"#7AD5AA"}}}),E=function(){return Object(r.jsxs)("div",{class:"platforms",children:[Object(r.jsx)("h2",{children:"Social Media"}),Object(r.jsx)("p",{subheading:!0,children:"Find me on...."}),Object(r.jsx)(D.a,{theme:A,children:Object(r.jsxs)("div",{className:"socialMediaPlatforms",children:[Object(r.jsx)(C.a,{href:"https://www.linkedin.com/in/wacky199/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(w.a,{})}),Object(r.jsx)(C.a,{href:"https://github.com/wacky199?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(S.a,{})}),Object(r.jsx)(C.a,{href:"https://www.instagram.com/wacky199/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(k.a,{})}),Object(r.jsx)(C.a,{href:"https://www.facebook.com/profile.php?id=100008701031381",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(T.a,{})})]})})]})},B=function(){return Object(r.jsxs)("div",{className:"page mainContactPage",children:[Object(r.jsx)("h1",{children:"Contact"}),Object(r.jsxs)("div",{className:"contactPage",children:[Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)(o,{}),Object(r.jsx)(E,{})]}),Object(r.jsx)("div",{className:"contactForm",children:Object(r.jsx)(v,{})})]})]})},L=function(){var e=(new Date).getFullYear()-2001;return Object(r.jsx)("div",{className:"homePage",children:Object(r.jsxs)("div",{className:"home",children:[Object(r.jsxs)("div",{className:"name",children:[Object(r.jsx)("h1",{children:"Shivam"}),Object(r.jsx)("p",{id:"subtitle"})]}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsxs)("p",{className:"subheading",children:["Age",Object(r.jsx)("span",{children:e})]}),Object(r.jsxs)("p",{className:"subheading",children:["Address",Object(r.jsx)("span",{children:"Indore"})]}),Object(r.jsxs)("p",{className:"subheading",children:["Email",Object(r.jsx)("span",{children:Object(r.jsx)("a",{rel:"noopener noreferrer",href:"mailto:cvam199@gmail.com",target:"_blank",children:"cvam199@gmail.com"})})]})]})]})})},_=function(){return Object(r.jsxs)("div",{className:"container por",children:[Object(r.jsx)("h2",{children:"Position & Responsibilities"}),Object(r.jsxs)("div",{className:"containerItem",children:[Object(r.jsx)("h3",{children:"Electronics Club"}),Object(r.jsx)("p",{className:"subheading",children:"Indian Institute of Technology, Indore"}),Object(r.jsx)("p",{className:"subheading passingYear",children:"since Oct, 2018"}),Object(r.jsx)("p",{className:"remark",children:"Member of Electronics Club."})]})]})},J=[{degree:"BTech in Electrical Engineering",college:"Indian Institute of Technology, Indore",passingYear:"2022",result:"Current CPI 7.90"},{degree:"Intermediate Education",college:"S.D. Inter College, Meerut",passingYear:"2017",result:"I have completed my intermediate education with 89.80% marks. I was also a top ranker in District."},{degree:"High School",college:"S.D. Inter College, Meerut",passingYear:"2015",result:"I have completed my highschool education with 86.83% marks. I was also awarded a Laptop, as I was selected in merit list of state government, UP"}],G=function(){return Object(r.jsxs)("div",{className:"container education",children:[Object(r.jsx)("h2",{children:"Education"}),J.map((function(e){return Object(r.jsxs)("div",{className:"containerItem",children:[Object(r.jsx)("h3",{children:e.degree}),Object(r.jsx)("p",{className:"subheading",children:e.college}),Object(r.jsx)("p",{className:"subheading passingYear",children:e.passingYear}),Object(r.jsx)("p",{className:"remark educationRemark",children:e.result})]})}))]})},Y=[{name:"MD-Blogs",link:"https://github.com/wacky199/md-blog",description:["\u2013 Designed a static website for Blogs using GATSBYjs","\u2013 Using contentful (CMS) created rich-text content and rendered it over the site using GraphQL (query and manipulation language for APIs)","\u2013 Site mainly uses JavaScript and SCSS for styling"]},{name:"MIPS-32 Processor Design",link:"https://github.com/wacky199/MIPS32",description:["\u2013 Designed a 32-bit RISC based pipelined MIPS Processor using Verilog HDL","\u2013 Designing process was done using ALU, Program Counter, Instruction Memory, Control Unit...","\u2013 Verified the implementation using Testbenches and GTKWave simulator"]},{name:"Digital Filter Design",link:"",description:["\u2013 Designed Digital Bandstop filter using Bi-linear transformation (BLT)","\u2013 Used both the analog filter design techniques (Butterworth and Chebyshev-I)","\u2013 Validated the digital filter specifications using MATLAB"]}],F=function(){return Object(r.jsxs)("div",{className:"container projects",children:[Object(r.jsx)("h2",{children:"Projects"}),Y.map((function(e){return Object(r.jsxs)("div",{className:"containerItem",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("p",{className:"subheading projectLink",children:Object(r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.link})}),Object(r.jsx)("p",{children:e.description.map((function(e){return Object(r.jsx)("p",{className:"remark",children:e})}))})]})}))]})},R=[{skillType:"Languages",items:["C++","Python","JavaScript","Verilog"]},{skillType:"Web Technologies",items:["HTML","CSS","JavaScript","ReactJS","GatsbyJS","NodeJS","Express","MongoDB","REST","JSON"]},{skillType:"IDE/Tools",items:["Visual Studio","Postman","MATLAB","MongoDB-Compass"]},{skillType:"Database",items:["MongoDB, Firestore"]},{skillType:"Testing",items:["Chrome Developer Tools"]},{skillType:"Version Control",items:["Git"]},{skillType:"Operating Systems",items:["Windows","Linux"]}],V=function(){return Object(r.jsxs)("div",{className:"container technicalSkills",children:[Object(r.jsx)("h2",{children:"Technical Skills"}),R.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:e.skillType}),Object(r.jsx)("p",{className:"skills",children:e.items.map((function(t,n){return n!==e.items.length-1?"".concat(t," , "):"".concat(t)}))})]})}))]})},H=[{name:"Growlance",link:"https://www.growlance.club/",duration:"Jul, 21 to Aug, 21",description:["\u2013 Developed authentication for frontend (React Application) using google authentication APIs","\u2013 Build backend using Nodejs, Express, REST to connect with firestore database","\u2013 Integrated backend to Messenger and Gmail APIs for better client experience"]}],U=function(){return Object(r.jsxs)("div",{className:"container projects",children:[Object(r.jsx)("h2",{children:"Experience"}),H.map((function(e){return Object(r.jsxs)("div",{className:"containerItem",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("p",{className:"subheading companyLink",children:Object(r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.link})}),Object(r.jsx)("p",{className:"subheading duration",children:e.duration}),Object(r.jsx)("p",{children:e.description.map((function(e){return Object(r.jsx)("p",{className:"remark",children:e})}))})]})}))]})},z=function(){return Object(r.jsxs)("div",{className:"page resumePage",children:[Object(r.jsx)("h1",{children:"Resume"}),Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsxs)("div",{className:"section1",children:[Object(r.jsx)(G,{}),Object(r.jsx)(V,{})]}),Object(r.jsxs)("div",{className:"section2",children:[Object(r.jsx)(U,{}),Object(r.jsx)(_,{}),Object(r.jsx)(F,{})]})]})]})},W=function(){return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h1",{children:"Blogs"}),Object(r.jsxs)("div",{className:"blogPage",children:[Object(r.jsxs)("p",{children:["Hello there, I have uploaded some files/blogs over this"," ",Object(r.jsx)("a",{className:"link",href:"https://wacky199.github.io/md-blog/",target:"_blank",rel:"noopener noreferrer",children:"site"}),". At this time it just contains some lorem ipsum. By the way, it is a static site build using GATSBYjs. Feel free to explore."]}),Object(r.jsx)("h4",{className:"info",children:Object(r.jsx)("a",{href:"https://wacky199.github.io/md-blog/",target:"_blank",rel:"noopener noreferrer",children:"Goto the Site"})})]})]})},q=n(22),K=function(){return Object(r.jsxs)("div",{className:"pagenotfound",children:[Object(r.jsx)("h1",{children:"error 404"}),Object(r.jsx)("p",{children:"Page not found"}),Object(r.jsx)("br",{}),Object(r.jsx)(q.b,{to:"/",className:"goBack",children:"Back to Home"})]})},Q=n(92),X=n.n(Q),Z=n(93),$=n.n(Z),ee=n(87),te=n.n(ee),ne=n(88),se=n.n(ne),ae=n(89),ce=n.n(ae),ie=n(91),re=n.n(ie),le=n(90),oe=n.n(le),je=[{title:"Home",path:"/",icon:Object(r.jsx)(te.a,{}),cName:"navText"},{title:"About Me",path:"/about",icon:Object(r.jsx)(se.a,{}),cName:"navText"},{title:"Resume",path:"/resume",icon:Object(r.jsx)(ce.a,{}),cName:"navText"},{title:"Blogs",path:"/blogs",icon:Object(r.jsx)(oe.a,{}),cName:"navText"},{title:"Contact",path:"/contact",icon:Object(r.jsx)(re.a,{}),cName:"navText"}],de=Object(P.a)({props:{MuiSvgIcon:{htmlColor:"#D7D7D7"}}}),he=n.p+"static/media/navLogo.1d38dbbe.png",me=n(46),be=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(C.a,{href:"https://www.linkedin.com/in/cvam199/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(w.a,{style:{color:me.a[500]}})}),Object(r.jsx)(C.a,{href:"https://github.com/wacky199?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(S.a,{style:{color:me.a[500]}})}),Object(r.jsx)(C.a,{href:"https://www.instagram.com/wacky199/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(k.a,{style:{color:me.a[500]}})})]})},ue=function(){var e=Object(s.useState)(!0),t=Object(b.a)(e,2),n=t[0],a=t[1],c=function(){return a(!n)};return Object(r.jsx)(D.a,{theme:de,children:Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)(q.b,{to:"#",className:"menuBars",children:Object(r.jsx)(X.a,{onClick:c,fontSize:"large"})}),Object(r.jsx)("nav",{className:n?"navMenu active":"navMenu",children:Object(r.jsxs)("ul",{className:"navMenuItems",onClick:c,children:[Object(r.jsx)("li",{className:"navbarToggle",children:Object(r.jsx)(q.b,{to:"#",children:Object(r.jsx)($.a,{})})}),Object(r.jsxs)("div",{className:"introMobile",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("img",{src:he,alt:"logo",className:"clipLogo"})}),Object(r.jsxs)("div",{className:"intro",children:[Object(r.jsx)("h1",{children:"Shivam"}),Object(r.jsx)("p",{children:"Programmer"})]})]}),je.map((function(e,t){return Object(r.jsx)("li",{className:e.cName,onClick:c,children:Object(r.jsxs)(q.b,{to:e.path,children:[e.icon,Object(r.jsx)("span",{children:e.title})]})},t)})),Object(r.jsx)("div",{className:"socialMediaHandle",children:Object(r.jsx)(be,{})})]})})]})})},ge=n(5),xe=(n(207),n(208),n(209),n(210),n(211),function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(q.a,{hashType:"noslash",children:[Object(r.jsx)(ue,{}),Object(r.jsxs)(ge.c,{children:[Object(r.jsx)(ge.a,{path:"/",exact:!0,component:L}),Object(r.jsx)(ge.a,{path:"/about",exact:!0,component:l}),Object(r.jsx)(ge.a,{path:"/resume",exact:!0,component:z}),Object(r.jsx)(ge.a,{path:"/contact",exact:!0,component:B}),Object(r.jsx)(ge.a,{path:"/blogs",exact:!0,component:W}),Object(r.jsx)(ge.a,{component:K})]})]})})});c.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(xe,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.9121b270.chunk.js.map