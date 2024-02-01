function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    for(let move of moves) {
        const elem = pick(move, board);
        // console.log(`${move-1}열에서 뽑힌 데이터 ${elem}`);
        if(elem === 0) continue;
        
        if(stack[stack.length-1] === elem) {
            answer += 2;
            stack.pop();
        } else {
            stack.push(elem);
        }
    }
    
    return answer;
}

function pick(move, board) {
    let size = board.length;
    let row = 0;
    
    // console.log(`${move-1}열에서 데이터 뽑기 시작`);
    while(row < size) {
        // console.log(`${board[row][move-1]}`)
        if(board[row][move-1] !== 0) {
            let ret = board[row][move-1]
            board[row][move-1] = 0;
            return ret;
        }
        row++;
    }
    
    return 0;
}

