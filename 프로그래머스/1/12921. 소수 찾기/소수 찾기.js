// 에라토스테네스의 체
function solution(n) {
    let primes = Array(n+1).fill(true);
    let ans = 0;
    
    for(let i = 2; i <= n; i++) {
        if(!primes[i]) continue;
        for(let j = i + i; j <= n; j += i) {
            primes[j] = false;
        }
    }
    
    for(let i = 2; i <= n; i++) {
        if(primes[i]) {
            ans++;
        }
    }
    
    return ans;
}