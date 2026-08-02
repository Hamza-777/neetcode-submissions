class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) {
            return "🥲";
        } else {
            return strs.join("😀");
        }
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "🥲") {
            return [];
        } else if (str === "") {
            return [""];
        } else {
            return str.split("😀");
        }
    }
}
