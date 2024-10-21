const mineSweeper = document.getElementById('mineSweeper')
let mainColor = '#a8a8a8'
let secondColor = '#1100ff'
let numbersColor = ['white' , 'green' , 'red' , 'dark blue' , 'brown' , 'cyan' , 'black' , 'gray']
let rows = 8
let columns = 8
let bombs = 10

function menu () {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    menuContainer.setAttribute('id' , 'menuContainer')

    const welcomeText = document.createElement('span')
    welcomeText.classList.add('welcomeText')
    welcomeText.innerText = 'MineSweeper'

    const difficultyOptionsContainer = document.createElement('div')
    difficultyOptionsContainer.classList.add('difficultyOptionsContainer')

    const begginerDiv = createDifficultyOption('begginer' , 8 , 8 , 10)
    const intermediateDiv = createDifficultyOption('intermediate' , 16 , 16 , 40)
    const expertDiv = createDifficultyOption('expert' , 16 , 30 , 99)

    const playButton = document.createElement('button')
    playButton.classList.add('playButton')
    playButton.innerText = 'Play'
    playButton.addEventListener('click' , play)

    difficultyOptionsContainer.appendChild(begginerDiv)
    difficultyOptionsContainer.appendChild(intermediateDiv)
    difficultyOptionsContainer.appendChild(expertDiv)

    menuContainer.appendChild(welcomeText)
    menuContainer.appendChild(difficultyOptionsContainer)
    menuContainer.appendChild(playButton)
    mineSweeper.appendChild(menuContainer)
}

function createDifficultyOption (id , row, column , bomb) {
    const contianerDiv = document.createElement('div')
    contianerDiv.setAttribute('id' , id)
    contianerDiv.classList.add('difficultyOption')
    contianerDiv.textContent = id
    contianerDiv.addEventListener('click' , (e) => {
        changeBoardOptions(e , row , column , bomb)
    })

    if (id === 'begginer') contianerDiv.classList.add('difficultyOptionSelected')

    return contianerDiv
}
function changeBoardOptions (e , r , c , b) {
    const allDivs = Array.from(e.target.parentNode.children)

    allDivs.forEach((div) => {
        div.classList.remove('difficultyOptionSelected')
        if (e.target.id === div.id) {
            div.classList.add('difficultyOptionSelected')
        }
    })

    rows = r
    columns = c
    bombs = b
}

function play () {
    const menu = document.getElementById('menuContainer')
    menu.remove()
    creatingTable(rows, columns, bombs)
}


menu()