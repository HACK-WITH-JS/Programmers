function solution(str1, str2) {
    const A = makeMap(str1.toLowerCase());
    const B = makeMap(str2.toLowerCase());
    // 두개다 공집합인 경우
    if(A.size === 0 && B.size === 0) {
        return 65536
    }
    // 합집합
    const uni = union(A, B);
    const inter = interSection(A, B);
    const nUni = getSum(uni)
    const nInter = getSum(inter);
    
    // console.log(uni);
    // console.log(inter);
    return Math.floor((nInter / nUni) * 65536);
}

function makeMap(str) {
 const ret = new Map();

 for(let i = 0; i < str.length - 1; i++) {
  if(!checkAlpha(str[i]) || !checkAlpha(str[i+1])) {
   continue;
  }

  const elem = str[i] + str[i+1];

  if(!ret.has(elem)) {
   ret.set(elem, 1);
  } else {
   ret.set(elem, ret.get(elem) + 1);
  }
 }

 return ret;
}

function checkAlpha(c) {
 return (c >= 'a' && c <= 'z');
}

function union(A, B) {
 const union = new Map();

 for(let key of B.keys()) {
  const bCnt = B.get(key)
  const aCnt = A.get(key) ?? 0;
  union.set(key, Math.max(aCnt, bCnt));
 }
    
    for(let key of A.keys()) {
        if(union.has(key)) {
            continue;
        }
        
        union.set(key, A.get(key));
    }

    return union;
}

function interSection(A, B) {
 const union = new Map();

 for(let key of B.keys()) {
  const bCnt = B.get(key);
  const aCnt = A.get(key);
  if(aCnt === undefined || aCnt === null) {
      
  } else {
    union.set(key, Math.min(aCnt, bCnt));   
  }
 }
    
    return union
}

function getSum(A) {
    let sum = 0;
    for(let key of A.keys()) {
        sum += A.get(key);
    }
    return sum;
}