var isPalindrome = function(x) {
    const x_str = x + '';
    for (let i = 0; i < x_str.length/2; i++) {
        if (x_str[i] !== x_str[x_str.length-1-i])
            return false;
    }
    return true;
};

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let x_r = 0;
    let x_tmp = x;
    while(x_tmp !== 0) {
        x_r = x_r * 10 + x_tmp % 10;
        x_tmp = Math.floor(x_tmp / 10);
    } 
    return x_r === x;
};
