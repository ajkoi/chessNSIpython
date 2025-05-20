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
let coups = [[[0, 0], [1, 1, 1]]]

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
    let squares = []
    
    if (player===0) {
        for (let i = -1; i<=1; i++) {
            for (let j = -1; j<=1; j++) {
            let checked_square = [square[0]+i, square[1]+j]
            if (checked_square[0]<0 || checked_square[0] > 7 || checked_square[1] < 0 || checked_square[1] > 7 || (checked_square[0]===square[0] && checked_square[1]===square[1])) {
                continue
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                continue
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                continue
            }
            else {
                squares.push(checked_square)
            }
            }
        }
    }
    else if (player===1) {
        for (let i = -1; i<=1; i++) {
            for (let j = -1; j<=1; j++) {
            let checked_square = [square[0]+i, square[1]+j]
            if (checked_square[0]<0 || checked_square[0] > 7 || checked_square[1] < 0 || checked_square[1] > [7] || (checked_square[0]===square[0] && checked_square[1]===square[1])) {
                continue
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                continue
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                continue
            }
            else {
                squares.push(checked_square)
            // }
            }
        }
    }
}

    return squares
}


function playableKnight(square, player) {
    let possible_squares = [[2, -1], [2, 1], [1, 2], [-1, 2], [1, -2], [-1, -2], [-2, 1], [-2, -1]]
    let squares = []
    if (player===0) {
        for (let i=0; i<possible_squares.length; i++) {
            let checked_square = [square[0]+possible_squares[i][0], square[1]+possible_squares[i][1]]
            if (checked_square[0]<0 || checked_square[0] > 7 || checked_square[1] < 0 || checked_square[1] > [7] || (checked_square[0]===square[0] && checked_square[1]===square[1])) {
                continue
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                continue
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                continue
            }
            else {
                squares.push(checked_square)
            // }
            }

        }
    }
    else if (player===1) {
        for (var i=0; i<possible_squares.length; i++) {
            let checked_square = [square[0]+possible_squares[i][0], square[1]+possible_squares[i][1]]
            if (checked_square[0]<0 || checked_square[0] > 7 || checked_square[1] < 0 || checked_square[1] > [7] || (checked_square[0]===square[0] && checked_square[1]===square[1])) {
                continue
            }
            else if (!isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')) {
                continue
            }
            else if (isUpper(chessboard[checked_square[0]][checked_square[1]]) && !(chessboard[checked_square[0]][checked_square[1]]===' ')){
                squares.push(checked_square)
                continue
            }
            else {
                squares.push(checked_square)
            // }
            }

        }
    }
    return squares
}

function playablePawn(square, player) {
    let squares = []
    if (player===0) {
        if (chessboard[square[0]-1][square[1]]===' ') {
           squares.push([square[0]-1, square[1]]) 
        }
        if (chessboard[square[0]-2][square[1]]===' ' && square[0]===6) {
           squares.push([square[0]-2, square[1], 1]) 
        }
        if (!isUpper(chessboard[square[0]-1][square[1]+1])) { // prise
            squares.push([square[0]-1, square[1]+1])
        }
        if (!isUpper(chessboard[square[0]-1][square[1]-1])) {
            squares.push([square[0]-1, square[1]-1])
        }
        if (chessboard[square[0]][square[1]-1]==='p') { // en passant
            if (coups[0][1].length===3) {
                squares.push([square[0]-1, square[1]-1])
            } 
        }
        if (chessboard[square[0]][square[1]+1]==='p') {
            if (coups[0][1].length===3) {
                squares.push([square[0]-1, square[1]+1])
            } 
        }
    }
    else if (player===1) {
        if (chessboard[square[0]+1][square[1]]===' ') {
           squares.push([square[0]+1, square[1]]) 
        }
        if (chessboard[square[0]+2][square[1]]===' ' && square[0]===1) {
           squares.push([square[0]+2, square[1], 1]) 
        }
        if (!isUpper(chessboard[square[0]+1][square[1]+1])) {
            squares.push([square[0]+1, square[1]+1])
        }
        if (!isUpper(chessboard[square[0]+1][square[1]-1])) {
            squares.push([square[0]+1, square[1]-1])
        }
        if (chessboard[square[0]][square[1]+1]==='P') {
            if (coups[0][1].length===3) {
                squares.push([square[0]+1, square[1]-1])
            } 
        }
        if (chessboard[square[0]][square[1]+1]==='P') {
            if (coups[0][1].length===3) {
                squares.push([square[0]+1, square[1]+1])
            } 
        }
    }
    return squares
}
