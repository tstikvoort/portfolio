Meteor.publish('projects', function(){
	return projects.find();
});
Meteor.publish('tools', function(){
	return tools.find();
});