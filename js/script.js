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
var h = document.getElementsByClassName("card-img-top-heading");

function manageClick(cur, i, id) { 
    return function() {
        cards[i].src = "src/image" + id + ".jpg";
        h[i].innerText = cur.innerText;
        console.log(cur.innerText);
    }
}

for(var i = 0; i < dropdown.length; ++i) {
    var pos = Number(dropdown[i].id[0]) - 1;
    if(dropdown[i].id[dropdown[i].id.length - 1] == "1") {
        h[pos].innerText = dropdown[i].innerText;
    }
    dropdown[i].addEventListener('click', manageClick(dropdown[i], pos, dropdown[i].id));
}

