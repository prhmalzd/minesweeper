const allSquares = document.getElementsByClassName('oneSquare')

function getbombAmount (h, v) {
    let squares =  [
        [h-1 , v-1] , [h-1 , v] , [h-1 , v+1],
        [h   , v-1] , [h   , v] , [h   , v+1],
        [h+1 , v-1] , [h+1 , v] , [h+1 , v+1]
    ]

    let bombNumber = 0

    squares.forEach((square) => {
        let hv = `${square[0]+','+square[1]}`
        let elem = document.querySelector(`[hv = "${hv}"]`)
        if (elem) {
            if (elem.className.includes('containsBomb')) {
                bombNumber++
            }
        }
    })

    return bombNumber
}