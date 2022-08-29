"use strict";
function returnAny(message) {
    console.log(message); // 로그로 찍는경우에는 any를 사용하는경우가 많다.
}
const any1 = returnAny('리턴은 아무거나');
any1.toString();
let looselyTyped = {};
const d = looselyTyped.a.b.c.d;
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
c.indexOf("0");
