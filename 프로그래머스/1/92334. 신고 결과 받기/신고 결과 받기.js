// 한 번에 한 명의 유저를 신고 할 수 있습니다.
// 신고 회수에 제한은 없다 서로 다른 유저를 계속해서 신고할 수 있다.
// 한 유저를 여러번 신고할 수 있지만 동일한 유저를 신고하면 1회로 처리된다.
// k번 이상 신고된 유저는 정지되며 이를 메일로 응답 받는다. 
function solution(id_list, report, k) {
    const reportSet = {};
    const reporterSet = {};
    const answer = [];
    
    //reportSet을 만든다.
    for(const id of id_list) {
        reportSet[id] = new Set();
        reporterSet[id] = new Set();
    }
    
    for(const r of report) {
        const [id1, id2] = r.split(' ');
        reporterSet[id1].add(id2);
        reportSet[id2].add(id1);
    }
    
    for(let i = 0; i < id_list.length; i++) {
        const id = id_list[i];
        
        if(reporterSet[id].size === 0) {
            answer.push(0);
            continue;
        }
        
        let cnt = 0;
        for(const reportedId of reporterSet[id].keys()) {
            if(reportSet[reportedId].size >= k) {
                cnt++;
            }
        }
        answer.push(cnt);
    }
    
    
    return answer;
}