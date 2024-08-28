document.addEventListener('DOMContentLoaded', function() {
    const numbersCardboardPlayer = [];
    let playerCard = document.querySelector(".player.numbers");
    let playerDiv = document.createElement('div');

    const numbersCardboardCPU = [];
    let cpuCard = document.querySelector(".cpu.numbers");
    let cpuDiv = document.createElement('div');

    const numbersCardboardMarks = [];
    for (let i = 1; i <= 90; i++) {
        numbersCardboardMarks.push(i);
    }

    shuffled(numbersCardboardMarks);

    let numberLabel = document.querySelector(".number");
    let marks = document.querySelector(".marks");
    let count = 0;

    let countMarkedSquarePlayer = 0;
    let countMarkedSquareCpu = 0;

    createCard(playerCard, playerDiv, numbersCardboardPlayer);
    createCard(cpuCard, cpuDiv, numbersCardboardCPU);

    function createCard(card, div, array) {
        while (array.length < 15) {
            let randomNumber = Math.round(1 + (Math.random() * 89));

            if (!array.includes(randomNumber)) {
                array.push(randomNumber);

                div = document.createElement('div');   
          
                div.textContent = randomNumber;     
                div.classList.add('square');    
                div.dataset.number = randomNumber;     

                if (card) {
                    card.appendChild(div);
                } else {
                    console.error("Player card element not found.");
                }
            }
        }

    }

    
    numberLabel.addEventListener('click', function() {
        if(countMarkedSquarePlayer < 15 && countMarkedSquareCpu < 15){
            if (count !== 90) {
                let randomNumber = numbersCardboardMarks[count++];
                
                numberLabel.textContent = randomNumber;
                addNumber(randomNumber);
                checkNumbers(randomNumber);
        
                console.log(count);
                console.log(numbersCardboardMarks);
        
                    
                winner();
            }
        }
    });


    function winner() {

        if(countMarkedSquarePlayer === 15){
            numberLabel.innerHTML = "PLAYER WINS!"; 
            numberLabel.style.cursor = 'default'; 
            launchConfetti();
        }else if(countMarkedSquareCpu === 15){
            numberLabel.innerHTML = "CPU WINS!";
            numberLabel.style.cursor = 'default';  
        }
    }
    
    

    function checkNumbers(number) {
        let playerSquares = document.querySelectorAll(".player .numbers .square");
        let cpuSquares = document.querySelectorAll(".cpu .numbers .square");

        playerSquares.forEach(square => {
            if (parseInt(square.dataset.number) === number) {
                square.classList.add('markedSquare');
                countMarkedSquarePlayer++;
            }
        });

        cpuSquares.forEach(square => {
            if (parseInt(square.dataset.number) === number) {
                square.classList.add('markedSquare');
                countMarkedSquareCpu++;
            }
        });
    }
    
    function addNumber(number){

        let div = document.createElement('div');   

        div.textContent = number;    
        
        div.classList.add('square');  

        marks.appendChild(div);
    }


    function shuffled(array){

        array.sort(() => Math.random() - 0.5);
    }


    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    
});

