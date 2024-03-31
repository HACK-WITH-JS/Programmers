// begin => target 으로 변환 할꺼임
// 한번에 한 개의 알파벳만 바꿀 수 있다.
// words에 있는 단어로만 변할 수 있음.
// 최소 몇 단계의 과정을 거쳐 begin에서 target으로 변할 수 있는가?
// 두 단어의 알파벳 개수 차이가 1인지 판단하는 함수 작성하기.
function solution(begin, target, words) {
    let answer = Number.MAX_SAFE_INTEGER;
    let visited = new Array(words.length).fill(false);
    
    function dfs(cur, cnt) {
        if(cur === target) {
            answer = Math.min(answer, cnt);
            return;
        }
        
        for(let i = 0; i < words.length; i++) {
            if(visited[i]) {
                continue;
            }
            
            if(canChange(cur, words[i]) === false) {
                continue;
            }
            
            visited[i] = true;
            
            // if(cur === 'hot') {
            //     console.log(words[i]);
            // }
            
            dfs(words[i], cnt + 1);
            visited[i] = false;
        }
    }
    
    dfs(begin, 0);
    // console.log(canChange('hot', 'cog'))
    
    return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}

// begin에서 to로 변환 할 수 있으면 true 반환
function canChange(begin, to) {
    let notEqualCnt = 0;
    const len = begin.length;
    
    for(let i = 0; i < len; i++) {
        if(begin[i] !== to[i]) {
            notEqualCnt++;
        }
        
        if(notEqualCnt >= 2) {
            return false;
        }
    }
    
    return true;
}