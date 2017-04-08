/**
 * Created by marc on 17-3-6.
 */

var str = '10de3a85c841ecdda075aba83c34b3ed9e27f5b2';

var buffer = new Buffer(str);

console.log(buffer);
console.log(parseInt(str, 16));

var res2 = '0CC82FC3A940C989F03A9001C8D77469';
var str2 = 'w_m_heart';

var test = encode(str2);

function encode(str) {

}

for (let i = 0; i < res2.length / 2; i++) {
    let temp = parseInt(res2.substring(i, i + 2), 16);
    temp = temp.toString(2);

    let temp2 = temp;
    if (temp.length < 8) {
        for (let j = 0; j < 8 - temp.length; j++) {
            temp2 = '0' + temp2;
        }
    }

    console.log(temp2);
}