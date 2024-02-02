// 아이디는 3자리 이상 15자리 이하여야 한다.
// 아이디는 알파벳 소문자, 숫자, -, _ .만 사용 가능하다.
// 단 마침표는 처음과 끝에 사용할 수 없으며 연속 사용 불가능하다.
// 1. 모든 대문자를 소문자로 치환한다.
// 2. 소문자 숫자 빼기 밑줄 마침표를 제외한 모든 문자를 제거한다.
// 3. ..이 연속된 부분을 하나의 마침표로 치환한다.
// 4. 마침표가 처음이나 끝에 위치한다면 제거한다.
// 5. new_id가 빈 문자열이면 "a"를 대입한다.
// 6. 길이가 16 이상이면 처음부터 15자리까지만 쓴다. 제거후 마침표가 끝에 위치하면 끝에 위치한 마침표를 제거한다.
// 7. new_id의 길이가 2자 이하라면 New_id의 마지막 문자를 길이가 3이 될 때까지 반복해서 추가한다.
function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = removeLetter(new_id);
    new_id = compressDot(new_id);
    new_id = DotCheck(new_id);
    if(new_id === '') {
        new_id = 'a';
    }
    new_id = LengthCheck(new_id);
    new_id = makeThreeLength(new_id);
    
    return new_id;
}

function LengthCheck(new_id) {
    let ret = new_id;
    if(ret.length > 15) {
        ret = ret.substring(0, 15);
    }
    
    if(ret[ret.length-1] === '.') {
        ret = ret.substring(0, ret.length - 1);
    }
    
    return ret;
}

function DotCheck(new_id) {
    let ret = new_id;
    if(ret[0] === '.') {
        ret = ret.substring(1);
    }
    
    if(ret[ret.length-1] === '.') {
        ret = ret.substring(0, ret.length - 1);
    }
    
    return ret;
}

function compressDot(new_id) {
    let temp = new_id.split('');
    let ret = [temp[0]]
    
    for(let i = 1; i < temp.length; i++) {
        if(temp[i] === '.') {
            if(temp[i-1] === '.') {
                continue;
            } else {
                ret.push(temp[i]);
            }
        } else {
            ret.push(temp[i]);
        }
    }
    
    return ret.join('');
}

function removeLetter(new_id) {
    let temp = new_id.split('');
    let ret = []
    
    for(let i = 0; i < temp.length; i++) {
        if(!isalnum(temp[i]) && temp[i] !== '-' && temp[i] !== '.' && temp[i] !== '_') {
            continue;
        } else {
            ret.push(temp[i]);
        }
    }
    
    return ret.join('');
}

function isalnum(c) {
    const code = c.charCodeAt();
    
    if(code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) return true;
    if(code >= '0'.charCodeAt() && code <= '9'.charCodeAt()) return true;
    return false;
}

function makeThreeLength(new_id) {
    let temp = new_id[new_id.length-1];
    let ret = new_id;
    
    while(ret.length < 3) {
        ret += temp;
    }
    
    return ret;
}



