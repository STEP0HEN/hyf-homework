//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2018;
const dogYearFuture = 3000;
const dogYear = (dogYearFuture - dogYearOfBirth);

const shouldShowResultsInDogYears = true; 
if (dogYear > 10) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
}

else{
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture)
}