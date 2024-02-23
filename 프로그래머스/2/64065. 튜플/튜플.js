// 튜플은 중복된 원소가 있을 수 있으며 순서가 정해져 있다
// 튜플의 원소 개수는 유한하다.
// 특정 튜플을 표현하는 집합이 담긴 문자열이 주어질 때 튜플을 찾아서 반환하슈!
function solution(s) {
    var answer = [];
    let arr = makeArray(s.substring(1, s.length - 1));
    arr.sort((a, b) => a.length - b.length);
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(answer.includes(arr[i][j])) continue;
            answer.push(arr[i][j]);
        }
    }
    
    return answer;
}

function makeArray(s) {
    const arr = [];
    s = s.replaceAll('{', '|');
    s = s.replaceAll('}', '|');
    s = s.substring(1, s.length - 1);
    s = s.split('|,|');
    
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i].split(',').map(x => parseInt(x)));
    }
    
    return arr;
}