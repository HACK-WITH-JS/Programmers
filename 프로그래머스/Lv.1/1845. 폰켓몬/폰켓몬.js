function solution(nums) {
    const set = new Set(nums);
    return set.size >= Math.floor(nums.length / 2) ? Math.floor(nums.length / 2) : set.size;
}