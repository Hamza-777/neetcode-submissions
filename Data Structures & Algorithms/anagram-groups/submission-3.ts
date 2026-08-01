class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedStrings = [...strs.map(str => str.split('').sort().join(''))];
        const sortedSet = [...(new Set(sortedStrings))];
        const strsMap = new Map();
        const result = [];

        for (let i = 0; i < sortedSet.length; i++) {
            result[i] = [];
            strsMap.set(sortedSet[i], i);
        }

        for (let i = 0; i < strs.length; i++) {
            const indexInResult = strsMap.get(sortedStrings[i]);
            result[indexInResult].push(strs[i]);
        }

        return result;
    }
}
