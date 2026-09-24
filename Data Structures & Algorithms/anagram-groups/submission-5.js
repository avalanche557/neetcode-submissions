class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for(let str of strs) {
            let count  = Array(26).fill(0)
            for(let c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            if(res.hasOwnProperty(count.join(","))) {
                res[count.join(",")].push(str)
            } else {
                res[count.join(",")] = [str]
            }
            
        }
        return Object.values(res)
    }
    
}
