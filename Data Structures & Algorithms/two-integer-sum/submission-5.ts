class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict = {};

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const diff = target - current;

            if (dict[current] !== undefined && dict[current] !== i) {
                return [dict[current], i];
            } else {
                dict[diff] = i;
            }
        }
    }
}
