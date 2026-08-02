class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = nums.reduce((acc, curr) => {
            acc[curr] = acc[curr] ? ++acc[curr] : 1;
            return acc;
        }, {});

        const heap = new MinPriorityQueue((x) => x[1]);

        for (const [num, cnt] of Object.entries(frequency)) {
            heap.enqueue([num, cnt]);
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, _cnt] = heap.dequeue();
            res.push(num);
        }

        return res;
    }
}
