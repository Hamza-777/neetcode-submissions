class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash = {};

        for (let num of nums) {
            if (hash[num] == 1) {
                return true;
            } else {
                hash[num] = hash[num] ? hash[num] + 1 : 1;
            }
        }

        return false;
    }
}
