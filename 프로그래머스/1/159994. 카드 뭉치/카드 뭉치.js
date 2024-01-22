// 원하는 순서의 단어 배열
// 카드 뭉치에서 카드를 순서대로 한장씩 사용한다. 사용한 카드는 다시 사용 불가능하다.
// 카드를 사용하지 않고 다음 카드로 넘어 갈 수 없다.
// 카드 뭉치의 순서를 바꿀 수 없다.
function solution(cards1, cards2, goal) {
    let answer = true;
    let oneIndex = 0;
    let twoIndex = 0;
    
    for(let i = 0; i < goal.length; i++) {
        console.log(goal[i]);
        if(oneIndex < cards1.length && cards1[oneIndex] === goal[i]) {
            oneIndex++;
        } else if(twoIndex < cards2.length && cards2[twoIndex] === goal[i]) {
            twoIndex++;
        } else {
            answer = false;
            break;
        }
    }
    
    return answer ? "Yes" : "No";
}