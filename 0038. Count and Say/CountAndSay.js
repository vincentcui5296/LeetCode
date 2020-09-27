var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    } else {
        num = countAndSay(n-1);
        temp = num[0];
        count = 0;
        result = '';
        for (let i = 0; i < num.length; i++) {
            if (temp === num[i]) {
                count++;
            } else {
                result += count + temp;
                count = 1;
                temp = num[i];
            }    
        }
        result += count + temp;
        return result;
    } 
};
