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

        let sCount = new Array(26).fill(0)
        let tCount = new Array(26).fill(0)
        for(let item of s){
            const index = item.charCodeAt(0) - "a".charCodeAt(0)
            sCount[index] = sCount[index] + 1
        }
        for(let item of t){
            const index = item.charCodeAt(0) - "a".charCodeAt(0)
            tCount[index] = tCount[index] + 1
        }

        if(JSON.stringify(sCount) === JSON.stringify(tCount)) {
            return true
        }
        return false

    }
}
