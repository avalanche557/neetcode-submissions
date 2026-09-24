class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const objs = {}
        const objt = {}

        for(let i = 0; i < s.length; i++){
            if(objs.hasOwnProperty(s[i])) {
                objs[s[i]] += 1
            } else {
               objs[s[i]] = 1 
            }if(objt.hasOwnProperty(t[i])) {
                objt[t[i]] += 1
            } else {
               objt[t[i]] = 1 
            }

        }
        for(let key in objs) {
            if(objs[key] !== objt[key]) {
                return false
            }
        }
        return true

    }
}
