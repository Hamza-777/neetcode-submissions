class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        for (let i of nums) {
            if (i != val) {
                nums[k] = i
                k += 1
            }
        }
        return k
    }
}
