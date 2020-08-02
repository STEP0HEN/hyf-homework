class Email {
	constructor(subject, body) {
		this.subject = subject;
		this.body = body;
	}
}

class SpamDetector {
	badWordCheck(email) {
		const badWords = ["viagra", "offer", "free", "business proposal"];

		const emailBody = email.body;
		const emailBodyIntoArray = emailBody.split(" ");

		const badWordsInEmail = emailBodyIntoArray.filter((item) => {
			return badWords.includes(item.toLowerCase());
		});

		if (badWordsInEmail.length !== 0) {
			return true;
		} else {
			return false;
		}
	}

	subjectCheck(email) {
		const emailSubject = email.subject;

		if (emailSubject.toLowerCase() === "hello") {
			return true;
		} else {
			return false;
		}
	}
	upperCaseCheck(email) {
		const emailBody = email.body;
		const emailBodyIntoArray = emailBody.split("");
		const upperCaseArray = emailBodyIntoArray.filter((words) => {
			return words == words.toUpperCase();
		});

		const percentageCheck =
			(upperCaseArray.length * 100) / emailBodyIntoArray.length;

		if (percentageCheck > 60) {
			return true;
		} else {
			return false;
		}
	}

	isSpam(email) {
		if (
			this.badWordCheck(email) === true ||
			this.upperCaseCheck(email) === true ||
			this.subjectCheck(email) === true
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
