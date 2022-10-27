var cards = document.getElementsByClassName("card-img-top");

function handleClicks(i) {
    return function() {
        console.log("clicked card " + i);
        console.log(cards[i].src);
        if(cards[i].id == "1") {
            cards[i].src = "../src/image2.jpg";
            cards[i].id = "2";
        }
        else if(cards[i].id == "2") {
            cards[i].src = "../src/image3.jpg";
            cards[i].id = "3";
        }
        else {
            cards[i].src = "../src/image1.jpg";
            cards[i].id = "1";
        }
    }
}

for(var i = 0; i < cards.length; ++i) {
    cards[i].addEventListener('click', handleClicks(i));
}