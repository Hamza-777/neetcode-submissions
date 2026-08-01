class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((s) => s.length.toString() + '#' + s).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] != '#') {
                j++;
            }
            let length = +str.slice(i, j);
            result.push(str.slice(j+1, j+1+length));
            i = j + 1 + length;
        }

        return result;
    }
}
