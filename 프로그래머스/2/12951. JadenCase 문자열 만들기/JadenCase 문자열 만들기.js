function solution(s) {
    return s.split(' ').map(x => {
        if(x === '') {
            return ''
        } else {
            return x[0].toUpperCase() + x.toLowerCase().substring(1);
        }
    }).join(' ');
}