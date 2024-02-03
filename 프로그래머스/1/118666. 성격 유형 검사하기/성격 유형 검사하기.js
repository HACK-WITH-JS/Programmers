// 1번 지표 R, T
// 2번 지표 C, F
// 3번 지표 J, M
// 4번 지표 A, N
// 매우 동의나 매우 비동의를 선택하면 3점을 얻는다.
// 동의나 비동의 를 선택하면 2점
// 약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻는다.
// 모르겠음을 고르면 점수를 얻지 않는다.
const choicToScore = {
    1: 3, // 매우 비동의 첫 번째 문자열
    2: 2, // 비동의
    3: 1, // 약간 비동의
    4: 0, // 모르겠음
    5: 1, // 약간 동의 두번쨰 문자열
    6: 2, // 동의
    7: 3  // 매우 동의 
}

const scoreMap = {
    'R': 0,
    'T': 0,
    'C': 0,
    'F': 0,
    'J': 0,
    'M': 0,
    'A': 0,
    'N': 0
}

function solution(survey, choices) {
    var answer = '';
    const length = survey.length;
    // console.log(survey);
    // console.log(choices);
    
    for(let i = 0; i < length; i++) {
        const choice = choices[i];
        if(choice === 0) continue;
        
        // 첫 번째 유형에 점수를 준다.
        if(choice <= 3) {
            scoreMap[survey[i][0]] += choicToScore[choice];
        } else {
            // 두 번째 유형에 점수를 준다.
            scoreMap[survey[i][1]] += choicToScore[choice];
        }
    }
    
    //1번지표 계산
    if(scoreMap['R'] === scoreMap['T']) {
        answer += 'R';
    } else {
        answer += scoreMap['R'] > scoreMap['T'] ? 'R' : 'T';
    }
    //2번지표 계산
    if(scoreMap['C'] === scoreMap['F']) {
        answer += 'C';
    } else {
        answer += scoreMap['C'] > scoreMap['F'] ? 'C' : 'F';
    }
    //3번 지표 계산
    if(scoreMap['J'] === scoreMap['M']) {
        answer += 'J';
    } else {
        answer += scoreMap['J'] > scoreMap['M'] ? 'J' : 'M';
    }
    //4번 지표 계산
    if(scoreMap['A'] === scoreMap['N']) {
        answer += 'A';
    } else {
        answer += scoreMap['A'] > scoreMap['N'] ? 'A' : 'N';
    }
    
    return answer;
}