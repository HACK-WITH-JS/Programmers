function solution(n) {
    let temp = "수박";
    return n % 2 === 0 ? temp.repeat(n / 2) : temp.repeat(Math.floor(n / 2)) + "수";
}