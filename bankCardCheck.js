//检测银行卡前n - 1位与最后一位的关系是否正确
function checkBankCard(num) {
    if (num && 'string' === typeof num && num.length >= 15 && num.length <= 18) {
        var array1 = [], array2 = [];
        for (var i = 0; i < num.length; i++) {
            if (i % 2 === 0) {
                var code = num.charAt(i);
                array1.push(code * 2 + '');
            } else {
                array2.push(code);
            }
        }

        var sum = 0;
        for (var i = 0; i < array1.length; i++) {
            for (var j = 0; j < array1[i].length; j++) {
                var part = array1[i].charAt(j);
                sum += part;
            }
        }

        for (var i = 0; i < array2.length; i++) {
            sum += array2[i];
        }

        var sumStr = sum + '';
        var temp = parseInt(sumStr.charAt(sumStr.length - 1));
        var res = 0;
        if (temp !== 0) {
            res = 10 - temp;
        }

        return res;
    }
}
