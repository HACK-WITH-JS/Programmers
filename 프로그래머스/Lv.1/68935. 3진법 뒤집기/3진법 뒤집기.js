function solution(n) {
    return ThreeToTen(TenToThree(n));
}

function TenToThree(n) {
    let ret = '';
    
    while(n !== 0) {
        ret += n % 3;
        n = Math.floor(n / 3);
    }
    
    return ret;
}

function ThreeToTen(n) {
    let ret = 0;
    let mul = 1;
    
    for(let i = n.length - 1; i >= 0; i--) {
        let num = parseInt(n[i]);
        ret += num * mul;
        mul *= 3;
    }
    
    return ret;
}