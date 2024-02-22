// 도시 이름을 검색하면 해당 도시의 데이터를 데이터베이스에서 읽는다.
// 캐시를 사용할건데 캐시 크기를 잘 몰르겠다.
// 캐시 크기에 따른 실행시간을 측정하는 프로그램을 만들겠다.
// 각 도시의 이름은 공백 숫자 특스문자 등이 없는 영문자이며 대소문자 구분을 하지 않을 것이다.
// 캐시 히트일 경우 실행시간은 1이다.
// 캐시 미스일 경우 실행시간은 5이다.
// 캐시 교체 알고리즘은 LRU를 사용한다.
function solution(cacheSize, cities) {
    let answer = 0;
    
    if(cacheSize === 0) {
        return 5 * cities.length;
    }
    
    const cache = [];
    
    cities = cities.map(x => x.toLowerCase());
    
    for(let i = 0; i < cities.length; i++) {
        const city = cities[i];
        const cacheIndex = cacheHit(cache, city);
        
        // 캐시에 데이터가 없는 경우
        if(cacheIndex === -1) {
            // 캐시가 꽉 차있다면
            if(cache.length >= cacheSize) {
                cache.shift();    
            }
            
            cache.push(city);
            answer += 5;
            // console.log(`City:${city} Cache:${cache} CacheMiss`)
            continue;
        }
        
        // 캐시에 데이터가 있는 경우 데이터를 중복해서 넣지 않을것이기 때문에 캐시 데이터의 위치만 끝으로 옮겨준다.
        cache.splice(cacheIndex, 1);
        cache.push(city);
        answer += 1;
        // console.log(`City:${city} Cache:${cache} CacheHit`)
    }
    
    return answer;
}

function cacheHit(cache, city) {
    for(let i = 0; i < cache.length; i++) {
        if(city === cache[i]) {
            return i;
        }
    }
    
    return -1;
}