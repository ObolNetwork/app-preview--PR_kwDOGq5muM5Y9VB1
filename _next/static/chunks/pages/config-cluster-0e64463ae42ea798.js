(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{62367:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-cluster",function(){return r(32171)}])},32171:function(e,s,r){"use strict";r.r(s);var i=r(85893),t=r(67294),n=r(87536),a=r(25934),l=r(39618),o=r(71866),d=r(11771),c=r(2504),p=r(41518),u=r(11163),x=r(9324),h=r(95395),g=r(61279),v=r(28106),m=r(37005);let f=()=>{var e,s,r,f;let j=(0,p.o)(e=>e.clusterDefinition),{control:b,register:w,handleSubmit:y,formState:{errors:A,isDirty:C,isValid:k},resetField:$,setValue:S,trigger:R,getValues:_}=(0,n.cI)({mode:"onChange",defaultValues:{operators:x.fI,recipients:x.Ot,singleAddress:"",feeRecipientAddress:"",principal:"",enr:"",name:""}}),{fields:N,append:E,remove:T}=(0,n.Dq)({control:b,name:"operators"}),{fields:I,append:O,remove:W}=(0,n.Dq)({control:b,name:"recipients"}),z=(0,u.useRouter)(),D=(0,p.o)(e=>e.completeLeaderStep),F=(0,p.o)(e=>e.enableLeaderStep),P=(0,p.o)(e=>e.updateClusterDefinition),[q,V]=(0,t.useState)(100),{account:Q}=(0,c.kR)(),[Z,H]=(0,t.useState)((null==j?void 0:j.clusterSize)||x.dd),G=(0,c.D9)(Z),[J,K]=(0,t.useState)((null==j?void 0:j.validatorsSize)||1),[L,M]=(0,t.useState)((null==j?void 0:j.principal)||!(0,m.c)("single_reward_address_flow")?"splitter":"single"),[U,X]=(0,t.useState)([{id:(0,a.Z)(),operator:null,principal:32}]),[B,Y]=(0,t.useState)(),ee=()=>{O({address:"",split:""})},es=e=>{W(e);let s=_().recipients.reduce((e,s)=>s.split?parseFloat(s.split)+e:e,0);V(s)},er=e=>{e.preventDefault(),S("operators.0",{address:Q}),R("operators.0")},ei=e=>{e.preventDefault(),S("singleAddress",Q),R("singleAddress")},et=e=>{e.preventDefault(),S("feeRecipientAddress",Q),R("feeRecipientAddress")},en=e=>{D("config-cluster"),P({...e,creator:{address:Q},validatorsEthAmount:32*J,validators:Array(J).fill({feeRecipientAddress:e.feeRecipientAddress,withdrawalAddress:e.singleAddress})});let s=F("confirm-configuration");z.push(s.href)};return(0,t.useEffect)(()=>{L&&($("singleAddress"),$("feeRecipientAddress"),$("principal"),$("recipients"),P({...j,validators:[]}))},[L]),(0,t.useEffect)(()=>{if(Z){let e=(0,g.zT)(Z);Y(e)}G&&G<Z&&E({address:""},{shouldFocus:!1}),G&&G>Z&&T(Z-1)},[G,Z]),(0,t.useEffect)(()=>{S("singleAddress",null==j?void 0:j.singleAddress),S("feeRecipientAddress",null==j?void 0:j.feeRecipientAddress),S("enr",null==j?void 0:j.enr),S("name",null==j?void 0:j.name),S("principal",null==j?void 0:j.principal),(null==j?void 0:j.operators)&&S("operators",null==j?void 0:j.operators),(null==j?void 0:j.recipients)&&S("recipients",null==j?void 0:j.recipients)},[]),(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(l.xv,{variant:"h3",children:"Configure Cluster"}),(0,i.jsx)(o.l0,{onSubmit:y(en),children:(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(l.W2,{className:"cluster-details",alignItems:"start",children:(0,i.jsx)(v.PQ,{register:w,clusterSize:Z,setClusterSize:H,control:b,min:x.dd})}),(0,i.jsxs)(l.W2,{className:"cluster-operators",alignItems:"start",children:[(0,i.jsx)(l.xv,{variant:"h4",children:"Node Operators"}),N.map((e,s)=>{var r,t,n;return(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$sm","& div > input":{color:"$obolGreen"}},children:[(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$sm"},children:[(0,i.jsxs)(l.kC,{css:{gap:"$sm",justifyContent:"space-between"},children:[(0,i.jsx)(l.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Operator ".concat(s+1,"/").concat(Z)}),0==s&&(0,i.jsx)(l.zx,{ghost:!0,css:{color:"$obolGreen",fontSize:"$1",p:0,height:"100%",textTransform:"uppercase"},onClick:er,children:"use my address"})]}),(0,i.jsx)(d.bQ,{"data-testid":"Operator ".concat(s+1),control:b,trigger:R,name:"operators.".concat(s,".address"),items:_().operators,wrapperCSS:{border:"2px solid $bg04",backgroundColor:"$bg03",borderRadius:"$1",px:"$sm",py:"$xs","&:focus-within":{backgroundColor:"$bg02"}}})]}),(null===(r=A.operators)||void 0===r?void 0:r[s])&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:null===(t=null===(n=A.operators)||void 0===n?void 0:n[s].address)||void 0===t?void 0:t.message})]},":op".concat(e&&e.id,":"))})]}),(0,i.jsx)(v.J1,{control:b,contractType:L,validatorsSize:J,setValidatorsSize:K}),_().operators.some(e=>e.address==Q)&&(0,i.jsxs)(l.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$sm"},children:[(0,i.jsxs)(l.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,i.jsx)(l.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"What is your Charon Client's ENR?"}),(0,i.jsx)(l.KZ,{content:"An ENR is a public key and encoded networking info starting with enr:-...",children:(0,i.jsx)(l.xu,{css:{display:"flex"},children:(0,i.jsx)(l.by,{})})})]}),(0,i.jsx)(d.iA,{control:b,name:"enr"})]}),(0,i.jsxs)(l.rU,{href:"https://docs.obol.tech/docs/next/int/quickstart/group/quickstart-group-leader-creator#step-2-create-and-back-up-a-private-key-for-charon",target:"_blank",children:["How to generate your ENR ",(0,i.jsx)(l.ZJ,{})]})]}),(0,i.jsxs)(l.W2,{className:"withdrawal-section",css:{gap:"$lg"},alignItems:"start",children:[(0,i.jsx)(l.xv,{variant:"h4",children:"Withdrawal Addesses"}),(0,i.jsx)(l.Hc,{value:L,onValueChange:e=>M(h.RJ[e]),"aria-label":"View density",children:(0,i.jsxs)(l.kC,{direction:{"@sm":"column"},css:{width:"$full",gap:"$sm"},children:[(0,i.jsx)(m.T,{name:"single_reward_address_flow",children:(0,i.jsxs)(l.xu,{css:{display:"flex",margin:"10px 0",alignItems:"center"},children:[(0,i.jsx)(l.Wr,{value:"single",id:"r2",children:(0,i.jsx)(l.Q4,{})}),(0,i.jsx)(l.qH,{htmlFor:"r2",css:{fontWeight:"$bold",color:"$light"},children:"Single Address"})]})}),(0,i.jsx)(m.T,{name:"reward_split_withdrawal_flow",children:(0,i.jsxs)(l.xu,{css:{display:"flex",margin:"10px 0",alignItems:"center"},children:[(0,i.jsx)(l.Wr,{value:"splitter",id:"r1",children:(0,i.jsx)(l.Q4,{})}),(0,i.jsx)(l.qH,{htmlFor:"r1",css:{fontWeight:"$bold",color:"$light"},children:"Splitter Contract"})]})})]})}),"splitter"===L?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.xv,{color:"body",variant:"body",children:"Enter each recipient’s address and their share. Ownership must\n                add to 100%."}),(0,i.jsx)(l.xv,{color:"body",variant:"body",children:" By default, a 2% of rewards are allocated to be used by Obol\n                for Public Goods."}),(0,i.jsxs)(l.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,i.jsx)(l.xv,{color:"body",variant:"subline",css:{textTransform:"uppercase"},children:"Recipient of Principal"}),(0,i.jsx)(l.KZ,{content:"Address that can claim the first 32 ether of an exited validator",children:(0,i.jsx)(l.xu,{css:{display:"flex"},children:(0,i.jsx)(l.by,{})})})]}),(0,i.jsx)(v.WO,{columns:x.oU,rows:U,children:(0,i.jsx)(d.bQ,{control:b,trigger:R,name:"principal",wrapperCSS:{px:"$sm",py:"$xs","&:focus-within":{backgroundColor:"$bg02"}}})}),(null===(e=A.principal)||void 0===e?void 0:e.message)&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:null===(s=A.principal)||void 0===s?void 0:s.message}),(0,i.jsxs)(l.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,i.jsx)(l.xv,{color:"body",variant:"subline",css:{textTransform:"uppercase"},children:"Reward Split"}),(0,i.jsx)(l.KZ,{content:"Address to receive validator rewards at exit (staking, MEV and fees).",children:(0,i.jsx)(l.xu,{css:{display:"flex"},children:(0,i.jsx)(l.by,{})})})]}),(0,i.jsx)(v.Cl,{columns:x.$y,rows:I,onAddRow:ee,onRemoveRow:es,totalSplitFooter:q,setMaxSplit:V,control:b,trigger:R,recipients:_().recipients}),(null===(r=A.recipients)||void 0===r?void 0:r.some(e=>{var s;return null==e?void 0:null===(s=e.address)||void 0===s?void 0:s.message}))&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:"Please enter a valid, non-duplicate Ethereum address or ENS name"}),(null===(f=A.recipients)||void 0===f?void 0:f.some(e=>{var s;return null==e?void 0:null===(s=e.split)||void 0===s?void 0:s.message}))&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:"Split value should be greater than 0%"})]}):(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$lg"},children:[(0,i.jsx)(v.AN,{control:b,trigger:R,errors:A,handleOnSetAddress:ei,heading:"Principal Address",description:"Address to receive validator principal and rewards at exit.",fieldName:"singleAddress",className:"single-address-section"}),(0,i.jsx)(v.AN,{control:b,trigger:R,errors:A,handleOnSetAddress:et,heading:"Fee Recipient",description:"Enter the Fee Recipient Address to receive MEV rewards (if enabled), block proposal and priority fees.",fieldName:"feeRecipientAddress",className:"fee-recipient-address-section"})]})]}),(0,i.jsx)(l.kC,{direction:"column",children:(0,i.jsx)(l.zx,{color:"primary",type:"submit",disabled:!C||!k||!Q||100!==q,children:"Create Cluster Configuration"})})]})})]})};s.default=f,f.layout="ProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=62367)}),_N_E=e.O()}]);