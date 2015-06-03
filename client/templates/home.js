Meteor.subscribe('projects');
Template.home.helpers({
	projects: function() {
		return projects.find().fetch().splice(0,3);
	}
});
