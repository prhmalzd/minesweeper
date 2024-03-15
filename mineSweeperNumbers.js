const allSquares = document.getElementsByClassName('oneSquare')


const setNumbersOnSquares = () => {
    for (let i =0 ; i < allSquares.length; i++) {
        const h = Number(allSquares[i].getAttribute('h'))
        const v = Number(allSquares[i].getAttribute('v'))

        
        const bombAmount = getbombAmount(h, v)

        if (!allSquares[i].className.includes('containsBomb')) {
            allSquares[i].setAttribute("bombAmount" , bombAmount)
        }
    }
}

const getbombAmount =(h, v) => {
    let bombNumber = 0

    for (let i = 0; i < allSquares.length; i++) {
        const hneighbor = Number(allSquares[i].getAttribute('h'))
        const vneighbor = Number(allSquares[i].getAttribute('v'))

        if (hneighbor === h || hneighbor === h-1 || hneighbor === h+1) {
            if (vneighbor === v-1 || vneighbor === v || vneighbor === v+1) {
                if(hneighbor === h && vneighbor === v) {  
                }
                else {
                    if (allSquares[i].className.includes('containsBomb')) {
                        bombNumber ++

                    }
                }
            }
        }

    }

    return bombNumber
}












// for fun part :DD





// const showNeigborSquares = (h , v) => {
//     let topRightSquare = getOneSquare(h-1, v-3)
//     let topSquare = getOneSquare(h-1, v-4)
//     let topLeftSquare = getOneSquare(h-1, v-5)
//     let leftSquare = getOneSquare(h, v-1)
//     let bottomLeftSquare = getOneSquare(h+1, v+3)
//     let bottomSquare = getOneSquare(h+1, v+4)
//     let bottomRightSquare = getOneSquare(h+1, v+5)
//     let rightSquare = getOneSquare(h, v+1)
//     return [topRightSquare, topSquare, topLeftSquare, leftSquare, bottomLeftSquare, bottomSquare, bottomRightSquare, rightSquare]
// }

// const getOneSquare = (h,v) => {
//     const hString = h.toString()
//     const vString = v.toString()
//     const allSquares = document.getElementsByClassName('oneSquare')
//     let chosenOne

//     for(let i =0; i <allSquares.length; i++) {
//         let elementH = allSquares[i].getAttribute("h")
//         let elemnetV = allSquares[i].getAttribute("v")

//         if (hString === elementH && vString === elemnetV) {
//             chosenOne = allSquares[i]
//         }
//     };
    
//     if (chosenOne)return chosenOne
//     else return "nah"
// }


// setNumbersOnSquares()