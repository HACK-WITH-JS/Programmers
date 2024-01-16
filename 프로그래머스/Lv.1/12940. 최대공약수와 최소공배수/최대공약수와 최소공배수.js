function solution(n, m) {
    const gcd = GCD(n, m);
    const lcm = n * m / gcd;
    return [gcd, lcm];
}

function GCD(a, b) {
    if(b === 0) {
        return a;
    }
    
    return GCD(b, a % b);
}