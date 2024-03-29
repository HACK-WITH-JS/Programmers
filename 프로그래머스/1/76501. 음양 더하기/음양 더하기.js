function solution(absolutes, signs) {
    return new Array(absolutes.length).fill(0)
        .map((value, index) => signs[index] ? absolutes[index] : -absolutes[index])
        .reduce((a, b) => a + b, 0);
}