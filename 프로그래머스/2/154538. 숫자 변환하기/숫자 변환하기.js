function solution(x, y, n) {
    const INF = 999999999
    let dp = Array(1000001).fill(INF)
    dp[x] = 0;
    
    for(let i = x+1; i <= y; i++) {
        if(i - n >= 1 && dp[i-n] !== INF) {
            dp[i] = Math.min(dp[i], dp[i-n] + 1);    
        }
        
        if(i % 2 === 0 && dp[i/2] !== INF) {
            dp[i] = Math.min(dp[i], dp[i/2] + 1);
        }
        
        if(i % 3 === 0 && dp[i/3] !== INF) {
            dp[i] = Math.min(dp[i], dp[i/3] + 1);
        }
    }
    
    return dp[y] === INF ? -1 : dp[y];
}