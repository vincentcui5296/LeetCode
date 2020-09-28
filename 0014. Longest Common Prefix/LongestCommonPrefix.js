var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    strs.sort((a, b) => a.length - b.length);
    prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.substr(0, j);
                break;
            }
        }
        if (prefix === '') {
            break;
        }
    }
    return prefix;
};
