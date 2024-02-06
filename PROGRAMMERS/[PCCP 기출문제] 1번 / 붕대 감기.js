// 붕대감기 t초동안 붕대를 감으면서 1초마다 x만큼의 체력 회복
// t초 연속으로 붕대를 감으면 y만큼의 체력을 추가로 회복
// 최대 체력이 존재하며 최대 체력을 넘을 수 없음, 공격 당하면 기술은 취소되며 공격 당한 순간에는 체력회복 불가능
// 기술이 취소되거나 끝나면 즉시 붕대감기 다시 사용 성공시간 0으로 초기화
// 모든 공격이 끝난 직후 남은 체력 return 죽으면 -1 반환 필요
function solution(bandage, health, attacks) {
    let curHealth = health;
    let curTime = 0;
    let maxTime = attacks[attacks.length-1][0];
    const [time, healthPerSecond, bonusHelath] = bandage;
    let seq = 0;
    
    while(curTime <= maxTime) {
        // 공격이 있으면 회복을 할 수 없음.
        if(attacks[0][0] === curTime) {
            curHealth -= attacks[0][1];
            
            if(curHealth <= 0) {
                return -1;
            }
            
            seq = 0;
            attacks.shift();
        } else {
            // 회복 먼저함
            curHealth += healthPerSecond;
            seq++;
            // 최대 체력 넘기면 체력은 풀빵으로 바꿈
            if(curHealth > health) {
                curHealth = health
            }
            
            // 연속 회복에 성공 했음
            if(seq % time === 0) {
                curHealth += bonusHelath;
                
                // 최대 체력 넘기면 체력은 풀빵으로 바꿈
                if(curHealth > health) {
                    curHealth = health
                }
                
                seq = 0;
            }
        }
        curTime++;
    }
    
    
    return curHealth;
}