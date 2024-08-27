document.addEventListener('DOMContentLoaded', function() {
    let numbersCardboardPlayer = [];
    let playerCard = document.querySelector(".player.numbers");
    let playerDiv = document.createElement('div');

    let numbersCardboardCPU = [];
    let CPU_Card = document.querySelector(".cpu.numbers");
    let CPU_Div = document.createElement('div');

    createCard(playerCard, playerDiv, numbersCardboardPlayer);
    createCard(CPU_Card, CPU_Div, numbersCardboardCPU);

    function createCard(card, div, array) {
        while (array.length < 15) {
            let randomNumber = Math.round(1 + (Math.random() * 90));

            if (!array.includes(randomNumber)) {
                array.push(randomNumber);

                div = document.createElement('div');   
          
                div.textContent = randomNumber;     
                div.classList.add('square');         

                if (card) {
                    card.appendChild(div);
                } else {
                    console.error("Player card element not found.");
                }
            }
        }

        console.log(array);
    }

    
});