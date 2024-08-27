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

                let div1 = document.createElement('div');
                let div2= document.createElement('div');
                
                div1.appendChild(div2);
                div2.textContent = randomNumber;     
                div2.classList.add('square');         

                if (card) {
                    card.appendChild(div2);
                } else {
                    console.error("Player card element not found.");
                }
            }
        }

        console.log(array);
    }

    
});