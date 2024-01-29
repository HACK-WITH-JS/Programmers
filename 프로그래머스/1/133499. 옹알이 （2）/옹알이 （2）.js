function solution(babbling) {
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"]
    let doubbleWords = ["ayaaya", "yeye", "woowoo", "mama"]
    
    for(let temp of babbling) {
        let flag = false;
        for(let word of doubbleWords) {
            if(temp.includes(word)) {
                flag = true;
                break;
            };
        }
        
        if(flag) continue;
        
        for(let word of words) {
            temp = temp.split(word).join(' ');
        }
        
        if(temp.split(" ").join('').length === 0) answer++;
    }
    
    return answer;
}