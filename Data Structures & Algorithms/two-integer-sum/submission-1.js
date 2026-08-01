class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hash[diff]) {
                return [+hash[diff], i];
            } else {
                hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] : i.toString();
            }
        }
    }
}
