// // TODO faire le jeu :)

// let chessboard = [
//     ['T', 'N', 'B', 'K', 'Q', "B", "K", "T"],
//     ['P', 'P', 'P', 'P', 'P', "P", "P", "P"],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['p', 'p', 'p', 'p', 'p', "p", "p", "p"],
//     ['t', 'n', 'b', 'k', 'q', "b", "k", "t"],
// ]

// let player = 0
// let tour = 1
// let canPlayer1Roque = true
// let canPayer2Roque = true

// function jouerCoup (startSquare, endSquare) {
//     /*
//     * startSquare: tuple(int, int)
//     * endSquare: tuple(int, int) */
//     if (isPlayable(startSquare, endSquare)) {
//         if (isItaRoque(startSquare, endSquare)) {
//             // ROQUE PUTAIN DE MERDE
//         } else {
//             chessboard[endSquare[0]][endSquare[1]] = chessboard[startSquare[0]][startSquare[1]]
//             chessboard[startSquare[0]][startSquare[1]] = ''
//         }
//     }
// }

// function isPlayable (startSquare, endSquare) {
//     return true
// }

// function isPlayableKing (startSquare, endSquare) {
//     if ((abs(startSquare[1]-endSquare[1]) <= 1) && (abs(startSquare[0]-endSquare[0]) <= 1)) {
//         return true
//     }
//     else {
//         return false
//     }
    
// }

// function isPlayablePawn (startSquare, endSquare) { //TODO : faire la prise en passant et clean un peu ce code
//     if (abs(startSquare[1]-endSquare[1] === 1) && chessboard[endSquare[0][endSquare[1]]] === '' && startSquare[0]===endSquare[0]) {
//         return true
//     }
//     else if ((abs(startSquare[1]-endSquare[1] === 2
//         && startSquare[0]===endSquare[0]))
//         && (chessboard[startSquare[0][startSquare[1]]] === 'P' && startSquare[1] === 2 && chessboard[startSquare[0]][startSquare[1]+1] === '' )
//         || (chessboard[startSquare[0][startSquare[1]]] === 'p' && startSquare[1] === 7 && chessboard[startSquare[0]][startSquare[1]-1] === '' )
//         && chessboard[endSquare[0][endSquare[1]]] === '')
//     {
//           return true
//     }
//     else if (chessboard[startSquare[0][startSquare[1]]] === 'P') { // prise blancs
//         if (abs(startSquare[0]-endSquare[0]) === 1 && abs(startSquare[1]-endSquare[1]) === -1 && !(chessboard[endSquare[0][endSquare[1]]] === '')) {
//             return true
//         }
//     }
//     else if (chessboard[startSquare[0][startSquare[1]]] === 'p') { // prise
//         if (abs(startSquare[0]-endSquare[0]) === 1 && abs(startSquare[1]-endSquare[1]) === 1 && !(chessboard[endSquare[0][endSquare[1]]] === '')) {
//             return true
//         }
//     }
// }

// function isPlayableKnight (startSquare, endSquare) {
//     let Squares = [
//                 [startSquare[0]-1, startSquare[1]+2],[startSquare[0]+1, startSquare[1]+2],
//                 [startSquare[0]+2, startSquare[1]+1],[startSquare[0]+2, startSquare[1]-1],
//                 [startSquare[0]-2, startSquare[1]+1],[startSquare[0]-2, startSquare[1]-1],
//                 [startSquare[0]-1, startSquare[1]-2],[startSquare[0]+1, startSquare[1]-2],
//             ]
//     if (endSquare in Squares) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// function isPlayableRook (startSquare, endSquare) {
//     let Squares = []
//     for (let i = startSquare[0]; i < 8 ;i++) { // vers la droite
//         if (!chessboard[i][startSquare[1]] === '') {break}
//         else {
//             Squares.push([i, startSquare[1]])
//         }
//     }
//     for (let i = startSquare[0]; i > 0 ;i--) { // vers la gauche
//         if (!chessboard[i][startSquare[1]] === '') {break}
//         else {
//             Squares.push([i, startSquare[1]])
//         }
//     }
//     for (let i = startSquare[1]; i < 8 ;i++) {
//         if (!chessboard[startSquare[0]][i] === '') {break}
//         else {
//             Squares.push([startSquare[0], i])
//         }
//     }
//     for (let i = startSquare[1]; i > 0 ;i--) {
//         if (!chessboard[startSquare[0]][i] === '') {break}
//         else {
//             Squares.push([startSquare[0], i])
//         }
//     }
//     console.log(Squares)
//     if (endSquare in Squares) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// function abs(number){
//     if (number>0) {
//         return number
//     }
//     else {
//         return -number
//     }

