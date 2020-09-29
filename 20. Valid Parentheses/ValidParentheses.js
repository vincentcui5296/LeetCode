var isValid = function(s) {
    const Parentheses = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] in Parentheses) {
            stack.push(s[i]);
        } else {
            if (s[i] !== Parentheses[stack.pop()]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
