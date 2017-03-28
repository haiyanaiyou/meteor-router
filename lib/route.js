Router.configure({layoutTemplate:'layout'});
Router.route("/",function(){
	this.render("homepage");
});
Router.route("/aboutus",function(){
	this.render("aboutus");
});
Router.route("/contactus",function(){
	//个性模板使用时，如果是相对比较简单的模板直接layout调用就可以，如果
	//是相对比较复杂的模板除了运用layout 还要用render指定要调用的模板

	this.layout("contactus");
});
Router.route("/userlist",function(){
	this.render("userlist",{
		data:function(){
			return {users: Users.find()};
		}
	});

});
// Router.route("/user/:_id",function(){
// 	userInfo=Users.findOne({_id:this.params._id});
// 	this.render('user',{
// 		data:function(){
// 			return userInfo;

// 		}
// 	});
// });
Router.route("/user/:_id",{controller:'UserController'});