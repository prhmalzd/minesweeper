
const asignClickFunction = () => {
    for (let i = 0; i <allSquares.length; i++) {
        allSquares[i].addEventListener('click', clickedonSquare)
    }
}


const clickedonSquare = (e) => {
    if (e.target.innerHTML) return

    if (e.target.className.includes('containsBomb')) {
        bombClickedLooser()
    }
    else {
        clickedInValidSquare(e)
    }
    winningTracker()
}

const clickedInValidSquare =(e) => {
    const squareThatClicked = e.target

    if (squareThatClicked.innerHTML) {
        return
    }

    const h = Number(squareThatClicked.getAttribute('h'))
    const v = Number(squareThatClicked.getAttribute('v'))
    const b = Number(squareThatClicked.getAttribute('bombamount'))
    if ((b !== 0)) {
        squareThatClicked.innerHTML = squareThatClicked.getAttribute('bombamount')
    }
    squareThatClicked.classList.add('showed')
    squareThatClicked.style.backgroundColor = secondColor
    chceckingNeighbourSquares(h, v , b)
}

const chceckingNeighbourSquares =(h, v, b) => {

    for (let i = 0; i < allSquares.length; i++) {
        const hneighbor = Number(allSquares[i].getAttribute('h'))
        const vneighbor = Number(allSquares[i].getAttribute('v'))
        const bneighbor = Number(allSquares[i].getAttribute('bombamount'))

        if ((hneighbor === h-1 && vneighbor === v) ||
            (hneighbor === h && vneighbor === v-1) ||
            (hneighbor === h && vneighbor === v+1) ||
            (hneighbor === h+1 && vneighbor === v) ||
            (hneighbor === h-1 && vneighbor === v-1) ||
            (hneighbor === h-1 && vneighbor === v+1) ||
            (hneighbor === h+1 && vneighbor === v-1) ||
            (hneighbor === h+1 && vneighbor === v+1)
            )
            {
                if ((bneighbor === 0) && !(allSquares[i].innerHTML) && !(allSquares[i].className.includes('containsBomb'))) {
                        allSquares[i].innerHTML = '  '
                        allSquares[i].classList.add('showed')
                        allSquares[i].style.backgroundColor = secondColor
                        chceckingNeighbourSquares(hneighbor,vneighbor)
                        showTheNeiboursBombCounter(hneighbor, vneighbor)
                }
        }

    }
    if (b === 0) {
        showTheNeiboursBombCounter(h, v)
    }
}

showTheNeiboursBombCounter =(h, v) => {
    for (let i = 0; i < allSquares.length; i++) {
        const hneighbor = Number(allSquares[i].getAttribute('h'))
        const vneighbor = Number(allSquares[i].getAttribute('v'))
        const bneighbor = Number(allSquares[i].getAttribute('bombamount'))

        if ((hneighbor === h-1 && vneighbor === v) ||
            (hneighbor === h && vneighbor === v-1) ||
            (hneighbor === h && vneighbor === v+1) ||
            (hneighbor === h+1 && vneighbor === v) ||
            (hneighbor === h-1 && vneighbor === v-1) ||
            (hneighbor === h-1 && vneighbor === v+1) ||
            (hneighbor === h+1 && vneighbor === v-1) ||
            (hneighbor === h+1 && vneighbor === v+1)
            )
            {
                if ((bneighbor !== 0) && !(allSquares[i].innerHTML) && !(allSquares[i].className.includes('containsBomb'))) {
                    allSquares[i].innerHTML = bneighbor
                    allSquares[i].classList.add('showed')
                    allSquares[i].style.backgroundColor = secondColor
                }
        }

    }
}


//loosing section

const bombClickedLooser = () => {
    for (let i = 0; i <allSquares.length; i++) {
        if (allSquares[i].className.includes('containsBomb')) {
            allSquares[i].innerHTML = "💣"
        }
    }

    creatingGameOverSection()

}

const creatingGameOverSection = () => {

    const backDrop = document.createElement("div")
    backDrop.classList.add('backDrop')
    backDrop.addEventListener('click', playAgain)

    const gameOverContainer = document.createElement("div")
    gameOverContainer.classList.add('gameOverContainer')

    const gameOverSection = document.createElement("div")
    gameOverSection.classList.add('gameOver')

    const gameOverText = document.createElement('span')
    gameOverText.classList.add('gameOverText')
    gameOverText.innerHTML = 'Game Over'



    gameOverSection.appendChild(gameOverText)
    gameOverContainer.appendChild(gameOverSection)
    mineSweeperTable.appendChild(gameOverContainer)
    mineSweeperTable.appendChild(backDrop)
}

const playAgain =() => {
    location.reload()
}



