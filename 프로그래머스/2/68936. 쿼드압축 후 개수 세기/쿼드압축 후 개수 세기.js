function solution(arr) {
    let answer = [0, 0];
    
    function solve(startRow, startCol, n) {
        if(n === 0) {
            return;
        }
        
        // 압축할 수 있는지 확인
        let isCompression = true;
        let value = arr[startRow][startCol];
        
        for(let i = startRow; i < startRow + n; i++) {
            for(let j = startCol; j < startCol + n; j++) {
                if(arr[i][j] !== value) {
                    isCompression = false;
                    break;
                }
            }    
            
            if(isCompression === false) {
                break;
            }
        }
        
        if(isCompression === true) {
            answer[value]++;
            return;
        }
        
        // 압축 못 할 경우 재귀
        const nextN = n / 2;
        solve(startRow, startCol, nextN);
        solve(startRow, startCol + nextN, nextN);
        solve(startRow + nextN, startCol, nextN);
        solve(startRow + nextN, startCol + nextN, nextN);
    }
    
    solve(0, 0, arr.length);
    
    return answer;
}