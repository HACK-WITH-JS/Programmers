function solution(players, callings) {
    var answer = [];                        
    const map = {}; 
     
    for(let i = 0; i < players.length; i++) {
        map[players[i]] = i; 
    }
    
    for(const c of callings) {
        const calledIndex = map[c];
        const temp = players[calledIndex-1]; 
        
        players[calledIndex-1] = players[calledIndex];
        players[calledIndex] = temp;
​
        map[c] = calledIndex-1;
        map[temp] = calledIndex;
    }
    
    return players;
}