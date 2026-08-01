class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        nums = this.mergeSort(nums);
        return nums;
    }

    mergeSort(nums) {
        if (nums.length <= 1) {
            return nums;
        }
        let mid = Math.floor(nums.length / 2);
        console.log("Mid: ", mid);
        let numsOne = this.mergeSort(nums.slice(0, mid));
        console.log("Nums One: ", numsOne);
        let numsTwo = this.mergeSort(nums.slice(mid));
        console.log("Nums Two: ", numsTwo);
        return this.merge(numsOne, numsTwo);
    }

    merge(numsOne, numsTwo) {
        let i = 0;
        let j = 0;
        let result = [];

        while (i < numsOne.length && j < numsTwo.length) {
            if (numsOne[i] <= numsTwo[j]) {
                result.push(numsOne[i]);
                i++;
            } else {
                result.push(numsTwo[j]);
                j++;
            }
        }
        console.log("Result before slice: ", result);
        console.log("numsOne slice from i", i, numsOne.slice(i));
        console.log("numsTwo slice from j", j, numsTwo.slice(j));

        result = result.concat(numsOne.slice(i));
        result = result.concat(numsTwo.slice(j));

        console.log("Result after slice: ", result);

        return result;
    }
}
