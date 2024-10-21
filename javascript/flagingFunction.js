const flaggingSquares = (e) => {
    e.preventDefault()
    const elementThatclicked = e.target
    const minesCounter = document.querySelector('#minesCounter')

    if (elementThatclicked.className.includes('oneSquare'))
    {
        const flagged = elementThatclicked.getAttribute('flagged')

        if (flagged === 'true') {
            if (Number(minesCounter.textContent) === bombs) return
            elementThatclicked.setAttribute('flagged' , false)
            elementThatclicked.innerHTML = ''
            minesCounter.textContent = Number(minesCounter.textContent) + 1
            return
        }

        if (elementThatclicked.className.includes('showed')) return

        if (Number(minesCounter.textContent) === 0) return
        elementThatclicked.innerHTML = '🚩'
        elementThatclicked.setAttribute('flagged' , true)
        minesCounter.textContent = Number(minesCounter.textContent) - 1
    }   

}


document.addEventListener('contextmenu', flaggingSquares)
