const mineSweeper = document.getElementById('mineSweeper')
let mainColor = '#a8a8a8'
let secondColor = '#1100ff'
let rows = 20
let columns = 20
let bombs = 50
let error = false

const menu = () => {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    menuContainer.setAttribute('id' , 'menuContainer')

    const welcomeText = document.createElement('span')
    welcomeText.classList.add('welcomeText')
    welcomeText.innerText = 'MineSweeper'

    const maincolorPickerContainer = creatingColorPickerContainer('mainColorPicker' , 'main')
    const secondcolorPickerContainer = creatingColorPickerContainer('secondColorPicker' , 'second')

    const rowTableContainer = creatingTableChangeInputcontainer('rows',30)
    const columnTableContainer = creatingTableChangeInputcontainer('columns',50)
    const bombContainer = creatingTableChangeInputcontainer('bombs', 500)

    const playButton = document.createElement('button')
    playButton.classList.add('playButton')
    playButton.innerText = 'Play'
    playButton.addEventListener('click' , play)


    menuContainer.appendChild(welcomeText)
    menuContainer.appendChild(rowTableContainer)
    menuContainer.appendChild(columnTableContainer)
    menuContainer.appendChild(bombContainer)
    menuContainer.appendChild(maincolorPickerContainer)
    menuContainer.appendChild(secondcolorPickerContainer)
    menuContainer.appendChild(playButton)
    mineSweeper.appendChild(menuContainer)
}

const play = () => {

    let checkRowValue = isNaN(rows)
    let checkColumnValue = isNaN(columns)
    let checkBombValue = isNaN(bombs)

    if (!checkRowValue &&  !checkColumnValue && !checkBombValue) {
        const menu = document.getElementById('menuContainer')
        menu.remove()
        creatingTable(rows, columns, bombs)
    }
    else {
        error = true
    }
    
    createErrorMessage()
}

const createErrorMessage = () => {
    if (error) {
        const errorMessage = document.createElement('span')
        errorMessage.innerText = 'must be a number'
        errorMessage.classList.add('error')
        const menuContainer = document.getElementById('menuContainer')
        menuContainer.appendChild(errorMessage)
    }
}

const creatingTableChangeInputcontainer = (text, max) => {
    const tableChangeContainer = document.createElement('div')
    tableChangeContainer.classList.add('inputContainer')

    const tableChange = document.createElement('input')
    tableChange.setAttribute('id' , `${text}`)
    tableChange.type = 'text'
    tableChange.placeholder = `${text}`
    tableChange.classList.add('tableChange')
    tableChange.min = 4
    tableChange.max = max
    tableChange.onchange = tableChangeMount

    tableChangeContainer.appendChild(tableChange)
    return tableChangeContainer
}

const tableChangeMount = (e) => {
    let id = e.target.id
    let mountPicked = e.target.value

    if (id === 'rows') rows = mountPicked
    else if (id === 'columns') columns = mountPicked
    else if (id === 'bombs') bombs = mountPicked
}

const creatingColorPickerContainer = (id , text) => {
    const colorPickerContainer = document.createElement('div')
    colorPickerContainer.classList.add('inputContainer')

    const colorPickerText = document.createElement('span')
    colorPickerText.classList.add('colorPickerText')
    colorPickerText.innerText = `${text} color: `

    const colorPicker = document.createElement('input')
    colorPicker.setAttribute('id' , `${id}`)
    colorPicker.type = 'color'
    colorPicker.classList.add('colorPicker')
    colorPicker.onchange = colorPickerChange

    colorPickerContainer.appendChild(colorPickerText)
    colorPickerContainer.appendChild(colorPicker)
    return colorPickerContainer
}


const colorPickerChange = (e) => {
    let id = e.target.id
    let colorPicked = e.target.value

    if (id === 'mainColorPicker') mainColor = colorPicked
    else if (id === 'secondColorPicker') secondColor = colorPicked
}


menu()