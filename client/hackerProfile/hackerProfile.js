Template.hackerProfile.events({
	'click #submit-profile' : function(event, template) {
		let legalName = template.find('#legal-name').value;
		let pseudonym = template.find('#pseudonym').value;
		let email = template.find('#email').value;
		let bestHack = template.find('#best-hack').value;

		let hackerProfile = {
			legalName: legalName,
			pseudonym: pseudonym,
			email: email,
			bestHack: bestHack
		}

		Hackers.insert(hackerProfile);
		alert("Added: " + hackerProfile.legalName);	

	}

});

