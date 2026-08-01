class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longestPrefix = strs[0]
        for i in range(1, len(strs)):
            newPrefix = ''
            for j in range(min(len(longestPrefix), len(strs[i]))):
                if longestPrefix[j] != strs[i][j]:
                    break
                else:
                    newPrefix += strs[i][j]
            longestPrefix = newPrefix
        
        return longestPrefix
