function solution(triangle) {
    let dp = make2DArr(triangle.length);
    dp[0][0] = triangle[0][0];
    
    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j <= i; j++) {
            if(j === 0) {
                dp[i][j] = dp[i-1][j] + triangle[i][j];
            } else if (j === i) {
                dp[i][j] = dp[i-1][j-1] + triangle[i][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];
            }
        }
    }
    
    let answer = Math.max(...dp[triangle.length-1]);  
    return answer;
}

function make2DArr(len) {
    let answer = [];
    for(let i = 0; i < len; i++) {
        answer.push(new Array(len).fill(0));
    }
    return answer;
}