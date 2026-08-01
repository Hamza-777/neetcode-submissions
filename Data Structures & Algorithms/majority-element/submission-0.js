class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const result = nums.reduce((prev, curr) => {
            return { ...prev, [curr]: (prev[curr] ?? 0) + 1 }
        }, {});

        console.log(result)

        return Object.keys(result).reduce((prev, curr) => {
            return result[prev] < result[curr] ? curr : prev;
        }, nums[0])
    }
}
