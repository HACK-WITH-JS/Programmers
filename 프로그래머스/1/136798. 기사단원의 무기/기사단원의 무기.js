// 각 기사는 기사 번호의 약수의 개수에 해당하는 공격력을 가진 무기를 구매한다.
// 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 정해진 공격력을 가진 무기를 구매한다.
function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1; i <= number; i++) {
        let temp = count(i);
        
        if(temp > limit) {
            answer += power;
        } else {
            answer += temp;
        }
    }
    
    return answer;
}

function count(number) {
    let ret = 0;
    
    for(let i = 1; i * i <= number; i++) {
        if(i * i === number) {
            ret++;
        } else if(number % i === 0) {
            ret += 2;
        }
    }
    
    return ret;
}