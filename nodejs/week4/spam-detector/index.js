class Email {
	constructor(subject, body) {
		this.subject = subject;
		this.body = body;
	}
}

class SpamDetector {
	hasBadWord(email) {
		const badWords = ["viagra", "offer", "free", "business proposal"];

		const emailBody = email.body;
		const words = emailBody.split(" ");

		const badWordsInEmail = words.filter((word) => {
			return badWords.includes(word.toLowerCase());
		});

		return badWordsInEmail.length !== 0;
	}

	subjectCheck(email) {
		if (email.subject.toLowerCase() === "hello") {
			return true;
		} else {
			return false;
		}
	}

	hasMostlyUpperCaseCharacters(text) {
		const words = text.body.split(" ");
		const upperCaseArray = words.filter((word) => {
			return word === word.toUpperCase();
		});

		const percentageCheck = (upperCaseArray.length * 100) / words.length;

		return percentageCheck > 60;
	}

	isSpam(email) {
		if (
			this.hasBadWord(email) ||
			this.hasMostlyUpperCaseCharacters(email) ||
			this.subjectCheck(email)
		) {
			return "It's a spam";
		} else {
			return "not spam";
		}
	}
}

const spamDetector = new SpamDetector();

const proposalEmail = new Email(
	"Dear Sir",
	"This is a viagra advertisement mail"
);
const emailFromOldFriend = new Email(
	"Hello old friend",
	"Long time no see , when should we hang out again??"
);
const emailFromCompany = new Email(
	"Hi Stephen",
	"Did you submit your homework?"
);
const emailFromUnknownSender = new Email("Hello", "businnes proposal here");
const advertisementEmail = new Email(
	"Hello customer",
	"we are giving free computers"
);

console.log(spamDetector.isSpam(emailFromUnknownSender));
console.log(spamDetector.isSpam(emailFromOldFriend));
console.log(spamDetector.isSpam(advertisementEmail));
console.log(spamDetector.isSpam(emailFromCompany));
console.log(spamDetector.isSpam(proposalEmail));
