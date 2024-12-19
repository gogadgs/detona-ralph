
const countDown = ()=>{
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    
    if(state.values.currentTime <= 0){
        clearInterval(state.values.countDownTimerId);
        clearInterval(moveEnemy);
        alert(`Game Over! O seu resultado foi: ${state.values.result}`);
        
    }
    
}
const state = {
    view:{squares:document.querySelectorAll(".square"),
    enemy:document.querySelector(".enemy"),
    timeLeft:document.querySelector("#time-left"),
    score:document.querySelector("#score"),
},
    values:{
        timerId:null,
        countDownTimerId: setInterval(countDown,1000),
        gameVelocity: 1000,
        hitPosition:0,
        result:0,
        currentTime:60,
    },
};

const randomSquare = ()=>{
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy");7
    state.values.hitPosition = randomSquare.id;
}

const moveEnemy = ()=>{
    state.values.timerId = setInterval(randomSquare,state.values.gameVelocity)};

const addListenerHitBox = ()=>{
    state.view.squares.forEach((square)=>{
                square.addEventListener("mousedown",()=>{
                    if(square.id === state.values.hitPosition){
                        state.values.result++;
                        state.view.score.textContent = state.values.result;
                        state.values.hitPosition = null;
                        playSound("../../src/audios/hit.m4a");
                    }else{
                        playSound("../../src/audios/faustao-errou.mp3")
                    }

                })
    })
}

const playSound = (audioName)=>{
    let audio = new Audio(`../../src/audios/${audioName}`);
    audio.volume = 0.2;
    audio.play();
    
}

/* const playErro = ()=>{
    let erro  = new Audio("../../src/audios/faustao-errou.mp3");
    erro.volume = 0.5;
    erro.play()
} */

/* funcaçã IIFE */
const initialize = (()=>{
    moveEnemy();
    addListenerHitBox();
})();