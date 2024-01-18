function solution(sizes) {
    let maxWidth = -1;
    let maxHeight = -1;
    
    // 가로 세로 길이중 더 큰 값을 가로로 한다.
    for(let i = 0; i < sizes.length; i++) {
        let [left, right] = sizes[i];
        
        if(left < right) {
            // 두번째 값이 가로 길이이다.
            maxWidth = Math.max(maxWidth, right);
            maxHeight = Math.max(maxHeight, left)
        } else {
            maxWidth = Math.max(maxWidth, left);
            maxHeight = Math.max(maxHeight, right)
        }
    }
    
    return maxWidth * maxHeight;
}