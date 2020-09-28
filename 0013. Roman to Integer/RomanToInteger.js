var romanToInt = function(s) {
    const RomanIntegerMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const Sub = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    if (Sub[s] !== undefined) {
        return Sub[s];
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (Sub[s[i] + s[i+1]] !== undefined) {
            result += Sub[s[i] + s[i+1]];
            i++;
        } else {
            result += RomanIntegerMap[s[i]];
        }
    }
    return result;
};
