function solution(n, arr1, arr2) {
    const newMap = makeNewArr(n, arr1, arr2);
    return newMap;
}

function makeNewArr(n, arr1, arr2) {
    const ret = [];
    
    for(let i = 0; i < n; i++) {
        let binaryString = (arr1[i] | arr2[i]).toString(2);
        const temp = [];
        
        while(binaryString.length < n) {
            binaryString = "0" + binaryString;
        }
        
        for(let j = 0; j < binaryString.length; j++) {
            if(binaryString[j] === '1') {
                temp.push('#');
            } else {
                temp.push(' ');
            }
        }
        ret.push(temp.join(''));
    }
   
    return ret;
}