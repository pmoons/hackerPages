Meteor.subscribe('hackers');

Template.hackerProfile.helpers({

  hackerProfile: function() {
    let userId = Meteor.userId();

    return HackerPages.Services.HackerProfile.getHackerProfile(userId);
  }
});

Template.hackerProfile.events({
  'click #submit-profile' : function(event, template) {
    event.preventDefault();

    let userId = Meteor.userId();
    let legalName = template.find('#legal-name').value;
    let pseudonym = template.find('#pseudonym').value;
    let email = template.find('#email').value;
    let bestHack = template.find('#best-hack').value;

    return HackerPages.Services.HackerProfile.setHackerProfile(userId, legalName, pseudonym, email, bestHack);
  }

});
