let randomTilesNumbers = []
let timer


function creatingTable (rows, columns, bombs) {

    const timerDiv = createTimer()
    const minesDiv = createMines()
    const uiContainer = document.createElement('div')
    uiContainer.classList.add('uiContainer')

    const mineSweeperTable = document.createElement('div')
    mineSweeperTable.setAttribute('id', 'mineSweeperTable')
    if (columns === 16) {
        mineSweeperTable.style.gridTemplateRows = `repeat(${rows},40px)`
        mineSweeperTable.style.gridTemplateColumns = `repeat(${columns},40px)`
    }
    else if (columns === 30) {
        mineSweeperTable.style.gridTemplateRows = `repeat(${rows},30px)`
        mineSweeperTable.style.gridTemplateColumns = `repeat(${columns},30px)`
    } else {
        mineSweeperTable.style.gridTemplateRows = `repeat(${rows},50px)`
        mineSweeperTable.style.gridTemplateColumns = `repeat(${columns},50px)`
    }

    uiContainer.append(timerDiv)
    uiContainer.append(minesDiv)

    mineSweeper.append(uiContainer)
    mineSweeper.append(mineSweeperTable)

    let h = 0
    let v = 0
    
    for (let i = 1; i <= rows * columns ; i++) {
        if ((i-1) % columns == 0) h ++
        v++
        if (v > columns) v = 1

        const oneSquare = document.createElement('div')
        oneSquare.classList.add("oneSquare")
        oneSquare.style.backgroundColor = 'rgb(90 , 90 ,90)'
        if (columns === 16) {
            oneSquare.style.width = '40px'
            oneSquare.style.height = '40px'
        }
        else if (columns === 30) {
            oneSquare.style.width = '30px'
            oneSquare.style.height = '30px'
        }
        else {
            oneSquare.style.width = '50px'
            oneSquare.style.height = '50px'
        }

        oneSquare.setAttribute("h" , h)
        oneSquare.setAttribute("v" , v)
        oneSquare.setAttribute("hv" , [h,v])

        mineSweeperTable.appendChild(oneSquare)

    }



    pickingRandomTilesForBombs(bombs)
    asignClickFunction()
}

const pickingRandomTilesForBombs = (bombs) => {
    let bombsCounter = bombs

    const allSquares = document.getElementsByClassName('oneSquare')
    

    const randomtileNumber = Math.floor(Math.random() * allSquares.length)

    if (!randomTilesNumbers.includes(randomtileNumber)) {
        randomTilesNumbers.push(randomtileNumber)
        allSquares[randomtileNumber].classList.add('containsBomb')
        bombsCounter --
        if (bombsCounter === 0) return
    }

    pickingRandomTilesForBombs(bombsCounter)
}

function createTimer () {
    clearInterval(timer)
    const div = document.createElement('div')
    div.classList.add('timerDiv')
    const timerTitle = document.createElement('span')
    timerTitle.textContent = 'Timer : '
    const timerCounter = document.createElement('span')
    timerCounter.textContent = 1
    timer = setInterval (() => {
        timerCounter.textContent = 1 + Number(timerCounter.textContent)
    } , 1000)

    div.append(timerTitle)
    div.append(timerCounter)

    return div
}

function createMines () {
    const div = document.createElement('div')
    div.classList.add('minesDiv')
    const minesTitle = document.createElement('span')
    minesTitle.textContent = 'Mines : '
    const minesCounter = document.createElement('span')
    minesCounter.textContent = bombs
    minesCounter.id = 'minesCounter'

    div.append(minesTitle)
    div.append(minesCounter)

    return div
}