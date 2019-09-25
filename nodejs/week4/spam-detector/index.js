class Email {
    constructor(subject, body) {
        this.subject = subject;
        this.body = body
    }
}


class SpamDetector {
    // Count percentage of uppercase letters
    checkPercentage (email) {
        const sumLetters = email.subject.length + email.body.length;
        const sumOfUppercase = checkNumberOfUppercase(email.subject) + checkNumberOfUppercase(email.body);
        const percentageOfUpperCase = sumOfUppercase / sumLetters * 100;
        if (percentageOfUpperCase >= 60) {
            return true
        } else {
            return false
        }
    };

    // Check if email contains specific words
    containWords (email) {
        const words = ['viagra', 'offer', 'free', 'businnes'];
        const wordsOfSubject = email.subject.split(' ');
        const wordsOfSubjectTrimed = trimWords(wordsOfSubject);

        const wordsOfBody = email.body.split(' '); 
        const wordsOfBodyTrimed = trimWords(wordsOfBody);
        
        const matchingWordsOfSubject = words.filter(value => wordsOfSubjectTrimed.includes(value));
        const matchingWordsOfBody = words.filter(value => wordsOfBodyTrimed.includes(value));

        if (matchingWordsOfSubject.length >= 1 || matchingWordsOfBody >= 1 ) {
            return true;
        } else {
            return false;
        }
    };

    containOnlyHello(email) {
        const wordsOfBody = email.body.split(' '); 
        const wordsOfBodyTrimed = trimWords(wordsOfBody);
    
        if (wordsOfBodyTrimed.length = 1 ) {
           return wordsOfBodyTrimed.includes('hello');
           
        }
        
    }

    isSpam (email) {
        const checkPerc = this.checkPercentage(email);
        const checkWord = this.containWords(email);
        const checkHello = this.containOnlyHello(email);
        const resultsFromFunctions = [checkPerc, checkWord, checkHello];
        console.log(resultsFromFunctions)
        const isThereTrue = (el) => {
            return el === true;
        }
        return resultsFromFunctions.some(isThereTrue);

    }
}

const clothesMail = new Email ('Hello!', 'hello!');
const capitalMail = new Email ('SHOP AT OUR SHOP', 'AMAZING THINGS ARE WAITING FOR YOU');
const shortMail = new Email ('hello', 'what s up? how is it going with you? ');
const spamDetector = new SpamDetector();

// console.log(clothesMail.body.length);
// console.log(spamDetector.isSpam(clothesMail));
console.log(spamDetector.isSpam(capitalMail));
console.log(spamDetector.isSpam(shortMail));
// console.log(spamDetector.containOnlyHello(clothesMail));
// console.log(spamDetector.checkPercentage(shortMail));

// Count how many letters has upper case
function checkNumberOfUppercase(string) {
    const upperCaseLetters = string.replace(/[^A-Z]/g, "").length;
    return upperCaseLetters;
};


// Remove non-alphabetical characters from words
function trimWords(array) {
    const newArray = [];
    for (let i = 0; i< array.length; i++) {
         newArray.push(array[i].replace(/\W/g, '').toLowerCase());
        
    }
    return newArray;
}




