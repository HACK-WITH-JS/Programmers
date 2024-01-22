function solution(a, b) {
    const month = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    const day = {
        0: 'FRI',
        1: 'SAT',
        2: 'SUN',
        3: 'MON',
        4: 'TUE',
        5: 'WED',
        6: 'THU'
    }
    let temp = 0;
    
    for(let i = 1 ; i < a; i++) {
        temp += month[i];
    }
    
    temp += (b - 1);
    
    
    
    return day[temp % 7];
}