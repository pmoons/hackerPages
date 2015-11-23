Meteor.publish('hackers', function(){
	return Hackers.find({ createdBy: this.userId }, 
		{fields:{legalName: true, pseudonyn: true, email: true, bestHack: true} });
});

Hackers.allow({
	insert: function () {
		return true;
	},

	update: function () {
		return true;
	},

});	

