/**
 * Date: Sun May 22 17:31:30 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Print a chess board
 */

function generateChessBoard(size) {
    var chessBoard = '';
    for (var i = 0, spaceI = false; i < size; ++i, spaceI = !spaceI) {
        for (var j = 0, spaceJ = spaceI; j < size; ++j, spaceJ = !spaceJ) {
            chessBoard += (spaceJ ? ' ' : '#');
        }
        chessBoard += '\n';
    }
    // Cut off the last new-line
    return chessBoard.substring(0, chessBoard.length - 1);
}

console.log(generateChessBoard(8));
