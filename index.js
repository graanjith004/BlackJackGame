//public
let player={
    name:"Raanjith",
    chips:200
}
let firstNumber = getrandomNo();
let secondNumber = getrandomNo();
let sumValue = firstNumber + secondNumber;
let card = [firstNumber, secondNumber];
let isAlive = true;
let hcard = document.getElementById('pcard');
let hsum = document.getElementById('psum');
let hidentity=document.getElementById('pIdentity');
hidentity.textContent=player.name +":$ "+player.chips;
// get random numbers
function getrandomNo() {
    let randomno = Math.floor(Math.random() * 12) + 1;
    if (randomno === 1) {
        randomno = 11;
    } else if (randomno > 10) {
        randomno = 10
    }
    console.log(randomno);
    return randomno;
}

function rendergame() {
    console.log("card lenght" + card.length);
    hcard.textContent = "Cards: ";
    hsum.textContent = "Sum: " + sumValue;
    for (let i = 0; i < card.length; i++) {
        hcard.textContent += card[i] + " ";
    }
    getSumheader(sumValue)
}

// game start
function getGameStart() {
    rendergame();
}

// Control the actions
function getSumheader(_sumValue) {
    let hhead = document.getElementById('hheader');
    if (_sumValue < 21) {
        hhead.textContent = "Would you try to proceed for new card.?";
        player.chips-=25;
        hidentity.textContent=player.name +":$ "+player.chips;
    } else if (_sumValue === 21) {
        isAlive = false;
        hhead.textContent = "Wow..! you won Black Jack..!";
        player.chips+=100;
        hidentity.textContent=player.name +":$ "+player.chips;
    } else {
        isAlive = false;
        hhead.textContent = "You are out of the game.";
        player.chips=0;
        hidentity.textContent=player.name +":$ "+player.chips;
    }
}

// new card
function getNewCard() {
    if (isAlive) {
        let thirdcard = getrandomNo();
        sumValue += thirdcard;
        console.log("trueSumvalue" + sumValue);
        card.push(thirdcard);
        rendergame();
    }
}