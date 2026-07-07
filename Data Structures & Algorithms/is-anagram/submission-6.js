class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let  sCount = {}
        let tCount = {}
        for(let i = 0; i < s.length; i++) {
            if(sCount.hasOwnProperty(s[i])) {
                sCount[s[i]] = sCount[s[i]] + 1
            } else {
                sCount[s[i]] = 1
            }
        }
        for(let i = 0; i < t.length; i++) {
            if(tCount.hasOwnProperty(t[i])) {
                tCount[t[i]] = tCount[t[i]] + 1
            } else {
                tCount[t[i]] = 1
            }
        }
        console.log(sCount, tCount)
        for(let key in sCount) {
            console.log(key,  sCount[key], tCount[key])
            if(!tCount[key] || sCount[key] !== tCount[key]) {
                return false
            }
        }
        return true
    }
}
