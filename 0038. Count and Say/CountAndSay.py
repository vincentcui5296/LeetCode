class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        if (n == 1):
            return '1'
        else:
            num = self.countAndSay(n - 1);
            s = ''
            prev = ''
            count = 0
            for i in num:
                if prev == i:
                    count += 1
                else:
                    if prev != '':
                        s += str(count) + prev
                    count = 1
                    prev = i
            s += str(count) + prev
            return s
