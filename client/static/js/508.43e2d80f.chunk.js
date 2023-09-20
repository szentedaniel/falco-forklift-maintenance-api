"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[508],{47619:function(e,t,r){r.d(t,{Z:function(){return R}});var n=r(30168),a=r(4942),i=r(1413),o=r(45987),s=r(92550),c=r(88564),l=r(83061),d=r(47313),u=r(70499),p=r(46417);var h=function(e){return(0,p.jsx)("div",{className:(0,l.Z)("FusePageCarded-header","container"),children:e.header&&e.header})},f=r(29439),g=r(46923),m=r(22202),x=r(60211),b=r(22408),v=r(19860),Z=r(26159),C=r(62201);var w=function(e){var t=(0,v.Z)(),r=(0,b.v9)((0,C.lK)(t.palette.primary.main));return(0,p.jsxs)(s.Z,{enable:e.innerScroll,children:[e.header&&(0,p.jsx)(Z.Z,{theme:r,children:(0,p.jsx)("div",{className:(0,l.Z)("FusePageCarded-sidebarHeader",e.variant,e.sidebarInner&&"FusePageCarded-sidebarHeaderInnerSidebar"),children:e.header})}),e.content&&(0,p.jsx)("div",{className:"FusePageCarded-sidebarContent",children:e.content})]})},j=(0,d.forwardRef)((function(e,t){var r=e.open,n=e.position,a=e.variant,o=(e.rootRef,(0,d.useState)(r)),s=(0,f.Z)(o,2),c=s[0],u=s[1];(0,d.useImperativeHandle)(t,(function(){return{toggleSidebar:h}}));var h=(0,d.useCallback)((function(e){u(e)}),[]);return(0,d.useEffect)((function(){h(r)}),[h,r]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.Z,{lgUp:"permanent"===a,children:(0,p.jsx)(x.Z,{variant:"temporary",anchor:n,open:c,onOpen:function(e){},onClose:function(){return null===e||void 0===e?void 0:e.onClose()},disableSwipeToOpen:!0,classes:{root:(0,l.Z)("FusePageCarded-sidebarWrapper",a),paper:(0,l.Z)("FusePageCarded-sidebar",a,"left"===n?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,p.jsx)(w,(0,i.Z)({},e))})}),"permanent"===a&&(0,p.jsx)(m.Z,{lgDown:!0,children:(0,p.jsx)(g.ZP,{variant:"permanent",anchor:n,className:(0,l.Z)("FusePageCarded-sidebarWrapper",a,c?"opened":"closed","left"===n?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar"),open:c,onClose:null===e||void 0===e?void 0:e.onClose,classes:{paper:(0,l.Z)("FusePageCarded-sidebar",a)},children:(0,p.jsx)(w,(0,i.Z)({},e))})})]})}));j.defaultProps={open:!0};var k,P=j,S=["theme"],y=(0,c.ZP)("div")((function(e){var t=e.theme,r=(0,o.Z)(e,S);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-scroll-content":{height:"100%"},"& .FusePageCarded-wrapper":(0,i.Z)({display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,maxWidth:"100%",minWidth:0,height:"100%",backgroundColor:t.palette.background.paper},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0,overflow:"hidden"}),"& .FusePageCarded-header":{display:"flex",flex:"0 0 auto"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto",WebkitOverflowScrolling:"touch",zIndex:9999},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center"},"& .FusePageCarded-content":{flex:"1 0 auto"},"& .FusePageCarded-sidebarWrapper":{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":(0,a.Z)({},t.breakpoints.up("lg"),{position:"relative",marginLeft:0,marginRight:0,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),"&.closed":{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),"&.FusePageCarded-leftSidebar":{marginLeft:-r.leftsidebarwidth},"&.FusePageCarded-rightSidebar":{marginRight:-r.rightsidebarwidth}}})},"& .FusePageCarded-sidebar":{position:"absolute",backgroundColor:t.palette.background.paper,color:t.palette.text.primary,"&.permanent":(0,a.Z)({},t.breakpoints.up("lg"),{position:"relative"}),maxWidth:"100%",height:"100%"},"& .FusePageCarded-leftSidebar":(0,a.Z)({width:r.leftsidebarwidth},t.breakpoints.up("lg"),{}),"& .FusePageCarded-rightSidebar":(0,a.Z)({width:r.rightsidebarwidth},t.breakpoints.up("lg"),{}),"& .FusePageCarded-sidebarHeader":{height:F,minHeight:F,backgroundColor:t.palette.primary.dark,color:t.palette.primary.contrastText},"& .FusePageCarded-sidebarHeaderInnerSidebar":{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},"& .FusePageCarded-sidebarContent":{display:"flex",flexDirection:"column",minHeight:"100%"},"& .FusePageCarded-backdrop":{position:"absolute"}}})),F=120,N=64,E=(0,d.forwardRef)((function(e,t){var r=(0,d.useRef)(null),n=(0,d.useRef)(null),a=(0,d.useRef)(null);return(0,d.useImperativeHandle)(t,(function(){return{rootRef:a,toggleLeftSidebar:function(e){r.current.toggleSidebar(e)},toggleRightSidebar:function(e){n.current.toggleSidebar(e)}}})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{styles:function(t){return(0,i.Z)((0,i.Z)({},"page"!==e.scroll&&{"#fuse-toolbar":{position:"static"},"#fuse-footer":{position:"static"}}),"page"===e.scroll&&{"#fuse-toolbar":{position:"sticky",top:0},"#fuse-footer":{position:"sticky",bottom:0}})}}),(0,p.jsxs)(y,{className:(0,l.Z)("FusePageCarded-root","FusePageCarded-scroll-".concat(e.scroll),e.className),ref:a,scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:[e.header&&(0,p.jsx)(h,{header:e.header}),(0,p.jsx)("div",{className:"flex flex-auto flex-col container z-10 h-full shadow-1 rounded-t-16 relative overflow-hidden",children:(0,p.jsxs)("div",{className:"FusePageCarded-wrapper",children:[e.leftSidebarContent&&(0,p.jsx)(P,{position:"left",content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",ref:r,rootRef:a,open:e.leftSidebarOpen,onClose:e.leftSidebarOnClose}),(0,p.jsx)(s.Z,{className:"FusePageCarded-contentWrapper",enable:"content"===e.scroll,children:e.content&&(0,p.jsx)("div",{className:(0,l.Z)("FusePageCarded-content"),children:e.content})}),e.rightSidebarContent&&(0,p.jsx)(P,{position:"right",content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",ref:n,rootRef:a,open:e.rightSidebarOpen,onClose:e.rightSidebarOnClose})]})})]})]})}));E.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var R=(0,d.memo)((0,c.ZP)(E)(k||(k=(0,n.Z)([""]))))},2508:function(e,t,r){r.r(t),r.d(t,{default:function(){return le}});var n,a=r(47619),i=r(23132),o=r(38768),s=r(9038),c=r(4942),l=r(15861),d=r(87757),u=r.n(d),p=r(80827),h=r(31881),f=r.n(h),g=(0,p.hg)("restaurantsForOwnerTab/restaurants/getRestaurants",(0,l.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get("restaurantsForOwner");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),m=(0,p.hg)("restaurantsForOwnerTab/restaurants",function(){var e=(0,l.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.t0=Promise,e.next=4,t.map(function(){var e=(0,l.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().delete("restaurants/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return e.t1=e.sent,e.next=7,e.t0.all.call(e.t0,e.t1);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),x=(0,p.hg)("restaurantsForOwnerTab/restaurantsActivate",function(){var e=(0,l.Z)(u().mark((function e(t,r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.t0=Promise,e.next=4,t.map(function(){var e=(0,l.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().patch("restaurants/".concat(t),{aktiv:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return e.t1=e.sent,e.next=7,e.t0.all.call(e.t0,e.t1);case 7:return n=t.map((function(e){return{id:e,changes:{active:!0}}})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=(0,p.hg)("restaurantsForOwnerTab/restaurantsDisable",function(){var e=(0,l.Z)(u().mark((function e(t,r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.t0=Promise,e.next=4,t.map(function(){var e=(0,l.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().patch("restaurants/".concat(t),{aktiv:!1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return e.t1=e.sent,e.next=7,e.t0.all.call(e.t0,e.t1);case 7:return n=t.map((function(e){return{id:e,changes:{active:!1}}})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),v=(0,p.HF)({}),Z=v.getSelectors((function(e){return e.restaurantsForOwnerTab.restaurants})),C=Z.selectAll,w=(Z.selectById,(0,p.oM)({name:"restaurantsForOwnerTab/restaurants",initialState:v.getInitialState({searchText:""}),reducers:{setRestaurantsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},(0,c.Z)(n,g.fulfilled,v.setAll),(0,c.Z)(n,x.fulfilled,(function(e,t){return v.updateMany(e,t.payload)})),(0,c.Z)(n,b.fulfilled,(function(e,t){return v.updateMany(e,t.payload)})),(0,c.Z)(n,m.fulfilled,(function(e,t){return v.removeMany(e,t.payload)})),n)})),j=w.actions.setRestaurantsSearchText,k=function(e){return e.restaurantsForOwnerTab.restaurants.searchText},P=w.reducer,S=(0,s.UY)({restaurants:P}),y=r(42461),F=r(82295),N=r(61113),E=r(73997),R=r(22408),I=r(56993),A=r(24511),L=r(46417);var O=function(e){var t=(0,A.$)("restaurantsPage").t,r=(0,R.I0)(),n=(0,R.v9)(k);return(0,L.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32",children:[(0,L.jsx)(N.Z,{component:E.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight",children:t("HEADER")}),(0,L.jsxs)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8",children:[(0,L.jsxs)(F.Z,{component:E.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0",children:[(0,L.jsx)(I.Z,{color:"disabled",children:"heroicons-solid:search"}),(0,L.jsx)(y.Z,{placeholder:t("SEARCH"),className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:n,inputProps:{"aria-label":"Search"},onChange:function(e){return r(j(e))}})]}),(0,L.jsx)(E.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}}})]})]})},T=r(29439),H=r(92550),z=r(58970),_=r(44758),M=r(66835),B=r(57861),D=r(67478),W=r(62323),V=r(24076),$=r(47313),U=r(8139),q=r(63738),G=r(24193),J=r(47131),K=r(74748),Y=r(83213),Q=r(85582),X=r(51405),ee=r(14560),te=r(82558),re=r(61689),ne=r(15743),ae=r(23477),ie=r(17551),oe=[{id:"nev",align:"left",disablePadding:!1,label:"HEADER_NEV_LABEL",sort:!0},{id:"cim",align:"right",disablePadding:!1,label:"HEADER_CIM_LABEL",sort:!0},{id:"tel",align:"center",disablePadding:!1,label:"HEADER_TELEFON_LABEL",sort:!0},{id:"tulaj",align:"left",disablePadding:!1,label:"HEADER_TULAJ_LABEL",sort:!0},{id:"active",align:"left",disablePadding:!1,label:"HEADER_ACTIVE_LABEL",sort:!0},{id:"change_active",align:"right",disablePadding:!1,label:"",sort:!1}];var se=function(e){var t=(0,A.$)("restaurantsPage").t,r=e.selectedTableIds,n=r.length,a=(0,$.useState)(null),i=(0,T.Z)(a,2),o=i[0],s=i[1],c=(0,R.I0)();function l(){s(null)}return(0,L.jsx)(ae.Z,{children:(0,L.jsxs)(V.Z,{className:"h-48 sm:h-64",children:[(0,L.jsxs)(D.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,ie.$n)(e.palette.background.default,.4):(0,ie.$n)(e.palette.background.default,.02)}},padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,L.jsx)(_.Z,{indeterminate:n>0&&n<e.rowCount,checked:0!==e.rowCount&&n===e.rowCount,onChange:e.onSelectAllClick}),n>0&&(0,L.jsxs)(ne.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.default}},children:[(0,L.jsx)(J.Z,{"aria-owns":o?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},size:"large",children:(0,L.jsx)(I.Z,{children:"heroicons-outline:dots-horizontal"})}),(0,L.jsx)(Q.Z,{id:"selectedProductsMenu",anchorEl:o,open:Boolean(o),onClose:l,children:(0,L.jsxs)(ee.Z,{children:[(0,L.jsxs)(X.Z,{onClick:function(){c(m(r)),e.onMenuItemClick(),l()},children:[(0,L.jsx)(K.Z,{className:"min-w-40",children:(0,L.jsx)(I.Z,{children:"heroicons-outline:trash"})}),(0,L.jsx)(Y.Z,{primary:t("REMOVE")})]}),(0,L.jsxs)(X.Z,{onClick:function(){c(x(r)),e.onMenuItemClick(),l()},children:[(0,L.jsx)(K.Z,{className:"min-w-40",children:(0,L.jsx)(I.Z,{className:"text-green",size:20,children:"heroicons-outline:check-circle"})}),(0,L.jsx)(Y.Z,{primary:t("HEADER_ACTIVE_LABEL")})]}),(0,L.jsxs)(X.Z,{onClick:function(){c(b(r)),e.onMenuItemClick(),l()},children:[(0,L.jsx)(K.Z,{className:"min-w-40",children:(0,L.jsx)(I.Z,{className:"text-red",size:20,children:"heroicons-outline:minus-circle"})}),(0,L.jsx)(Y.Z,{primary:t("HEADER_NO_ACTIVE_LABEL")})]})]})})]})]}),oe.map((function(r){return(0,L.jsx)(D.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,ie.$n)(e.palette.background.default,.4):(0,ie.$n)(e.palette.background.default,.02)}},className:"p-4 md:p-16",align:r.align,padding:r.disablePadding?"none":"normal",sortDirection:e.order.id===r.id&&e.order.direction,children:r.sort&&(0,L.jsx)(re.Z,{title:"Sort",placement:"right"===r.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,L.jsx)(te.Z,{active:e.order.id===r.id,direction:e.order.direction,onClick:(n=r.id,function(t){e.onRequestSort(t,n)}),className:"font-semibold",children:t(r.label)})})},r.id);var n}),this)]})})};var ce=(0,U.Z)((function(e){var t=(0,A.$)("restaurantsPage").t,r=(0,R.I0)(),n=(0,R.v9)(C),a=(0,R.v9)(k),i=(0,$.useState)(!0),o=(0,T.Z)(i,2),s=o[0],c=o[1],l=(0,$.useState)([]),d=(0,T.Z)(l,2),u=d[0],p=d[1],h=(0,$.useState)(n),f=(0,T.Z)(h,2),m=f[0],v=f[1],Z=(0,$.useState)(0),w=(0,T.Z)(Z,2),j=w[0],P=w[1],S=(0,$.useState)(10),y=(0,T.Z)(S,2),F=y[0],O=y[1],U=(0,$.useState)({direction:"asc",id:null}),J=(0,T.Z)(U,2),K=J[0],Y=J[1];return(0,$.useEffect)((function(){r(g()).then((function(){return c(!1)}))}),[r]),(0,$.useEffect)((function(){0!==a.length?(v(z.Z.filter(n,(function(e){return e.name.toLowerCase().includes(a.toLowerCase())||e.address.toLowerCase().includes(a.toLowerCase())||e.phone.toLowerCase().includes(a.toLowerCase())||e.owner.toLowerCase().includes(a.toLowerCase())}))),P(0)):v(n)}),[n,a]),s?(0,L.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,L.jsx)(q.Z,{})}):0===m.length?(0,L.jsx)(E.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,L.jsx)(N.Z,{color:"text.secondary",variant:"h5",children:t("NO_TABLES")})}):(0,L.jsxs)("div",{className:"w-full flex flex-col min-h-full",children:[(0,L.jsx)(H.Z,{className:"grow overflow-x-auto",children:(0,L.jsxs)(M.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,L.jsx)(se,{selectedTableIds:u,order:K,onSelectAllClick:function(e){e.target.checked?p(m.map((function(e){return e.id}))):p([])},onRequestSort:function(e,t){var r=t,n="desc";K.id===t&&"desc"===K.direction&&(n="asc"),Y({direction:n,id:r})},rowCount:m.length,onMenuItemClick:function(){p([])}}),(0,L.jsx)(B.Z,{children:z.Z.orderBy(m,[function(e){switch(K.id){case"nev":return e.name[0];case"cim":return e.address[0];case"tel":return e.phone[0];case"tulaj":return e.owner[0];case"active":return e.active[0];default:return e[K.id]}}],[K.direction]).slice(j*F,j*F+F).map((function(e){var n=-1!==u.indexOf(e.id);return(0,L.jsxs)(V.Z,{className:"h-72  ".concat(e.active?"bg-green-900/20 hover:bg-green-900/10":"bg-red-900/20 hover:bg-red-900/10"),role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,onClick:function(e){},children:[(0,L.jsx)(D.Z,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,L.jsx)(_.Z,{checked:n,onClick:function(e){return e.stopPropagation()},onChange:function(t){return function(e,t){var r=u.indexOf(t),n=[];-1===r?n=n.concat(u,t):0===r?n=n.concat(u.slice(1)):r===u.length-1?n=n.concat(u.slice(0,-1)):r>0&&(n=n.concat(u.slice(0,r),u.slice(r+1))),p(n)}(0,e.id)}})}),(0,L.jsx)(D.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:e.name}),(0,L.jsx)(D.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:e.address}),(0,L.jsx)(D.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.phone}),(0,L.jsx)(D.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"left",children:e.owner}),(0,L.jsx)(D.Z,{className:"p-4 md:p-16",sx:{textAlign:"-webkit-center"},component:"th",scope:"row",align:"right",children:e.active?(0,L.jsx)(I.Z,{className:"text-green",size:20,children:"heroicons-outline:check-circle"}):(0,L.jsx)(I.Z,{className:"text-red",size:20,children:"heroicons-outline:minus-circle"})}),(0,L.jsx)(D.Z,{className:"p-4 md:p-16",sx:{textAlign:"-webkit-center"},component:"th",scope:"row",align:"right",children:e.active?(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(G.Z,{variant:"outlined",className:"text-red",onClick:function(){r(b([e.id]))},children:t("DISABLE")})}):(0,L.jsx)(G.Z,{variant:"outlined",className:"text-green",onClick:function(){r(x([e.id]))},children:t("ACTIVATE")})})]},e.id)}))})]})}),(0,L.jsx)(W.Z,{className:"shrink-0 border-t-1",component:"div",count:m.length,rowsPerPage:F,page:j,labelRowsPerPage:t("ROWS_PER_PAGE"),labelDisplayedRows:function(e){return"".concat(e.from,"-").concat(e.to," ").concat(t("PAGINATION").replace("{arg1}",e.count))},backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){P(t)},onRowsPerPageChange:function(e){O(e.target.value)}})]})}));var le=(0,i.Z)("restaurantsForOwnerTab",S)((function(){var e=(0,o.Z)((function(e){return e.breakpoints.down("lg")}));return(0,L.jsx)(a.Z,{header:(0,L.jsx)(O,{}),content:(0,L.jsx)(ce,{}),scroll:e?"normal":"content"})}))},44758:function(e,t,r){r.d(t,{Z:function(){return S}});var n=r(4942),a=r(63366),i=r(87462),o=r(47313),s=r(79637),c=r(17551),l=r(97423),d=r(54750),u=r(46417),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=r(91615),m=r(77342),x=r(88564),b=r(11778);function v(e){return(0,b.Z)("MuiCheckbox",e)}var Z=(0,r(29698).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],w=(0,x.ZP)(l.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t["color".concat((0,g.Z)(r.color))]]}})((function(e){var t,r=e.theme,a=e.ownerState;return(0,i.Z)({color:r.palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===a.color?r.palette.action.active:r.palette[a.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},(0,n.Z)(t,"&.".concat(Z.checked,", &.").concat(Z.indeterminate),{color:r.palette[a.color].main}),(0,n.Z)(t,"&.".concat(Z.disabled),{color:r.palette.action.disabled}),t))})),j=(0,u.jsx)(h,{}),k=(0,u.jsx)(p,{}),P=(0,u.jsx)(f,{}),S=o.forwardRef((function(e,t){var r,n,c=(0,m.Z)({props:e,name:"MuiCheckbox"}),l=c.checkedIcon,d=void 0===l?j:l,p=c.color,h=void 0===p?"primary":p,f=c.icon,x=void 0===f?k:f,b=c.indeterminate,Z=void 0!==b&&b,S=c.indeterminateIcon,y=void 0===S?P:S,F=c.inputProps,N=c.size,E=void 0===N?"medium":N,R=(0,a.Z)(c,C),I=Z?y:x,A=Z?y:d,L=(0,i.Z)({},c,{color:h,indeterminate:Z,size:E}),O=function(e){var t=e.classes,r=e.indeterminate,n=e.color,a={root:["root",r&&"indeterminate","color".concat((0,g.Z)(n))]},o=(0,s.Z)(a,v,t);return(0,i.Z)({},t,o)}(L);return(0,u.jsx)(w,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":Z},F),icon:o.cloneElement(I,{fontSize:null!=(r=I.props.fontSize)?r:E}),checkedIcon:o.cloneElement(A,{fontSize:null!=(n=A.props.fontSize)?n:E}),ownerState:L,ref:t},R,{classes:O}))}))}}]);