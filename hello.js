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


    //d
    if (arr[mid] > arr[mid + 1]) {// decreasing place of array
        if (arr[mid] > target) { // call right
            let tmp = calculation(mid + 1, r, target, arr);
            if (tmp !== -1) {
                return tmp;
            }
        }
        r = mid - 1;

    } else {// increasing place of array
        if (arr[mid] > target) {// call left
            let tmp = calculation(l, mid - 1, target, arr);
            if (tmp !== -1) {
                return tmp;
            }
        }
        l = mid + 1;

    }
    return calculation(l, r, target, arr);// call to hire place
}


