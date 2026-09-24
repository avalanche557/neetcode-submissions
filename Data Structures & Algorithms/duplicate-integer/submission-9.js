class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}
        for (let i = 0; i < nums.length; i++){
            if(obj.hasOwnProperty(nums[i])) {
                return true
            } else {
                obj[nums[i]] = 0
            }
        }
        return false
    }
}
