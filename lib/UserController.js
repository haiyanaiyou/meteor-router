UserController=RouteController.extend({
	template:'user',
	data:function(){
		return Users.findOne({_id:this.params._id});
	}
});