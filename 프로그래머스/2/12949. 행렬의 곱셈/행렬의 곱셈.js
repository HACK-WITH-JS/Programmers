function solution(arr1, arr2) {
    const row = arr1.length;
    const col = arr2[0].length;
    const answer = make2DArray(row, col);
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            for(let m = 0; m < arr1[0].length; m++) {
                // console.log(`answer[${i}][${j}] += arr1[${i}][${m}] * arr2[${m}][${j}] = ${arr1[i][m] * arr2[m][j]}`)
                answer[i][j] += arr1[i][m] * arr2[m][j];
            }
            // console.log(answer[i][j]);
        }
    }
    
    // console.log(answer);
    // answer[0][0] = 0;
    // console.log(answer);
    
    return answer;
}

function make2DArray(row, col) {
    let arr = [];
    for(let i = 0; i < row; i++) {
        let temp = [];
        for(let j = 0; j < col; j++) {
            temp.push(0);
        }
        arr.push(temp);
    }
    return arr;
}