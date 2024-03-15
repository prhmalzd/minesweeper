// const bombCounter = document.getElementById('bombsCounter')

let randomTilesNumbers = []

const creatingTable = (rows, columns, bombs) => {
    const mineSweeperTable = document.createElement('div')
    mineSweeperTable.setAttribute('id', 'mineSweeperTable')
    mineSweeperTable.style.gridTemplateRows = `repeat(${rows},30px)`
    mineSweeperTable.style.gridTemplateColumns = `repeat(${columns},30px)`

    mineSweeper.appendChild(mineSweeperTable)


    // bombCounter.innerText = bombs

    let h = 0
    let v = 0
    
    for (let i = 1; i <= rows * columns ; i++) {
        if ((i-1) % rows == 0) h ++
        v++
        if (v > columns) v = 1

        const oneSquare = document.createElement('div')
        oneSquare.classList.add("oneSquare")
        oneSquare.style.backgroundColor = mainColor

        oneSquare.setAttribute("h" , h)
        oneSquare.setAttribute("v" , v)

        mineSweeperTable.appendChild(oneSquare)

    }



    pickingRandomTilesForBombs(bombs)
    setNumbersOnSquares()
    asignClickFunction()
}

const pickingRandomTilesForBombs = (bombs) => {
    let bombsCouner = bombs

    const allSquares = document.getElementsByClassName('oneSquare')
    

    const randomtileNumber = Math.floor(Math.random() * allSquares.length)

    if (!randomTilesNumbers.includes(randomtileNumber)) {
        randomTilesNumbers.push(randomtileNumber)
        allSquares[randomtileNumber].classList.add('containsBomb')
        bombsCouner --
        if (bombsCouner === 0) return
    }

    pickingRandomTilesForBombs(bombsCouner)

    
}

