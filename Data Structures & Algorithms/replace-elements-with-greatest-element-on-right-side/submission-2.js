class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1
      for(let i = arr.length - 1; i >=0 ; i--) {
          const curretntMax = Math.max(arr[i], rightMax)
          arr[i] = rightMax
          rightMax = curretntMax

      }
      return arr
    }
}
