function threeSum(nums) {
    // sort array in ascending 
    nums.sort(function (a, b) { return a - b; });
    // create a result variable to put array of array values, based in necessary type
    var result = [];
    // create a for to get the right values result, limiting nums.length - 2 and obviously summing in a loop 
    for (var i = 0; i < nums.length - 2; i++) {
        // removed the possible duplicated values
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            // get lowest index value 
            var low = i + 1;
            // get the highest index value
            var high = nums.length - 1;
            // get the sum of the low + high
            var sum = 0 - nums[i];
            // do the loop until to hit high value
            while (low < high) {
                // validate
                if (nums[low] + nums[high] === sum) {
                    // add values to result variable
                    result.push([nums[i], nums[low], nums[high]]);
                    // remove duplicate
                    while (low < high && nums[low] === nums[low + 1])
                        low++;
                    // remove duplicate
                    while (low < high && nums[high] === nums[high - 1])
                        high--;
                    low++;
                    high--;
                }
                else if (nums[low] + nums[high] < sum) {
                    low++;
                }
                else {
                    high--;
                }
            }
        }
    }
    console.log("result", result);
    return result;
}
;
threeSum([-1, 0, 1, 2, -1, -4, -5, 7]);
