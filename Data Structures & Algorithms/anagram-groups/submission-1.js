class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const finalHash = {};

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');

    finalHash[sortedStr] = finalHash[sortedStr]
      ? [...finalHash[sortedStr], str]
      : [str];
  }

  return Object.keys(finalHash).reduce(
    (acc, item) => [...acc, finalHash[item]],
    []
  );
    }
}
