class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        if (nums.length <= 1) {
            return nums;
        }
        let start = 0;
        let mid = 0;
        let end = nums.length - 1;

        while (mid <= end) {
            if (nums[mid] === 0) {
                [nums[start], nums[mid]] = [nums[mid], nums[start]];
                start++;
                mid++;
            } else if (nums[mid] === 2) {
                [nums[mid], nums[end]] = [nums[end], nums[mid]];
                end--;
            } else {
                mid++;
            }
        }

        return nums;
    }
}
