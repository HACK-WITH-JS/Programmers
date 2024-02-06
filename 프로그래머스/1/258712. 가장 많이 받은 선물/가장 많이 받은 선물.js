// 두 사람이 선물을 주고 받았다면 더 많은 선물을 준 사람이 다음 달에 선물을 하나 더 받음
    // A < -> B중 A가 B에게 더 많이 줬으면 B가 A에게 선물을 하나 주는거임
// 두 사람이 선물을 안주고 받거나 주고 받은 수가 같다면 선물지수가 더 큰 사람이 더 작은 사람한테 하나 받음
// 선물지수 = 내가 준 선물의 수 - 받은 선물의 수
// 두 사람이 선물 지수도 같다면 선물을 안 주고 받을거임
// 정답: 선물을 가장 많이 받을 친구가 받을 선물의 수
function solution(friends, gifts) {
    let answer = 0;
    
    const sendMap = makeMap(friends);
    const receiveMap = makeMap(friends);
    const countMap = makeMap(friends);
    const answerMap = {}; 
    
    for(let f of friends) {
        answerMap[f] = 0;
    }
    
    // 각 친구별 주고 받은 사람 맵에 저장
    for(let g of gifts) {
        const [a, b] = g.split(' ');
        sendMap[a].push(b);
        receiveMap[b].push(a);
    }
    // 각 친구별 선물지수 맵에 저장
    for(let f of friends) {
        const sendCnt = sendMap[f].length;
        const receiveCnt = receiveMap[f].length;
        
        countMap[f] = {sendCnt, receiveCnt, value: sendCnt - receiveCnt}
    }
    
    // console.log(sendMap);
    // console.log(receiveMap);
    // console.log(countMap);
    // console.log(answerMap);
    
    // 2명의 모든 친구를 비교하면서 다음달에 받을 선물 개수를 계산한다!
    for(let i = 0; i < friends.length-1; i++) {
        for(let j = i + 1; j < friends.length; j++) {
            const f1 = friends[i];
            const f2 = friends[j];
            
            const f1Tof2Cnt = sendMap[f1].filter(x => x === f2).length || 0;
            const f2Tof1Cnt = sendMap[f2].filter(x => x === f1).length || 0;
            
            // 선물을 안주고 받은 경우(모두 0) , 주고 받은 선물의 개수가 같은 경우
            if(f1Tof2Cnt === f2Tof1Cnt) {
                // 선물 지수가 같다면 서로 선물 안 주고 받을 거임
                if(countMap[f1].value === countMap[f2].value) {
                    continue;
                }
                // 선물 지수가 더 큰사람이 하나의 선물을 더 받을거임
                if(countMap[f1].value > countMap[f2].value) {
                    answerMap[f1]++;
                } else {
                    answerMap[f2]++;
                }
            } else {
                // f1이 선물을 더 많이 준 경우
                if(f1Tof2Cnt > f2Tof1Cnt) {
                    answerMap[f1]++;
                } else {
                    answerMap[f2]++;
                }
            }
        }
    }
    
    for(let f of friends) {
        answer = Math.max(answer, answerMap[f]);
    }
    
    return answer;
}

function makeMap(friends) {
    const map = {};
    
    for(const f of friends) {
        map[f] = [];
    }
    
    return map;
}