class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countObj = {}
        for(let i = 0; i < nums.length; i++){
            if(countObj[nums[i]]){
                return true;
            } else {
                countObj[nums[i]] = 1
            }
        }
        return false
    }
}
