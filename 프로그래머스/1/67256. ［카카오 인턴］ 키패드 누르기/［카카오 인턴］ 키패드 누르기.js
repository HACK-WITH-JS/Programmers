const map = {
    '1': [0,0],
    '2': [0,1],
    '3': [0,2],
    '4': [1,0],
    '5': [1,1],
    '6': [1,2],
    '7': [2,0],
    '8': [2,1],
    '9': [2,2],
    '*': [3,0],
    '0': [3,1],
    '#': [3,2],
}

function solution(numbers, hand) {
    let answer = '';
    let curLeft = '*'
    let curRight = '#'
    
    for(let number of numbers) {
        if(number === 1 || number === 4 || number === 7) {
            answer += "L";
            curLeft = "" + number;
            continue;
        }
        
        if(number === 3 || number === 6 || number === 9) {
            answer += "R";
            curRight = "" + number;
            continue;
        }
        
        const leftDistance = calcDistance(curLeft, number+"");
        const rightDistance = calcDistance(curRight, number+"");
        
        if(leftDistance === rightDistance) {
            if(hand === 'right') {
                answer += "R";
                curRight = "" + number;
                continue;
            } else {
                answer += "L";
                curLeft = "" + number;
                continue;
            }
        } else if(leftDistance < rightDistance) {
            answer += "L";
            curLeft = "" + number;
            continue;
        } else {
            answer += "R";
            curRight = "" + number;
            continue;
        }
    }
    
    return answer;
}

function calcDistance(pos1, pos2) {
    let arr1 = map[pos1];
    let arr2 = map[pos2];
    return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
}