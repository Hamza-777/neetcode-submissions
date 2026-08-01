class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const finalHash = {};

        for (const str of strs) {
            const alphabets = Array(26).fill(0);

            for (const char of str) {
                alphabets[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = alphabets.join('#');

            finalHash[key] = finalHash[key] ? [...finalHash[key], str] : [str];
        }

        return Object.values(finalHash);
    }
}
