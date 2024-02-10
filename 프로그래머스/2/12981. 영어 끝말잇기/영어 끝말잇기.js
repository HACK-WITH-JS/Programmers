// 1 ~ n명의 사람
// 1번부터 한 사람씩 차례대로 단어를 말한다.
// 마지막 사람이 단어를 말하면 다시 1번부터 시작한다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다.
// 이전에 등장했던 단어는 사용할 수 없다.
// 한 글자인 단어는 인정하지 않는다.
function solution(n, words) {
    const set = new Set();
    const stack = [];
    let answer = [0, 0];

    for(let i = 0; i < words.length; i++) {
        // console.log(`${i + 1} 번째 단어: ${words[i]}, ${i % n + 1}번째 사람의 ${Math.ceil(((i + 1)/ n))}번째`)
        
        if(i === 0) {
            set.add(words[i]);
            stack.push(words[i]);
            continue;
        }
        
        let beforeWord = stack.pop();
        let curWord = words[i];
        
        // console.log(beforeWord, curWord);
        
        //탈락하는 경우
        if(beforeWord[beforeWord.length-1] !== curWord[0] || set.has(curWord)) {
            answer[0] = i % n + 1;
            answer[1] = Math.ceil((i + 1) / n);
            return answer;
        }
        
        // 탈락하지 않는 경우
        set.add(words[i]);
        stack.push(words[i]);
    }
    
    return answer;
}