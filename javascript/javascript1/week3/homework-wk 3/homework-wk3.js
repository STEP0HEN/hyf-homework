"use strict"


// Item Array Removal

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = ('Ahmad');
//names.splice(1,1);

for ( let i = 0 ; i < names.length ; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i ,1) ;
  }
}
console.log(names); 



//When will we be there

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function convertTravelTime(travelInformation){
   const timeInHours =  Math.floor(travelInformation.destinationDistance / travelInformation.speed);
   const timeInMinutes = Math.floor((((travelInformation.destinationDistance / travelInformation.speed)-timeInHours)*60));
   return `${timeInHours} hours and ${timeInMinutes} minutes`;

  }

const travelTime = convertTravelTime(travelInformation);
console.log(travelTime)



//Series duration of my life

const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'Vikings',
      days: 2,
      hours: 9,
      minutes: 55,
    }
]



const lifeSpanInhours = 80* 365 * 24;

function sumTotalOfHoursSpent(object){
    const daysInHours = object.days*24 + object.hours +  (object.minutes/60)
    return daysInHours
}

function seriesDurationsOfMyLife(daysInhours,lifeSpanInhours) {
const hoursSpentOnMovies = (daysInhours*100)/lifeSpanInhours;
  return hoursSpentOnMovies 
}


let totalHoursSpent = 0;

for (let i = 0; i < seriesDurations.length; i++) {
  const allHoursSpentperMovies = seriesDurationsOfMyLife(sumTotalOfHoursSpent(seriesDurations[i]),lifeSpanInhours);
  totalHoursSpent+= allHoursSpentperMovies;
  
  console.log(`${seriesDurations[i].title} took ${allHoursSpentperMovies.toFixed(4)} % of my life`);
}
console.log(`In total that is ${totalHoursSpent.toFixed(4)} % of my life.`)
 

//Song database

const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

const myPlaylist = [];

//Adding songs to song Database

let queuedsong1 = {
    songId: 5,
    title: 'heal the world',
    artist: 'Michael jackson',
  }; 

let queuedsong2 = {
    songId: 6,
    title: 'purple rain',
    artist: 'Prince',
  };

let queuedsong3 = {
    songId: 7,
    title: 'welcome home',
    artist: 'Osibisa',
  }; 


function addSongToDatabase(song) {
  songDatabase.push(song);
}

 addSongToDatabase(queuedsong1);
 addSongToDatabase(queuedsong2);
 addSongToDatabase(queuedsong3);
console.log(songDatabase);

//song searching 

const searchedSong = [];
function  getSongByTitle(title) {
  
  const result = 'song not in database'

  for (let i = 0 ; i < songDatabase.length; i++ ){
    if (title === songDatabase[i].title) {
      searchedSong.push(songDatabase[i]);
    } 
  }
}

getSongByTitle('My baby');
getSongByTitle('heal the world');
getSongByTitle('purple rain');
console.log(searchedSong);



function addSongToMyPlaylist(title) {
 
  for (let i = 0; i < searchedSong.length; i++ ) {
    if(title === searchedSong[i].title){
      myPlaylist.push(searchedSong[i]);
    } 
  }
  return myPlaylist;

}
 

addSongToMyPlaylist('My baby');
console.log(myPlaylist);


// NOnoNOnoYes (note taking app)
const notes = [];

function addnote(content,id) {
  notes.push({content,id});
}

addnote('class',13);
addnote('class', 10)
console.log(notes);

// Getting a note

function getNoteFromId(id) { 
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    } 
    if (id !== Number && !id ) {
      return 'wrong format, please id should be a number and not an empty field'
    }
    else {
      return 'ops! we shouldn\'t be here'
    }
  }
  
}

console.log(getNoteFromId(13));
console.log(getNoteFromId(6));

//getting all notes
console.log(notes);

// Logging out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    return 'The note with id:' + ' ' + notes[i].id + ' ' + 'has the following content:' + ' ' + notes[i].content;
  }
}

console.log(logOutNotesFormatted());