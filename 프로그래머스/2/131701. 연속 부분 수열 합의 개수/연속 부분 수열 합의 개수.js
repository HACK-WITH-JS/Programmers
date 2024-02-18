function solution(elements) {
    var answer = 0;
    let set = new Set();
    
    for(let i = 1; i <= elements.length; i++) {
        let sum = 0;
        for(let j = 0; j < elements.length; j++) {
            if (j === 0) { // 최초 한 번의 창문에 대해서만 직접 합을 구하기
                for (let k=0; k<i; k++) {
                    sum += elements[k];
                }
            }
            else { // 이후 창문들에 대해서는 이전에 구한 합을 활용하기
                sum -= elements[j-1];
                sum += elements[(j+i-1) % elements.length];
            }
            set.add(sum);
        }
    }
    
    return set.size;
}