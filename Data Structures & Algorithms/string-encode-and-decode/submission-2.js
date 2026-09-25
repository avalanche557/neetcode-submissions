class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for(let str of strs) {
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        let j = 0
        while(i < str.length){
            j = i
            while(str[j] !== "#") {
                j = j+1
            }
            let length = Number(str.substring(i,j))
            const temp = str.slice(j+1, length+j+1)
            res.push(temp)
            i = j+length+1
        }
        
        return res
    }
    
    
}
