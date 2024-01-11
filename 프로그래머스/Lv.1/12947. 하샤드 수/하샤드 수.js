function solution(x) {
    return x % getSumOfx(x) === 0;
}

function getSumOfx(x) {
    return (x + '').split('').map(x => Number(x)).reduce((acc, elem) => acc + elem, 0);
}