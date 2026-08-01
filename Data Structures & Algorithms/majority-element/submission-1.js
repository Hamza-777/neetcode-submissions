class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let candidate = null

        for (let item of nums) {
            if (count === 0) {
                candidate = item;
            }

            count += (item === candidate) ? 1 : -1;
        }

        return candidate;
    }
}
