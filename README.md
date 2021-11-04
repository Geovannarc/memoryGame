# memoryGame
 Rick and Morthy's themed memory game, developed with vanilla javascript.

It's a pretty simple game, where you've got to choose 2 cards at a time, and find all the pairs as quick as you can. 

------- 🎮 -------

Jogo da memória do Rick and Morthy, desenvolvido com Vanilla JavaScript
É um jogo bem simples, onde você deve escolher 2 cartas por vez, até encontrar todos os pares, o mais rápido que conseguir.

------- 🚀 -------

Functionalities I've learned:

    set timeoutRunning = false; true when setTimeOut function is happening. Only flip cards when it's false --> important because users can't click on another card while setTimeOut is running;

    to start a new game you need to set everything to it's initial state, including the grid -> innerHTML to ""; 

    using intervalHandle + clearInterval is better than using only timer.textContent = parseInt(timer.textContent) + 1
