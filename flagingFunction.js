const flaggingSquares = (e) => {
    e.preventDefault()
    const elementThatclicked = e.target
    // const bombsAmount = Number(bombCounter.innerText)

    

    if (elementThatclicked.className.includes('oneSquare'))
    {
        const flagged = elementThatclicked.getAttribute('flagged')

        if (flagged === 'true') {
            elementThatclicked.setAttribute('flagged' , false)
            elementThatclicked.innerHTML = ''
            // bombCounter.innerText = bombsAmount + 1
            return
        }

        if (elementThatclicked.className.includes('showed')) return

        elementThatclicked.innerHTML = '🚩'
        elementThatclicked.setAttribute('flagged' , true)
        // bombCounter.innerText = bombsAmount - 1
    }   

}


document.addEventListener('contextmenu', flaggingSquares)
