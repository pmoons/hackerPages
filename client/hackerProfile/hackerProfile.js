Meteor.subscribe('hackers');

Template.hackerProfile.helpers({

  hackerProfile: function() {
    let hacker = Hackers.findOne({ "userId": Meteor.userId() });

    let legalName = hacker && hacker.legalName || '';
    let pseudonym = hacker && hacker.pseudonym || '';
    let bestHack = hacker && hacker.bestHack  || '';

    return { "legalName": legalName, "pseudonym": pseudonym, "bestHack": bestHack };
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

    let hackerProfile = {
      userId: userId,
      legalName: legalName,
      pseudonym: pseudonym,
      email: email,
      bestHack: bestHack
    };

    Hackers.insert(hackerProfile);

  }

});
