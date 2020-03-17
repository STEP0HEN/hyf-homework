//calculating house price for peter

let peterHouseWidth = 8;
let peterHouseDepth = 10;
let peterHouseHeight = 10;
let peterGardenSizeInM2 = 100;
let peterVolumeInMeters = [peterHouseWidth * peterHouseDepth * peterHouseHeight];
let peterHousePrice = [peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300];
let peterHouseCost = 2500000; 

let peterIsPayingTooMuch = true;
if (peterHousePrice > peterHouseCost) {    
    console.log("Hey Peter, you payed " + peterHousePrice + " for your house and that is too much")
}

else console.log(
    
    "peter! you lucky guy, you are paying " + peterHousePrice + " and that is a good deal"
    )

//calculating house price for julia


let juliaHouseWidth = 5;
let juliaHouseDepth = 11;
let juliaHouseHeight = 8;
let juliaGardenSizeInM2 = 70;
let juliaVolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;
let juliaHousePrice = [juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300];
let juliaHouseCost = 1000000;

let juliaIsPayingTooMuch = true;
if (juliaHousePrice > juliaHouseCost) {    
    console.log("sorry julia, " + juliaHousePrice + " for your house is too much")
}

else console.log(
    
    "julia " + juliaHousePrice + " for that house is the best deal ever"
)
