const https = require('https')
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiYWowMDAxIiwiYSI6ImNsMHFhaXlueDI0aWMzY3F0b2dlOXEyMGMifQ.ihJXY__XZ63JXdVI7l4-Iw";
const request = https.request(url,(response)=>{
    let data = ''
response.on('data',(chunk)=>{
    data = data + chunk.toString();
})
response.on('end',()=>{
    return data;
})
})
request.on('data',(data)=>{
    console.log(data)
})
request.end();