// }

// function isItaRoque(startSquare, endSquare) {
//     if (!(chessboard[startSquare[0]][startSquare[1]] === 'R' || chessboard[startSquare[0]][startSquare[1]] === 'r' )) {
//         return false
//     }
//     else if (abs(startSquare[0]-endSquare[0]) === 2) {
//         return true
//     }

// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let player = 0
let tour = 1
let canPlayer1Roque = true
let canPayer2Roque = true
function isUpper (char) {
    if (char.toUpperCase()!==char) {
        return false
    }
    else {
        return true
    }
}





let chessboard = [
    "rnbqkbnr",
    "pppppppp",
    "        ",
    "        ",
    "        ",
    "        ",
    "PPPPPPPP",
    "RNBQKBNR",
]

function playableRook (square, player) {
    let squares = []
    for (let i = square[0]+1; i<8; i++) {
        if (player===0) {
            if (isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')) {
                break
            }
            else if (!isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')){
                squares.push([i, square[1]])
                break
            }
            else {
                squares.push([i, square[1]])
            }
        }
        else if (player===1) {
            if (!isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')) {
                break
            }
            else if (isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')){
                squares.push([i, square[1]])
                break
            }
            else {
                squares.push([i, square[1]])
            }
        }
    }
    for (let i = square[0]-1; i>0; i--) {
        if (player===0) {
            if (isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')) {
                break
            }
            else if (!isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')){
                squares.push([i, square[1]])
                break
            }
            else {
                squares.push([i, square[1]])
            }
        }
        else if (player===1) {
            if (!isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')) {
                break
            }
            else if (isUpper(chessboard[i][square[1]]) && !(chessboard[i][square[1]]===' ')){
                squares.push([i, square[1]])
                break
            }
            else {
                squares.push([i, square[1]])
            }
        }
    }
    for (let i = square[1]+1; i<8; i++) {
        if (player===0) {
            if (isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')) {
                break
            }
            else if (!isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')){
                squares.push([square[0], i])
                break
            }
            else {
                squares.push([square[0], i])
            }
        }
        else if (player===1) {
            if (!isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')) {
                break
            }
            else if (isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')){
                squares.push([square[0], i])
                break
            }
            else {
                squares.push([square[0], i])
            }
        }
    }
    for (let i = square[1]-1; i>0; i--) {
        if (player===0) {
            if (isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')) {
                break
            }
            else if (!isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')){
                squares.push([square[0], i])
                break
            }
            else {
                squares.push([square[0], i])
            }
        }
        else if (player===1) {
            if (!isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')) {
                break
            }
            else if (isUpper(chessboard[square[0]][i]) && !(chessboard[square[0]][i]===' ')){
                squares.push([square[0], i])
                break
            }
            else {
                squares.push([square[0], i])
            }
        }
    }
    return squares
}



function playableBishop(square, player) {
    let squares = []
    if (player===0) {
        {
        let i = 1
        while (square[0]+i < 8 && square[1]+i < 8) {
           let checked_square = [square[0]+i, square[1]+i]
            if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
        {
        let i = 1
        while (square[0]+i < 8 && square[1]-i > 0) {
           let checked_square = [square[0]+i, square[1]-i]
            if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
        {
        let i = 1
        while (square[0]-i > 0 && square[1]+i < 8) {
           let checked_square = [square[0]-i, square[1]+i]
            if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
        {
        let i = 1
        while (square[0]-i > 0 && square[1]-i > 0) {
           let checked_square = [square[0]+i, square[1]+i]
            if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
    }   
    if (player===1) {
        {
        let i = 1
        while (square[0]+i < 8 && square[1]+i < 8) {
           let checked_square = [square[0]+i, square[1]+i]
            if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
        {
        let i = 1
        while (square[0]+i < 8 && square[1]-i > 0) {
           let checked_square = [square[0]+i, square[1]-i]
            if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
        {
        let i = 1
        while (square[0]-i > 0 && square[1]+i < 8) {
           let checked_square = [square[0]-i, square[1]+i]
            if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
        {
        let i = 1
        while (square[0]-i > 0 && square[1]-i > 0) {
           let checked_square = [square[0]-i, square[1]-i]
            if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                break
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                break
            }
            else {
                squares.push(checked_square)
            }

           i++ 
        }
    }
    }   
    return squares
}


function playableKing(square, player) {
    
}
