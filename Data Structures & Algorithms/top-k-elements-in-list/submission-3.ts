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

        const frequencyGroups: number[][] = Array(nums.length + 1).fill(0).map((_item) => []);

        Object.entries(frequency).forEach(([num, cnt]) => {
            frequencyGroups[cnt].push(+num);
        });

        let result = [];
        for (let i = frequencyGroups.length - 1; i >= 0; i--) {
            if (result.length >= k) {
                result = result.filter((_num, idx) => idx < k);
                break;
            } else {
                result = [...result, ...frequencyGroups[i]];
            }
        }

        return result;
    }
}
