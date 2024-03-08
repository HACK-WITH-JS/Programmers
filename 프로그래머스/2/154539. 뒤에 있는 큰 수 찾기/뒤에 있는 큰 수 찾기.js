// 배열의 각 원소들에 대하여 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고한다.
function solution(numbers) {
    let answer = Array(numbers.length).fill(0);
    const stack = [];
    
    for(let i = numbers.length-1; i >= 0; i--) {
        if(stack.length === 0) {
            answer[i] = -1;
            stack.push(numbers[i]);
            continue;
        }
        
        const top = stack[stack.length-1];
        
        // Stack의 Top이 나보다 큰 수라면 answer[i] = top이다.
        if(top > numbers[i]) {
          answer[i] = top;
          stack.push(numbers[i]);
          continue;
        }
        
        // Stakc의 Top이 나보다 큰 수일때까지 찾는다.
        while(stack.length !== 0 && numbers[i] >= stack[stack.length-1]) {
            stack.pop();
        }
        
        answer[i] = stack.length === 0 ? -1 : stack[stack.length-1];
        stack.push(numbers[i]);
    }
    
    return answer;
}