// var cards = document.getElementsByClassName("card-img-top");

// function handleClicks(i) {
//     return function() {
//         if(cards[i].id == "1") {
//             cards[i].src = "TwentyNineMonths/src/image2.jpg";
//             cards[i].id = "2";
//         }
//         else if(cards[i].id == "2") {
//             cards[i].src = "TwentyNineMonths/src/image3.jpg";
//             cards[i].id = "3";
//         }
//         else {
//             cards[i].src = "TwentyNineMonths/src/image1.jpg";
//             cards[i].id = "1";
//         }
//     }
// }

// for(var i = 0; i < cards.length; ++i) {
//     cards[i].addEventListener('click', handleClicks(i));
// }

var dropdown = document.getElementsByClassName('dropdown-item');
var cards = document.getElementsByClassName("card-img-top");


function manageClick(i, id) { 
    return function() {
        cards[i].src = "TwentyNineMonths/src/image" + id + ".jpg";
        console.log(id);
    }
}

for(var i = 0; i < dropdown.length; ++i) {
    var pos = Number(dropdown[i].id[0]);
    dropdown[i].addEventListener('click', manageClick(pos, dropdown[i].id));
}