var x = 1;
//fetches from web server for chrome and stores in var
fetch('./company_db.Json')

//converts from JSON string to JSON object
.then(response => response.json()).then(products => {

//sets empty var for HTML to be stored in
var offers = [];

//maps through products, sets var html to "arrivingFrom: VALUE<br/><br/>arrivalTime: VALUE"
var arrOffers = products.map(function(offer){
// var html =  "<tr>" + "<td id=1>" + offer["name"] + "</td>" + "<td>" + "<form><button type=button class='btn btn-primary'>Add</button></form>" + "</td>" + "</tr>" ;
var html =  "<tr> <td>" + offer["name"] + "</td>" +
            "<td> <button id=" + offer["name"] + " type=button class='btn btn-primary'>Add</button>" + "</td>" + "</tr>" ;

//logs offer name when button is clicked
$(document).ready(function(){
  $("button").click(function(){
      console.log($(this).attr('id'));
  });
});


//pushes var html into var offers, which is global scope
    offers.push(html);
});


//sets var p to result ID in HTML
var p = document.querySelector("#result")

//passes var citites into var p and replaces comma normally separating array items with a space
p.innerHTML = offers.join(" ");

})
