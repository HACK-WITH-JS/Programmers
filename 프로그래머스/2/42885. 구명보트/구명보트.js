function solution(people, limit) {
    let answer = 0;
    let start = 0;
    let end = people.length -1;
    
    people.sort((a,b) => a - b);
    // 50 70 80
    while(start <= end) {
        let sum = people[start] + people[end];
        
        if(sum <= limit) {
            start++;
            end--;
        } else {
            end--;
        }
        answer++;
    }
    
    return answer;
}