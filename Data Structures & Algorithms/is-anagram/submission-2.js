class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        const countObjOfs = {}
        for(let i = 0; i < s.length; i++){
            if(countObjOfs[s[i]]) {
                countObjOfs[s[i]] = countObjOfs[s[i]] + 1
            } else {
                countObjOfs[s[i]]  = 1
            }
        }
        for(let j = 0; j < t.length; j++){
            if(countObjOfs[t[j]]) {
                countObjOfs[t[j]]--
            } else {
                return false
            }
        }
        return true
    }
}
