class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash = {};

        for (let item of s) {
            hash[item] = (hash[item] ?? 0) + 1;
        }

        for (let item of t) {
            if (hash[item]) {
                hash[item]--;
            } else {
                return false;
            }
        }

        for (let item of Object.keys(hash)) {
            if (hash[item] > 0) {
                return false;
            }
        }

        return true;
    }
}
