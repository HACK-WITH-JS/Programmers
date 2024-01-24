function solution(nums) {
    let ans = 0;
    //? 이게 왜 틀리지 말이 안되는데;
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
               const sum = nums[i] + nums[j] + nums[k]
               if(isPrime(sum)) {
                   ans++;
               }
            }   
        }
    }
    
    return ans;
}

function isPrime(num) {
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}