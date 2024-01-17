function solution(s) {
    return s.split(' ').map(word => wordChange(word)).join(' ');
}

function wordChange(word) {
    let temp = '';
    
    for(let i = 0; i < word.length; i++) {
        if(i % 2 === 0) {
            temp += word[i].toUpperCase();
        } else {
            temp += word[i].toLowerCase();
        }
    }
    
    return temp;
}