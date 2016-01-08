Meteor.subscribe('hackers');

Template.hackerList.helpers({

  hackerData: HackerPages.Services.HackerList.getHackerData

});