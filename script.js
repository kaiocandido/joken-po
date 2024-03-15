
let result = document.querySelector(".winner")
let resultCpu = document.querySelector(".machine")
let resultPeople = document.querySelector(".people")
let resultPeople2 = document.querySelector(".funcional")

let humanScore = 0
let machineScore = 0
let Inicial = 0

const GAME_OPTIONS ={

    STONE: "stone",
    PAPER: "paper",
    SCRISSORS: "scissors"
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.STONE, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCRISSORS]

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log("humano:  " + human + "Maquina:  " + machine)


    if (human === machine) {
        Inicial ++
        resultPeople2.innerHTML= Inicial
        result.innerHTML = "Deu Empate!!!"

    }
    else if (human === GAME_OPTIONS.STONE && machine === GAME_OPTIONS.SCRISSORS) {

        humanScore++
        resultPeople.innerHTML = humanScore
        result.innerHTML = "Voce Venceu!!!"
    }
    else if (human === GAME_OPTIONS.SCRISSORS && machine === GAME_OPTIONS.PAPER) {
        humanScore++
        resultPeople.innerHTML = humanScore
        result.innerHTML = "Voce Venceu!!!"
    }
    else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.STONE) {
        humanScore++
        resultPeople.innerHTML = humanScore
        result.innerHTML = "Voce Venceu!!!"
    }

    else {
        machineScore++
        resultCpu.innerHTML = machineScore
        result.innerHTML = "A CPU Venceu!!!"


    }
}