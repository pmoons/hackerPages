Hackers = new Mongo.Collection('hackers');

if (Meteor.isClient) {
	Meteor.subscribe('hackers');
}

