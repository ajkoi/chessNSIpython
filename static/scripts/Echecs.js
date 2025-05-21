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
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
]
let coups = []
let castle0 = true
let castle1 = true

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
           let checked_square = [square[0]-i, square[1]-i]
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

function findKing(chessboard, player) {
    if (player===0) {
        for (let i = 0; i<=7; i++) {
            for (let j = 0; j<=7; j++) {
                if (chessboard[i][j]==='K') {
                    return [i, j]
                }
                
            }
        }
    }
    else if (player===1) {
        for (let i = 0; i<=7; i++) {
            for (let j = 0; j<=7; j++) {
                if (chessboard[i][j]==='k') {
                    return [i, j]
                }
                
            }
        }
    }
}

function checkPieceInSquares (chessboard, piece, squares) {
    for (let i=0;i<squares.length;i++) {
       if (chessboard[squares[i][0]][squares[i][1]]===piece) {
           return true
       } 
    }
    return false
}

function isPosCheck(chessboard, player) {
    let posKing = findKing(chessboard, player)
    let bishopSquares = playableBishop(posKing, player)
    let rookSquares = playableRook(posKing, player)
    let knightSquares = playableKnight(posKing, player)
    let kingSquares = playableKing(posKing, player) 
    if (player===0) {
        let pawnSquares = [[posKing[0]-1, posKing[1]+1], [posKing[0]-1, posKing[1]-1]]
        if (checkPieceInSquares(chessboard, 'b', bishopSquares) || checkPieceInSquares(chessboard, 'q', bishopSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'r', rookSquares) || checkPieceInSquares(chessboard, 'q', rookSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'n', knightSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'k', kingSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'p', pawnSquares)) {
            return true
        }
    else if (player===1) {
        let pawnSquares = [[posKing[0]+1, posKing[1]+1], [posKing[0]+1, posKing[1]-1]]
        if (checkPieceInSquares(chessboard, 'B', bishopSquares) || checkPieceInSquares(chessboard, 'Q', bishopSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'R', rookSquares) || checkPieceInSquares(chessboard, 'Q', rookSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'N', knightSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'K', kingSquares)) {
            return true
        }
        else if (checkPieceInSquares(chessboard, 'P', pawnSquares)) {
            return true
        }
    }
    return false
}
}

const compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);


function arrayInarray(arr1, arr2) {

    for (let i=0;i<arr2.length;i++) {
        if (compareArrays(arr1, arr2[i])) {
            return true
        }
    }
    return false
}
function verifCoup(start, end, chessboard, player) {
    if (chessboard[start[0]][start[1]]==='P' && player===0) {
        if (arrayInarray(end, playablePawn(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='p' && player===1) {
        if (arrayInarray(end, playablePawn(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='R' && player===0) {
        if (arrayInarray(end, playableRook(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='r' && player===1) {
        if (arrayInarray(end, playableRook(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='N' && player===0) {
        if (arrayInarray(end, playableKnight(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='n' && player===1) {
        if (arrayInarray(end, playableKnight(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='B' && player===0) {
        if (arrayInarray(end, playableBishop(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='b' && player===1) {
        if (arrayInarray(end, playableBishop(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='K' && player===0) {
        if (arrayInarray(end, playableKing(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='k' && player===1) {
        if (arrayInarray(end, playableKing(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='Q' && player===0) {
        if (arrayInarray(end, playableBishop(start, player)) || arrayInarray(end, playableRook(start, player))) {
            return true
        }
        else {
            return false
        }
    }
    else if (chessboard[start[0]][start[1]]==='Q' && player===1) {

        if (arrayInarray(end, playableBishop(start, player)) || arrayInarray(end, playableRook(start, player))) {
            return true
        }
        else {
            return false
        }
    }

    return false
}

function movePiece(start, end, chessboard, coups) {
    chessboard[end[0]][end[1]] =  chessboard[start[0]][start[1]]
    chessboard[start[0]][start[1]] = ' '
    coups.push([start, end])
    return chessboard
}

function jouerCoup(start, end, player) {
    let temp = movePiece(start, end, JSON.parse(JSON.stringify(chessboard)), JSON.parse(JSON.stringify(coups)))
    if (isPosCheck(temp, player) || verifCoup(start, end, chessboard, player)) {
        return false
    }
    else {
        chessboard = movePiece(start, end, chessboard, coups)
        console.log(chessboard)
        console.log(coups)
        return true
    }
    
}

console.log(verifCoup([1, 4], [3, 2],chessboard, 1))

// console.log(movePiece([1, 1], [2, 1],chessboard, coups))
console.log(jouerCoup([1, 1], [3, 1],0))
console.log(jouerCoup([1, 4], [3, 2],0))
