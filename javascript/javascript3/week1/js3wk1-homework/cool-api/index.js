//Cool api

//This api's data structure is an object of strings(key & value pairs).It has strings as keys, then numbers,strings and booleans as values.
// It takes a users ip address as input and logs their location and what devices they're browing on.
//It is public and you don't need an api key to use it. 
const locationUrl = `http://ip-api.com/json/`
fetch(locationUrl)
.then(response => response.json())
.then(result => console.log(result))

