// 1 또는 2
function solution(n) {
    const dp = Array(n+1).fill(0);
    dp[0] = 1;
    
    for(let i = 1; i <= n; i++) {
        dp[i] = dp[i-1];
        
        if(i >= 2) {
            dp[i] += dp[i-2];
            dp[i] %= 1234567;
        }
    }
    
    return dp[n];
}