// 주어진 음식을 빨리 먹는 대회
// 한선수는 왼->오, 한 선수는 오-> 왼 중앙에 물을 먼저 먹는 사람이 승리
// 두 선수가 먹는 음식의 종류와 양은 같아야하며 음식을 먹는 순서도 같아야 함.
// 칼로리가 낮은 음식을 먼저 먹을 수 있도록 배치
// 각 인덱스의 절반만큼 쓸 수 있음.
function solution(food) {
    let answer = '';
    let setting = ''
    
    for(let i = 1; i < food.length; i++) {
        let temp = Math.floor(food[i] / 2);
        for(let j = 0; j < temp; j++) {
            setting += `${i}`;
        }
    }

    return `${setting}0${setting.split('').reverse().join('')}`;
}