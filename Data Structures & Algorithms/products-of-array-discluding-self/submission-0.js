class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []
        let prefix = []
        let postfix = []
        for(let i =0; i < nums.length; i++) {
            if(i === 0){
                prefix[i] = nums[i]
            } else {
                prefix[i] = prefix[i-1]*nums[i]
            }
        }
        console.log(prefix)
        for(let i = nums.length - 1; i >= 0; i--){
            if(i == nums.length - 1) {
                postfix[i] = nums[i]
            } else {
                postfix[i] = postfix[i+1] * nums[i]
            }
        }
        console.log(postfix)
        for(let i = 0; i < nums.length; i++){
            if(i == 0) {
                output[i] = 1*postfix[i+1]
            } else if(i == nums.length -1) {
                output[i] = prefix[i-1] * 1
            } else {
                output[i] =  prefix[i-1] * postfix[i+1]
            }
        }
        return output

    }
}
