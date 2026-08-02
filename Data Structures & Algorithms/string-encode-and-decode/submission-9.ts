class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((item) => `${item.length}#${item}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let start = 0;
        let end = 0;
        const original = [];

        while (start <= end && end < str.length) {
            if (str[end] !== '#') {
                end++;
            } else {
                const strLen = +str.substring(start, end);
                original.push(str.substring(end + 1, end + 1 + strLen));
                start = end + 1 + strLen;
                end = start + 1;
            }
        }

        return original;
    }
}
