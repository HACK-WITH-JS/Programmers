function solution(progresses, speeds) {
    var answer = [];
    let curProgressIndex = 0;
    
    while(curProgressIndex < progresses.length) {
        // 첫 번째 프로세스가 배포 되는데 걸리는 시간을 구한다!
        let time = calcTime(curProgressIndex, progresses, speeds);
        // 첫 번째 프로세스가 끝날 때까지 모든 배열의 작업을 진행시킨다!
        if(time > 0) {
            for(let i = curProgressIndex; i < progresses.length; i++) {
                progresses[i] += time * speeds[i];
            }
        }
        // 작업이 진행되면 완료된 친구들은 모두 패스한다!
        let cnt = 0;
        while(progresses[curProgressIndex] >= 100) {
            cnt++;
            curProgressIndex++;
        }
        
        answer.push(cnt);
    }
    
    return answer;
}

function calcTime(curProgressIndex, progresses, speeds) {
    const progress = progresses[curProgressIndex];
    const speed = speeds[curProgressIndex];
  
    // 이미 작업이 완료되었다면 시간은 더 필요 없다!
    if(progress >= 100) {
        return 0;
    }
    
    return Math.ceil((100 - progress) / speed);
}