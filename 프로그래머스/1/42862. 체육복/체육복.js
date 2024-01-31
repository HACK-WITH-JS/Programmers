function solution(n, lost, reserve) {
    var answer = n - lost.length;
    const self = checkSelf(lost, reserve)
    answer += self.length;
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 여분을 가지고 온 친구가 도난을 당하면 자기걸 챙긴다.
    for(let s of self) {
        for(let i = 0; i < lost.length; i++) {
            if(lost[i] === s) {
                lost.splice(i, 1);
            }
        }
        
        for(let i = 0; i < reserve.length; i++) {
            if(reserve[i] === s) {
                reserve.splice(i, 1);
            }
        }
    }
    
    for(let i = 0; i < lost.length; i++) {
        let removeIndex = -1;
        for(let j = 0; j < reserve.length; j++) {
            if(Math.abs(lost[i] - reserve[j]) === 1) {
                removeIndex = j;
                break;
            }
        }
        
        if(removeIndex >= 0) {
            reserve.splice(removeIndex, 1);
            answer++;
        }
    }
    
    return answer;
}

function checkSelf(lost, reserve) {
    let temp = [];
    
    for(let r of reserve) {
        if(lost.includes(r)) {
            temp.push(r);
        }
    }
    
    return temp;
}

function removeElemetFromSelf(self, arr) {
    for(let s of self) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === s) {
                arr.splice(i, 0);
            }
        }
    }
    console.log(arr);
}