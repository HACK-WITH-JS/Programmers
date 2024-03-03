function solution(n, k) {
    return n.toString(k).split('0')
           .filter(x => x !== '')
           .filter(x => isPrime(x))
           .length;
}

function isPrime(n) {
    n = parseInt(n);
    if(n === 1) {
        return false;
    }
    
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) return false;
    }
    
    return true;
}