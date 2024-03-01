function solution(priorities, location) {
    function finxMaxPrioritiy(priorities) {
        return Math.max.apply(Math, priorities.map(function(o) { return o.prioritiy; }))
    }
    
    let answer = 0;
    
    priorities = priorities.map((value, index) => ({prioritiy: value, location: index}));
    
    while(priorities.length > 0) {
        const maxPriority = finxMaxPrioritiy(priorities);
        
        while(priorities[0].prioritiy !== maxPriority) {
            const process = priorities.shift();    
            priorities.push(process); 
        }
        
        const process = priorities.shift();
        answer++;
        
        if(process.location === location) {
            break;
        }
    }
    
    return answer;
}