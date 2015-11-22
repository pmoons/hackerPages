Hackers = new Mongo.Collection('hackers');

Meteor.publish('hackers', function(){
	return Hackers.find();
});

Hackers.allow({
	insert: function () {
		return true;
	},

	update: function () {
		return true;
	},

});