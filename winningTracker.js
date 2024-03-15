const winningTracker = () => {
    let win = true
    for (let i = 0; i <allSquares.length; i++) {
        if(!(allSquares[i].className.includes('containsBomb'))) {
            if (!(allSquares[i].className.includes('showed'))){
                win = false
            }
        }
    }

    if (win) {creatingWinSectionwin()}
}

const creatingWinSectionwin = () => {

    const backDrop = document.createElement("div")
    backDrop.classList.add('backDrop')
    backDrop.addEventListener('click', playAgain)

    const winContainer = document.createElement("div")
    winContainer.classList.add('winContainer')

    const winSection = document.createElement("div")
    winSection.classList.add('win')

    const winText = document.createElement('span')
    winText.classList.add('winText')
    winText.innerHTML = 'YOU WON!'

    winSection.appendChild(winText)

    winContainer.appendChild(winSection)

    mineSweeperTable.appendChild(winContainer)
    mineSweeperTable.appendChild(backDrop)
}