    let answer = 0;
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
​
function makeMap(friends) {
    const map = {};
    
    for(const f of friends) {
        map[f] = [];
    }
    
    return map;
}