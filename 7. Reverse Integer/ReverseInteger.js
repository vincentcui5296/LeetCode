var reverse = function(x) {
    x_str = x + '';
    y_str = '';
    for (let i = x_str.length - 1; i > 0; i--) {
        y_str += x_str[i]
    }
    if (x_str[0] === '-') {
        if (-y_str < -2147483648) {
            return 0
        } else {
            return -y_str;
        }
    } else {
        const y = +(y_str + x_str[0])
        if (y > 2147483647) {
            return 0
        } else {
            return y;
        }
    }          
};

var reverse = function(x) {
    const x_reverse = (Math.abs(x) + '').split('').reverse().join('');
    return x_reverse > 0x7FFFFFFF ? 0 : x < 0 ? -x_reverse : +x_reverse;
};

var reverse = function(x) {
    x_r = 0;
    x_abs = Math.abs(x);
    while(x_abs) {
        x_r = x_r * 10 + x_abs % 10;
        x_abs = Math.floor(x_abs/10);
    }
    return x_r > 0x7FFFFFFF ? 0 : x < 0 ? -x_r : x_r;
};
