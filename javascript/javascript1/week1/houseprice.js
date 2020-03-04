//calculating house price for peter

const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterGardenSizeInM2 = 100;
const peterVolumeInMeters = [peterHouseWidth * peterHouseDepth * peterHouseHeight];
const peterHousePrice = [peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300];
const peterHouseCost = 2500000; 

const peterIsPayingTooMuch = true;
if (peterHousePrice > peterHouseCost) {    
    console.log("Hey Peter, you payed " + peterHousePrice + " for your house and that is too much")
}

else console.log(
    
    "peter! you lucky guy, you are paying " + peterHousePrice + " and that is a good deal"
    )

//calculating house price for julia


const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaGardenSizeInM2 = 70;
const juliaVolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;
const juliaHousePrice = [juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300];
const juliaHouseCost = 1000000;

const juliaIsPayingTooMuch = true;
if (juliaHousePrice > juliaHouseCost) {    
    console.log("sorry julia, " + juliaHousePrice + " for your house is too much")
}

else console.log(
    
    "julia " + juliaHousePrice + " for that house is the best deal ever"
)
