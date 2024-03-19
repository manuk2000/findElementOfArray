let arr = [1, 5, 20, 50, 70, 60, 59, 10]
console.log(calculation(0, arr.length - 1, 20, arr));

function calculation(l, r, target, arr) {
    let mid = Math.round(l + (r - l) / 2);
    if (l >= r && arr[mid] !== target) {
        return -1;
    }
    if (arr[mid] === target) {
        return mid;
    }

    // decreasing place of array
    if (arr[mid] > arr[mid + 1]) {
        // call right
        if (arr[mid] > target) { 
            let tmp = calculation(mid + 1, r, target, arr);
            if (tmp !== -1) {
                return tmp;
            }
        }
        r = mid - 1;

    // increasing place of array
    } else {
        // call left
        if (arr[mid] > target) {
            let tmp = calculation(l, mid - 1, target, arr);
            if (tmp !== -1) {
                return tmp;
            }
        }
        l = mid + 1;

    }
    // call to hire place
    return calculation(l, r, target, arr);
}


