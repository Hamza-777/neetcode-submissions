class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = Array.from(nums).fill(0);

        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                product = i !== j ? product * nums[j] : product;
            }
            result[i] = product;
        }

        return result;
    }
}
