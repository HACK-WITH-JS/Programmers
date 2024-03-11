function solution(record) {
    let answer = [];
    let map = new Map();
    
    // 최종 닉네임 미리 찾아주기
    for(let i = 0; i < record.length; i++) {
        const [command, uid, nickName] = record[i].split(' ');
        
        if(command === 'Change') {
            map.set(uid, nickName);
            continue;
        }
        
        if(command === 'Enter') {
            map.set(uid, nickName);
        }
    }
    
    for(let i = 0; i < record.length; i++) {
        const [command, uid, nickName] = record[i].split(' ');
        
        if(command === 'Enter') {
            answer.push(`${map.get(uid)}님이 들어왔습니다.`)
            continue;
        }
        
        if(command === 'Leave') {
            answer.push(`${map.get(uid)}님이 나갔습니다.`)
        }
    }
    
    
    return answer;
}