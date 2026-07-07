class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let countObj = {}
        for(let i = 0; i < nums.length; i++) {
            if(countObj.hasOwnProperty(nums[i])) {
                return true
            } else {
                countObj[nums[i]] = 1
            }
        }
        return false
    }
}
