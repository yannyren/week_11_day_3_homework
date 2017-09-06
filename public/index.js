var app = function(){

  var url = "https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json";

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
  console.log(this);
  var jsonString = this.responseText; 
  var beers = JSON.parse(jsonString);
  populateList(beers);

}

// var populateList = function(beers) {
//   var select = document.querySelector("#beers-select-list");
//   beers.forEach(function(beer, index){
//     var option = document.createElement("option");
//     select.appendChild(option);
//     option.innerText = beer.name;
//     option.value = index;
//   })
// }

var populateList = function(beers) {
  var list = document.querySelector("#beers-list")
  beers.forEach(function(beer){
    var li = document.createElement("li")
    list.appendChild(li);
    li.innerText = beer.name;
    var img = document.createElement("img")
    list.appendChild(img);
   

  })
}

window.addEventListener('load', app);