class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countObj = {}
        for(let element of nums) {
            if(countObj[element]){
                return true
            }
            countObj[element] = 1
        }
        return false
    }
}
