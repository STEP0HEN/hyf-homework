'use strict'

// Flight booking Fullname Function

function getFullname(firstName, surname, useFormalName) {
    if (useFormalName === true) {
        return 'Lord' + ' ' + firstName + ' ' + surname
    }
    else if (useFormalName !== useFormalName) {
        return firstName + ' ' + surname
    }
    else
    return firstName + ' ' + surname;

}
const Fullname = getFullname('Benjamin', 'Hughes',true); //
console.log(Fullname);

console.log(getFullname('Benjamin', 'hughes', false))


const fullname1 = (getFullname('James','Rasmussen'));
console.log(fullname1)

const fullname2 = (getFullname('Ida','john'));
console.log(fullname2)
