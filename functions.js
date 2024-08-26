document.addEventListener('DOMContentLoaded', function() {
    let numbersCardboard = [];
    let playerCard = document.querySelector(".player.card"); 
    let playerDiv = document.createElement("div");

    function createCard(card, div) {
        while (numbersCardboard.length < 15) {
            let randomNumber = Math.round(1 + (Math.random() * 90));

            if (!numbersCardboard.includes(randomNumber)) {
                numbersCardboard.push(randomNumber);
            }
        }

        div.textContent = numbersCardboard.join(' '); 

        console.log(div.textContent);
        console.log(numbersCardboard);

     
        if (card) {
            card.appendChild(div);
        } else {
            console.error("Player card element not found.");
        }
    }

    createCard(playerCard, playerDiv); 
});


