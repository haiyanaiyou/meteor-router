Template.registerHelper("isActive",function(routeName){
	//注册一个isActive的全局helper，判断当前路由名称和传入的路由名称是否相同，如果相同就传入 active 字符串
	if(Router.current().route.getName() ===routeName){
		return 'active';

	}

});