HackerPages.Services.HackerProfile = {
	getHackerProfile: function(userId) {
		let hacker = Hackers.findOne({ "userId": userId });

	    // Use binary logical operators (value preserving, & short-circuiting) to set defaults
	    let legalName = hacker && hacker.legalName || '';
	    let pseudonym = hacker && hacker.pseudonym || '';
	    let bestHack = hacker && hacker.bestHack  || '';

	    return { "legalName": legalName, "pseudonym": pseudonym, "bestHack": bestHack };
	},
	setHackerProfile: function(userId, legalName, pseudonym, email, bestHack) {
	    let hackerProfile = {
	      userId: userId,
	      legalName: legalName,
	      pseudonym: pseudonym,
	      email: email,
	      bestHack: bestHack
	    };

	    Hackers.insert(hackerProfile);
	}
}