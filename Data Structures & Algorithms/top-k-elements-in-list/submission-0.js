class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};

        for (let i of nums) {
            hash[i] = hash[i] ? hash[i] + 1 : 1;
        }

        return Object
            .entries(hash)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => +entry[0]);
    }
}
