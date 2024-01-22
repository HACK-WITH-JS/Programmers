function solution(answers) {
    const answer = [{key: 1, value: 0}, {key: 2, value: 0}, {key: 3, value: 0}];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5]
    
    
    
    for(let i = 0; i < answers.length; i++) {
        if(one[i % one.length] === answers[i]) {
            answer[0].value++;
        }
        
        if(two[i % two.length] === answers[i]) {
            answer[1].value++;
        }
        
        if(three[i % three.length] === answers[i]) {
            answer[2].value++;
        }
    }
    
    answer.sort((a, b) => b.value - a.value);
    
    let ret = [answer[0].key];
    
    for(let i = 1; i < answer.length; i++) {
        if(answer[i].value === answer[0].value) {
            ret.push(answer[i].key);
        }
    }
    
    return ret;
}