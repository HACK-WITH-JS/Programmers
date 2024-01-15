/**
@Param price: 가격
@Param money: 보유 금액
@Param count: 놀이 기구를 탈 회수
*/
function solution(price, money, count) {
    let sum = 0;
    let nextPrice = price;
    
    for(let i = 1; i <= count; i++) {
        sum += nextPrice;
        nextPrice += price;
    }
    
    return (money - sum) > 0 ? 0 : sum - money;
}