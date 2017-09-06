var app = function(){

  var url = "https://api.punkapi.com/v2/beers";

  var button = document.querySelector("#get-beers")
  button.innerText = "Get Beers";
  
  button.addEventListener('click', function() {
    makeRequest(url, requestComplete);
  });  


}


var makeRequest = function(url, requestComplete){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener("onload", requestComplete);
  request.send();
}

var requestComplete = function(){
  if( this.status != 200) return;
  console.log(this)
  var jsonString = this.responseText; 

  var beers = JSON.parse(jsonString);
  populateList(beers);

}

var populateList = function(beers) {
  var select = document.querySelector("#beers-list");
  beers.forEach(function(beer, index){
    
  })
}

window.addEventListener('load', app);