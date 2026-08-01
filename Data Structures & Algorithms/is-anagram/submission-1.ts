class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const hash = {};

        for (let i of s) {
            hash[i] = hash[i] ? hash[i] + 1 : 1;
        }

        for (let i of t) {
            hash[i] = hash[i] ? hash[i] - 1 : -1;
        }

        for (let i of Object.keys(hash)) {
            if (hash[i] !== 0) {
                return false;
            }
        }

        return true;
    }
}
