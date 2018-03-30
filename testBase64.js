/**
 * Created by Administrator on 2018/3/30.
 */

const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

console.assert(dictionary.length === 64, "dictionary error");

function base64(str) {
    if (str && typeof(str) == "string") {
        let binaryStr = '';

        for (let i = 0; i < str.length; i++) {
            let charBinaryStr = str.charCodeAt(i).toString(2);

            //不足8位的高位补0
            let temp = '';
            for (let i = 0; i < 8 - charBinaryStr.length; i++) {
                temp += '0';
            }

            binaryStr += (temp + charBinaryStr);
        }

        console.assert(binaryStr.length == str.length * 8, "binaryStr error");

        let res = '';
        for (let i = 0; i < binaryStr.length; i += 6) {
            //如果字符串最后不足6位字符，则返回所有字符
            let str6 = binaryStr.substr(i, 6);
            //不足6位低位补0
            let length = str6.length;
            if (length != 6) {
                for (let i = 0; i < 6 - length; i++) {
                    str6 += '0';
                }
            }

            let charCode = parseInt(str6, 2);

            console.log(charCode);
            console.assert(charCode < 64, "charCode error");

            let charRes = dictionary.charAt(charCode);
            res += charRes;
        }

        //每次是截取24个字节分成4份6字节，所以结果字符长度必定是4的倍数，不足补"="
        for (let i = 0; i < res.length % 4; i++) {
            res += '=';
        }

        return res;
    }
}

let base64Str = base64("sdjkl3r9jgsdklfjqwe90erwj4kr34");

console.log(base64Str);
console.assert(base64Str == "c2Rqa2wzcjlqZ3Nka2xmanF3ZTkwZXJ3ajRrcjM0", "base64 error");