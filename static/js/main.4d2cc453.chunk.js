(this.webpackJsonpofo_system=this.webpackJsonpofo_system||[]).push([[0],{270:function(e,t,a){e.exports=a(533)},279:function(e,t,a){},289:function(e,t,a){},294:function(e,t,a){},345:function(e,t,a){},354:function(e,t,a){},427:function(e,t,a){},429:function(e,t,a){},447:function(e,t,a){},527:function(e,t,a){},531:function(e,t,a){e.exports=a.p+"static/media/avatar.9aced879.jpg"},532:function(e,t,a){},533:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=a(20),o=a(21),s=a(23),m=a(22),u=a(24),p=a(150),d=a(80),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.children)}}]),t}(n.Component),f=(a(156),a(57)),h=(a(158),a(40));var b=a(246),y=a.n(b),g=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"jsonp",value:function(e){return new Promise((function(t,a){y()(e.url,{param:"callback"},(function(e,n){"success"===n.status?t(n):a(n.message)}))}))}}]),e}(),v=(a(279),a(104)),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDrop=function(){window.open("/#/login","_self")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({username:"jayce"}),setInterval((function(){var t=function(e){if(!e)return"";var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),l=t.getHours(),i=t.getMinutes(),c=t.getSeconds();return"".concat(a,"-").concat(n,"-").concat(r," ").concat(l,":").concat(i,":").concat(c)}((new Date).getTime());e.setState({systemTime:t})}),1e3)}},{key:"getWeatherAPIData",value:function(){g.jsonp({url:""}).then((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(f.a,{className:"header-top"},r.a.createElement(h.a,{span:24},r.a.createElement("span",null,"\u6b22\u8fce\uff0c",this.state.username),r.a.createElement("a",{onClick:this.handleDrop},"\u9000\u51fa"))),r.a.createElement(f.a,{className:"breadcrumb"},r.a.createElement(h.a,{span:4,className:"breadcrumb-title"},r.a.createElement("h2",null,this.props.menuName)),r.a.createElement(h.a,{span:20,className:"tip"},r.a.createElement("span",{className:"date"},this.state.systemTime),r.a.createElement("span",{className:"weather"},"\u6674\u8f6c\u591a\u4e91"))))}}]),t}(n.Component),k=Object(v.b)((function(e){return{menuName:e.menuName}}))(O),j=(a(289),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},"\u7248\u6743\u6240\u6709 : Jayce")}}]),t}(n.Component)),w=(a(198),a(144)),S=(a(291),a(91)),C=[{title:"\u9996\u9875",key:"/admin/home"},{title:"UI",key:"/admin/ui",children:[{title:"\u6309\u94ae",key:"/admin/ui/buttons"},{title:"\u5f39\u6846",key:"/admin/ui/modals"},{title:"\u52a0\u8f7d\u6846",key:"/admin/ui/spins"},{title:"\u901a\u77e5\u63d0\u9192\u6846",key:"/admin/ui/notifications"},{title:"\u8868\u683c",key:"/admin/ui/table"}]},{title:"\u8868\u5355",key:"/admin/form",children:[{title:"\u767b\u5f55",key:"/admin/form/login"},{title:"\u6ce8\u518c",key:"/admin/form/register"}]},{title:"\u5730\u56fe",key:"/admin/map",children:[{title:"\u5b9a\u4f4d",key:"/admin/map/position"},{title:"\u56fe\u5c42\u7f16\u8f91",key:"/admin/map/edit"}]},{title:"AntV\u5730\u56fe",key:"/admin/antv"}],N=(a(294),function(e){return{type:"SWITCH_MENU",menuName:e}}),x=S.a.SubMenu,M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={currentKey:""},a.handleClick=function(e){var t=e.item,n=e.key;(0,a.props.dispatch)(N(t.props.children.props.children)),a.setState({currentKey:n})},a.renderMenu=function(e){return e.map((function(e){return e.children?r.a.createElement(x,{title:e.title,key:e.key},a.renderMenu(e.children)):r.a.createElement(S.a.Item,{key:e.key},r.a.createElement(p.b,{to:e.key},e.title))}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this.renderMenu(C),t=window.location.hash.replace(/#|\?.*$/g,"");this.setState({currentKey:t,menuTreeNode:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"logo"},r.a.createElement(w.a,{size:"large"},"J"),r.a.createElement("h1",null,"Jayce")),r.a.createElement(S.a,{onClick:this.handleClick,selectedKeys:this.state.currentKey,theme:"dark",mode:"inline"},this.state.menuTreeNode))}}]),t}(n.Component),T=Object(v.b)()(M),L=(a(345),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"container"},r.a.createElement(h.a,{span:3,className:"nav-left"},r.a.createElement(T,null)),r.a.createElement(h.a,{span:21,className:"main"},r.a.createElement(k,null),r.a.createElement(f.a,{className:"content"},this.props.children),r.a.createElement(j,null)))}}]),t}(n.Component)),D=(a(52),a(28)),I=(a(61),a(12)),V=(a(124),a(54)),z=(a(110),a(47)),P=(a(111),a(5)),_=(a(112),a(38)),A=(a(173),a(50)),F=(a(354),A.a.Item),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},a.handleSubmit=function(e){a.setState({loading:!0});var t=a.props.form.getFieldsValue();a.props.form.validateFields((function(e,n){e||(console.log(t),setTimeout((function(){"admin"===t.username&&"admin"===t.password?(_.a.success("\u6b22\u8fce\u56de\u6765\uff0c".concat(t.username)),a.props.history.push("/admin/home")):_.a.error("\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"),a.setState({loading:!1})}),2e3))}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.loading;return r.a.createElement("div",{className:"login-page"},r.a.createElement(D.a,{title:"\u767b\u5f55",className:"login-card"},r.a.createElement(A.a,null,r.a.createElement(F,null,e("username",{initialValue:"admin",rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(P.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),r.a.createElement(F,null,e("password",{initialValue:"admin",rules:[{min:4,max:18,message:"\u5bc6\u7801\u957f\u5ea6\u5fc5\u987b\u57284-18\u4e4b\u95f4"}]})(r.a.createElement(z.a.Password,{prefix:r.a.createElement(P.a,{type:"lock"}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),r.a.createElement(F,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(V.a,{style:{float:"left"}},"\u8bb0\u4f4f\u5bc6\u7801")),r.a.createElement("a",{style:{float:"right"}},"\u5fd8\u8bb0\u5bc6\u7801")),r.a.createElement(F,null,r.a.createElement(I.a,{loading:t,type:"primary",onClick:this.handleSubmit},"\u767b\u5f55")))))}}]),t}(n.Component),J=A.a.create()(U),R=(a(182),a(48)),G=(a(427),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loaded:!1,size:"default"},a.Load=function(){a.setState({loaded:!0})},a.StopLoad=function(){a.setState({loaded:!1})},a.changeSize=function(e){var t=e.target.value;a.setState({size:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loaded,a=e.size;return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u57fa\u7840\u6309\u94ae"},r.a.createElement(I.a,{type:"primary"},"\u4e3b\u6309\u94ae"),r.a.createElement(I.a,null,"\u9ed8\u8ba4\u6309\u94ae"),r.a.createElement(I.a,{type:"ghost"},"\u6b21\u6309\u94ae"),r.a.createElement(I.a,{type:"dashed"},"\u865a\u7ebf\u6309\u94ae"),r.a.createElement(I.a,{type:"danger"},"\u5371\u9669\u6309\u94ae"),r.a.createElement(I.a,{type:"link"},"\u94fe\u63a5\u6309\u94ae"),r.a.createElement(I.a,{disabled:!0},"\u7981\u7528\u6309\u94ae")),r.a.createElement(D.a,{title:"\u56fe\u5f62\u6309\u94ae"},r.a.createElement(I.a,{icon:"plus"},"\u521b\u5efa"),r.a.createElement(I.a,{icon:"edit"},"\u7f16\u8f91"),r.a.createElement(I.a,{icon:"delete"},"\u5220\u9664"),r.a.createElement(I.a,{shape:"circle",icon:"search"}),r.a.createElement(I.a,{shape:"round",type:"primary",icon:"search"},"\u641c\u7d22"),r.a.createElement(I.a,{type:"primary",icon:"download"},"\u4e0b\u8f7d")),r.a.createElement(D.a,{title:"\u52a0\u8f7d\u6309\u94ae"},r.a.createElement(I.a,{type:"primary",icon:"loading"},"\u52a0\u8f7d\u56fe\u6807"),r.a.createElement(I.a,{type:"primary",loading:!0},"\u52a0\u8f7d\u6309\u94ae"),r.a.createElement(I.a,{shape:"circle",loading:!0}),r.a.createElement(I.a,{loading:t,onClick:this.Load},"\u70b9\u51fb\u52a0\u8f7d"),r.a.createElement(I.a,{type:"primary",onClick:this.StopLoad},"\u505c\u6b62\u52a0\u8f7d")),r.a.createElement(D.a,{title:"\u6309\u94ae\u7ec4"},r.a.createElement(I.a.Group,null,r.a.createElement(I.a,{type:"primary",icon:"left"},"\u8fd4\u56de"),r.a.createElement(I.a,{type:"primary",icon:"right"},"\u524d\u8fdb")),r.a.createElement(I.a.Group,null,r.a.createElement(I.a,{type:"primary"},r.a.createElement(P.a,{type:"left"}),"\u8fd4\u56de"),r.a.createElement(I.a,{type:"primary"},"\u524d\u8fdb",r.a.createElement(P.a,{type:"right"})))),r.a.createElement(D.a,{title:"\u6309\u94ae\u5c3a\u5bf8"},r.a.createElement(R.a.Group,{value:a,onChange:this.changeSize},r.a.createElement(R.a,{value:"small"},"\u5c0f"),r.a.createElement(R.a,{value:"default"},"\u4e2d"),r.a.createElement(R.a,{value:"large"},"\u5927"),r.a.createElement(I.a,{size:a,type:"primary"},"\u6d4b\u8bd5\u5927\u5c0f"),r.a.createElement(I.a,{size:a},"\u6d4b\u8bd5\u5927\u5c0f"))))}}]),t}(n.Component)),Y=(a(132),a(59)),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement(D.a,null,r.a.createElement(Y.a,{image:Y.a.PRESENTED_IMAGE_SIMPLE})))}}]),t}(n.Component),W=(a(429),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-wrap"},r.a.createElement("ul",null,r.a.createElement("li",null,"\u5df2\u7ecf\u5b8c\u5584\u7684\u529f\u80fd :"),r.a.createElement("ul",null,r.a.createElement("li",null,"UI \u5168\u90e8"),r.a.createElement("li",null,"\u8868\u5355 \u5168\u90e8"),r.a.createElement("li",null,"\u5730\u56fe\u5b9a\u4f4d"),r.a.createElement("li",null,"\u5207\u6362\u5730\u56fe"),r.a.createElement("li",null,"\u767b\u5f55\u6ce8\u518c\u754c\u9762"),r.a.createElement("li",null,"\u7f16\u8f91\u4fe1\u606f\u7684\u754c\u9762"))),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f85\u5b8c\u5584\u7684\u529f\u80fd :"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u767b\u5f55\u6ce8\u518c\u540e\u7aef"),r.a.createElement("li",null,"\u7f16\u8f91\u4fe1\u606f\u540e\u7aef"),r.a.createElement("li",null,"AntV\u5730\u56fe\u6d4b\u8bd5\u5b58\u5728\u95ee\u9898\uff0c\u6b63\u5728\u65bd\u5de5"))))}}]),t}(n.Component)),K=(a(221),a(90)),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,formVisible:!1,confirmLoading:!1},a.showDefault=function(){a.setState({visible:!0})},a.showForm=function(){a.setState({formVisible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1,formVisible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1,formVisible:!1})},a.handleFormOk=function(){a.setState({ModalText:"\u63d0\u4ea4\u4e2d...",confirmLoading:!0}),setTimeout((function(){a.setState({formVisible:!1,confirmLoading:!1})}),3e3)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.formVisible,n=e.confirmLoading,l=e.ModalText;return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u57fa\u672c\u5f39\u6846"},r.a.createElement(I.a,{type:"primary",onClick:this.showDefault},"\u70b9\u51fb\u663e\u793a"),r.a.createElement(K.a,{title:"\u57fa\u672c\u5f39\u6846",visible:t,onOk:this.handleOk,onCancel:this.handleCancel},r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."))),r.a.createElement(D.a,{title:"\u5f02\u6b65\u63d0\u4ea4"},r.a.createElement(I.a,{type:"primary",onClick:this.showForm},"\u70b9\u51fb\u663e\u793a"),r.a.createElement(K.a,{title:"\u8868\u5355",visible:a,onOk:this.handleFormOk,confirmLoading:n,onCancel:this.handleCancel,okText:"\u63d0\u4ea4",cancelText:"\u53d6\u6d88"},r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,l))))}}]),t}(n.Component),B=(a(431),a(255)),H=(a(433),a(254)),Z=(a(222),a(81)),$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},a.toggle=function(e){a.setState({loading:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u57fa\u672c\u7528\u6cd5"},r.a.createElement(Z.a,null)),r.a.createElement(D.a,{title:"\u5404\u79cd\u5927\u5c0f"},r.a.createElement(Z.a,{size:"small"}),r.a.createElement(Z.a,null),r.a.createElement(Z.a,{size:"large"})),r.a.createElement(D.a,{title:"\u70b9\u51fb\u52a0\u8f7d"},r.a.createElement(Z.a,{spinning:this.state.loading,tip:"\u52a0\u8f7d\u4e2d..."},r.a.createElement(H.a,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})),r.a.createElement("div",{style:{marginTop:16}},"\u70b9\u51fb\u5207\u6362\u52a0\u8f7d\u72b6\u6001 :",r.a.createElement(B.a,{style:{marginLeft:16},checked:this.state.loading,onChange:this.toggle}))))}}]),t}(n.Component),Q=(a(437),a(105)),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={config:{message:"\u53d1\u5de5\u8d44\u4e86",description:"\u4e0a\u4e2a\u6708\u8003\u52e418\uff0c\u8fdf\u52308\u5929\uff0c\u5b9e\u53d1\u5de5\u8d44250\uff0c\u8bf7\u7b11\u7eb3"}},a.openDefaultNotification=function(){Q.a.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:function(){console.log("Notification Clicked!")}})},a.openNotification=function(e,t){t&&Q.a.config({placement:t}),Q.a[e]?Q.a[e](a.state.config):Q.a.error({message:"\u9519\u8bef",description:"\u4e0d\u5b58\u5728\u6b64\u7c7b\u578b\u7684\u901a\u77e5\u6846"})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u57fa\u672c\u7528\u6cd5"},r.a.createElement(I.a,{type:"primary",onClick:this.openDefaultNotification},"\u70b9\u51fb\u901a\u77e5"),"\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"),r.a.createElement(D.a,{title:"\u5e26\u6709\u56fe\u6807\u7684\u901a\u77e5\u6846"},r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("success")}},"\u6210\u529f"),r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("info")}},"\u4fe1\u606f"),r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("warning")}},"\u8b66\u544a"),r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("error")}},"\u9519\u8bef")),r.a.createElement(D.a,{title:"\u81ea\u5b9a\u4e49\u4f4d\u7f6e\u7684\u901a\u77e5\u6846"},r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("success","topLeft")}},"\u6210\u529f(\u5de6\u4e0a)"),r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("info","topRight")}},"\u4fe1\u606f(\u53f3\u4e0a)"),r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("warning","bottomLeft")}},"\u8b66\u544a(\u5de6\u4e0b)"),r.a.createElement(I.a,{type:"primary",onClick:function(){return e.openNotification("error","bottomRight")}},"\u9519\u8bef(\u53f3\u4e0b)")))}}]),t}(n.Component),te=A.a.Item,ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){var t=a.props.form.getFieldsValue();a.props.form.validateFields((function(e,a){e||_.a.success("\u606d\u559c".concat(t.username,"\u63d0\u4ea4\u6210\u529f\uff0c\u5bc6\u7801\u4e3a").concat(t.password))}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u767b\u5f55\u6c34\u5e73\u8868\u5355"},r.a.createElement(A.a,{layout:"inline"},r.a.createElement(te,null,r.a.createElement(z.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})),r.a.createElement(te,null,r.a.createElement(z.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})),r.a.createElement(te,null,r.a.createElement(I.a,{type:"primary"},"\u767b\u5f55")))),r.a.createElement(D.a,{title:"\u767b\u5f55\u8868\u5355"},r.a.createElement(A.a,{style:{maxWidth:300}},r.a.createElement(te,null,e("username",{initialValue:"Jayce",rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(P.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),r.a.createElement(te,null,e("password",{initialValue:"123",rules:[{min:6,max:18,message:"\u5bc6\u7801\u957f\u5ea6\u5fc5\u987b\u57286-18\u4e4b\u95f4"}]})(r.a.createElement(z.a.Password,{prefix:r.a.createElement(P.a,{type:"lock"}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),r.a.createElement(te,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(V.a,null,"\u8bb0\u4f4f\u5bc6\u7801")),r.a.createElement("a",{style:{float:"right"}},"\u5fd8\u8bb0\u5bc6\u7801")),r.a.createElement(te,null,r.a.createElement(I.a,{type:"primary",onClick:this.handleSubmit},"\u767b\u5f55")))))}}]),t}(n.Component),ne=A.a.create()(ae),re=(a(535),a(265)),le=(a(536),a(264)),ie=(a(444),a(266)),ce=(a(183),a(56)),oe=a(25),se=a.n(oe),me=(a(447),A.a.Item),ue=R.a.Group,pe=ce.a.Option,de=["\u5c0f\u5b66","\u521d\u4e2d","\u9ad8\u4e2d","\u672c\u79d1","\u4e13\u79d1","\u7814\u7a76\u751f"],Ee=["\u5531","\u8df3","rap","\u7bee\u7403","\u6572\u4ee3\u7801","\u6e38\u6cf3","\u65c5\u6e38"];function fe(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||_.a.error("\u53ea\u80fd\u4e0a\u4f20JPG/PNG\u6587\u4ef6!");var a=e.size/1024/1024<2;return a||_.a.error("\u6587\u4ef6\u5927\u5c0f\u5fc5\u987b\u5c0f\u4e8e2MB!"),t&&a}var he=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={imageUrl:"",loading:!1},a.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file.originFileObj,(function(e){return a.setState({imageUrl:e,loading:!1})})):a.setState({loading:!0})},a.handleSubmit=function(){var e=a.props.form.getFieldsValue();console.log(e),a.props.form.validateFields((function(t,a){t||(e.checked?_.a.success("\u6ce8\u518c\u6210\u529f\uff0c\u6b22\u8fce".concat(e.username)):_.a.info("\u5c1a\u672a\u540c\u610f\u4e2a\u4eba\u534f\u8bae"))}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.imageUrl,n=t.loading,l={labelCol:{xs:24,sm:4},wrapperCol:{xs:24,sm:12}},i={wrapperCol:{xs:24,sm:{span:12,offset:4}}},c=r.a.createElement("div",null,r.a.createElement(P.a,{type:n?"loading":"plus"}),r.a.createElement("div",{className:"ant-upload-text"},n?"\u4e0a\u4f20\u4e2d":"\u70b9\u51fb\u4e0a\u4f20"));return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u6ce8\u518c\u8868\u5355"},r.a.createElement(A.a,null,r.a.createElement(me,Object.assign({label:"\u7528\u6237\u540d"},l),e("username",{initialValue:"Jayce",rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(P.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),r.a.createElement(me,Object.assign({label:"\u5bc6\u7801"},l),e("password",{rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},{min:6,max:18,message:"\u5bc6\u7801\u957f\u5ea6\u5fc5\u987b\u57286-18\u4e4b\u95f4"}]})(r.a.createElement(z.a.Password,{prefix:r.a.createElement(P.a,{type:"lock"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),r.a.createElement(me,Object.assign({label:"\u6027\u522b"},l),e("sex",{initialValue:1,rules:[]})(r.a.createElement(ue,null,r.a.createElement(R.a,{value:1},"\u7537"),r.a.createElement(R.a,{value:2},"\u5973")))),r.a.createElement(me,Object.assign({label:"\u5e74\u9f84"},l),e("age",{initialValue:18,rules:[]})(r.a.createElement(ie.a,null))),r.a.createElement(me,Object.assign({label:"\u5b66\u5386"},l),e("edu",{initialValue:"3",rules:[]})(r.a.createElement(ce.a,null,de.map((function(e,t){return r.a.createElement(pe,{key:t},e)}))))),r.a.createElement(me,Object.assign({label:"\u7231\u597d (\u53ef\u81ea\u5b9a\u4e49\u7f16\u8f91) "},l),e("habits",{initialValue:["0","1","2","3"],rules:[]})(r.a.createElement(ce.a,{mode:"tags"},Ee.map((function(e,t){return r.a.createElement(pe,{key:t},e)}))))),r.a.createElement(me,Object.assign({label:"\u751f\u65e5"},l),e("birthday",{initialValue:se()("2000-1-1"),rules:[]})(r.a.createElement(le.a,null))),r.a.createElement(me,Object.assign({label:"\u5934\u50cf"},l),e("userImg")(r.a.createElement(re.a,{listType:"picture-card",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:fe,onChange:this.handleChange,className:"avatar-uploader"},a?r.a.createElement("img",{src:a,alt:"avatar",style:{width:"100%"}}):c))),r.a.createElement(me,i,e("checked")(r.a.createElement(V.a,null,"\u6211\u5df2\u7ecf\u9605\u8bfb\u5e76\u540c\u610f",r.a.createElement("a",null,"\u7528\u6237\u534f\u8bae")))),r.a.createElement(me,i,r.a.createElement(I.a,{type:"primary",onClick:this.handleSubmit},"\u6ce8\u518c")))))}}]),t}(n.Component),be=A.a.create()(he),ye=(a(534),a(195)),ge=(a(499),a(259)),ve=(a(223),a(151)),Oe=[{title:"\u59d3\u540d",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("a",null,e)}},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u6807\u7b7e",key:"tags",dataIndex:"tags",render:function(e){return r.a.createElement("span",null,e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),r.a.createElement(ve.a,{color:t,key:e},e.toUpperCase())})))}},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return r.a.createElement("span",null,r.a.createElement("a",null,"Invite ",t.name),r.a.createElement(ge.a,{type:"vertical"}),r.a.createElement("a",null,"Delete"))}}],ke=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],je=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],loading:!1},a.loadData=function(){setTimeout((function(){a.setState({data:ke}),a.setState({loading:!1})}),3e3)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.loadData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u57fa\u672c\u8868\u683c"},r.a.createElement(ye.a,{columns:Oe,dataSource:ke})),r.a.createElement(D.a,{title:"\u52a8\u6001\u52a0\u8f7d\u8868\u683c"},r.a.createElement(ye.a,{columns:Oe,dataSource:this.state.data,loading:this.state.loading,pagination:!1})))}}]),t}(n.Component),we=(a(527),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D.a,{title:"\u57fa\u672c\u56fe\u5c42"},r.a.createElement(I.a,null,"\u5730\u56fe\u6d4b\u8bd5")))}}]),t}(n.Component)),Se=a(245),Ce=a(242),Ne=a(241),xe=a(262),Me=a.n(xe),Te=(a(529),a(267)),Le=a(243),De=a(244),Ie=D.a.Meta,Ve=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={editVisible:!1,editLoading:!1},a.showMore=function(){var e=a.props,t=e.position,n=e.title,l=e.description,i=e.time;l&&K.a.info({title:"\u4fe1\u606f\u8be6\u60c5",content:r.a.createElement("div",null,r.a.createElement("span",null,"\u5f53\u524d\u5750\u6807\u7c7b\u578b : ",n),r.a.createElement("br",null),r.a.createElement("span",null,"\u7eac\u5ea6 : ",t[0]),r.a.createElement("br",null),r.a.createElement("span",null,"\u7ecf\u5ea6 : ",t[1]),r.a.createElement("br",null),r.a.createElement("span",null,"\u63cf\u8ff0\u4fe1\u606f : ",l),r.a.createElement("br",null),r.a.createElement("span",null,"\u4fe1\u606f\u6700\u540e\u4fee\u6539\u65f6\u95f4 : ",i))})},a.SaveMsg=function(){a.setState({editLoading:!0}),setTimeout((function(){_.a.success("\u4fdd\u5b58\u6210\u529f"),a.setState({editLoading:!1,editVisible:!1})}),2e3)},a.delMsg=function(){K.a.confirm({title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u5417",content:"\u5220\u9664\u540e\u5c06\u4e0d\u4f1a\u663e\u793a\u8fd9\u4e2a\u5750\u6807\u70b9",okText:"\u5220\u9664",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){setTimeout((function(){_.a.success("\u5220\u9664\u6210\u529f")}),2e3)}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.position,l=t.title,i=t.description,c=this.state,o=c.editVisible,s=c.editLoading;return r.a.createElement("div",null,r.a.createElement(K.a,{title:"\u7f16\u8f91\u5185\u5bb9",visible:o,confirmLoading:s,onOk:this.SaveMsg,onCancel:function(){e.setState({editLoading:!1,editVisible:!1})},okText:"\u4fdd\u5b58",cancelText:"\u53d6\u6d88"},r.a.createElement(z.a.TextArea,{rows:4,defaultValue:i})),r.a.createElement(Le.a,{position:n},r.a.createElement(De.a,null,r.a.createElement(D.a,{style:{width:250},loading:!1,actions:[r.a.createElement(P.a,{type:"ellipsis",key:"ellipsis",onClick:this.showMore}),r.a.createElement(P.a,{type:"edit",key:"edit",onClick:function(){e.setState({editVisible:!0})}}),r.a.createElement(P.a,{type:"delete",key:"delete",onClick:this.delMsg})]},r.a.createElement(Te.a,{loading:!i,avatar:!0,active:!0},r.a.createElement(Ie,{avatar:r.a.createElement(w.a,{icon:"user",src:a(531)}),title:l,description:i}))))))}}]),t}(n.Component),ze=[{title:"\u5929\u5730\u56fe",MapInfo:[{url:"http://t{s}.tianditu.com/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a",subdomains:["0","1","2","3","4","5","6","7"]},{url:"http://t{s}.tianditu.com/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a",subdomains:["0","1","2","3","4","5","6","7"]}]},{title:"\u5929\u5730\u56fe\u5f71\u50cf",MapInfo:[{url:"http://t{s}.tianditu.com/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a",subdomains:["0","1","2","3","4","5","6","7"]},{url:"http://t{s}.tianditu.com/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a",subdomains:["0","1","2","3","4","5","6","7"]}]},{title:"\u9ad8\u5fb7\u5730\u56fe",MapInfo:[{url:"http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",subdomains:["1","2","3","4"]}]},{title:"\u9ad8\u5fb7\u5f71\u50cf",MapInfo:[{url:"http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",subdomains:["1","2","3","4"]},{url:"http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",subdomains:["1","2","3","4"]}]},{title:"\u8c37\u6b4c\u5730\u56fe",MapInfo:[{url:"http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",subdomains:[]}]},{title:"\u8c37\u6b4c\u5f71\u50cf",MapInfo:[{url:"http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",subdomains:[]}]},{title:"\u667a\u56fe\u5730\u56fe",MapInfo:[{url:"http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",subdomains:[]}]}],Pe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={markers:[],hasLocation:!1,loading:!1,center:[27.902326,112.920405],layer:[r.a.createElement(Se.a,{url:"http://t{s}.tianditu.com/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a",subdomains:["0","1","2","3","4","5","6","7"]}),r.a.createElement(Se.a,{url:"http://t{s}.tianditu.com/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a",subdomains:["0","1","2","3","4","5","6","7"]})]},a.getLocation=function(){a.setState({loading:!0}),navigator.geolocation?navigator.geolocation.getCurrentPosition(a.onSuccess,a.onError):alert("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5730\u7406\u5b9a\u4f4d")},a.onSuccess=function(e){var t=[e.coords.latitude,e.coords.longitude],n={title:"\u4f60\u7684\u4f4d\u7f6e",description:"\u6682\u65e0\u4fe1\u606f",time:a.getLocalTime(),position:t},r=a.state.markers;r.push(n),a.setState({markers:r,loading:!1,center:t}),_.a.success("\u83b7\u53d6\u4f4d\u7f6e\u4fe1\u606f\u6210\u529f\uff01")},a.onError=function(e){switch(e.code){case e.PERMISSION_DENIED:_.a.error("\u60a8\u62d2\u7edd\u5bf9\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e\u7684\u8bf7\u6c42");break;case e.POSITION_UNAVAILABLE:_.a.error("\u4f4d\u7f6e\u4fe1\u606f\u662f\u4e0d\u53ef\u7528\u7684");break;case e.TIMEOUT:_.a.error("\u8bf7\u6c42\u60a8\u7684\u5730\u7406\u4f4d\u7f6e\u8d85\u65f6");break;case e.UNKNOWN_ERROR:_.a.error("\u672a\u77e5\u9519\u8bef");break;default:_.a.error("\u672a\u77e5\u9519\u8bef")}a.setState({loading:!1})},a.getLocalTime=function(){return function(e){if(!e)return"";var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),l=t.getHours(),i=t.getMinutes();return"".concat(a,"-").concat(n,"-").concat(r," ").concat(l,":").concat(i)}((new Date).getTime())},a.setView=function(){a.setState({center:[27,112]})},a.renderMarkers=function(e){return e.map((function(e,t){return r.a.createElement(Ve,{key:t,title:e.title,description:e.description,time:e.time,position:e.position})}))},a.changeLayer=function(e){var t=ze[e].MapInfo.map((function(e){return r.a.createElement(Se.a,{url:e.url,subdomains:e.subdomains})}));a.setState({layer:t})},a.renderMapMenu=function(){var e=ce.a.Option;return ze.map((function(t,a){return r.a.createElement(e,{value:a},t.title)}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({markers:[{title:"\u5c0f\u6a58\u5b50\u7684\u53d1\u5e03\u5185\u5bb9",description:"\u8fd9\u91cc\u7684xx\u7f8e\u98df\u8d85\u7ea7\u597d\u5403\uff0c\u5927\u5bb6\u5feb\u6765\u5403\u554a",time:"2019-12-12 12:52",position:[27.901126,112.920405]},{title:"\u7231\u9171\u7684\u53d1\u5e03\u5185\u5bb9",description:"\u5012\u9709\u900f\u4e86\uff0c\u5c45\u7136\u5728\u8fd9\u91cc\u8e29\u4e86\u4e00\u4e2a\u5751",time:"2019-12-18 10:32",position:[27.902526,112.920405]},{title:"\u963f\u864e\u7684\u53d1\u5e03\u5185\u5bb9",description:"\u5728\u51b7\u98ce\u4e2d\u5b9e\u4e60\uff0c\u545c\u545c\u545c\u545c",time:"2019-12-21 9:15",position:[27.902026,112.922405]}]})}),2e3)}},{key:"render",value:function(){var e=this.state,t=e.markers,a=e.center,n=e.layer;return r.a.createElement("div",null,r.a.createElement(I.a,{onClick:this.getLocation,loading:this.state.loading},"\u5b9a\u4f4d"),r.a.createElement(I.a,{onClick:this.setView},"\u79fb\u52a8"),r.a.createElement(ce.a,{defaultActiveFirstOption:!0,defaultValue:"\u5929\u5730\u56fe",style:{width:120},onChange:this.changeLayer},this.renderMapMenu()),r.a.createElement(Ce.a,{className:"map-div",center:a,zoom:15,useFlyTo:!0,maxZoom:18,minZoom:4},r.a.createElement(Ne.a,null,n),r.a.createElement(Me.a,{showCoverageOnHover:!0},this.renderMarkers(t))))}}]),t}(n.Component),_e=(a(532),[51.505,-.09]),Ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(Ce.a,{id:"test_map",center:_e,zoom:13},r.a.createElement(Se.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"test"}),r.a.createElement(Le.a,{position:_e},r.a.createElement(De.a,null,r.a.createElement("button",null,"test"),"\u8fd9\u662f\u4e00\u4e2a\u5f39\u6846")))}}]),t}(n.Component),Fe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D.a,null,r.a.createElement(Y.a,{image:Y.a.PRESENTED_IMAGE_SIMPLE})))}}]),t}(n.Component),Ue=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(E,null,r.a.createElement(d.a,{exact:!0,path:"/",component:J}),r.a.createElement(d.a,{path:"/test",component:Ae}),r.a.createElement(d.a,{path:"/login",component:J}),r.a.createElement(d.a,{path:"/admin",render:function(){return r.a.createElement(L,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/admin/home",component:W}),r.a.createElement(d.a,{path:"/admin/ui/buttons",component:G}),r.a.createElement(d.a,{path:"/admin/ui/modals",component:q}),r.a.createElement(d.a,{path:"/admin/ui/spins",component:$}),r.a.createElement(d.a,{path:"/admin/ui/notifications",component:ee}),r.a.createElement(d.a,{path:"/admin/ui/table",component:je}),r.a.createElement(d.a,{path:"/admin/form/login",component:ne}),r.a.createElement(d.a,{path:"/admin/form/register",component:be}),r.a.createElement(d.a,{path:"/admin/map/position",component:Pe}),r.a.createElement(d.a,{path:"/admin/map/edit",component:Fe}),r.a.createElement(d.a,{path:"/admin/antv",component:we}),r.a.createElement(d.a,{component:X})))}})))}}]),t}(n.Component),Je=a(115),Re=a(263);function Ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ge(a,!0).forEach((function(t){Object(Re.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ge(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Xe={menuName:"\u9996\u9875"},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_MENU":return Ye({},e,{menuName:t.menuName});default:return e}},Ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Je.b,qe=Object(Je.c)(We,Ke());i.a.render(r.a.createElement(v.a,{store:qe},r.a.createElement(Ue,null)),document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.4d2cc453.chunk.js.map