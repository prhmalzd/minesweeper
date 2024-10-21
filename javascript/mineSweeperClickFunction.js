
function asignClickFunction () {
    for (let i = 0; i <allSquares.length; i++) {
        allSquares[i].addEventListener('click', clickedonSquare)
    }
}


function clickedonSquare (e) {
    if (e.target.innerHTML) return

    if (e.target.className.includes('containsBomb')) {
        bombClickedLooser()
    }
    else {
        clickedInValidSquare(e)
    }
    winningTracker()
}

function clickedInValidSquare (e) {
    const squareThatClicked = e.target

    if (squareThatClicked.innerHTML) {
        return
    }

    const h = Number(squareThatClicked.getAttribute('h'))
    const v = Number(squareThatClicked.getAttribute('v'))
    const b = getbombAmount(h , v)

    if ((b !== 0)) {
        squareThatClicked.innerHTML = b
        squareThatClicked.style.color = numbersColor[b-1]
    }
    squareThatClicked.classList.add('showed')
    squareThatClicked.style.backgroundColor = secondColor
    chceckingNeighbourSquares(h, v , b)
}

function chceckingNeighbourSquares (h, v, b) {

    if (b===0) {
        showTheNeiboursBombCounter(h, v)
    }

    let squares =  [
        [h-1 , v-1] , [h-1 , v] , [h-1 , v+1],
        [h   , v-1]        ,      [h   , v+1],
        [h+1 , v-1] , [h+1 , v] , [h+1 , v+1]
    ]

    squares.forEach((square) => {
        let hvElem = `${square[0]+','+square[1]}`
        let hElem = square[0]
        let vElem = square[1]

        let elem = document.querySelector(`[hv = "${hvElem}"]`)
        if (elem) {
            let bElem = getbombAmount(hElem , vElem)

            if((bElem === 0)
                && !(elem.innerHTML)
                && !(elem.className.includes('containsBomb'))
                ) {
                elem.innerHTML = '  '
                elem.classList.add('showed')
                elem.style.backgroundColor = secondColor
                showTheNeiboursBombCounter(hElem, vElem)
                chceckingNeighbourSquares(hElem,vElem)
            }
        }
    })
}

function showTheNeiboursBombCounter (h, v) {
    let squares =  [
        [h-1 , v-1] , [h-1 , v] , [h-1 , v+1],
        [h   , v-1]        ,      [h   , v+1],
        [h+1 , v-1] , [h+1 , v] , [h+1 , v+1]
    ]

    squares.forEach((square) => {
        let hvElem = `${square[0]+','+square[1]}`
        let hElem = square[0]
        let vElem = square[1]

        let elem = document.querySelector(`[hv = "${hvElem}"]`)
        if (elem) {
            let bElem = getbombAmount(hElem, vElem)

            if((bElem !== 0)
                && !(elem.innerHTML)
                && !(elem.className.includes('containsBomb'))
                ) {
                elem.innerHTML = bElem
                elem.classList.add('showed')
                elem.style.backgroundColor = secondColor
                elem.style.color = numbersColor[bElem - 1]
            }
        }
    })
}


//loosing section

function bombClickedLooser () {
    for (let i = 0; i <allSquares.length; i++) {
        if (allSquares[i].className.includes('containsBomb')) {
            allSquares[i].innerHTML = "💣"
        }
    }

    creatingGameOverSection()

}

function creatingGameOverSection () {

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

function playAgain () {
    location.reload()
}



