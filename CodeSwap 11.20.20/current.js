var x = 1;
//fetches from web server for chrome and stores in var
fetch('./company_db.json')

//converts from JSON string to JSON object
.then(response => response.json()).then(products => {

//sets empty var for HTML to be stored in
var offers = [];

//maps through products, sets var html to "arrivingFrom: VALUE<br/><br/>arrivalTime: VALUE"
var arrOffers = products.map(function(offer){
var html =
            //displays Offer Name
            "<tr>" + "<td>" + offer["name"] + "</a>" + "</td>" +
            //Displays Offer Cost
            "<td>$" + offer["user_cost"] + "</td>" +
            //Displays Credit Earned
            "<td>$" + offer["promo_worth"] + "</td></div>"  +
            //Displays Get Promo Code Button - Company Name logged through button id
            "<td>" + "<button id=" + offer["name"] + " type=button class='btn btn-primary'>Get Promo Code</button>" + "</tr>"
            ;
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

// getPromoCode
//will be hosted on the Get Offers page for logged in users
// onclick:
// Move to next owner in queue
// Displays current usePromoCode
// Kicks off 10 minute timer for user to click usePromoCide
// Owner put into limbo

function getPromoCode(){
//wipe out "Get Promo Code" and replace with "Use Promo Code"
  $("button").click(function(){
  $("button").empty();
  });
}


//usePromoCode
//will be what appears after getPromoCode.onclick
// onclick:
// Kicks off 15 minute reminder email IF userVerifyPromoCode not clicked
// Kicks off 30 minute timer for user to verify
// Emails user with userVerifyPromoCode and userCancelTransaction
// Displays userVerifyPromoCode on page
// Display userCancelTransaction on page
