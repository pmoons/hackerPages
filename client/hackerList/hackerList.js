Meteor.subscribe('hackers');

Template.hackerList.helpers({

  hackerData: function() {
   	return Hackers.find();
  
  }

});