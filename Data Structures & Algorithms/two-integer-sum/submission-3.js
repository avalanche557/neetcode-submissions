class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        for(let i = 0; i < nums.length; i++){
            if(obj.hasOwnProperty(nums[i])) {
                return [obj[nums[i]], i]
            } else {
                const diff = target - nums[i]
                obj[diff] = i
            }
        }
    }
}