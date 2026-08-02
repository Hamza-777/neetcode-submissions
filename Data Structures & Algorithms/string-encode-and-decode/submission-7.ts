class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) {
            return "🥲";
        } else {
            console.log("Joint: ", strs.join("😀"));
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
            console.log("Split: ", str.split("😀"));
            return str.split("😀");
        }
    }
}
