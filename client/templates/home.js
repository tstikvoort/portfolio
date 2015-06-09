letTheMagicBegin = function() {
	magic = setInterval(function(){
		$('.flexbox .tile:nth-child(2n+1)').toggleClass('magic');
	}, 1000);
}
zoIsHetGenoeg = function() {
	clearTimeout(magic);
}

Meteor.subscribe('projects');
Template.home.helpers({
	projects: function() {
		return projects.find().fetch().splice(0,3);
	}
});