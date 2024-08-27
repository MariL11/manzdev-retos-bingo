document.addEventListener('DOMContentLoaded', function() {
    const numbersCardboardPlayer = [];
    let playerCard = document.querySelector(".player.numbers");
    let playerDiv = document.createElement('div');

    const numbersCardboardCPU = [];
    let CPU_Card = document.querySelector(".cpu.numbers");
    let CPU_Div = document.createElement('div');

    const numbersCardboardMarks = [];
    for (let i = 1; i <= 90; i++) {
        numbersCardboardMarks.push(i);
    }

    shuffled(numbersCardboardMarks);

    let number = document.querySelector(".number");
    let marks = document.querySelector(".marks");
    let count = 0;

    createCard(playerCard, playerDiv, numbersCardboardPlayer);
    createCard(CPU_Card, CPU_Div, numbersCardboardCPU);

    function createCard(card, div, array) {
        while (array.length < 15) {
            let randomNumber = Math.round(1 + (Math.random() * 89));

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

    }


    number.addEventListener('click', function() {

        if(count !== 90){
            let randomNumber = numbersCardboardMarks[count++];
        
            number.textContent = randomNumber;
            addNumber(randomNumber);

            console.log(count);
            console.log(numbersCardboardMarks);
        }

    });

    
    function addNumber(number){

        let div = document.createElement('div');   

        div.textContent = number;    
        
        div.classList.add('square');  

        marks.appendChild(div);
    }


    function shuffled(array){

        array.sort(() => Math.random() - 0.5);
    }
    
});

