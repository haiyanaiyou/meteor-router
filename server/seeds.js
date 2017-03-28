if(Users.find().count() ===0){
	Users.insert({
		name:'dell',
		age:30,
		favorite:'电影'

	});
	Users.insert({
		name:'gane',
		age:22,
		favorite:'看书'

	});
	Users.insert({
		name:'bill',
		age:24,
		favorite:'睡觉'

	});
	Users.insert({
		name:'jane',
		age:32,
		favorite:'吐槽'

	});

}