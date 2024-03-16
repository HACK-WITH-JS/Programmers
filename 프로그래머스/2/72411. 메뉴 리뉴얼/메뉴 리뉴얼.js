function solution(orders, course) {
	const result = [];
  
  	// map 자료형을 이용해서 key로 메뉴이름 value로 같은 메뉴 개수를 담은 목록을 만들었다. 
    const map = new Map();
    
  	// 모든 조합을 담은 배열
    const combinations = [];
    
  	// 조합을 만드는 함수로 메뉴가 2개 이상일때만 cominations에 담는 것을 재귀적으로 반복한다.
    const combination = (menus, pick) => {
        if (pick.length >= 2) combinations.push(pick);
        
        if (!menus.length) return;
        
        for (let i = 0; i < menus.length; i++) {
            const picked = menus[i];
            const deletedMenu = menus.slice(i + 1);
            combination(deletedMenu, pick + picked);
        }
    };

    orders.forEach(order => {
      	// 오름차순으로 정렬하기 위해 배열로 만들었다가 정렬하고 join으로 합쳤다.
        combination([...order].sort().join(''), '');
    });
    
  	// 모든 조합을 순회하면서 같은 조합끼리는 합치고 개수를 저장한다.
    combinations.forEach(menu => {
        const isExist = map.has(menu);
        map.set(menu, isExist ? map.get(menu) + 1 : 1);
    });
    
  	// 모든 조합을 조합의 개수 순서로 오름차순으로 정렬하고 1명만 주문한 조합은 문제에서 제외됨으로 삭제한다.
    const menuArr = [...map.entries()].sort(([_, firstCount], [__, secondCount]) => secondCount - firstCount).filter(([_, menuCount]) => menuCount !== 1);
    
  	// course를 돌면서 각각의 메뉴 조합의 글자수와 같은 것을 찾고 메뉴가 기록된 개수보다 조금 주문되었으면 break로 for문을 탈출한다.
    course.forEach(menuLength => {
        let countMemo = 0;
        for (i = 0; i < menuArr.length; i++) {
            const [menu, count] = menuArr[i];
            
            if (countMemo > count) break;
            
            if (menu.length === menuLength) {
                if (!countMemo) countMemo = count;
                
                result.push(menu);
            }
        } 
    });
    
  	// 결과를 오름차순으로 정렬한다.
    return result.sort();
}