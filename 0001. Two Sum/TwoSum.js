var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        idx = nums.findIndex(e => e === target - nums[i])
        if (i === idx) {
            continue;
        }
        if (idx != -1) {
            return [i, idx];
        }
    }
};

// Better
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        temp = target - nums[i];
        if (map.get(temp) !== undefined) {
            return [i, map.get(temp)];
        } else {
            map.set(nums[i], i)
        }
    }
};
