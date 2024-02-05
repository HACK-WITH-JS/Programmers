            if(curX - i < 0 || curX - i >= maxLength) {
                return false;
            }
​
            if(park[curX-i][curY] === 'X') {
                return false;
            }
        }
    }
    
​
    
    return true;
}
​
function checkWidth(position, direction, amount, park, maxLength) {
    let [curX, curY] = position;
    
    if(direction === 'E') {
        for(let i = 1; i <= amount; i++) {
            if(curY + i < 0 || curY + i >= maxLength) {
                return false;
            }
​
            if(park[curX][curY+i] === 'X') {
                return false;
            }
        }        
    } else {
            for(let i = 1; i <= amount; i++) {
                if(curY - i < 0 || curY - i >= maxLength) {
                    return false;
                }
​
                if(park[curX][curY-i] === 'X') {
                    return false;
                }
        }    
    }
    
    return true;
}
​
function findStartPosition(park) {
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[i].length; j++) {
            if(park[i][j] === 'S') {
                return [i, j];