function solution(m, n, board) {
    let answer = 0;
    const newBoard = make2DArray(m, n, board);
    let removeBoard = make2DRemoveBoard(m, n);
    
    // 배열을 전체 순회하면서 삭제해야 할 블록을 X로 마킹한다.
    // 만일 하나라도 삭제된다면 true를 반환한다.
    function checkAndMark() {
        let ret = false;
        
        for(let i = 0; i < m - 1; i++) {
            for(let j = 0; j < n - 1; j++) {
                if(newBoard[i][j] === 'X') continue;
                if(newBoard[i][j+1] === 'X') continue;
                if(newBoard[i+1][j] === 'X') continue;
                if(newBoard[i+1][j+1] === 'X') continue;
                // 폭발이니까 표시 해야 함!
                if(newBoard[i][j] === newBoard[i][j+1] &&
                   newBoard[i][j] === newBoard[i+1][j] &&
                   newBoard[i][j] === newBoard[i+1][j+1]) {
                    
                    removeBoard[i][j] = true;
                    removeBoard[i][j+1] = true;
                    removeBoard[i+1][j] = true;
                    removeBoard[i+1][j+1] = true;
                    ret = true;
                }
            }
        }
        
        return ret;
    }
    
    // 배열을 전체 순회하면서 제거해야 될 블록을 X 표시한다!
    function remove() {
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(removeBoard[i][j]) {
                    newBoard[i][j] = 'X';
                    answer++;
                }
            }
        }
        // 삭제할 준비는 끝났으니 배열은 다시 준비 해준다.
        removeBoard = make2DRemoveBoard(m, n);
    }
    
    function arrange() {
        for(let col = 0; col < n; col++) {
            for(let row = m - 2; row >= 0; row--) {
                if(board[row][col] !== 'X') {
                    let curRow = row;
                    
                    while(curRow <= m-2 && newBoard[curRow+1][col] === 'X') {
                        newBoard[curRow+1][col] = newBoard[curRow][col]
                        newBoard[curRow][col] = 'X';
                        curRow++;
                    }
                }
            }
        }
    }
    
    
    while(checkAndMark()) {
        remove();
        arrange();
    }
    
    
    return answer;
}

function make2DRemoveBoard(m, n) {
    const ret = [];
    
    for(let i = 0; i < m; i++) {
        ret.push(Array(n).fill(false));
    }
    
    return ret;
}

function make2DArray(m, n, board) {
    const ret = [];
    
    for(let i = 0; i < m; i++) {
        ret.push(Array(n).fill(0));
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            ret[i][j] = board[i][j];
        }
    }
    
    return ret;
}