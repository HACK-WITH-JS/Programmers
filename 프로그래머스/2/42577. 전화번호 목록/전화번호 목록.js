function solution(phone_book) {
    var answer = true;
    const map = new Map();
    phone_book.sort((a, b) => a.length - b.length);
    map.set(phone_book[0], 1);
    
    for(let i = 1; i < phone_book.length; i++) {
        if(check(phone_book[i], map)) {
            return false;   
        }
        map.set(phone_book[i], 1);
    }
    
    return answer;
}

// 접두어인 번호가 있을 경우 true 반환
function check(number, map) {
    for(let i = 1; i < number.length; i++) {
        if(map.has(number.substring(0, i))) {
            return true;
        }
    }
    // for(let key of map.keys()) {
    //     if(number.substring(0, key.length) === key) {
    //         return true;
    //     }
    // }
    return false;
}