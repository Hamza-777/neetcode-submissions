class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};

        for (let item of nums) {
            if (hash[item]) {
                return true;
            } else {
                hash[item] = true;
            }
        }

        return false;
    }
}
