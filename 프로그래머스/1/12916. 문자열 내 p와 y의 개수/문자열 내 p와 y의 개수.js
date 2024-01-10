function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    const x = s.toLowerCase();
    
    for(let c of x) {
         if(c === 'p') {
            pCnt++;
        } else if(c === 'y') {
            yCnt++;
        }
    }
   

    return pCnt === yCnt;
}