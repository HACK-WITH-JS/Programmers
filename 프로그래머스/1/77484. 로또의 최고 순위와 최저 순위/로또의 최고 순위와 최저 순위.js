function solution(lottos, win_nums) {
    let cnt = 0;
    
    for(let lotto of lottos) {
        if(win_nums.includes(lotto)) {
            cnt++;
        }
    }
    
    let zeroCnt = lottos.filter(x => x === 0).length;
    console.log(zeroCnt)
    
    return [switchToRank(cnt + zeroCnt), switchToRank(cnt)];
}

function switchToRank(cnt) {
    if(cnt === 6) {
        return 1;
    } else if(cnt === 5) {
        return 2;
    }  else if(cnt === 4) {
        return 3;
    } else if(cnt === 3) {
        return 4;
    } else if(cnt === 2) {
        return 5;
    } else {
        return 6;
    }
}