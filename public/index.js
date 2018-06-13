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
     const button = document.createElement('button');
     const img = document.createElement("img");
     img.src = beer.image_url;
     img.height = 120;
     img.padding = 15;
     img.alt = beer.name;
     ul.appendChild(button);
     button.appendChild(img);
     button.addEventListener('click', function(){
       handlebuttonclick(beer)
     });
   });

 }

const handlebuttonclick = function(beer){

  const ul = document.querySelector('#beer-details');

  const liname = document.querySelector("#name");
  const tagline = document.querySelector("#tagline");
  const firstBrewed = document.querySelector("#firstBrewed");
  const description = document.querySelector("#description");
  const abv = document.querySelector("#abv");

  liname.textContent = beer.name;
  tagline.textContent = beer.tagline;
  firstBrewed.textContent = "First brewed: " + beer.first_brewed;
  description.textContent = beer.description;
  abv.textContent = "abv: " +  beer.abv;

  ul.appendChild(liname, tagline, firstBrewed, description, abv);
}
window.addEventListener('load', app);
