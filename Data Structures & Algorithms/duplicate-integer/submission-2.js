class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let countObj = {}
        for (let num of nums) {
            if(countObj.hasOwnProperty(num)){
                return true
            } else {
                countObj[num] = 1
                console.log(countObj)
            }
        }
        return false
    }
}
