// skill = 선행스킬
// 스킬트리를 담은 배열 => 가능한 스킬트리의 개수
function solution(skill, skill_trees) {
    let answer = 0;
    const q = skill.split('');
    
    for(let i = 0; i < skill_trees.length; i++) {
        const skill_tree = skill_trees[i];
        
        if(check(q, skill_tree.split(''))) {
            answer++;
        }
    }
    
    return answer;
}

function check(q, skill_tree) {
    let newQ = [];
    
    for(let i = 0; i < skill_tree.length; i++) {
        if(q.indexOf(skill_tree[i]) < 0) {
            continue;
        }
        
        newQ.push(skill_tree[i]);
    }
    
    for(let i = 0; i < newQ.length; i++) {
        if(newQ[i] !== q[i]) return false;
    }
    
    return true;
}