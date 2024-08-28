document.addEventListener('DOMContentLoaded', function() {

    //Player
    const numbersCardboardPlayer = [];
    let playerCard = document.querySelector(".player.numbers");
    let playerDiv = document.createElement('div');
    let countMarkedSquarePlayer = 0;

    //CPU
    const numbersCardboardCPU = [];
    let cpuCard = document.querySelector(".cpu.numbers");
    let cpuDiv = document.createElement('div');
    let countMarkedSquareCpu = 0;

    //Números del bombo
    const numbersCardboardMarks = [];
    for (let i = 1; i <= 90; i++) {
        numbersCardboardMarks.push(i);
    }

    //Mezclar los números del bombo
    shuffled(numbersCardboardMarks);

    let numberLabel = document.querySelector(".number");
    let marks = document.querySelector(".marks");
    let count = 0;


    createCard(playerCard, playerDiv, numbersCardboardPlayer);
    createCard(cpuCard, cpuDiv, numbersCardboardCPU);

    //Crear los cartones con números aleatorios
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

    //Cuando se pulse el bombo, se extraerá un número hasta que alguien haga bingo
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


    //Cuando alguien gane, saldrá un mensaje del ganador
    function winner() {

        if(countMarkedSquarePlayer === 15){
            numberLabel.innerHTML = "PLAYER WINS!"; 
            numberLabel.style.cursor = 'default'; 
            launchConfetti(); //Se lanzará confetti si gana el jugador
        }else if(countMarkedSquareCpu === 15){
            numberLabel.innerHTML = "CPU WINS!";
            numberLabel.style.cursor = 'default';  
        }
    }
    
    
    //Comprueba los números que hayan salido del bombo y que estén en los cartones, y los tacha.
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
    
    //Añade los números que salen del bombo en la parte inferior
    function addNumber(number){

        let div = document.createElement('div');   

        div.textContent = number;    
        
        div.classList.add('square');  

        marks.appendChild(div);
    }


    //Desordena una array
    function shuffled(array){

        array.sort(() => Math.random() - 0.5);
    }

    //Permite lanzar confetti
    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    
});

