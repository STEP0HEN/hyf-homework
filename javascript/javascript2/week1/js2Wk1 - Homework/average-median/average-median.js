 "Use strict"


 
  const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
  function findShortestWord(array) {
      let shortestword = array[0]
      for (let i = 0; i < array.length; i++) {
          if (shortestword.length > array[i].length) {
               shortestword = array[i];
          }
      }
      return shortestword;
  };
  console.log(findShortestWord ([ 'height', 'bread', 'improve',
 ]));
 console.log(findShortestWord (danishWords))


  
  //Finding the median 

  const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
  
  function getMedian(numbers) {

    numbers.sort( function(a,b) {return a - b;} )

    const half = Math.floor(numbers.length/2)

    if(numbers.length % 2)
        return numbers[half];
    else
        return (numbers[half-1] + numbers[half]) / 2;
};
console.log(getMedian(housePrices))



//Getting average
function getAverage(arrayOfnumbers) {
  let sum = 0
  for (let i = 0; i < arrayOfnumbers.length; i++) {
    sum += arrayOfnumbers[i];
  }
  const average = sum / arrayOfnumbers.length
  return  average.toFixed(4);
};

console.log(getAverage(housePrices))



//getting median and average

function getAverageAndMedian (arr) {
  let sum = 0;
  let median = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let average = sum / arr.length
  if (arr.length % 2 === 0) {
    median = (arr[arr.length / 2] + arr[arr.length / 2 - 1] / 2)
  }
  else median = arr[(arr.length - 1) / 2]

  return {'average' : average.toFixed(4), 'median' : median};
}
 console.log(getAverageAndMedian(housePrices))


const ulTag = document.querySelector('ul')
const NewLiTag = document.createElement('li')
const LiTag = document.createElement('li')
const liTag = document.createElement('li')

NewLiTag.innerHTML = `average = ${getAverage(housePrices)}`
LiTag.innerHTML = `Houseprices = [${housePrices}]`;
liTag.innerHTML = `Median = ${(getMedian(housePrices))}`
ulTag.appendChild(LiTag)
ulTag.appendChild(NewLiTag)
ulTag.appendChild(liTag)
