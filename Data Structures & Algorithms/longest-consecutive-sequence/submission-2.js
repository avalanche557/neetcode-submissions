class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let res = 0
        for (let num of nums) {
            if(!set.has(num - 1)) {
                let length = 0
                while(set.has(num+length)) {
                    length += 1
                }
                res = Math.max(res, length)
            }
            
        }
        return res
    }
        
}
