document.addEventListener('DOMContentLoaded', () => {
    const cardArr = [
        {
            name: 'card1',
            img: 'https://i.ibb.co/rdLCS80/card1.png'
        },
        {
            name: 'card1',
            img: 'https://i.ibb.co/rdLCS80/card1.png'
        },
        {
            name: 'card2',
            img: 'https://i.ibb.co/VMfcGt4/card2.png'
        },
        {
            name: 'card2',
            img: 'https://i.ibb.co/VMfcGt4/card2.png'
        },
        {
            name: 'card3',
            img: 'https://i.ibb.co/nmv2wCm/card3.jpg'
        },
        {
            name: 'card3',
            img: 'https://i.ibb.co/nmv2wCm/card3.jpg'
        },
        {
            name: 'card4',
            img: 'https://i.ibb.co/YfvQNDL/card4.jpg'
        },
        {
            name: 'card4',
            img: 'https://i.ibb.co/YfvQNDL/card4.jpg'
        },
        {
            name: 'card5',
            img: 'https://i.ibb.co/bsmLcy9/card5.jpg'
        },
        {
            name: 'card5',
            img: 'https://i.ibb.co/bsmLcy9/card5.jpg'
        },
        {
            name: 'card6',
            img: 'https://i.ibb.co/mvTg9rJ/card6.jpg'
        },
        {
            name: 'card6',
            img: 'https://i.ibb.co/mvTg9rJ/card6.jpg'
        }
    ]
        
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result');
    let cardsChosen;
    let cardsChosenId;
    let cardsWon;
    let timeoutRunning = false; //important bc users can click while setTimeOut is running --> bugou tudo
    let currentTime;
    let intervalHandle;
    let timer = document.querySelector('#timer');

    function startGame(){
        grid.innerHTML = "";
        resultDisplay.textContent =" "+ 0;
        cardsWon = [];
        cardsChosenId = [];
        cardsChosen = [];
        currentTime = 0;
        intervalHandle = 1;
        createBoard();
        cardArr.sort(() => 0.5 - Math.random());
            if(intervalHandle){
                clearInterval(intervalHandle);
                intervalHandle = setInterval(function(){
                    currentTime++;
                    timer.textContent = currentTime;
                }, 1000);
            }
    } 
    startGame();

    function createBoard(){
        for(let i=0; i< cardArr.length; i++){
            let card = document.createElement('img');
            card.className = 'card'; //important if there's going to be any other images that are not cards --> don't use 'card' w/ bootstrap --> bugou tudo
            card.setAttribute('src', 'https://i.ibb.co/Lkmvb0H/verso.png');
            card.setAttribute('data-id', i);
            grid.appendChild(card);
            card.addEventListener('click', flipCard);
        }
    }

    function checkForMatch(){
        timeoutRunning = false;
        let cards = document.querySelectorAll('img.card');
        let optionOneId = cardsChosenId[0];
        let optionTwoId = cardsChosenId[1];
            if(cardsChosen[0] === cardsChosen[1]){
                cards[optionOneId].setAttribute('src', 'https://i.ibb.co/ng2XmqJ/white.png');
                cards[optionTwoId].setAttribute('src', 'https://i.ibb.co/ng2XmqJ/white.png');
                cardsWon.push(cardsChosen[0]);
                cardsWon.push(cardsChosen[1]);
            }else{
                cards[optionOneId].setAttribute('src', 'https://i.ibb.co/Lkmvb0H/verso.png');
                cards[optionTwoId].setAttribute('src', 'https://i.ibb.co/Lkmvb0H/verso.png');
            }
            cardsChosen = [];
            cardsChosenId = [];
            resultDisplay.textContent = " " +Math.floor(cardsWon.length * 1000 * 1/parseInt(timer.textContent));
            if(cardsWon.length === cardArr.length){

                Swal.fire({
                    width: 1000,
                    title: 'PARABÉNS',
                    html: `Você fez ${resultDisplay.textContent} pontos!`,
                    padding: '1em',
                    background: 'whitesmoke',
                    showCloseButton: true,
                    confirmButtonText: 'JOGAR DE NOVO',
                    confirmButtonColor: 'purple',
                    showCancelButton: false,
                    backdrop: `
                        rgba(0,0,123,0.1)
                    `
                }).then((result) => {
                        if(result.isConfirmed){
                            startGame();
                        }
                    })
            }
    }

    function flipCard(){
            if(timeoutRunning){
                return;
            }
            let cardId = this.getAttribute('data-id');
            if(cardsChosenId.length && cardsChosenId[0] == cardId){
                return;
            }
            cardsChosen.push(cardArr[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArr[cardId].img);
                if(cardsChosen.length === 2){
                    timeoutRunning = true;
                    setTimeout(checkForMatch, 450)
                }
        }
})
