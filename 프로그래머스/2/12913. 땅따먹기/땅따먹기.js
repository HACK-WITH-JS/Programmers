function solution(land) {
    var answer = 0;
    const row = land.length;
    const col = land[0].length;

    // DP 초기화
    const dp = make2DArray(row, col);
    for(let i = 0; i < col; i++) {
        dp[0][i] = land[0][i];
    }
    
    for(let i = 1; i < row; i++) {
        for(let j = 0; j < col; j++) {
            let max = 0;
            for(let k = 0; k < col; k++) {
                if(j === k) continue;
                max = Math.max(max, dp[i-1][k]);
            }
            
            dp[i][j] = land[i][j] + max;
        }
    }
    
    return Math.max(...dp[row-1]);
}

function make2DArray(row, col) {
    const ret = [];
    
    for(let i = 0; i < row; i++) {
        ret.push(Array(col).fill(0));
    }
    
    return ret;
}