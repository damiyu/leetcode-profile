/*
 * 238: Product of Array Except Self 
 * Last Updated: Mar 15, 2024
 */
var productExceptSelf = function(nums) {
    let n = nums.length, curProd = 1, prodList = new Array(n);

    for (let i = 0; i < n; i++) {
        prodList[i] = curProd;
        curProd *= nums[i];
    }

    curProd = 1;
    for (let i = n - 1; i > -1; i--) {
        prodList[i] *= curProd;
        curProd *= nums[i];
    }

    return prodList;
};

// My Original Solution
/*var productExceptSelf = function(nums) {
    let n = nums.length, totSum = 1, prodList = []

    for (let i = 0; i < n; i++) totSum *= nums[i];
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            let product = 1;

            for (let j = 0; j < i; j++) product *= nums[j];
            for (let k = i + 1; k < n; k++) product *= nums[k];
            prodList[i] = product;
            
            continue;
        }

        prodList[i] = totSum / nums[i];
    }

    return prodList;
};*/