// [상하 좌표, 좌우 좌표] 
function solution(park, routes) {
    //시작 좌표를 찾아 준다.
    const maxRow = park.length;
    const maxCol = park[0].length;
    
    const answer = findStartPosition(park); 
    // console.log(`시작 좌표: ${answer[0]}, ${answer[1]}`);
    
    for(const route of routes) {
        let [direction, amount] = route.split(' ');
        
        if(direction === 'E' || direction === 'W') {
            if(checkWidth(answer, direction, parseInt(amount), park, maxCol)) {
                answer[1] += direction==='E' ? parseInt(amount) : -parseInt(amount);
            }
        } else {
            if(checkHeight(answer, direction, parseInt(amount), park, maxRow)) {
                answer[0] += direction === 'S' ? parseInt(amount) : -parseInt(amount);
            }
        }
        
        // console.log(`좌표: ${answer[0]}, ${answer[1]}`);
    }
    
    
    return answer;
}

function checkHeight(position, direction, amount, park, maxLength) {
    let [curX, curY] = position;
    
    if(direction === 'S') {
        for(let i = 1; i <= amount; i++) {
            
            if(curX + i < 0 || curX + i >= maxLength) {
                return false;
            }

            if(park[curX+i][curY] === 'X') {
                return false;
            }
        }
    } else {
        for(let i = 1; i <= amount; i++) {
            
            if(curX - i < 0 || curX - i >= maxLength) {
                return false;
            }

            if(park[curX-i][curY] === 'X') {
                return false;
            }
        }
    }
    

    
    return true;
}

function checkWidth(position, direction, amount, park, maxLength) {
    let [curX, curY] = position;
    
    if(direction === 'E') {
        for(let i = 1; i <= amount; i++) {
            if(curY + i < 0 || curY + i >= maxLength) {
                return false;
            }

            if(park[curX][curY+i] === 'X') {
                return false;
            }
        }        
    } else {
            for(let i = 1; i <= amount; i++) {
                if(curY - i < 0 || curY - i >= maxLength) {
                    return false;
                }

                if(park[curX][curY-i] === 'X') {
                    return false;
                }
        }    
    }
    
    return true;
}

function findStartPosition(park) {
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[i].length; j++) {
            if(park[i][j] === 'S') {
                return [i, j];
            }
        }
    }
    
    return [0, 0];
}