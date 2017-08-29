//检测身份证（18位）前17位与最后一位的关系是否对应正确
function checkIDCard(num) {
    if (num && 'string' === typeof num  && num.length === 17) {
        //前17位每一位的加权因子
        const array = [7, 9, 10, 5, 8 , 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

        var sum = 0;
        for (var i = 0; i < num.length; i++) {
            var code = num.charAt(i);
            sum += code * array[i];
        }

        //所得结果与最后一位数字对应关系
        const resCheck = {
            '0': 1,
            '1': 0,
            '2': 'X',
            '3': 9,
            '4': 8,
            '5': 7,
            '6': 6,
            '7': 5,
            '8': 4,
            '9': 3,
            '10': 2,
        };


        return resCheck[sum % 11];
    }
}

console.log(checkIDCard('42098419910703751'));
