const app = function(){
 const url = " https://api.punkapi.com/v2/beers";
 makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
 // back in the day was XML but now returns JSON, still called XML.
 const request = new XMLHttpRequest();
 request.open("GET", url);
 request.addEventListener("load", callback);
 request.send();

}

const requestComplete = function(){
   if(this.status !== 200) return;
   const beers = JSON.parse(this.response);
   console.log(this);
   populateList(beers);
}


const populateList = function(beers){
   const ul = document.querySelector('#beer-list');
   beers.forEach(function(beer){
     const li = document.createElement('li');
     li.textContent = beer.name;
     const img = document.createElement("img");
     img.src = beer.image_url;
     img.height = 50;
     ul.appendChild(li);
     li.appendChild(img);
   });
 }
window.addEventListener('load', app);
