Template.hackerProfile.helpers({

	legalName: function() {
		try {

			let hacker = Hackers.findOne( {hackerProfile.userId: Meteor.userId()}, {fields: {hackerProfile.legalName: 1}} );

			if (Meteor.user() && hacker) {
				return hacker.legalName;
			
			}

			console.log("Ran the try.");
			console.log(hacker);

		} catch(e) {
				console.log("Encountered an error.");
				console.log(e);		
		
		}

	}

	//will complete pseudonym and bestHack when the code above is working.

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
		}

		Hackers.insert({hackerProfile});

	}

});

