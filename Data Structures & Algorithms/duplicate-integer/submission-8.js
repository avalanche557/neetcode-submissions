class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let countobj = {}
        for(let i = 0; i <nums.length; i++){
            if(countobj.hasOwnProperty(nums[i])){
                return true
            } else {
                countobj[nums[i]] = 1
            }
        }
        return false
    }
}
