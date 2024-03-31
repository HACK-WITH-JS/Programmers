// 야근피로도 = 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값
// N시간 동안 야근 피로도를 최소화 하도록 일한다.
// 1시간 동안 작업량 1만큼 처리할 수 있다고 할 때 퇴근까지 남은 시간 N시간과 각 일에 대한 작업량이 주어질 때
// 야근 피로도를 최소화한 값을 리턴하는 함수를 작성하라.
function solution(n, works) {
    let answer = 0;
    const pq = new PriorityQueue();
    works.forEach(work => pq.push(work));
    
    while(n > 0) {
        const maxValue = pq.pop();
        if(maxValue === 1) {
            n--;
            continue;
        }
        pq.push(maxValue-1);
        n--;
    }
    
    while(pq.size > 0) {
        answer += Math.pow(pq.pop(), 2);
    }
    
    return answer;
}

class PriorityQueue {
    constructor(){
        this.queue = [0];
        this.size = 0;
    }
    
    push(value) {
        this.queue.push(value);
        this.size++;
        
        this.moveUp(this.size);
    }
    
    moveUp(index){
        while(Math.floor(index / 2)){
            const parent = Math.floor(index / 2);
            
            if(this.queue[parent] < this.queue[index]){
                [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]];
            }
            
            index = parent;
        }
    }
    
    pop() {
        const maxValue = this.queue[1];
        this.queue[1] = this.queue[this.size];
        
        this.queue.pop();
        this.size--;
        
        this.moveDown(1);
        
        return maxValue;
    }
    
    moveDown(index) {
        while(index * 2 <= this.size){
            const maxChildIndex = this.findMaxChildIndex(index);
            
            if(this.queue[index] < this.queue[maxChildIndex]){
                const tmp = this.queue[maxChildIndex];
                this.queue[maxChildIndex] = this.queue[index];
                this.queue[index] = tmp;
            }
            
            index = maxChildIndex;
        }
    }
    
    findMaxChildIndex(index) {
        const left = index * 2;
        const right = (index * 2) + 1;
        
        if(right > this.size){
            return left;
        } else{
            if(this.queue[right] > this.queue[left]){
                return right;
            } else{
                return left;
            }
        }
    }    
}