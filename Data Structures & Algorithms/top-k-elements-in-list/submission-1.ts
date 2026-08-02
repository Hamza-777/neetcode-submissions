class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency: { [s: string]: number } = nums.reduce((acc, curr) => {
            acc[curr] = acc[curr] ? ++acc[curr] : 1;
            return acc;
        }, {});

        const result = Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .map((item) => +item[0])
            .filter((_item, idx) => idx < k);

        return result;
    }
}
