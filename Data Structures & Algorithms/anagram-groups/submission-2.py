class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = {}
        for item in strs:
            sortedStr = ''.join(sorted(item))
            if sortedStr not in list(result.keys()):
                result[sortedStr] = [item]
            else:
                result[sortedStr].append(item)
        
        return list(result.values())