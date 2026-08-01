class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const finalHash = {};

        for (const str of strs) {
            const alphabetCount = Array(26).fill(0);

            for (const char of str) {
                alphabetCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = alphabetCount.join('#');

            finalHash[key] = finalHash[key] ? [...finalHash[key], str] : [str];
        }

        return Object.values(finalHash);
    }
}
